import React, { Component } from 'react'
import { VideoCard } from '../cards'
import { PaginationLayout } from '../../Pagination'

class VideoLayout extends Component {
  render() {
    return (
      <div>
        <VideoCard />
        <PaginationLayout />
      </div>
    )
  }
}

export { VideoLayout }
