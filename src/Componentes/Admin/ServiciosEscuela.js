import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChipServicios from './ChipServicios'
import TabsServicios from './TabsServicios'
import { Grid, Typography } from '@material-ui/core';

const styles = theme => ({

})

class ServiciosEscuela extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            Premium: true,
            Express: true,
            Normal: true,
            Economico: true,
            velocidad: true,
            tamaño: true,
            
            /*fútbol:true,
            hockey:true,
            tenis:true,
            inglés:true,
            francés:true,
            portugués:true,
            desayuno:true,
            almuerzo:true,
            merienda:true,
            transporte:true,
            danza:true,
            teatro:true,
            pintura:true,
            música:true,

            restaurante: true,
            estacionamiento: true,
            tintoreria: true,
            servicio: true,
            limpieza: true,
            comidas: true,
            spa: true,
            gimnasio: true,
            masajes: true,
            tratamiento: true,
            botes: true,
            bicicletas: true,
            autos: true,
            motos: true,
            ski: true,
            Buceo: true,
            eventos: true,
            actividades: true,*/
        }
    }

    

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };


    render() {
        //const { classes } = this.props;

        return (
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Typography variant="h5"> Servicios </Typography>
                </Grid>
                <Grid item md={12}>
                    <ChipServicios
                        velocidad={this.state.velocidad} 
                        tamaño={this.state.tamaño}
                        tenis={this.state.tenis}
                        inglés={this.state.inglés}
                        francés={this.state.francés}
                        portugués={this.state.portugués}
                        desayuno ={this.state.desayuno}
                        almuerzo={this.state.almuerzo}
                        merienda={this.state.merienda}
                        transporte={this.state.transporte}
                        danza={this.state.danza}
                        teatro={this.state.teatro}
                        pintura={this.state.pintura}
                        música={this.state.música}
                        /*
                        restaurante={this.state.restaurante}
                        estacionamiento={this.state.estacionamiento}
                        tintoreria={this.state.tintoreria}
                        servicio={this.state.servicio}
                        limpieza={this.state.limpieza}
                        comidas={this.state.comidas}
                        spa={this.state.spa}
                        gimnasio={this.state.gimnasio}
                        masajes={this.state.masajes}
                        tratamiento={this.state.tratamiento}
                        botes={this.state.botes}
                        bicicletas={this.state.bicicletas}
                        autos={this.state.autos}
                        motos={this.state.motos}
                        ski={this.state.ski}
                        Buceo={this.state.Buceo}
                        eventos={this.state.eventos}
                        actividades={this.state.actividades}   */                     
                    />
                </Grid>
                <Grid item md={12}>
                    <TabsServicios
                        velocidad = {this.state.velocidad}
                        tamaño = {this.state.tamaño}
                        fútbol={this.state.fútbol} 
                        hockey={this.state.hockey}
                        tenis={this.state.tenis}
                        inglés={this.state.inglés}
                        francés={this.state.francés}
                        portugués={this.state.portugués}
                        desayuno ={this.state.desayuno}
                        almuerzo={this.state.almuerzo}
                        merienda={this.state.merienda}
                        transporte={this.state.transporte}
                        danza={this.state.danza}
                        teatro={this.state.teatro}
                        pintura={this.state.pintura}
                        música={this.state.música}
                        handleChange={this.handleChange}
                        
                        /*restaurante={this.state.restaurante}
                        estacionamiento={this.state.estacionamiento}
                        tintoreria={this.state.tintoreria}
                        servicio={this.state.servicio}
                        limpieza={this.state.limpieza}
                        comidas={this.state.comidas}
                        spa={this.state.spa}
                        gimnasio={this.state.gimnasio}
                        masajes={this.state.masajes}
                        tratamiento={this.state.tratamiento}
                        botes={this.state.botes}
                        bicicletas={this.state.bicicletas}
                        autos={this.state.autos}
                        motos={this.state.motos}
                        ski={this.state.ski}
                        Buceo={this.state.Buceo}
                        eventos={this.state.eventos}
                        actividades={this.state.actividades}
                        handleChange={this.handleChange}*/
                    />
                </Grid>
            </Grid>
        );
    }
}

ServiciosEscuela.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ServiciosEscuela);