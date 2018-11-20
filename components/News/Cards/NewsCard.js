import React from 'react'
import { Card, Grid, Image } from '../../../node_modules/semantic-ui-react'

const NewsCard = () => {
  return (
    <div className="Section-NewsCard">
      <Grid>
        <Grid.Row>
          <Grid.Column width="3" />
          <Grid.Column width="10">
            <Card fluid>
              <Card.Content>
                <Grid verticalAlign="middle">
                  <Grid.Row>
                    <Grid.Column width="3" textAlign="center">
                      <Image
                        src="https://images-na.ssl-images-amazon.com/images/I/61F-Epj6A9L._SX679_.jpg"
                        size="tiny"
                      />
                    </Grid.Column>
                    <Grid.Column width="13">
                      <Grid>
                        <Grid.Row id="newscard-grid">
                          <Grid.Column>
                            <label className="newscard-header-label">
                              MLS: NYC and Portland through
                            </label>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row id="newscard-grid">
                          <Grid.Column>
                            <label className="newscard-date-label">
                              01/11/2018 8:19 A.M.
                            </label>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row id="newscard-grid">
                          <Grid.Column>
                            New York City FC qualified for the quarter-finals of
                            the MLS Cup play-offs on Wednesday with a 3-1
                            victory over Philadelphia Union…
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column>
                            https://www.jerseypeeps.com/mls-nyc-and-portland-through/
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width="3" />
        </Grid.Row>
      </Grid>
    </div>
  )
}

export { NewsCard }
