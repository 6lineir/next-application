import React from 'react'
import { Table, Container, Image } from 'semantic-ui-react'


const TableFee = () => (
  <Container>

      <Table color="violet" >
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell>ارز دیجیتال</Table.HeaderCell>
            <Table.HeaderCell>بالاترین قیمت</Table.HeaderCell>
            <Table.HeaderCell>قیمت لحظه ای</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
            <Image src='/img/slide2.png' rounded size='mini'/>
              BTC
            </Table.Cell>
            <Table.Cell>$ 3200000</Table.Cell>
            <Table.Cell>$ 3400000</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>LTC</Table.Cell>
            <Table.Cell>$ 210000</Table.Cell>
            <Table.Cell>$ 220000</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>ETC</Table.Cell>
            <Table.Cell>$ 380000</Table.Cell>
            <Table.Cell>$ 375000</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

  </Container>
)
export default TableFee