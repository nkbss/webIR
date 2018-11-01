import React, { Component } from 'react'
import { SearchCard } from '../cards'
import { Router } from '../../../routes'

class SearchLayout extends Component {
  search = e => {
    if (e.key === 'Enter') {
      Router.pushRoute('news')
      console.log('Route')
    }
  }

  // handleDropDown = (e,data) => {

  // }

  render() {
    return (
      <div className="Section-Search">
        <SearchCard search={this.search} />
      </div>
    )
  }
}

export { SearchLayout }
