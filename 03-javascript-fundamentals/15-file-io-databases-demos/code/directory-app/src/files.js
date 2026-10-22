// Files module — JSON-file read/write helpers
import { readFile, writeFile } from "node:fs/promises";

export async function readJsonFile(filePath) {
  const contents = await readFile(filePath, "utf8");
  return JSON.parse(contents);
}

export async function writeJsonFile(filePath, data) {
  await writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}