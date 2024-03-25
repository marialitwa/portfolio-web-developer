import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];
// typeof links from data.ts => anyone that exists in there declared with [number]
// ["name"] specifying to the name property