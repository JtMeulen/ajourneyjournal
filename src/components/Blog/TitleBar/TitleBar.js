import React, {Component} from 'react';

import styles from './TitleBar.css';

class TitleBar extends Component {

    componentWillMount(){
        const imgArray = this.props.header.images;
        const randImage = imgArray[Math.floor(Math.random() * imgArray.length)];
        this.setState({image: randImage.image, color: randImage.color});
    }

    render() {
        const {title, subtitle} = this.props.header;

        const image = this.state.image || '';
        const color = this.state.color || 'rgba(204, 132, 44, 0.7)';

        return(
            <div className={styles.titleBar} style={{"backgroundImage": `url(${image})`}}>
                <div className={styles.overlay} style={{"backgroundColor": `${color}`}}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                </div>
            </div>
        );
    }
}

export default TitleBar;