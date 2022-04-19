import { copyFileSync, fstat, readdirSync } from 'fs';
import { join } from 'path';

export const processAssets = (
  pageDir: string,
  postDir: string,
  postSlug: string,
): string[][] => {
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

  for(let i = 0; i < assets.length; i++){
    copyFileSync(join(assetsFolder, assets[i]), join(postDir, newAssets[i]))
  }

  return [assets, newAssets]
}
