import React, { Component } from 'react'
import { SearchLayout } from '../components/Search/layout'
import { NewsLayout } from '../components/News/Layout'
import '../style.css'
class news extends Component {
  render() {
    return (
      <div>
        <SearchLayout />
        <NewsLayout />
      </div>
    )
  }
}

export default news
