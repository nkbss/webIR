import React, { Component } from 'react'
import { SearchLayout } from '../components/Search/layout'
import { NewsLayout } from '../components/News/Layout'
import '../style.css'
import { HeaderSearchLayout } from '../components/HeaderSearch/layout'

class search extends Component {
  render() {
    
    return (
      <div>
        <HeaderSearchLayout />
        <NewsLayout query={this.props.url.query} />
      </div>
    )
  }
}

export default search
