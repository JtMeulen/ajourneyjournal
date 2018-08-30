import React from 'react';

import styles from './Loader.css';

const Loader = (props) => {
    return(
        <div className={props.loading ? styles.background : styles.loaded}>
            {/* <div className={styles.ldsgrid}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> */}
            <div className={styles.container} >
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329304/noun_1478824.svg" alt="plane" className={styles.plane}/>
                <div className={styles.streams} >
                    <div className={styles.stream1} ></div>
                    <div className={styles.stream2} ></div>
                    <div className={styles.stream3} ></div>
                </div>
            </div>
        </div>
    );
}

export default Loader