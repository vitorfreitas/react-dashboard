import React from 'react';
import {
  Table as MUITable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination
} from '@material-ui/core';

const Table = ({ data }) => {
  const [rowsPerPage, changeRowsPerPage] = React.useState(1);
  const [currentPage, changeCurrentPage] = React.useState(0);

  return (
    <>
      <MUITable>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data
            .slice(
              currentPage * rowsPerPage,
              currentPage * rowsPerPage + rowsPerPage
            )
            .map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </MUITable>
      <TablePagination
        rowsPerPageOptions={[1, 2, 3]}
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onChangePage={(ev, newPage) => changeCurrentPage(newPage)}
        onChangeRowsPerPage={ev => changeRowsPerPage(+ev.target.value)}
        component="div"
      />
    </>
  );
};

export default Table;
