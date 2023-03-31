import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'time', label: '시간', minWidth: 60 , align: 'center'},
  { id: 'student', label: '학생명', minWidth: 60, align: 'center'},
  { id: 'classTime', label: '수업시간', minWidth: 40, align: 'center' }
];

function createData(student, time, classTime) {
  return { student, time, classTime};
}

const rows = [
  createData('김경수1', '8:00', 10),
  createData('김경수2', '8:10', 10),
  createData('김경수3', '8:20', 10),
  createData('김경수4', '8:30', 10),
  createData('김경수5', '8:40', 10),
  createData('김경수6', '8:50', 10),
  createData('김경수7', '9:00', 10),
  createData('김경수8', '9:10', 10),
  createData('김경수9', '9:20', 10),
  createData('김경수10', '9:30', 10),
  createData('김경수11', '9:40', 10),
  createData('김경수12', '9:50', 10),
  createData('김경수13', '10:00', 10),
  createData('김경수14', '10:10', 10),
  createData('김경수15', '10:20', 10)
];

export default function TableFixedHeader() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.time}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}