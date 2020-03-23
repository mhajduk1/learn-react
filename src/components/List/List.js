import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js'
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser'

class List extends React.Component {
    state = {
        columns: this.props.columns || [],
      }

  static propTypes = {
    title: PropTypes.node.isRequired,
    titleColumn: PropTypes.node,
    description: PropTypes.node,

  }
  static defaultProps = {
    description: settings.defaultListDescription,
    columns: PropTypes.array,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image}/>
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
      </section>
    )
  }
}

export default List;
