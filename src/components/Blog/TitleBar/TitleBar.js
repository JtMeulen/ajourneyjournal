import React, {Component} from 'react';

import styles from './TitleBar.css';

class TitleBar extends Component {
    
    // state = {
    //     isTop: true,
    // };
    
    // componentDidMount() {
    //     document.addEventListener('scroll', () => {
    //     const isTop = window.scrollY < 50;
    //     if (isTop !== this.state.isTop) {
    //         this.setState({ isTop })
    //     }
    //     });
    // }
    
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    render() {
        const {title, subtitle, background, color} = this.props.header;

        return(
            <div className={styles.titleBar} style={{"backgroundImage": `url(${background})`}}>
                <div className={styles.overlay} style={{"backgroundColor": `${color}`}}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                </div>
                {/* {this.state.isTop && <p className={styles.subtitle}>{subtitle}</p>} */}
            </div>            
        );        
    }
}

export default TitleBar;