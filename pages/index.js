import React, { Component } from 'react'
import { SearchLayout } from '../components/Search/layout'
import { HeaderLayout } from '../components/Header'
import '../style.css'

class index extends Component {
  render() {
    return (
      <div className="index">
        <HeaderLayout />
        <SearchLayout />
        {/* <NewsLayout /> */}
      </div>
    )
  }
}

export default index
