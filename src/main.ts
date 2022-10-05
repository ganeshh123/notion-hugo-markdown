import { listZip } from "./list-zip"
import { setup } from "./setup"
import { terminate } from "./terminate"
import {extractZip} from "./extract-zip"
import { readdirSync, writeFileSync } from "fs"
import { getSlug } from "./get-slug"
import { getPostSourceFp } from "./get-post-source-fp"
import { getFileContent } from "./get-file-content"
import { createPostDirectory } from "./create-post-directory"
import { getFrontMatter } from "./get-front-matter"
import { processAssets } from "./process-assets"
import { dirname, extname, parse } from "path"
import { getPageContent } from "./get-markdown-content"
import { fixImageUrls } from "./fix-image-urls"
import { getYtEmbedId } from "./get-yt-embed-id"

const main = async () => {
  try{
    setup()
    const zipFiles = listZip(process.cwd())
    console.log('Extracting....')
    await extractZip(zipFiles[0], 'temp')
    console.log('Extract Complete.')
    for(const postFile of readdirSync('temp').filter((file) => extname(file) === '.md')){
      // const postSourceFp = getPostSourceFp(`temp/${parse(folder).name}`)
      const postSourceFp = `temp/${postFile}`
      const fileContent = getFileContent(postSourceFp)
      const postSlug = getSlug(fileContent)
      const newPostFile = createPostDirectory(postSlug)
      const pageContent = getPageContent(fileContent)
      const frontMatter = getFrontMatter(fileContent, pageContent)
      const newAssets = processAssets(`temp/${parse(postFile).name}`, dirname(newPostFile), postSlug)
      const replaced = fixImageUrls(pageContent, newAssets)
      // getYtEmbedId(replaced)
      const newText = frontMatter + '\n\n' + replaced
      // console.log(newText, newPostFile)
      writeFileSync(newPostFile, newText)
    }
    terminate()
  }catch(e){
    terminate(e)
  }

}

main()