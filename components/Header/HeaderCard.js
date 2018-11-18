import React from 'react'
import { Menu, Image, Grid } from '../../node_modules/semantic-ui-react'

const image = '../../static/images/football.png'

const HeaderCard = () => {
  return (
    <div>
      <Grid textAlign="center">
        <Grid.Row columns="2">
          <Grid.Column width="6" style={{ paddingRight: '15px' }}>
            <Image size="tiny" src={image} floated="right" />
          </Grid.Column>
          <Grid.Column
            textAlign="left"
            verticalAlign="middle"
            style={{ paddingLeft: '0px' }}
          >
            <div className="headText">Football Update</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export { HeaderCard }
