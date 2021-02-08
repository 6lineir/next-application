import Link from "next/link";
import React, { Component } from 'react'
import {
  Button,
  Container,
  Dropdown,
  Grid,
  GridColumn,
  Header,
  Icon,
  Image,
  Menu,
  Message
} from "semantic-ui-react";
class SideBar extends Component {

  render(){
        return (
          <>
        <Grid.Column 
            tablet={4}
            computer={4}
            only="tablet computer"
            id="sidebar"
            textAlign="right">
                <Menu vertical inverted fluid>
                  
                    <Menu.Item><Header as="h2" textAlign="center" inverted>
                      داشبورد
                    <Icon name='dashboard' color="red"/>
                    </Header>
                    <Image src='/img/designer.svg' circular bordered size="medium"/>
                    </Menu.Item>
                    <Link href="/dash">
                    <Menu.Item as="a">
                    <Icon name='react' color="grey"/>
                    داشبورد</Menu.Item></Link>
                    <Menu.Item as="a">
                    <Icon name='mail' color="grey"/>
                    کیف پول</Menu.Item>
                    <Menu.Item as="a">
                    <Icon name='credit card' color="grey"/>
                    مالی</Menu.Item>
                    <Link href="/dash/support">
                    <Menu.Item as="a">
                    <Icon name='help' color="grey"/>
                    پشتیبانی</Menu.Item></Link>
                    <Link href="/dash/settings">
                    <Menu.Item as="a">
                    <Icon name='cogs' color="grey"/>
                    تنظیمات</Menu.Item></Link>
                    <Menu.Item >
                    <Button inverted color="green">ارز ها</Button>
                    <Button color="violet">خرید ارز</Button>
                    <Button icon="home" color="orange">فروش ارز</Button>
                    </Menu.Item>
                </Menu>
        </Grid.Column>
        <Grid.Column 
            mobile={4}
            only="mobile">
              <Menu  fluid inverted fixed="bottom" size="mini" color="orange">
                <Link href="/">
                <Menu.Item as="a" ><Icon name="phone" circular /></Menu.Item></Link>
                <Link href="/about">
                <Menu.Item as="a"><Icon name="star" circular /></Menu.Item></Link>
                <Link href="/404">
                <Menu.Item as="a"><Icon name="home" circular/></Menu.Item></Link>
                <Link href="/dash">
                <Menu.Item as="a"><Icon name="cog" loading circular/></Menu.Item></Link>
              </Menu>
        </Grid.Column>
       
          </>
        )
  }

}

export default SideBar;