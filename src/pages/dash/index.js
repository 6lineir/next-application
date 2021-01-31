import React, { Component } from 'react';
import NavBar from "../../components/navbar";
import SideBar from "./sidebar";
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
  Table
} from "semantic-ui-react";

class DashboardIndex extends Component {
  render() {
    return(
      <>
      
      <SideBar />
      </>
    )
  }
}

export default DashboardIndex;