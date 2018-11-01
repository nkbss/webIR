import React from 'react'
import { Menu, Image, Grid } from '../../node_modules/semantic-ui-react'

const image = '../../static/images/football.png'

const HeaderCard = () => {
  return (
    <div>
      <Grid>
        <Grid.Row columns="2">
          <Grid.Column width="6">
            <Image size="tiny" src={image} floated="right" />
          </Grid.Column>
          <Grid.Column textAlign="left" verticalAlign="middle">
            <h1>Football News Search Engine</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export { HeaderCard }
