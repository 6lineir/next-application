import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import NavBar from "../components/navbar";
const LoginForm = () => (
  <>
<NavBar />
  <div className="login">
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='violet' textAlign='center'>
            <Image src='/img/321.png' /> ورود به ناحیه کاربری
          </Header>
          <Form size='large'>
            <Segment stacked inverted>
              <Form.Input fluid icon='user' iconPosition='right' placeholder='ایمیل خودرا وارد کنید' />
              <Form.Input
                fluid
                icon='lock'
    
                iconPosition='right'
                placeholder='رمز عبور'
                type='password'
              />

              <Button color='violet' fluid size='large'>
                ورود
              </Button>
            </Segment>
          </Form>
          <Message color="violet">
            حساب کاربری ندارید؟ <a href='#'>ثبت نام</a>
          </Message>
        </Grid.Column>
      </Grid>
  </div>
  </>
)

export default LoginForm