import React, { Component } from 'react';
import NavBar from "../../components/navbar";
import FooTer from "../../components/footer";
import TableFee from "../../components/tableFee";
import SideBar from '../../components/dash/sidebar';
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
  GridColumn
} from "semantic-ui-react";

class DashboardIndex extends Component {
  render() {
    return(
      <>
<NavBar />
      <Grid padded >
        <Grid.Column
        tablet={12}
        computer={12}
        mobile={16}
        >
          <Message color="violet">
            حساب کاربری ندارید؟ <a href='#'>ثبت نام</a>
          </Message>
          <Segment stacked inverted>
            <Segment color="violet" inverted>HI</Segment>
            <Segment color="orange">
              <Grid >
                <Grid.Column width={4}><Segment inverted color="grey">HI</Segment></Grid.Column>
                <Grid.Column width={4}><Segment inverted color="green">HI</Segment></Grid.Column>
                <Grid.Column width={4}><Segment inverted color="red">HI</Segment></Grid.Column>
                <Grid.Column width={4}><Segment inverted color="blue">HI</Segment></Grid.Column>
              </Grid>
            </Segment>
            <Image src='/img/financial-data.svg' rounded bordered/>
<TableFee />
          </Segment>
        </Grid.Column>
<SideBar />
      </Grid>
<FooTer />
      </>
    )
  }
}

export default DashboardIndex;