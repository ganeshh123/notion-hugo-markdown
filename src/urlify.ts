import { findAndReplace } from "./find-and-replace"

export const uRLify = (input: string): string => {
    return findAndReplace(input, [{find: ' ', replaceWith: '%20', all: true}])
}