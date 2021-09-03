import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './../../Styles/Dialogs.css'

class ErrorMessageModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleClose = () => {
    this.props.closeErrorModal();
  };

  render() {
    return (

      <Dialog
        open={this.props.isOpen}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > {this.props.title} </DialogTitle>
        <DialogContent className="smallDialogStyle">
          {this.props.errorMessage}
        </DialogContent>
        <DialogActions>
          <Button variant = "contained" onClick={this.handleClose.bind()} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

    );
  }
}

export default ErrorMessageModal;