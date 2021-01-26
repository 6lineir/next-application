import Link from "next/link";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
const fooTer = () => {
    return (
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h3" content="لینک ها" />
              <List link inverted>
                <List.Item as="a">ارتباط با ما</List.Item>
                <List.Item as="a">درباره ما</List.Item>
                <List.Item as="a">شرایط استفاده</List.Item>
                <List.Item as="a">سوالات متداول</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h3" content="خدمات ما" />
              <List link inverted>
                <List.Item as="a">P2P</List.Item>
                <List.Item as="a">Tread</List.Item>
                <List.Item as="a">Buy</List.Item>
                <List.Item as="a">Sell</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h3" inverted>
                درباره ما
              </Header>
              <p>
                Create By : 
              </p>
              <Label color="purple">Gashnix</Label>
              <Label color="orange">2021</Label>
              <Label color="blue"><b>©</b></Label>
              <Label color="red"> Copy-Right</Label>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4} >
              <Header as='h3' inverted>
                  <Icon name='telegram' />
                <Header.Content>کانال تلگرام
                  <Header.Subheader>Telegram Channel</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={4} >
              <Header as='h3' inverted>
                  <Icon name='instagram' />
                <Header.Content>صفحه اینستاگرام
                  <Header.Subheader>Instagram</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={4} >
              <Header as='h3' inverted>
                  <Icon name='phone' />
                <Header.Content>تلفن تماس
                  <Header.Subheader>Phone </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={4} >
              <Header as='h3' inverted>
                  <Icon name='mail' />
                <Header.Content>ایمیل
                  <Header.Subheader>Email</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Container>
    </Segment>
    )
}

export default fooTer;