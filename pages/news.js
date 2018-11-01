import React, { Component } from 'react'
import { SearchLayout } from '../components/Search/layout'
import { NewsLayout } from '../components/News/Layout'
import '../style.css'
import { HeaderSearchLayout } from '../components/HeaderSearch/layout'

class news extends Component {
  render() {
    return (
      <div>
        <HeaderSearchLayout />
        <NewsLayout />
      </div>
    )
  }
}

export default news
