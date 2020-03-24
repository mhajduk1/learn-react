import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';

class Column extends React.Component {
  static propTypes = {
    titleColumn: PropTypes.node,
    cards: PropTypes.node,
    name: PropTypes.node,
    addCard: PropTypes.node,
  }
  
  state = {
    cards: this.props.cards || [],
  }
  addCard(title){
    this.setState(state => (
      {
        columns: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <div>
          {this.state.cards.map(({key, ...cardsProps}) => (
            <Card key={key} {...cardsProps} />
          ))}
        </div>
        <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    )
  }
}

export default Column;
