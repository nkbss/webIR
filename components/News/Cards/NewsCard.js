import React from 'react'
import { Card, Grid } from '../../../node_modules/semantic-ui-react'

const NewsCard = () => {
  return (
    <div className="Section-NewsCard">
      <Grid textAlign="center">
        <Grid.Row>
          <Grid.Column width="10">
            <Card raised fluid>
              <Card.Content>
                <Card.Header>MLS: NYC and Portland through</Card.Header>
                <Card.Meta>Football 01/11/18 8:19am</Card.Meta>
                <Card.Description>
                  New York City FC qualified for the quarter-finals of the MLS
                  Cup play-offs on Wednesday with a 3-1 victory over
                  Philadelphia Union.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export { NewsCard }
