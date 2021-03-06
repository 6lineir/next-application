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

const Services = () => {
    return (
      <Segment inverted>
    <Container style={{ padding: '20px' }}>
      <Grid stackable padded columns={3}>
        <Grid.Column >
          <Header as='h2' inverted>
          <Icon name='chart line' color="violet" />
          <Header.Content>
            Trading
            <Header.Subheader>Fast asset creation</Header.Subheader>
          </Header.Content>
          </Header>
        </Grid.Column>
        <Grid.Column >
          <Header as='h2' inverted>
          <Icon name='credit card' color="olive"/>
          <Header.Content>
            Wallet Securet
            <Header.Subheader>Manage your preferences</Header.Subheader>
          </Header.Content>
          </Header>
        </Grid.Column>
        <Grid.Column >
          <Header as='h2' inverted>
          <Icon name='keycdn' color="brown"/>
          <Header.Content>
            Security Key
            <Header.Subheader>Manage your preferences</Header.Subheader>
          </Header.Content>
          </Header>
        </Grid.Column>
      </Grid>
    </Container>
    </Segment>
    )
}

export default Services;