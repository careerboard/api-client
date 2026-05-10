import { copyFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const sourcePath =
  process.env.CAREERBOARD_PUBLIC_API_SOURCE ||
  resolve(repoRoot, "../app-backend/openapi/generated/public-api.ts");
const targetPath = resolve(repoRoot, "src/generated/public-api.ts");

if (!existsSync(sourcePath)) {
  console.error(
    [
      "Unable to find the generated Careerboard public API source.",
      `Checked: ${sourcePath}`,
      "Set CAREERBOARD_PUBLIC_API_SOURCE to an explicit file path if your backend checkout lives elsewhere.",
    ].join("\n"),
  );
  process.exit(1);
}

copyFileSync(sourcePath, targetPath);
console.log(`Synced ${targetPath}`);
