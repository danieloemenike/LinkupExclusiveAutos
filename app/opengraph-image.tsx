import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Linkup Exclusive Autos — Premium auto garage in Ebute-Metta, Lagos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [logo, bg] = await Promise.all([
    readFile(join(process.cwd(), "public/logo.png")),
    readFile(join(process.cwd(), "public/work3.jpg")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const bgSrc = `data:image/jpeg;base64,${bg.toString("base64")}`;

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
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgSrc}
          alt=""
          width={580}
          height={630}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 580,
            height: 630,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, #0a0a0a 0%, #0a0a0a 52%, rgba(10,10,10,0) 64%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 64px",
            width: 620,
            height: "100%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={220} height={156} style={{ borderRadius: 12 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", width: 72, height: 6, background: "#d0021b", marginBottom: 24 }} />
            <div style={{ display: "flex", fontSize: 68, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>
              Linkup Exclusive Autos
            </div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 30, marginTop: 20, color: "rgba(255,255,255,0.78)", lineHeight: 1.3 }}>
              <div style={{ display: "flex" }}>Panel beating · Oven bake painting</div>
              <div style={{ display: "flex" }}>Buffing · Detailing · Upgrades</div>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.65)" }}>
            linkupautos.com · Lagos
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
