import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HotelIcon from '@material-ui/icons/Hotel';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CheckIcon from '@material-ui/icons/Check';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import RateReviewIcon from '@material-ui/icons/RateReview';
import PaymentIcon from '@material-ui/icons/Payment';
import RenderAvatar from './login/RenderAvatar'
import { Divider, List, Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import HistoryIcon from '@material-ui/icons/History';
import HelpIcon from '@material-ui/icons/Help';




const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
}));


export default function ListItems(props) {
  const classes = useStyles();
  const [openPer, setOpenPer] = React.useState(true);
  const [openRes, setOpenRes] = React.useState(true);
  



  const handleClickPeril = () => {
    setOpenPer(!openPer);
  };
  const handleClickReserva = () => {
    setOpenRes(!openRes);
  };

  return (
    <div>
      <ListItem button onClick={props.openGeneral}>
        <ListItemIcon>
          <DashboardIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Página Principal" />
      </ListItem>
      <Divider />

      <ListItem button onClick={handleClickPeril}>
        <ListItemIcon>
          <PersonIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Mi Perfil" />
        {openPer ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openPer} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItem button onClick={props.perfilOpen} className={classes.nested}>
            <ListItemIcon>
              <RenderAvatar user={props.user} className={classes.small} />
            </ListItemIcon>
            <ListItemText primary={props.user.displayName} />
          </ListItem>
       
        </List>
      </Collapse>
      <Divider />
      <ListItem button onClick={handleClickReserva}>
        <ListItemIcon>
          <ReceiptIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Facturación" />
        {openRes ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openRes} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        <ListItem button onClick={props.historialOpen} className={classes.nested}>
            <ListItemIcon>
              <CheckIcon color="secondary"/>
            </ListItemIcon>
            <ListItemText primary="Cuota Activa" />
          </ListItem>

          <ListItem button onClick={props.checkInOpen} className={classes.nested}>
            <ListItemIcon>
              <DescriptionIcon color="secondary"/>
            </ListItemIcon>
            <ListItemText primary="Facturas" />
          </ListItem>

          
        </List>
      </Collapse>
      <Divider />
    <ListItem button onClick={props.pagosOpen} className={classes.nested}>
      <ListItemIcon>
        <PaymentIcon color="secondary"/>
      </ListItemIcon>
      <ListItemText primary="Tarjetas"/>
    </ListItem>

      <ListItem button onClick={props.ayudaOpen}>
        <ListItemIcon>
          <HelpIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Ayuda" />
      </ListItem>

    </div>
  )
}

