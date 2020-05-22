import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Icon from '../Icon.js';
import Search from '../Search/Search';

class Header extends React.Component {
    
  render(){
    const {toMain, toInf, toFAQ} = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name='cat' />
            </Link>
            <nav>
              <NavLink exact to={toMain} activeClassName='active'>Home</NavLink>
              <NavLink exact to={toInf} activeClassName='active'>Info</NavLink>
              <NavLink exact to={toFAQ} activeClassName='active'>FAQ</NavLink>
            </nav>
            <Search />
          </div>
        </Container>
      </header>
    );
  }
}

Header.propTypes = {
  toMain: PropTypes.string,
  toInf: PropTypes.string,
  toFAQ: PropTypes.string,
};
Header.defaultProps = {
  toMain: settings.menu.toMain,
  toInf: settings.menu.toInf,
  toFAQ: settings.menu.toFAQ,
};

export default Header;