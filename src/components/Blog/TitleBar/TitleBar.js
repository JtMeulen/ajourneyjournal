import React, {Component} from 'react';

import styles from './TitleBar.css';

class TitleBar extends Component {

    render() {
        const {title, subtitle, background, color} = this.props.header;

        return(
            <div className={styles.titleBar} style={{"backgroundImage": `url(${background})`}}>
                <div className={styles.overlay} style={{"backgroundColor": `${color}`}}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                </div>
            </div>
        );
    }
}

export default TitleBar;