import { mkdirSync, existsSync } from "fs"
const postsDir = 'posts'

export const setup = () => {
    if (!existsSync(postsDir)){
        mkdirSync(postsDir);
    }
}