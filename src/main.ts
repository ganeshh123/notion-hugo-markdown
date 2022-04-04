import { terminate } from "./terminate"

try{
  console.log('Hello World')
  terminate()
}catch(e){
  terminate(e)
}