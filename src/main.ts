import { listZip } from "./list-zip"
import { setup } from "./setup"
import { terminate } from "./terminate"
import {extractZip} from "./extract-zip"
import { readdirSync } from "fs"
import { getSlug } from "./get-slug"
import { getPostSourceFp } from "./get-post-source-fp"
import { getFileContent } from "./get-file-content"
import { createPostDirectory } from "./create-post-directory"
import { getFrontMatter } from "./get-front-matter"
import { processAssets } from "./process-assets"
import { dirname } from "path"

const main = async () => {
  try{
    setup()
    const zipFiles = listZip(process.cwd())
    await extractZip(zipFiles[0], 'temp')
    for(const folder of readdirSync('temp')){
      const postSourceFp = getPostSourceFp(`temp/${folder}`)
      const fileContent = getFileContent(postSourceFp)
      const postSlug = getSlug(fileContent)
      const newPostFile = createPostDirectory(postSlug)
      const frontMatter = getFrontMatter(fileContent)
      const newAssets = processAssets(`temp/${folder}`, dirname(newPostFile), postSlug)
      console.log(frontMatter, newAssets)
    }
    terminate()
  }catch(e){
    terminate(e)
  }

}

main()