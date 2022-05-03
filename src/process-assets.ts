import { copyFileSync, fstat, readdirSync } from 'fs';
import { join } from 'path'
import { uRLify } from './urlify';

export const processAssets = (
  pageDir: string,
  postDir: string,
  postSlug: string,
): {oldName: string, newName: string}[] => {
  const folders = readdirSync(pageDir, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name)

  if (folders.length < 1) {
    return
  }

  const assetsFolder = join(pageDir, folders[0]);
  const assets = readdirSync(assetsFolder)
  const newAssets = readdirSync(assetsFolder)

  for (let i = 0; i < assets.length; i++) {
    if (assets[i].includes('Untitled')) {
      const extension = assets[i].split('.')[assets[i].split('.').length - 1]
      newAssets[i] = `${postSlug}-${i.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}.${extension}`
    }
  }

  // Untitled.png should come first before Untitled 1.png
  assets.sort((a, b) =>  a.length - b.length)

  const results: {oldName: string, newName: string}[] = []
  for(let i = 0; i < assets.length; i++){
    copyFileSync(join(assetsFolder, assets[i]), join(postDir, newAssets[i]))
    results.push({oldName: uRLify(`${folders[0]}/${assets[i]}`), newName: newAssets[i]})
  }

  return results
}
