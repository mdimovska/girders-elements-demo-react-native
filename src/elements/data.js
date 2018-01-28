const authors = (element) => {
  if (!element.get('authors')) return null

  const authors = element.get('authors').toJS()
  return authors ? (Array.isArray(authors) ? authors.join(', ') : authors) : null
}

const image = (element) => ({
  src: element.getIn(['image', 'src']),
  alt: element.getIn(['image', 'alt'])
})

export {
  authors,
  image
}
