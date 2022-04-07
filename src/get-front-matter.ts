import {getSlug} from './get-slug'

export const getFrontMatter = (pageContent: string): string => {
    const pagePropertiesText = pageContent.split('\n\n')[1]
    const propertyTexts = pagePropertiesText.split('\n')
    const frontMatter = {}
    frontMatter['title'] = pageContent.split('\n')[0].split('#')[1].substring(1)
    frontMatter['url'] = `/${getSlug(pageContent)}`
    for(const property of propertyTexts){
        const kV = property.split(/:/)
        const key = kV.shift().toLowerCase()
        const value = kV.join(':').substring(1)
        frontMatter[key] = value
    }
    console.log(JSON.stringify(frontMatter))
    return JSON.stringify(frontMatter)
}