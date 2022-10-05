export const getYtEmbedId = (text: string): string => {
    
    // Only match on the first line, otherwise ignore
    // const youtubeScan: RegExp = new RegExp('/([a-z0-9_-]{11})/gim)', ``)
    const match = text.match(/([a-z0-9_-]{11})/gim)[0]
    if(!match){
        return null
    }
    const mdLink = match[0]
    // const videoId = mdLink.substring(mdLink.length - 12, mdLink.length - 1)

    return match
}