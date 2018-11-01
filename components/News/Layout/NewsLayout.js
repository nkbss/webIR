import React, { Component } from 'react'
import { NewsCard } from '../Cards'

class NewsLayout extends Component {
  render() {
    return (
      <div className="Section-News">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    )
  }
}

export { NewsLayout }
