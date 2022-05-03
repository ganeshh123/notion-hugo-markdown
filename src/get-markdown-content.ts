export const getPageContent = (pageContent: string): string => {
    const pageContentText = pageContent.split('\n\n').slice(2).join('\n\n')
    return pageContentText
}