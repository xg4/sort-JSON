const { readFile, writeFile } = Deno;

export async function readJson(path: string, label = "utf-8") {
  try {
    const sourceData = await readFile(path);
    const decoder = new TextDecoder(label);
    const jsonData = decoder.decode(sourceData);
    return JSON.parse(jsonData);
  } catch (err) {
    err.message = `read ${path} - ${err.message}`;
    throw err;
  }
}

export async function writeJson(path: string, data: string) {
  try {
    const encoder = new TextEncoder();
    await writeFile(path, encoder.encode(data));
  } catch (err) {
    err.message = `write ${path} - ${err.message}`;
    throw err;
  }
}
