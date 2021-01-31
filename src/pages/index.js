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
// Component =>
import NavBar from "../components/navbar";
import Posts from "../components/posts";
import Footer from "../components/footer";
import TableFee from "../components/tableFee";
import Services from "../components/services";

const Home = () => {
  return (
    <div>
      
<NavBar />

        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "10em" }}>
                <Header as="h3" inverted style={{ fontSize: "2em" }}>
                  " به شدت درحال توسعه پروژه"
                </Header>
                <p style={{ fontSize: "1.33em", color: "#ffffff" }}>
                  Gashnix Project Crypto
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                  <Image size="large" src="/img/nakamoto-p2p.svg" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
<Services />
<TableFee />

<Header as="h2" style={{ fontSize: "2em", textAlign: "center", color: "#ffffff" }}>اخرین بلاگ ها</Header>
<Posts />
        <Segment style={{ padding: "0em" }} inverted>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                  <Image src="/img/pay-online.svg" />

              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "20em" }}>
              <Header as="h3" inverted style={{ fontSize: "2em" }}>
                  " به شدت درحال توسعه پروژه"
                </Header>
                <p style={{ fontSize: "1.33em", color: "#ffffff" }}>
                  Gashnix Project Crypto
                </p>
                <Button color="brown">Get Starting...</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
<Footer />
    </div>

  )
}


export  default Home;