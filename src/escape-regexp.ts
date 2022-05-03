export const escapeRegExp = (s: string) => {
    return s.replace(/[.^$*+?()[{|\\]/g, '\\$&'); // $& means the whole matched string
}

// Thanks to https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript#comment124672996_1144788