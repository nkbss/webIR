import React, { Component } from 'react'
import { ImageCard } from '../cards'
import { PaginationLayout } from '../../Pagination'

class ImageLayout extends Component {
  render() {
    return (
      <div>
        <ImageCard />
        <PaginationLayout />
      </div>
    )
  }
}

export { ImageLayout }
