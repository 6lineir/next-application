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
  Select,
  Message,
  GridColumn,
  Form,
  TextArea
} from "semantic-ui-react";

const genderOptions = [
  { key: 'm', text: 'امور مالی', value: 'seller' },
  { key: 'f', text: 'امور احراز هویت', value: 'verify' },
  { key: 'o', text: 'امور فنی', value: 'fani' },
]

class Tickets extends Component {
  render() {
    return (
      <div>
        <Segment color="violet" inverted>
        <Form inverted >
          <Form.Input label='موضوع' placeholder='موضوع'  />
          <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'بخش پشتیبانی', htmlFor: 'form-select-control-gender' }}
        placeholder='بخش پشتیبانی'/>
          <Form.TextArea label='پیام شما' placeholder='پیام خود را وارد کنید'/>
      
        <Button type='submit' color="green">ارسال</Button>
      </Form>
      </Segment>
      </div>
    );
  }
}

export default Tickets;