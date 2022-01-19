import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';

import './profile.scss';

import Logout from 'src/components/Logout';

const Profile = ({
  firstname,
  lastname,
  email,
  phoneNumber,
  handleLogout,
  restoName,
  restoAdress,
  restoZip,
  restoCity,
  restoPhoneNumber,
  restoTradeName,
  restoSiret,
  role,
  // Change password Modal
  oldPassword,
  newPassword,
  newPasswordVerif,
  isOpenModal,
  toggleIsOpenModal,
  changeField,
  changePasswordInDb,

  // delete user
  deleteUserFromeUser,
}) => {
  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStylesForModal = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const modalStyle = getModalStyle();
  const classes = useStylesForModal();
  const [openModalSuppres, setOpenModalSuppres] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === newPasswordVerif) {
      changePasswordInDb();
    }
    else {
      window.alert('Le nouveau mot de passe ne correspond pas à la vérification');
    }
  };

  const handleSuppress = () => {
    deleteUserFromeUser();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 className="modal-password-title">
        Modifier mon mot de passe
      </h2>
      <form className="modal-password-form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Ancien mot de passe"
          value={oldPassword}
          name="oldPassword"
          type="password"
          onChange={changeField}
          required
        />
        <TextField
          fullWidth
          label="Nouveau mot de passe"
          value={newPassword}
          name="newPassword"
          type="password"
          onChange={changeField}
          required
        />
        <TextField
          fullWidth
          label="Nouveau mot de passe"
          value={newPasswordVerif}
          name="newPasswordVerif"
          type="password"
          onChange={changeField}
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: '15px' }}
          className={classes.button}
          endIcon={<LockIcon>valider</LockIcon>}
        >
          Valider
        </Button>
      </form>
    </div>
  );

  const suppression = (
    <div style={modalStyle} className={classes.paper}>
      <form className="modal-password-form" onSubmit={handleSuppress}>
        <Alert severity="error">
          <AlertTitle> Attention</AlertTitle>
          Toute suppression de compte est definitive
        </Alert>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          color="secondary"
          style={{ marginTop: '15px', padding: '10px' }}
          className={classes.button}
        >
          Supprimer
        </Button>
      </form>
    </div>
  );
  return (
    <div className="profile-page-container">
      <div className="profile-display">
        <div className="profile-infos-div">
          <h1 className="profile-title">Mes informations</h1>
          <p className="profile-infos">
            Prenom : {firstname}
          </p>
          <p className="profile-infos">
            Nom : {lastname}
          </p>
          <p className="profile-infos">
            Mail : {email}
          </p>
          <p className="profile-infos">
            Mobile : {phoneNumber}
          </p>
        </div>
      </div>

      {role[0] === 'ROLE_RESTAURANT' && (
        <div className="restau-display">
          <h1 className="restau-title">Mon restaurant</h1>
          <div className="restau-restoName">
            Nom: {restoName}
          </div>
          <div className="restau-restoAdress">
            Adresse: {restoAdress}
          </div>
          <div className="restau-restoZip">
            Code Postal: {restoZip} {restoCity}
          </div>
          <div className="restau-restoPhoneNumber">
            Mobile: {restoPhoneNumber}
          </div>
          <div className="restau-restoTradeName">
            RCS: {restoTradeName}
          </div>
          <div className="restau-restoSiret">
            Siret: {restoSiret}
          </div>
        </div>
      )}
      <div className="logout-container">
        <Logout handleLogout={handleLogout} />
      </div>
      <div className="action-important">
        <div className="profile-modal-password">
          <Button size='large' variant='outlined' type="button" onClick={toggleIsOpenModal}>
            Modifier mon mot de passe
          </Button>
          <Modal
            open={isOpenModal}
            onClose={toggleIsOpenModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
        <div className="profile-modal-delete">
          <Button size='large' variant='outlined' type="button" onClick={() => setOpenModalSuppres(!openModalSuppres)}>
            Supprimer mon compte
          </Button>
          <Modal
            open={openModalSuppres}
            onClose={() => setOpenModalSuppres(!openModalSuppres)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {suppression}
          </Modal>
        </div>
      </div>
    </div>
  );
};
Profile.propTypes = {
  email: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
  role: PropTypes.array.isRequired,
  restoName: PropTypes.string,
  restoAdress: PropTypes.string,
  restoZip: PropTypes.string,
  restoCity: PropTypes.string,
  restoPhoneNumber: PropTypes.string,
  restoTradeName: PropTypes.string,
  restoSiret: PropTypes.string,
  // Modal password
  oldPassword: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  newPasswordVerif: PropTypes.string.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
  toggleIsOpenModal: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  changePasswordInDb: PropTypes.func.isRequired,
  deleteUserFromeUser: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  restoName: '',
  restoAdress: '',
  restoZip: '',
  restoCity: '',
  restoPhoneNumber: '',
  restoTradeName: '',
  restoSiret: '',
};

export default Profile;
