import { closeSync, existsSync, mkdirSync, openSync } from "fs";
import { join } from "path"

export const createPostDirectory = (postSlug: string): string => {
    const postFolderPath: string = join(process.cwd(), 'posts', postSlug)
    if (!existsSync(postFolderPath)){
        mkdirSync(postFolderPath);
    }
    const postFilePath = join(postFolderPath, 'index.md')
    const newPostFile = openSync(postFilePath, 'w')
    closeSync(newPostFile)
    return postFilePath
}