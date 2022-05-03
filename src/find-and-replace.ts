import { escapeRegExp } from "./escape-regexp"
import { ReplaceTerm } from "./types"

export const findAndReplace = (text: string, terms: ReplaceTerm[]): string => {
    let modifiedString: string = text
    for(const term of terms){
        modifiedString = modifiedString.replace(new RegExp(escapeRegExp(term.find), term.all && 'g'), term.replaceWith)
    }
    return modifiedString
}