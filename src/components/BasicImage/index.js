import React, { Component } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'

import config from '../../../config'
const screenWidth = Dimensions.get('window').width

class BasicImage extends Component {
  state = {
    hasError: false
  }

  static defaultProps = {
    src: ''
  }

  componentDidMount () {
    if (this.props.src) {
      Image.getSize(this.props.src,
        (width, height) => {
          this.setState({
            width,
            height
          })
        },
        () => this.handleError()
      )
    }
  }

  handleError = () => {
    this.setState({
      hasError: true
    })
  }

  getWidth () {
    return this.props.width || screenWidth
  }

  getHeight () {
    if (this.props.height) {
      return this.props.height
    }

    const width = this.getWidth()

    if (this.state.height !== 0 && this.state.width !== 0) {
      return width * this.state.height / this.state.width
    }

    // default is square
    return width
  }

  render () {
    const { src } = this.props
    const { hasError } = this.state

    const width = this.getWidth()
    const height = this.getHeight()

    const color = config.theme.color

    if (!src || hasError) {
      const errorStyle = {
        width,
        height,
        backgroundColor: color.shades.light
      }
      return <View style={errorStyle} />
    }

    const imageStyle = {
      width,
      height
    }

    return (
      <Image
        source={{ uri: src }}
        resizeMode='cover'
        style={imageStyle}
        onError={this.handleError}
      />
    )
  }
}

export default BasicImage
