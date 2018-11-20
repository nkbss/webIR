import React, { Component } from 'react'
import { VideoLayout } from '../components/Video/layout'
import '../style.css'
import { HeaderSearchLayout } from '../components/HeaderSearch/layout'
class video extends Component {
  render() {
    return (
      <div>
        <HeaderSearchLayout />
        <VideoLayout />
      </div>
    )
  }
}

export default video
