import React, {Component} from 'react';

import styles from './Modal.css';

class ImageSlider extends Component {

    closeModalHandler = () => {
        this.props.closeModalHandler();
    }

    nextImageHandler = (e) => {
        e.stopPropagation();
    }

    render() {
        return(
            <div className={styles.modalBackground} onClick={this.closeModalHandler}>
                <div className={styles.imageContainer} >
                <div className={styles.tape}></div>
                    <img className={styles.image} src={this.props.image.url} alt="" onClick={this.nextImageHandler} />
                    <div className={styles.subtext}>{this.props.image.text}</div>
                </div>
            </div>
        );
    }
}

export default ImageSlider;