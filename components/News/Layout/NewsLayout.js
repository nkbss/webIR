import React, { Component } from 'react'
import { NewsCard } from '../Cards'
import { PaginationLayout } from '../../Pagination'

class NewsLayout extends Component {
  render() {
    return (
      <div>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <PaginationLayout />
      </div>
    )
  }
}

export { NewsLayout }
