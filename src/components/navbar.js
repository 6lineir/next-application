import React, { Component } from "react";
import Link from "next/link";

import {
    Button,
    Container,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    Label,
    Menu,
    Message
  } from "semantic-ui-react";
class Navbar extends Component {
    state = {
      dropdownMenuStyle: {
        display: "none"
      }
    };
  
    handleToggleDropdownMenu = () => {
      let newState = Object.assign({}, this.state);
      if (newState.dropdownMenuStyle.display === "none") {
        newState.dropdownMenuStyle = { display: "flex" };
      } else {
        newState.dropdownMenuStyle = { display: "none" };
      }
  
      this.setState(newState);
    };
  
    render() {
      return (
          <Container>
            <Grid padded className="tablet computer only">
              <Menu borderless fluid inverted fixed="top" size="small">
                <Menu.Menu position="left">
                  <Link href="/login" ><Button color="violet" inverted size="mini">ورود | ثبت نام</Button></Link>
                  <Link href="/dash" ><Button color="orange" inverted size="mini">داشبورد کاربری</Button></Link>
                </Menu.Menu>
                <Link href="/blog">
                <Menu.Item as="a"  position="right">پشتیبانی</Menu.Item></Link>
                <Link href="/about">
                <Menu.Item active  color="orange" as="a">درباره ما</Menu.Item></Link>
                <Dropdown item text="صفحات" as="a">
                  <Dropdown.Menu>
                    <Link href="/404">
                    <Dropdown.Item as="a">
                      Page 404
                    </Dropdown.Item></Link>
                    <Dropdown.Item as="a">
                      Create Post
                    </Dropdown.Item>
                    <Dropdown.Item as="a">
                      Update Post
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Management Dashboard :</Dropdown.Header>
                    <Dropdown.Item as="a">
                      Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item as="a">
                      Profile
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Link href="/blog">
                <Menu.Item as="a"><Label color="red">New</Label>راهنما</Menu.Item></Link>
                <Link href="/">
                <Menu.Item active color="violet" as="a">
                  خانه
                </Menu.Item></Link>
                <Menu.Item header position="right">
                  Gashnix
                  <Image src="img/gashnix4.png" size="mini"/>
                </Menu.Item>
              </Menu>
            </Grid>



            <Grid padded className="mobile only">
              <Menu borderless fluid inverted fixed="top" size="huge">
                <Menu.Item header>
                Gashnix
                <Image src="img/gashnix4.png" size="mini"/>
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item>
                    <Button
                      icon
                      inverted
                      toggle
                      onClick={this.handleToggleDropdownMenu}
                    >
                      <Icon name="content" />
                    </Button>
                  </Menu.Item>
                </Menu.Menu>
                <Menu
                  vertical
                  borderless
                  fluid
                  style={this.state.dropdownMenuStyle}
                >
                <Link href="/">
                <Menu.Item active color="violet" as="a">
                  خانه
                </Menu.Item></Link>
                <Link href="/blog">
                <Menu.Item as="a"><Label color="red">New</Label>راهنما</Menu.Item></Link>
                <Link href="/blog">
                <Menu.Item as="a">پشتیبانی</Menu.Item></Link>
                <Link href="/about">
                <Menu.Item active  color="orange" as="a">درباره ما</Menu.Item></Link>
                <Dropdown item text="صفحات">
                  <Dropdown.Menu position="right">
                    <Link href="/404">
                    <Dropdown.Item as="a">
                      Page 404
                    </Dropdown.Item></Link>
                    <Dropdown.Item as="a">
                      Create Post
                    </Dropdown.Item>
                    <Dropdown.Item as="a">
                      Update Post
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Management Dashboard :</Dropdown.Header>
                    <Dropdown.Item as="a">
                      Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item as="a">
                      Profile
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Menu position="right">
                    <Link href="/login" ><Button color="violet" inverted size="mini">ورود | ثبت نام</Button></Link>
                <Link href="/dash" ><Button color="orange" inverted size="mini">داشبورد کاربری</Button></Link>
                </Menu.Menu>
                </Menu>
              </Menu>
            </Grid>

          </Container>
      );
    }
  }
  
export default Navbar;
