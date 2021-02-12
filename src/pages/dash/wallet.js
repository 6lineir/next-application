import React, { Component } from 'react';
import NavBar from "../../components/navbar";
import FooTer from "../../components/footer";
import SideBar from '../../components/dash/sidebar';
import Wallets from "../../components/dash/wallets";
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
  Form,
  List
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
            <Segment color="violet" inverted>کیف پول</Segment>
            <Segment color="orange">
              <Grid >
                <Grid.Column width={4}><Segment inverted color="grey">HI</Segment></Grid.Column>
                <Grid.Column width={4}><Segment inverted color="green">HI</Segment></Grid.Column>
                <Grid.Column width={4}><Segment inverted color="red">HI</Segment></Grid.Column>
                <Grid.Column width={4}><Segment inverted color="blue">HI</Segment></Grid.Column>
              </Grid>
<Wallets />
<hr />
<Segment color="violet" circular textAlign="center">
  <Header as="h3">والت اختصاصی گشنیکس</Header>
  <Grid padded>
    <List celled divided horizontal size="big">
      <List.Item>
        <Image avatar src='/img/icons/btc.svg' />
        <List.Content>
        <List.Header>BTC</List.Header>
        00.0<Label>موجودی</Label>
        </List.Content>
        <Input label="آدرس والت"/>
      </List.Item>
      <List.Item>
        <Image avatar src='/img/icons/etc.svg' />
        <List.Content>
        <List.Header>ETC</List.Header>
        00.0<Label>موجودی</Label>
        </List.Content>
        <Input label="آدرس والت"/>
      </List.Item>
      <List.Item>
        <Image avatar src='/img/icons/ltc.svg' />
        <List.Content>
        <List.Header>LTC</List.Header>
        00.0<Label>موجودی</Label>
        </List.Content>
        <Input label="آدرس والت"/>
      </List.Item>
      <List.Item>
        <Image avatar src='/img/icons/usdt.svg' />
        <List.Content>
        <List.Header>USDT</List.Header>
        00.0<Label>موجودی</Label>
        </List.Content>
        <Input label="آدرس والت"/>
      </List.Item>
      <List.Item>
        <Image avatar src='/img/icons/doge.svg' />
        <List.Content>
        <List.Header>DOGE</List.Header>
        00.0<Label>موجودی</Label>
        </List.Content>
        <Input label="آدرس والت"/>
      </List.Item>
      
    </List>
  </Grid>
</Segment>

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