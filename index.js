#!/usr/bin/env node

import fs from "fs";

fs.promises.readFile("./package.json").then(data => {
  const { scripts } = JSON.parse(data);
  const keys = Object.keys(scripts);
  keys.map(key => console.log(` yarn run ${key}`));
});
