import React, { Component } from "react";
import Link from "next/link";

import {
    Button,
    Container,
    Dropdown,
    Grid,
    Header,
    Icon,
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
        <div className="card">
          <Container>
            <Grid padded  className="tablet computer only">
              <Menu  fluid inverted fixed="top" size="huge">
                <Menu.Item header as="a">
                  Gashnix
                </Menu.Item>
                <Link href="/">
                <Menu.Item active color="violet" as="a">
                  Home
                </Menu.Item></Link>
                <Link href="/blog">
                <Menu.Item as="a">Blog</Menu.Item></Link>
                <Link href="/about">
                <Menu.Item active  color="orange" as="a">About</Menu.Item></Link>
                <Dropdown item text="Pages">
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
                <Menu.Menu position="right">
                <Link href="/login" ><Button color="violet" inverted size="mini">Login</Button></Link>
                <Link href="/dash" ><Button color="orange" inverted size="mini">Dashboard</Button></Link>
                </Menu.Menu>
              </Menu>
            </Grid>
            <Grid padded className="mobile only">
              <Menu borderless fluid inverted fixed="top" size="huge">
                <Menu.Item header as="a">
                Gashnix
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
                <Menu.Item active as="a">
                  Home
                </Menu.Item></Link>
                <Link href="/blog">
                <Menu.Item as="a">Blog</Menu.Item></Link>
                <Link href="/about">
                <Menu.Item as="a">About</Menu.Item></Link>
                <Dropdown item text="Pages">
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
                <Menu.Menu position="right">
                    <Link href="/login" ><Button color="violet"  size="big">Login</Button></Link>
                    <Link href="/" ><Button color="orange"  size="big">Singin</Button></Link>
                </Menu.Menu>
                </Menu>
              </Menu>
            </Grid>

          </Container>
        </div>
      );
    }
  }
  
export default Navbar;