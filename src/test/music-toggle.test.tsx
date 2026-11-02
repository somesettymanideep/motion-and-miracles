import { act, cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MusicToggle } from "@/components/MusicToggle";

describe("background music", () => {
  let play: ReturnType<typeof vi.spyOn>;
  let pause: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    localStorage.clear();
    play = vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue(undefined);
    pause = vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("attempts audible playback on opening by default", async () => {
    const { container } = render(<MusicToggle />);
    await waitFor(() => expect(play).toHaveBeenCalled());
    expect(container.querySelector("audio")?.muted).toBe(false);
  });

  it("stays off after the visitor turns it off, including on reopening", async () => {
    const first = render(<MusicToggle />);
    await waitFor(() => expect(play).toHaveBeenCalled());
    fireEvent.click(first.getByRole("button", { name: "Turn music off" }));
    expect(pause).toHaveBeenCalled();
    expect(localStorage.getItem("music-on")).toBe("0");
    first.unmount();
    play.mockClear();
    const second = render(<MusicToggle />);
    expect(play).not.toHaveBeenCalled();
    fireEvent.click(second.getByRole("button", { name: "Turn music on" }));
    expect(play).toHaveBeenCalled();
    expect(localStorage.getItem("music-on")).toBe("1");
  });

  it("keeps retrying interactions when the browser blocks initial sound", async () => {
    play.mockRejectedValue(new DOMException("Blocked", "NotAllowedError"));
    const { container } = render(<MusicToggle />);
    await act(async () => {});
    const initialCalls = play.mock.calls.length;
    await act(async () => { fireEvent.pointerDown(window); });
    expect(play.mock.calls.length).toBeGreaterThan(initialCalls);
    const blockedCalls = play.mock.calls.length;
    play.mockResolvedValue(undefined);
    await act(async () => { fireEvent.click(window); });
    expect(play.mock.calls.length).toBeGreaterThan(blockedCalls);
    expect(container.querySelector("audio")?.muted).toBe(false);
    const successfulCalls = play.mock.calls.length;
    await act(async () => { fireEvent.click(window); });
    expect(play.mock.calls.length).toBe(successfulCalls);
  });

  it("shows the sound hint until audible playback starts, then hides it", async () => {
    play.mockRejectedValue(new DOMException("Blocked", "NotAllowedError"));
    const { container } = render(<MusicToggle />);
    await act(async () => {});
    expect(container.textContent).toContain("Tap or click anywhere");
    play.mockResolvedValue(undefined);
    await act(async () => { fireEvent.click(window); });
    await waitFor(() =>
      expect(container.textContent).not.toContain("Tap or click anywhere"),
    );
  });
});