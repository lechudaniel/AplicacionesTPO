import React from 'react';
import Link from '@material-ui/core/Link';
import { fade, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { IconButton, Paper, InputBase, AppBar, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import HotelInfo from './../../Models/Hotel/HotelInfo'

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2)
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Orders() {
    const classes = useStyles();
    
    function getReservas() {
        return HotelInfo.getInstance().getReservas();
    }

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Buscar…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Paper className={classes.paper}>
                <Title>Alumnos</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Dirección 1</TableCell>
                            <TableCell>Dirección 2</TableCell>
                            <TableCell align="right">Telefono 1</TableCell>
                            <TableCell align="right">Telefono 2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getReservas().map((row,index) => (
                            <TableRow key={index}>
                                <TableCell>{row.checkIn}</TableCell>    
                                <TableCell>{row.checkOut}</TableCell>
                                <TableCell>{row.huesped}</TableCell>
                                <TableCell>{'VISA ⠀•••• 371' + index }</TableCell>
                                <TableCell align="right">{ 2000 + 1000 * index }</TableCell>
                                <TableCell align="right">
                                    <IconButton size="small">
                                        <VisibilityIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className={classes.seeMore}>
                    <Link color="primary" >
                        Ver Mas Reservas
                     </Link>
                </div>
            </Paper>
        </React.Fragment>
    );
}