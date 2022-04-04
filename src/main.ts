import { listZip } from "./list-zip"
import { setup } from "./setup"
import { terminate } from "./terminate"
import {extractZip} from "./extract-zip"

const main = async () => {
  try{
    setup()
    const zipFiles = listZip(process.cwd())
    await extractZip(zipFiles[0], 'posts')
    terminate()
  }catch(e){
    terminate(e)
  }

}

main()