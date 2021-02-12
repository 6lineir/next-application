import React, { Component } from 'react';
import {
  Button,
  Card,
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
class SellFor extends Component {
  render() {
    return (

<Grid columns={3} stackable padded>
  <Grid.Column className="backed">
    <Segment textAlign="center" >
      <Header as="h2">
      <Image src="/img/icons/usdt.svg" />
        <Header.Content>مبادله ارز دیجیتال به تومان و
        پرداخت با کلیه کارت های شتاب </Header.Content>
      </Header>
    </Segment>
  </Grid.Column>
  <Grid.Column>
    <Segment inverted color="blue" textAlign="center">
      <Header as="h2">
      <Image src="/img/icons/ltc.svg"/>
        <Header.Content>مبادله ارز دیجیتال به تومان و
        پرداخت با کلیه کارت های شتاب </Header.Content>
      </Header>
    </Segment>
  </Grid.Column>
  <Grid.Column>
    <Segment inverted color="green" textAlign="center">
      <Header as="h2">
      <Image src="/img/icons/btc.svg"/>
        <Header.Content>مبادله ارز دیجیتال به تومان و
        پرداخت با کلیه کارت های شتاب </Header.Content>
      </Header>
    </Segment>
  </Grid.Column>
</Grid>

    );
  }
}

export default SellFor;