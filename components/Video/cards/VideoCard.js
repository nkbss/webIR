import React from 'react'
import { Grid, Card } from '../../../node_modules/semantic-ui-react'

const VideoCard = () => {
  return (
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Card.Group itemsPerRow={4}>
            <Card raised>
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              />
              <Card.Content extra textAlign="center">
                <Card.Header>MLS: NYC and Portland through</Card.Header>
                <Card.Description>
                  https://www.jerseypeeps.com/mls-nyc-and-portland-through/
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised>
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              />
              <Card.Content extra textAlign="center">
                <Card.Header>MLS: NYC and Portland through</Card.Header>
                <Card.Description>
                  https://www.jerseypeeps.com/mls-nyc-and-portland-through/
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised>
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              />
              <Card.Content extra textAlign="center">
                <Card.Header>MLS: NYC and Portland through</Card.Header>
                <Card.Description>
                  https://www.jerseypeeps.com/mls-nyc-and-portland-through/
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised>
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              />
              <Card.Content extra textAlign="center">
                <Card.Header>MLS: NYC and Portland through</Card.Header>
                <Card.Description>
                  https://www.jerseypeeps.com/mls-nyc-and-portland-through/
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised>
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
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

export { VideoCard }
