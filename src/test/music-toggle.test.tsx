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

  it("turns the music off with a click anywhere, and back on with another click", async () => {
    const { container } = render(<MusicToggle />);
    await waitFor(() => expect(play).toHaveBeenCalled());
    await act(async () => {
      fireEvent.click(document.body);
    });
    expect(pause).toHaveBeenCalled();
    expect(localStorage.getItem("music-on")).toBe("0");
    const callsAfterOff = play.mock.calls.length;
    await act(async () => {
      fireEvent.click(document.body);
    });
    expect(play.mock.calls.length).toBeGreaterThan(callsAfterOff);
    expect(localStorage.getItem("music-on")).toBe("1");
    expect(container.querySelector("audio")?.muted).toBe(false);
  });

  it("starts blocked autoplay with a click anywhere on the page", async () => {
    play.mockRejectedValue(new DOMException("Blocked", "NotAllowedError"));
    const { container } = render(<MusicToggle />);
    await act(async () => {});
    const initialCalls = play.mock.calls.length;
    await act(async () => {
      fireEvent.click(document.body);
    });
    expect(play.mock.calls.length).toBeGreaterThan(initialCalls);
    expect(container.querySelector("audio")?.muted).toBe(false);
  });

  it("keeps the music playing when the visitor clicks a link or button", async () => {
    render(<MusicToggle />);
    await waitFor(() => expect(play).toHaveBeenCalled());
    const link = document.createElement("a");
    document.body.appendChild(link);
    await act(async () => {
      fireEvent.click(link);
    });
    expect(pause).not.toHaveBeenCalled();
  });

  it("starts the music with a link click even when the visitor had turned it off", async () => {
    localStorage.setItem("music-on", "0");
    render(<MusicToggle />);
    await act(async () => {});
    const callsBefore = play.mock.calls.length;
    const link = document.createElement("a");
    document.body.appendChild(link);
    await act(async () => {
      fireEvent.click(link);
    });
    expect(play.mock.calls.length).toBeGreaterThan(callsBefore);
    expect(localStorage.getItem("music-on")).toBe("1");
  });


  it("starts pending playback on scroll without stopping it", async () => {
    play.mockRejectedValue(new DOMException("Blocked", "NotAllowedError"));
    const { container } = render(<MusicToggle />);
    await act(async () => {});
    const blockedCalls = play.mock.calls.length;
    play.mockResolvedValue(undefined);
    await act(async () => {
      fireEvent.scroll(window);
    });
    expect(play.mock.calls.length).toBeGreaterThan(blockedCalls);
    expect(container.querySelector("audio")?.muted).toBe(false);
  });

  it("stays off after the visitor turns it off with the sound button, including on reopening", async () => {
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

  it("shows the sound hint until audible playback starts, then hides it", async () => {
    play.mockRejectedValue(new DOMException("Blocked", "NotAllowedError"));
    const { container } = render(<MusicToggle />);
    await act(async () => {});
    expect(container.textContent).toContain("Tap or click anywhere");
    play.mockResolvedValue(undefined);
    await act(async () => {
      fireEvent.click(document.body);
    });
    await waitFor(() =>
      expect(container.textContent).not.toContain("Tap or click anywhere"),
    );
  });
});
