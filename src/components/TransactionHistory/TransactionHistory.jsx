import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableItem,
  Tbody,
  TbodyItem,
  Thead,
  TheadItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <Thead>
          <TheadItem>Type</TheadItem>
          <TheadItem>Amount</TheadItem>
          <TheadItem>Currency</TheadItem>
        </Thead>
      </TableHead>

      <Tbody>
        {items.map(({ id, type, amount, currency }, idx) => {
          return (
            <TableItem key={id} $idx={idx}>
              <TbodyItem>{type}</TbodyItem>
              <TbodyItem>{amount}</TbodyItem>
              <TbodyItem>{currency}</TbodyItem>
            </TableItem>
          );
        })}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
