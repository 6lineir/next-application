import React from 'react'
import { Table, Container, Image , Header, Button, Grid, Icon} from 'semantic-ui-react'


const Wallets = () => (
  <Container style={{ paddingTop: '20px', }}>
      <Table inverted  selectable textAlign="center">
        <Table.Header>
          <Table.Row >
          <Table.HeaderCell>عملیات</Table.HeaderCell>
          <Table.HeaderCell>بروزرسانی</Table.HeaderCell>
            <Table.HeaderCell>موجودی در حال معامله</Table.HeaderCell>
            <Table.HeaderCell>موجودی در دسترس</Table.HeaderCell>
            <Table.HeaderCell>موجودی کل</Table.HeaderCell>
            <Table.HeaderCell>ارز دیجیتال</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          <Table.Row>
            <Table.Cell>
              <Button color="orange">انتقال ارز</Button>
              <Button color="green">افزایش موجودی</Button>
            </Table.Cell>
            <Table.Cell><Icon loading name="refresh" size="big"/></Table.Cell>
            <Table.Cell>BTC 0.00</Table.Cell>
            <Table.Cell>BTC 0.00</Table.Cell>
            <Table.Cell>BTC 0.00</Table.Cell>
            <Table.Cell>
              <Header as='h4' inverted>
              <Image src='/img/icons/btc.svg' size="mini"/>
              <Header.Content>
                بیتکوین
              </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Button color="orange">انتقال ارز</Button>
              <Button color="green">افزایش موجودی</Button>
            </Table.Cell>
            <Table.Cell><Icon loading name="refresh" size="big"/></Table.Cell>
            <Table.Cell>ETH 0.00</Table.Cell>
            <Table.Cell>ETH 0.00</Table.Cell>
            <Table.Cell>ETH 0.00</Table.Cell>
            <Table.Cell>
              <Header as='h4' inverted>
              <Image src='/img/icons/eth.svg' size="mini"/>
              <Header.Content>
                اتریوم
              </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Button color="orange">انتقال ارز</Button>
              <Button color="green">افزایش موجودی</Button>
            </Table.Cell>
            <Table.Cell><Icon loading name="refresh" size="big"/></Table.Cell>
            <Table.Cell>LTC 0.00</Table.Cell>
            <Table.Cell>LTC 0.00</Table.Cell>
            <Table.Cell>LTC 0.00</Table.Cell>
            <Table.Cell>
              <Header as='h4' inverted>
              <Image src='/img/icons/ltc.svg' size="mini"/>
              <Header.Content>
                لایت کوین
              </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Button color="orange">انتقال ارز</Button>
              <Button color="green">افزایش موجودی</Button>
            </Table.Cell>
            <Table.Cell><Icon loading name="refresh" size="big"/></Table.Cell>
            <Table.Cell>USDT 0.00</Table.Cell>
            <Table.Cell>USDT 0.00</Table.Cell>
            <Table.Cell>USDT 0.00</Table.Cell>
            <Table.Cell>
              <Header as='h4' inverted>
              <Image src='/img/icons/usdt.svg' size="mini"/>
              <Header.Content>
                تتر
              </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Button color="orange">انتقال ارز</Button>
              <Button color="green">افزایش موجودی</Button>
            </Table.Cell>
            <Table.Cell><Icon loading name="refresh" size="big"/></Table.Cell>
            <Table.Cell>Doge 0.00</Table.Cell>
            <Table.Cell>Doge 0.00</Table.Cell>
            <Table.Cell>Doge 0.00</Table.Cell>
            <Table.Cell>
              <Header as='h4' inverted>
              <Image src='/img/icons/doge.svg' size="mini"/>
              <Header.Content>
                دوج کوین
              </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
          
        </Table.Body>
      </Table>

  </Container>
)
export default Wallets