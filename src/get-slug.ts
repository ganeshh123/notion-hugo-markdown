export const getSlug = (fileContent: string): string => {
    const firstLine = fileContent.split('\n')[0]
    const pageTitle = firstLine.split('#')[1].substring(1)
    const slug = pageTitle.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').toLowerCase()
    return slug
}