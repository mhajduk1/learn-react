import {connect} from 'react-redux';
import column from './column';

export const getcardsForcolumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getcardsForcolumn(state, props.id),
});

export default connect(mapStateToProps)(column);