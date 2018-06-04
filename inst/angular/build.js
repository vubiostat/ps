let fs = require('fs'),
    child_process = require('child_process');

let rev = child_process.execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();
let timestamp = child_process.execSync("git log -1 --format=%cI", { encoding: "utf8" }).trim();

fs.writeFileSync("src/app/version.ts",
  "let commitHash: string = \"" + rev + "\";\n" +
  "let buildTimestamp: string = \"" + timestamp + "\";\n" +
  "export { commitHash, buildTimestamp };\n");

child_process.execSync("ng build --prod", { stdio: "inherit" });
