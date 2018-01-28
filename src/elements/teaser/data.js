import { authors, image } from '../data'

const teaserProps = (element) => ({
  title: element.get('title'),
  description: element.get('description'),
  image: image(element),
  authors: authors(element)
})

export {
  teaserProps
}
