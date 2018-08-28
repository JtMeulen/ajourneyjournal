import React, {Component} from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import Thumbnail from './Thumbnail/Thumbnail';
import Modal from './Modal/Modal';

import styles from './ImageSlider.css';

class ImageSlider extends Component {

    state = {
        modal: false,
        modalUrl: {}
    }

    targetElement = null;

    componentDidMount() {
        this.targetElement = document.querySelector('#modal');
    }

    componentWillUnmount() {
        clearAllBodyScrollLocks();
    }

    thumbNailClick = (props, idx) => {
        disableBodyScroll(this.targetElement);
        this.setState({
            modal: true,
            modalUrl: props,
            modalIndex: idx
        });
    }

    closeModalHandler = () => {
        enableBodyScroll(this.targetElement);
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
            <div id="modal" className={styles.imageSlider}>
                {this.state.modal &&
                    <Modal image={this.state.modalUrl} closeModalHandler={this.closeModalHandler} allImages={this.props.images} idx={this.state.modalIndex}/>
                }
                {images}
            </div>
        );
    }
}

export default ImageSlider;