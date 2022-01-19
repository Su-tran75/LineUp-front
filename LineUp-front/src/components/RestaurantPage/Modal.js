import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import GetTicketModal from 'src/containers/GetTicketModal';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
}));

export default function TransitionsModal({
  isLogged,
  role,
  ticketInProgress,
  isModalOpen,
  modalOpen,
}) {
  const classes = useStyles();

  return (
    <div className="modal-ticket">
      <Button variant="contained" color="primary" type="button" onClick={modalOpen}>
        PRENDRE UN TICKET
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isModalOpen}
        onClose={modalOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <div className={classes.paper}>
            {!isLogged && <Link to="/login" onClick={modalOpen}><div style={{ textAlign: 'center', padding: '10px' }}>Veuillez vous inscrire ou vous connecter</div></Link>}
            {isLogged && role[0] === 'ROLE_USER' && !ticketInProgress && <GetTicketModal /> }
            {isLogged && ticketInProgress && <div style={{ textAlign: 'center', padding: '10px' }}>Vous avez déjà un ticket en cours</div> }
            {isLogged && role[0] === 'ROLE_RESTAURANT' && <div style={{ textAlign: 'center', padding: '10px' }}>En tant que restaurateur,vous ne pouvez pas prendre de ticket ici</div>}
            {isLogged && role[0] === 'ROLE_ADMIN' && <img style={{ height: '400px' }} src="https://media.giphy.com/media/RddAJiGxTPQFa/giphy.gif" alt="" />}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
TransitionsModal.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  role: PropTypes.array.isRequired,
  ticketInProgress: PropTypes.number,
  isModalOpen: PropTypes.bool.isRequired,
  modalOpen: PropTypes.func.isRequired,
};

TransitionsModal.defaultProps = {
  ticketInProgress: null,
};
