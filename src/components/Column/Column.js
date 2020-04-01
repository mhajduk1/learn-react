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
  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}&nbsp; &nbsp;
          <span className={styles.icon}>
            <Icon name={this.props.icon}/>
          </span>
        </h3>
        <div>
          {this.state.cards.map(({key, ...cardsProps}) => (
            <Card key={key} {...cardsProps} />
          ))}
        </div>
        <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    );
  }
  
}
Column.propTypes = {
  cards: PropTypes.array,
  name: PropTypes.node,
  addCard: PropTypes.node,
  icon: PropTypes.string,
  title: PropTypes.node,
};

export default Column;
