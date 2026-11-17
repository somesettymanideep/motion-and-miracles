import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useLanguage } from "@/lib/i18n";

/** Keep native layout/fixed controls while synchronising scroll with GSAP. */
export function SmoothScroll() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const motion = gsap.matchMedia();
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({
        autoRaf: false,
        duration: 1.05,
        smoothWheel: true,
        syncTouch: false,
        anchors: true,
        stopInertiaOnNavigate: true,
      });
      const tick = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      return () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });
    return () => motion.revert();
  }, []);

  useEffect(() => {
    // Wait for route effects, bilingual text, media and fonts to settle.
    let disposed = false;
    let timer = 0;
    const refresh = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (!disposed) ScrollTrigger.refresh();
      }, 100);
    };
    const main = document.querySelector("main");
    const observer = new ResizeObserver(refresh);
    if (main) observer.observe(main);
    document.addEventListener("load", refresh, true);
    void document.fonts.ready.then(() => { if (!disposed) refresh(); });
    refresh();
    return () => {
      disposed = true;
      window.clearTimeout(timer);
      observer.disconnect();
      document.removeEventListener("load", refresh, true);
    };
  }, [pathname, lang]);

  return null;
}