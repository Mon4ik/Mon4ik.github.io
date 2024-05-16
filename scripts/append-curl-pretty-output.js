import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';

import fs from 'fs';
import {beep, clearTerminal, eraseStartLine} from "ansi-escapes"
import chalk from "chalk";

const __dirname = dirname(fileURLToPath(import.meta.url));

function build() {
    const CLEAR_CONSOLE = clearTerminal
    const POINT = chalk.bold('•')
    let code = [
        `${beep}`,
        chalk.bold.underline`          idkncc          `,
        ` ${POINT} web fullstack`,
        ` ${POINT} roblox game developer`
    ].map((l) => `  ${l}`).join("\n")
    return `<div style='display: none' id='curl-output'>${CLEAR_CONSOLE}${code}`
}


const htmlFilePath = resolve(__dirname, "..", ".output", "public", "index.html")
let htmlFile = fs
    .readFileSync(htmlFilePath)
    .toString("utf-8");

htmlFile = htmlFile.replaceAll("</body></html>", `${build()}\n</div></body></html><!-- ${eraseStartLine}\n`)

fs.writeFileSync(htmlFilePath, Buffer.from(htmlFile, "utf-8"))