import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore.js';
import Icon from '../Icon.js';


class Column extends React.Component {
  
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  state = {
    cards: this.props.cards || [],
  }
  
  render() {
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}&nbsp; &nbsp;
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
        </h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        <div>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div> 
      </section>
    );
  }
  
}
Column.propTypes = {
  cards: PropTypes.array,
  addCard: PropTypes.func,
  icon: PropTypes.string,
  title: PropTypes.node,
  action: PropTypes.func,
};

export default Column;
