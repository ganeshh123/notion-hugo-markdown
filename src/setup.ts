import { mkdirSync, existsSync } from "fs"
const tempDir = 'temp'
const postsDir = 'posts'

export const setup = () => {
    if (!existsSync(postsDir)){
        mkdirSync(postsDir);
    }

    if (!existsSync(tempDir)){
        mkdirSync(tempDir);
    }
}