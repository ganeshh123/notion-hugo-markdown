import {default as extract} from 'extract-zip'
import { basename, extname, resolve as pathResolve } from 'path'

export const extractZip = (zipFile: string, targetDir?: string, targetFileName?: string): Promise<string> => new Promise(async (resolve, reject) => {
    if(!targetDir){
        targetDir = process.cwd()
    }
    const extractedFolderName = targetFileName ?? basename(zipFile, extname(zipFile))
    await extract(zipFile, {dir: pathResolve(targetDir, extractedFolderName)})
    resolve(extractedFolderName)
})