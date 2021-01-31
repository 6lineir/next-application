import React from 'react'
import { Table, Container, Image , Header} from 'semantic-ui-react'


const TableFee = () => (
  <Container style={{ paddingTop: '20px' }}>
      <Table color="violet" inverted celled selectable>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell>ارز دیجیتال</Table.HeaderCell>
            <Table.HeaderCell>تغییرات</Table.HeaderCell>
            <Table.HeaderCell>بالاترین قیمت</Table.HeaderCell>
            <Table.HeaderCell>قیمت لحظه ای</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image inverted>
              <Image src='/img/icons/btc.svg' rounded size='mini'/>
              <Header.Content>
                بیتکوین
              </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>UP</Table.Cell>
            <Table.Cell>$ 3200000</Table.Cell>
            <Table.Cell>$ 3400000</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image inverted>
              <Image src='/img/icons/ltc.svg' rounded size='mini'/>
              <Header.Content>
                لایت کوین
              </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>UP</Table.Cell>
            <Table.Cell>$ 210000</Table.Cell>
            <Table.Cell>$ 220000</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image inverted>
              <Image src='/img/icons/eth.svg' rounded size='mini'/>
              <Header.Content>
                اتریوم
              </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>UP</Table.Cell>
            <Table.Cell>$ 380000</Table.Cell>
            <Table.Cell>$ 375000</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

  </Container>
)
export default TableFee