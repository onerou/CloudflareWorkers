import path from "path";
import { fileURLToPath } from "url";
import build from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  build.build({
    bundle: true,
    sourcemap: true,
    format: "esm",
    target: "esnext",
    entryPoints: [
      path.join(__dirname, "src", "index.tsx"),
      path.join(__dirname, "src", "sw.js")
    ],
    outdir: path.join(__dirname, "dist"),
    outExtension: { ".js": ".mjs" }
  });
} catch {
  process.exitCode = 1;
}
