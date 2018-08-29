import React from 'react';

import styles from './Loader.css';

const Loader = () => {
    return(
        <div style={{
            'overflow': 'hidden',
            'position': 'fixed',
            'top':'0',
            'left': '0',
            'height':'100vh',
            'width': '100vw',
            'z-index': '200',
            'background-color': 'grey',
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center'
        }}>
            <div className={styles.ldsgrid}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loader