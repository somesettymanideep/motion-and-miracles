import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

/**
 * Slow-rotating gold zodiac ring around the centre's emblem, drawn with
 * three.js / React Three Fiber. Loaded client-only (React.lazy behind a
 * mounted gate) so SSR never imports the canvas.
 */

const ZODIAC = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

const GOLD = "#d4a017";
const GOLD_LIGHT = "#f5c542";

function makeGlyphTexture(char: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, 128, 128);
  const grad = ctx.createLinearGradient(0, 0, 0, 128);
  grad.addColorStop(0, GOLD_LIGHT);
  grad.addColorStop(1, "#9a7412");
  ctx.fillStyle = grad;
  ctx.font = "86px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(212,160,23,0.8)";
  ctx.shadowBlur = 8;
  ctx.fillText(char, 64, 70);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function ZodiacGlyphs() {
  const textures = useMemo(() => ZODIAC.map(makeGlyphTexture), []);
  const group = useRef<THREE.Group>(null!);

  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    group.current.rotation.z += delta * 0.1;
  });

  return (
    <group ref={group}>
      {ZODIAC.map((_, i) => {
        const angle = (i / ZODIAC.length) * Math.PI * 2 + Math.PI / 2;
        const r = 2.62;
        return (
          <sprite
            key={i}
            position={[Math.cos(angle) * r, Math.sin(angle) * r, 0]}
            scale={[0.52, 0.52, 0.52]}
          >
            <spriteMaterial map={textures[i]} transparent depthWrite={false} />
          </sprite>
        );
      })}
    </group>
  );
}

function StarDust() {
  const points = useRef<THREE.Points>(null!);
  const geometry = useMemo(() => {
    const count = 160;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // golden dust in a spherical shell around the emblem
      const radius = 2.8 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) * 0.6;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    points.current.rotation.z -= delta * 0.03;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        color={GOLD_LIGHT}
        size={0.045}
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function ZodiacRing() {
  const tilt = useRef<THREE.Group>(null!);
  const gems = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2 + Math.PI / 2;
        return [Math.cos(angle) * 2.06, Math.sin(angle) * 2.06, 0] as [number, number, number];
      }),
    []
  );

  useFrame((state, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    tilt.current.rotation.z += delta * 0.06;
    // gentle pointer parallax
    tilt.current.rotation.x += (state.pointer.y * 0.07 - tilt.current.rotation.x) * 0.06;
    tilt.current.rotation.y += (state.pointer.x * 0.07 - tilt.current.rotation.y) * 0.06;
  });

  return (
    <group ref={tilt}>
      <mesh>
        <torusGeometry args={[2.06, 0.055, 16, 96]} />
        <meshStandardMaterial color={GOLD} metalness={0.85} roughness={0.3} />
      </mesh>
      <mesh>
        <torusGeometry args={[2.34, 0.016, 12, 96]} />
        <meshStandardMaterial color={GOLD_LIGHT} metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh>
        <torusGeometry args={[2.92, 0.008, 8, 96]} />
        <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.35} transparent opacity={0.7} />
      </mesh>
      {gems.map((pos, i) => (
        <mesh key={i} position={pos}>
          <octahedronGeometry args={[0.055]} />
          <meshStandardMaterial color={GOLD_LIGHT} metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
      <ZodiacGlyphs />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 5, 6]} intensity={1.5} color="#ffe9c7" />
      <directionalLight position={[-5, -2, 3]} intensity={0.5} color={GOLD_LIGHT} />
      <Environment>
        <Lightformer intensity={1.6} position={[0, 5, 0]} scale={[10, 10, 1]} />
        <Lightformer intensity={1} color={GOLD_LIGHT} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 1, 1]} />
      </Environment>
      <ZodiacRing />
      <StarDust />
    </>
  );
}

export default function ZodiacScene({ onReady }: { onReady?: () => void }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.4], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
      onCreated={() => onReady?.()}
    >
      <Scene />
    </Canvas>
  );
}
