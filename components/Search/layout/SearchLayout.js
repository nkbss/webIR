import React, { Component } from 'react'
import { SearchCard } from '../cards'

class SearchLayout extends Component {
  search = e => {
    if (e.key === 'Enter') {
    }
  }

  render() {
    return (
      <div className="Section-Search">
        <SearchCard />
      </div>
    )
  }
}

export { SearchLayout }
