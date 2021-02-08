import React, { Component } from 'react';
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
class AccountInfo extends Component {
  render() {
    return (
      <Segment inverted>
      <Form inverted>
        <Form.Group widths='equal'>
          <Form.Input fluid label='کد ملی'placeholder='کد ملی' disabled />
          <Form.Input fluid label='نام خانوادگی' placeholder='نام خانوادگی' />
          <Form.Input fluid label='نام'placeholder='نام' />
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button type='submit'>ارسال</Button>
      </Form>
    </Segment>
    );
  }
}

export default AccountInfo;