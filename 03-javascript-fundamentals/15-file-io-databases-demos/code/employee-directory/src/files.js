// Text-file reader — thin wrapper over fs/promises readFile()
import { readFile, writeFile } from "node:fs/promises";

export async function readTextFile(filePath) {
  return readFile(filePath, "utf8");
}

// JSON reader — compose on top of readTextFile()
export async function readJsonFile(filePath) {
  const contents = await readTextFile(filePath);

  return JSON.parse(contents);
}

// Text-file writer — thin wrapper over fs/promises writeFile()
export async function writeTextFile(filePath, contents) {
  await writeFile(filePath, contents, "utf8");
}

// JSON writer — stringify with indentation, then write
export async function writeJsonFile(filePath, data) {
  const contents = JSON.stringify(data, null, 2);

  await writeTextFile(filePath, contents);
}