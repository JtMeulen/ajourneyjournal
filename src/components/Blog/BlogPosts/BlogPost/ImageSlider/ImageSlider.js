import React, {Component} from 'react';

import Thumbnail from './Thumbnail/Thumbnail';
import Modal from './Modal/Modal';

import styles from './ImageSlider.css';

class ImageSlider extends Component {

    state = {
        modal: false,
        modalUrl: {}
    }

    thumbNailClick = (props, idx) => {
        document.body.classList.add(styles.openModal);
        this.setState({
            modal: true,
            modalUrl: props,
            modalIndex: idx
        });
    }

    closeModalHandler = () => {
        document.body.classList.remove(styles.openModal);
        this.setState({
            modal: false,
            modalUrl: {}
        });
    }

    render() {

        const images = this.props.images.map((image, idx) => {
            return <Thumbnail key={idx} idx={idx} image={image} thumbNailClick={this.thumbNailClick}/>
        })

        return(
            <div className={styles.imageSlider}>
                {this.state.modal &&
                    <Modal image={this.state.modalUrl} closeModalHandler={this.closeModalHandler} allImages={this.props.images} idx={this.state.modalIndex}/>
                }
                {images}
            </div>
        );
    }
}

export default ImageSlider;