export interface SubtitleItem {
  id: number;
  startFrame: number;
  endFrame: number;
  text: string;
}

/**
 * Converts timestamp string "00:01:23,456" into total seconds
 */
function srtTimeToSeconds(timeStr: string): number {
  const normalized = timeStr.trim().replace(".", ",");
  const [hms, msStr] = normalized.split(",");
  const [h, m, s] = hms.split(":").map(Number);
  const ms = Number(msStr || 0);
  return h * 3600 + m * 60 + s + ms / 1000;
}

/**
 * Parses raw SRT string into SubtitleItem array with frame numbers
 * @param srtContent Raw SRT subtitle file content
 * @param fps Video frame rate (default 30)
 */
export function parseSrt(srtContent: string, fps = 30): SubtitleItem[] {
  const blocks = srtContent.trim().replace(/\r\n/g, "\n").split(/\n\s*\n/);
  const results: SubtitleItem[] = [];

  for (const block of blocks) {
    const lines = block.trim().split("\n");
    if (lines.length < 2) continue;

    let timeLineIdx = 0;
    if (/^\d+$/.test(lines[0].trim())) {
      timeLineIdx = 1;
    }

    const timeLine = lines[timeLineIdx];
    if (!timeLine || !timeLine.includes("-->")) continue;

    const [startStr, endStr] = timeLine.split("-->").map((s) => s.trim());
    const startSec = srtTimeToSeconds(startStr);
    const endSec = srtTimeToSeconds(endStr);

    const textLines = lines.slice(timeLineIdx + 1);
    const text = textLines.join(" ").trim();

    if (text) {
      results.push({
        id: results.length + 1,
        startFrame: Math.round(startSec * fps),
        endFrame: Math.round(endSec * fps),
        text,
      });
    }
  }

  return results;
}
