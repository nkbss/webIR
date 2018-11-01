import React, { Component } from 'react'
import { NewsCard } from '../Cards'
import { Grid } from '../../../node_modules/semantic-ui-react'

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
