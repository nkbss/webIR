import React, { Component } from 'react'
import { HeaderSearchLayout } from '../components/HeaderSearch/layout'
import { ImageLayout } from '../components/Image/layout'
import '../style.css'
class image extends Component {
  render() {
    return (
      <div>
        <HeaderSearchLayout />
        <ImageLayout />
      </div>
    )
  }
}

export default image
