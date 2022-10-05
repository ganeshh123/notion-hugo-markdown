import { findAndReplace } from "./find-and-replace"
import { ReplaceTerm } from "./types"

export const fixImageUrls = (text: string, newImages: {oldName: string, newName: string}[]): string => {
    const imageScan: RegExp = new RegExp(`!\\[[^\\]]*\\]\\((.*?)\\s*("(?:.*[^"])")?\\s*\\)`, `gm`)
    const images = Array.from(text.match(imageScan) ?? [])
    const replacements: ReplaceTerm[] = []

    if(newImages === undefined || newImages.length === 0){
        return text
    }

    for(const img of images){
        const originalName = img.split('(')[1].substring(0, img.split('(')[1].length -1)
        const replacement = newImages.find((rep) => rep.oldName === originalName)
        const newName = replacement ? replacement.newName : originalName
        replacements.push({
           find:  img,
           replaceWith: `![${newName.split('.')[0]}](${newName})`
        })
    }

    return findAndReplace(text, replacements)
}