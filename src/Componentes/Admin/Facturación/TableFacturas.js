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
import FormularioDatosFactura from './FormularioDatosFactura';
import FormularioDatosCobranza from '../Cobros/FormularioDatosCobranza';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Icon from '@material-ui/core/Icon';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';

// Generate Order Data
function createData(numeroFactura, titular ,alumno, turno, servicios, montoTotal, mes, año, estado) {
    return { numeroFactura, titular ,alumno, turno, servicios, montoTotal, mes, año, estado};
}

const rows = [
    createData(0, '123', 'Damian Perez', 'Sandra Bullock', 'Mañana', 'Desayuno, transporte', '8000', 'Noviembre', '2020'),
    createData(1, '456', 'Roger Federer', 'Nicolas Almagro', 'Noche', 'Almuerzo', '2000','Noviembre', '2020'),
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
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [modalCobranzaIsOpen, setModalCobranzaIsOpen] = React.useState(false);
    const [cobranzas, setCobranzas] = React.useState(rows);

    const addButtonTarjetaPressed = () => {
        setModalCobranzaIsOpen(true);
    };

    const handleCloseModalCobranza = () => {
        setModalCobranzaIsOpen(false);
    };

    const cobranzaCreado = (cobranza) => {
        setModalCobranzaIsOpen(false);
        var array = [];
        cobranza["id"] = cobranzas.length;
        var cobranzasActualizado = cobranzas;
        cobranzasActualizado.push(cobranza);
        return () => setCobranzas(cobranzasActualizado);
    }
    const addButtonPressed = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    const facturaCreado = (factura) => {
        setModalIsOpen(false);
        props.facturaCreado(factura);
    }

    const getFacturaDate = (stringDate) => {
        let date = new Date(stringDate);
        return date.toLocaleDateString();
    }

    return (
        <React.Fragment>
            <Dialog
            maxWidth="lg"
            fullWidth= {true}
            open={modalIsOpen}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > Datos de la Factura a emitir </DialogTitle>
            <DialogContent className="dialogContent">
             <FormularioDatosFactura facturaCreado = { facturaCreado } turnos = { props.turnos } titulares = { props.titulares } alumnos = { props.alumnos }/>
            </DialogContent>
            <DialogActions>
            </DialogActions>
            </Dialog>
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
                     Generar Factura
                     </Button>
                </Toolbar>
            </AppBar>
            <Paper className={classes.paper}>
                <Title>Facturas emitidas</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nro de Factura</TableCell>
                            <TableCell>Titular</TableCell>
                            <TableCell>Fecha de Vencimiento</TableCell>
                            <TableCell>Monto</TableCell>
                            <TableCell>Mes</TableCell>
                            <TableCell>Año</TableCell>

                            <TableCell align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { props.facturas.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.numeroFactura}</TableCell>
                                <TableCell>{row.datosFacturacion.nombre + " " + row.datosFacturacion.apellido}</TableCell>
                                <TableCell >{ getFacturaDate(row.fechaVencimiento)}</TableCell>
                                <TableCell>{ row.totalCuota }</TableCell>
                                <TableCell>{ row.mes }</TableCell>
                                <TableCell>{ row.anio }</TableCell>
                                <TableCell align="center">
                                <Button
                                        variant="outlined"
                                        color="default"
                                        //className={classes.button}
                                        startIcon={<PaymentOutlinedIcon />}
                                        onClick={ addButtonTarjetaPressed }
                                        
                                    >
                                        Registrar Pago
                                    </Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className={classes.seeMore}>
                    <Link color="primary" >
                        Ver Facturas Anteriores
                     </Link>
                </div>
            </Paper>
        </React.Fragment>
    );
}