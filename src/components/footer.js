import Link from "next/link";
import {
  Button,
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
const fooTer = () => {
    return (
      <Segment inverted vertical style={{ padding: "4rem" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row textAlign="right">
            <Grid.Column width={4}>
              <Header inverted as="h3" content="لینک ها" />
              <List link inverted>
                <List.Item as="a">ارتباط با ما</List.Item>
                <List.Item as="a">درباره ما</List.Item>
                <List.Item as="a">شرایط استفاده</List.Item>
                <List.Item as="a">سوالات متداول</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h3" content="خدمات ما" />
              <List link inverted>
                <List.Item as="a">P2P</List.Item>
                <List.Item as="a">Tread</List.Item>
                <List.Item as="a">Buy</List.Item>
                <List.Item as="a">Sell</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h3" inverted>
                درباره ما
              </Header>
              <Header as="h5" inverted>
                گشنیکس
                بروزترین صرافی آنلاین و پرسرعت ارزهای دیجیتال
                با استفاده از تکنولوژی بلاکچین و توکن های امنیتی
              <Image src="/img/gashnix4.png" size="big"/>
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4} >
              <Header as='h3' inverted color="blue">
                  <Icon name='telegram'/>
                <Header.Content>کانال تلگرام
                  <Header.Subheader>@Gashnix_ir</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={4} >
              <Header as='h3' inverted color="violet">
                  <Icon name='instagram' />
                <Header.Content>صفحه اینستاگرام
                  <Header.Subheader>@Gashnix.ir</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={4} >
              <Header as='h3' inverted color="yellow">
                  <Icon name='phone' />
                <Header.Content>تلفن تماس
                  <Header.Subheader>Phone </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={4} >
              <Header as='h3' inverted color="brown">
                  <Icon name='mail' />
                <Header.Content>ایمیل
                  <Header.Subheader>info@gashnix.ir</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Container>
      <Segment textAlign="center" inverted style={{ marginTop: "3rem" }}>
        <p>صرافی گشنیکس - برترین صرافی ارزدیجیتال</p>
        <Header as="h5">کلیه حقوق محفوظ میباشد <Label color="violet">2021-1399 © </Label></Header>
      </Segment>
    </Segment>
    )
}

export default fooTer;