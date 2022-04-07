import { readFileSync } from "fs"

export const getFileContent = (filePath: string): string => {
    const content = readFileSync(filePath, 'utf8')
    return content
}