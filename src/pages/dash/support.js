import React, { Component } from 'react';
import NavBar from "../../components/navbar";
import FooTer from "../../components/footer";
import SideBar from '../../components/dash/sidebar';
import Tickets from "../../components/dash/ticket";
import Link from "next/link";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Label,
  Menu,
  Table,
  Segment,
  Message,
  GridColumn,
  Form
} from "semantic-ui-react";

class DashboardSupport extends Component {
  render() {
    return(
      <>
<NavBar />
      <Grid padded>
        <Grid.Column
        tablet={12}
        computer={12}
        mobile={16}
        >
          <Segment stacked inverted textAlign="right">
            <Segment color="violet" inverted>تیکت و پشتیبانی</Segment>
            <Segment color="orange">
              <Grid >
                <Grid.Column width={4}><Segment inverted color="grey">HI</Segment></Grid.Column>
                <Grid.Column width={4}><Segment inverted color="green">HI</Segment></Grid.Column>
                <Grid.Column width={4}><Segment inverted color="red">HI</Segment></Grid.Column>
                <Grid.Column width={4}><Segment inverted color="blue">HI</Segment></Grid.Column>
              </Grid>
<hr />
<Tickets />
            </Segment>
          </Segment>
        </Grid.Column>
<SideBar />
      </Grid>
<FooTer />
      </>
    )
  }
}

export default DashboardSupport;