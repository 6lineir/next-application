import React, { Component } from 'react';
import NavBar from "../../components/navbar";
import FooTer from "../../components/footer";
import TableFee from "../../components/tableFee";
import SideBar from '../../components/dash/sidebar';
import VertfySettings from "../../components/dash/settings";
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

class DashboardSettings extends Component {
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
            <Segment color="violet" inverted>صفحه تنظیمات</Segment>
            <Segment color="orange">
              <Grid >
                <Grid.Column width={4}><Segment inverted color="grey">HI</Segment></Grid.Column>
                <Grid.Column width={4}><Segment inverted color="green">HI</Segment></Grid.Column>
                <Grid.Column width={4}><Segment inverted color="red">HI</Segment></Grid.Column>
                <Grid.Column width={4}><Segment inverted color="blue">HI</Segment></Grid.Column>
              </Grid>

            <VertfySettings />
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

export default DashboardSettings;