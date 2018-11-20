import React from 'react'
import { Grid, Card, Image } from '../../../node_modules/semantic-ui-react'

const ImageCard = () => {
  return (
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Card.Group itemsPerRow={4}>
            <Card raised>
              <Image
                src="https://images-na.ssl-images-amazon.com/images/I/61F-Epj6A9L._SX679_.jpg"
                size="small"
                centered
              />
              <Card.Content extra textAlign="center">
                <Card.Header>MLS: NYC and Portland through</Card.Header>
                <Card.Description>
                  https://www.jerseypeeps.com/mls-nyc-and-portland-through/
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised>
              <Image
                src="https://images-na.ssl-images-amazon.com/images/I/61F-Epj6A9L._SX679_.jpg"
                size="small"
                centered
              />
              <Card.Content extra textAlign="center">
                <Card.Header>MLS: NYC and Portland through</Card.Header>
                <Card.Description>
                  https://www.jerseypeeps.com/mls-nyc-and-portland-through/
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised>
              <Image
                src="https://images-na.ssl-images-amazon.com/images/I/61F-Epj6A9L._SX679_.jpg"
                size="small"
                centered
              />
              <Card.Content extra textAlign="center">
                <Card.Header>MLS: NYC and Portland through</Card.Header>
                <Card.Description>
                  https://www.jerseypeeps.com/mls-nyc-and-portland-through/
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised>
              <Image
                src="https://images-na.ssl-images-amazon.com/images/I/61F-Epj6A9L._SX679_.jpg"
                size="small"
                centered
              />
              <Card.Content extra textAlign="center">
                <Card.Header>MLS: NYC and Portland through</Card.Header>
                <Card.Description>
                  https://www.jerseypeeps.com/mls-nyc-and-portland-through/
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  )
}
export { ImageCard }
