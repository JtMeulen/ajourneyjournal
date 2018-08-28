import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import logo from '../../../assets/images/logo.png';
import styles from './Navbar.css';

class Navbar extends Component {

    onClickHandler = () => {
        this.props.history.push('/');
    }

    render() {

        return (
            <div className={styles.navbar}>
                <img className={styles.logo} src={logo} alt='' onClick={this.onClickHandler}/>
            </div>
        );
    }
}

export default withRouter(Navbar);