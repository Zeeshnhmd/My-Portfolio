import { ImageResponse } from "next/og";
import { person, siteMetadata } from "@/content/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#F9F7F7",
          color: "#112D4E",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 600, color: "#2E5F9B" }}>{person.name}</div>
        <div style={{ marginTop: 24, fontSize: 56, fontWeight: 700, maxWidth: 900 }}>
          {person.role}
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#52677D", maxWidth: 900 }}>
          {siteMetadata.description}
        </div>
      </div>
    ),
    size,
  );
}
