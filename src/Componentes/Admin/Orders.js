import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

import HotelInfo from './../../Models/Hotel/HotelInfo'

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders(props) {
  const classes = useStyles();

  function getReservas() {
    return HotelInfo.getInstance().getReservas();
  }

  return (
    <React.Fragment>
      <Title>Alumnos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Check-In</TableCell>
            <TableCell>Check-Out</TableCell>
            <TableCell>Reservado Por</TableCell>
            <TableCell>Metodo de Pago</TableCell>
            <TableCell align="right">Monto Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getReservas().slice(0, 4).map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{row.checkIn}</TableCell>
              <TableCell>{row.checkOut}</TableCell>
              <TableCell>{row.huesped}</TableCell>
              <TableCell>{'VISA ⠀•••• 371' + index }</TableCell>
              <TableCell align="right">{ 2000 + 1000 * index }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary"  onClick={props.reservasOpen}>
          Ver Mas Alumnos
        </Link>
      </div>
    </React.Fragment>
  );
}