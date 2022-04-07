import { readdirSync } from "fs"
import { extname, join } from "path"

export const getPostSourceFp = (postDir: string): string => {
    const postSourceFileName: string = readdirSync(postDir).filter((file) => extname(file) === '.md')[0]
    const postSourceFilePath = join(postDir, postSourceFileName)
    return postSourceFilePath
}
