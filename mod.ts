import sort from "./sort.ts";
const { readFile, writeFile, args } = Deno;

const path = args[0];

const decoder = new TextDecoder();
const encoder = new TextEncoder();

const sourceData = await readFile(path);

const jsonData = decoder.decode(sourceData);

const parseData = JSON.parse(jsonData);

const result = JSON.stringify(sort(parseData), null, 2);

await writeFile(path, encoder.encode(result));

console.log(`🚀 ${path} is sorted!`);
