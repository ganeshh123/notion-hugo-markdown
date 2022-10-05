import {getSlug} from './get-slug'
import { getYtEmbedId } from './get-yt-embed-id'

export const getFrontMatter = (fileContent: string, pageContent: string): string => {
    const pagePropertiesText = fileContent.split('\n\n')[1]
    const propertyTexts = pagePropertiesText.split('\n')
    const frontMatter = {}
    frontMatter['title'] = fileContent.split('\n')[0].split('#')[1].substring(1)
    frontMatter['url'] = `/${getSlug(fileContent)}`

    for(const property of propertyTexts){

        const kV = property.split(/:/)
        let key = kV.shift().toLowerCase()


        // Convert page number to weight
        if(key === '#'){
            key = 'weight'
        }

        const value = kV.join(':').substring(1)
        frontMatter[key] = value
    }
    const youtubeId = getYtEmbedId(frontMatter['youtube url'])
    if(youtubeId && youtubeId.length === 11){
        frontMatter['youtube_id'] = youtubeId
    }
    frontMatter['date'] = new Date(frontMatter['created']).toISOString()
    frontMatter['odysee_url']  = ''
    frontMatter['download_link'] = ''

    return JSON.stringify(frontMatter, null, '\t')
}