import { connect } from 'react-redux';

// on importe le composant de présentation
import Infos from 'src/components/Infos';

import { toggleInfosDisplay } from 'src/actions/restaurant';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  isOpenInfosDisplay: state.restaurant.isOpenInfosDisplay,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleInfosDisplay: () => {
    dispatch(toggleInfosDisplay());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Infos);
