import React, { Component } from 'react'
import { SearchLayout } from '../components/Search/layout'
import { NewsLayout } from '../components/News/Layout'
import '../style.css'
import { HeaderSearchLayout } from '../components/HeaderSearch/layout'
import getRes from './get_data'

class Test extends Component {
    constructor(props) {
        super(props)
        getRes({"type":"image", "q":"messi", "filter_t":"", "filter_p":"", "sort":"date", "page":0}).then(res => {
            console.log(res)
        })
    }
  render() {
    return (
      <div>
        <HeaderSearchLayout />
        <NewsLayout />
      </div>
    )
  }
}

export default Test
