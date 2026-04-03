/**
 * Builds favicon.ico (multi-size PNG) and apple-touch-icon.png from public/logo.png.
 * Run: pnpm run favicon
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const toIco = require("to-ico");

const root = path.join(__dirname, "..");
const logoPath = path.join(root, "public", "logo.png");
const faviconOut = path.join(root, "app", "favicon.ico");
const appleOut = path.join(root, "public", "apple-touch-icon.png");

async function main() {
  if (!fs.existsSync(logoPath)) {
    throw new Error(`Missing ${logoPath}`);
  }

  const sizes = [16, 32, 48];
  const buffers = await Promise.all(
    sizes.map((s) =>
      sharp(logoPath)
        .resize(s, s, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        })
        .png()
        .toBuffer()
    )
  );

  const ico = await toIco(buffers);
  fs.writeFileSync(faviconOut, ico);
  console.log("Wrote", path.relative(root, faviconOut));

  await sharp(logoPath)
    .resize(180, 180, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(appleOut);
  console.log("Wrote", path.relative(root, appleOut));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
