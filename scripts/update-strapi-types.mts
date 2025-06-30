#!/usr/bin/env zx

import { writeFile } from "fs/promises";
import "zx/globals";

const DOCUMENTATION_PATH = `sir-strapius/src/extensions/documentation/documentation`;
const DOCUMENTATION_FILE_NAME = `full_documentation.json`;
const TARGET_PATH = `sir-strapius-head/src/api/_types.ts`;

const list = await $`ls ${DOCUMENTATION_PATH}`;
const latest = list.lines().sort().pop();

const typesWithId = (
  await $`npx openapi-typescript ${DOCUMENTATION_PATH}/${latest}/${DOCUMENTATION_FILE_NAME}`
).stdout;

/**
 * @descriptoin Deal with strapi v5's breaking change.
 * Related [issue](https://github.com/strapi/strapi/issues/23285) and [PR](https://github.com/strapi/strapi/pull/23112).
 */
const typesWithDocumentId = typesWithId.replace(
  /id: number/g,
  "documentId: string",
);

await writeFile(TARGET_PATH, typesWithDocumentId);
