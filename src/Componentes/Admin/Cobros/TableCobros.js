import React from 'react';
import Link from '@material-ui/core/Link';
import { fade, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckIcon from '@material-ui/icons/Check';
import BlockIcon from '@material-ui/icons/Block';
import { IconButton, Paper, InputBase, AppBar, Toolbar, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormularioDatosCobranza from './FormularioDatosCobranza';

// Generate Order Data
function createData(id,numeroTransaccion, alumno, titular, totalCuota, fechaEmision) {
    return { id, numeroTransaccion, alumno, titular, totalCuota, fechaEmision };
}

const rows = [
    createData(0, '000000001', 'Sebastian Gomez', '$27350', '02-09-2021','000000011'),
    createData(1, '000000002', 'Nicolas Roger', '$27350', '02-09-2021', '000000012'),
];

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
    dialogContent: {
        height: '100hv'
    }
}));

export default function Orders(props) {
    const classes = useStyles();
    const [modalCobranzaIsOpen, setModalIsOpen] = React.useState(false);
    const [cobranzas, setCobranzas] = React.useState(rows);

    const addButtonPressed = () => {
        setModalIsOpen(true);
    };

    const handleCloseModalCobranza = () => {
        setModalIsOpen(false);
    };

    const cobranzaCreado = (cobranza) => {
        setModalIsOpen(false);
        var array = [];
        cobranza["id"] = cobranzas.length;
        var cobranzasActualizado = cobranzas;
        cobranzasActualizado.push(cobranza);
        return () => setCobranzas(cobranzasActualizado);
    }

    return (
        <React.Fragment>
            <Dialog
            maxWidth="lg"
            fullWidth= {true}
            open={modalCobranzaIsOpen}
            onClose={handleCloseModalCobranza}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > Complete los datos del pago </DialogTitle>
            <DialogContent className="dialogContent">
             <FormularioDatosCobranza cobranzaCreado = { cobranzaCreado } turnos = { props.turnos } titulares = {props.titulares} />
            </DialogContent>
            <DialogActions>
            </DialogActions>
            </Dialog>
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
                    <Button variant="contained" color="secondary" onClick={ addButtonPressed } >
                     Registrar pago
                     </Button>
                </Toolbar>
            </AppBar>
            <Paper className={classes.paper}>
                <Title>Pagos realizados</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Número de transacción</TableCell>
                            <TableCell>Monto</TableCell>
                            <TableCell>Fecha Emision</TableCell>
                            <TableCell>Titular</TableCell>
                     
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { cobranzas.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.numeroTransaccion}</TableCell>
                                <TableCell>{row.titular}</TableCell>
                                <TableCell>{row.totalCuota}</TableCell>
                                <TableCell>{row.fechaEmision}</TableCell>
                               
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className={classes.seeMore}>
                    <Link color="primary" >
                        Ver Más Pagos
                     </Link>
                </div>
            </Paper>
        </React.Fragment>
    );
}