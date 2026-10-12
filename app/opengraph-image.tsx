import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { googleReviews } from "@/lib/constants";

export const alt =
  "Linkup Exclusive Autos — Lagos' finest bodywork & paint, Ebute-Metta, Lagos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const coral = "#f3938b";

export default async function Image() {
  const [syne, grotesk400, grotesk500, logo, photo] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/syne-700.ttf")),
    readFile(join(process.cwd(), "assets/fonts/space-grotesk-400.ttf")),
    readFile(join(process.cwd(), "assets/fonts/space-grotesk-500.ttf")),
    readFile(join(process.cwd(), "public/logo.png")),
    readFile(join(process.cwd(), "assets/og-highlander.jpg")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0a0a0a",
          color: "white",
          fontFamily: "Grotesk",
        }}
      >
        {/* Real job photo, fading into the dark canvas */}
        <img
          src={photoSrc}
          alt=""
          width={600}
          height={630}
          style={{ position: "absolute", right: 0, top: 0, width: 600, height: 630, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 600,
            height: 630,
            display: "flex",
            background: "linear-gradient(90deg, #0a0a0a 0%, rgba(10,10,10,0.75) 30%, rgba(10,10,10,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 600,
            height: 260,
            display: "flex",
            background: "linear-gradient(0deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0) 100%)",
          }}
        />
        {/* Brand glow + top hairline */}
        <div
          style={{
            position: "absolute",
            left: -220,
            bottom: -260,
            width: 640,
            height: 640,
            display: "flex",
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(208,2,27,0.35) 0%, rgba(208,2,27,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1200,
            height: 1,
            display: "flex",
            background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 760,
            height: "100%",
            padding: "56px 0 56px 64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                background: "white",
                borderRadius: 14,
                padding: "8px 12px",
              }}
            >
              <img src={logoSrc} alt="" width={96} height={68} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.05)",
                borderRadius: 999,
                padding: "8px 16px",
                fontSize: 18,
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              <div style={{ display: "flex", width: 8, height: 8, borderRadius: 999, background: "#d0021b" }} />
              Ebute-Metta, Lagos
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Syne",
                fontSize: 68,
                lineHeight: 1.0,
                letterSpacing: -2.5,
              }}
            >
              <span style={{ color: "#f5f6f8" }}>Lagos&apos; finest</span>
              <span style={{ display: "flex", color: "#f5f6f8" }}>
                bodywork&nbsp;<span style={{ color: coral }}>&amp;</span>&nbsp;paint.
              </span>
            </div>
            <div style={{ display: "flex", marginTop: 22, fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
              Panel beating · Oven-bake paint · Buffing · Upgrades
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 19, fontWeight: 500 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 999,
                padding: "9px 18px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#fbbf24" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
              </svg>
              {googleReviews.rating.toFixed(1)} on Google
            </div>
            <div style={{ display: "flex", color: "rgba(255,255,255,0.55)" }}>linkupautos.com</div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 40,
            bottom: 52,
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(0,0,0,0.55)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 999,
            padding: "8px 16px",
            fontSize: 16,
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <span style={{ color: coral, letterSpacing: 2, fontSize: 13 }}>AFTER</span>
          Toyota Highlander · our workshop
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Syne", data: syne, weight: 700, style: "normal" },
        { name: "Grotesk", data: grotesk400, weight: 400, style: "normal" },
        { name: "Grotesk", data: grotesk500, weight: 500, style: "normal" },
      ],
    }
  );
}
