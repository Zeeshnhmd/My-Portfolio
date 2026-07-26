import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Placeholder favicon (a simple monogram) until final brand assets are
// supplied. Replace this file with a real icon.png/svg when ready.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2E5F9B",
          color: "#FFFFFF",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        ZA
      </div>
    ),
    size,
  );
}
