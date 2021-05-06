import sort from "./sort.ts";
import { readJson, writeJson } from "./util.ts";

const { args } = Deno;

const path = args[0];

const sourceData = await readJson(path);

const sortedData = JSON.stringify(sort(sourceData), null, 2);

await writeJson(path, sortedData);

console.log(`🚀 ${path} is sorted!`);
