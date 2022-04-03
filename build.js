const path = require("path");
const { build } = require("esbuild");

try {
  build({
    bundle: true,
    sourcemap: true,
    format: "esm",
    target: "esnext",
    entryPoints: [path.join(__dirname, "src", "index.tsx")],
    outdir: path.join(__dirname, "dist"),
    outExtension: { ".js": ".mjs" },
    include: [path.join(__dirname, "src", "sw.ts")]
  });
} catch {
  process.exitCode = 1;
}
