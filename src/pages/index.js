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

const Home = () => {
  return (
    <div>
      
<NavBar />

        <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              " به شدت درحال توسعه پروژه"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Gashnix Project Crypto
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              " وب اپلیکیشن SSR "
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src="/img/slide2.png" />
              <b>React/Next</b> توسعه یافته با فریمورک های 
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <TableFee />

    <Header as="h2" style={{ fontSize: "2em", textAlign: "center" }}>اخرین بلاگ ها</Header>

<Posts />

<Footer />
    </div>

  )
}


export  default Home;