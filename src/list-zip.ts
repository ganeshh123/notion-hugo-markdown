import { readdirSync } from "fs"
import path = require("path")

export const listZip = (inputDir?: string): string[] => {
    const folder = inputDir ?? process.cwd()
    const zipFiles = readdirSync(inputDir).filter(file => path.extname(file) === '.zip')
    return zipFiles
}