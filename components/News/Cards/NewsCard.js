import React from 'react'
import { Card, Grid, Image } from '../../../node_modules/semantic-ui-react'

const NewsCard = (props) => {
  return (
    <div className="Section-NewsCard">
      <Grid>
        <Grid.Row>
          <Grid.Column width="3" />
          <Grid.Column width="10">
          <a href={props.url}>
            <Card fluid onClick={()=>props.handleUrl(props.url)} id="newscard">
              <Card.Content>
                <Grid verticalAlign="middle">
                  <Grid.Row>
                    <Grid.Column width="3" textAlign="center">
                      <Image
                        src={props.img}
                        size="large"
                      />
                    </Grid.Column>
                    <Grid.Column width="13">
                      <Grid>
                        <Grid.Row id="newscard-grid">
                          <Grid.Column>
                            <label className="newscard-header-label">
                             {props.title}
                            </label>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row id="newscard-grid">
                          <Grid.Column>
                            <label className="newscard-date-label">
                             {props.date}
                            </label>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row id="newscard-grid">
                          <Grid.Column>
                            {props.content}
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column>
                          {props.url}
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
            </a>
          </Grid.Column>
          <Grid.Column width="3" />
        </Grid.Row>
      </Grid>
    </div>
  )
}

export { NewsCard }
