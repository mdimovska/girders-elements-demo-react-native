import { authors } from '../data'

const formatDate = date => date

const postDate = (element) => {
  const formattedDate = formatDate(element.get('date'))
  return postMetadataEntry(formattedDate)
}

const postAuthors = (element) => {
  return postMetadataEntry(authors(element), true)
}

const postMetadataEntry = (text, highlight) => {
  if (!text) return null

  return {
    text,
    highlight
  }
}

const postMetadata = (element) => [ postAuthors(element), postDate(element) ].filter(item => !!item)

export {
  postMetadata
}
