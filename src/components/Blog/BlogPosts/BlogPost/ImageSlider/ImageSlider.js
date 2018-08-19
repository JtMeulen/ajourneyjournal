import React, {Component} from 'react';

import Thumbnail from './Thumbnail/Thumbnail';
import Modal from './Modal/Modal';

import styles from './ImageSlider.css';

class ImageSlider extends Component {
    
    state = {
        modal: false,
        modalUrl: {}
    }

    thumbNailClick = (props) => {
        this.setState({
            modal: true,
            modalUrl: props
        });
    }

    closeModalHandler = () => {
        this.setState({
            modal: false,
            modalUrl: {}
        });
    }

    render() { 

        const images = this.props.images.map((image, idx) => {
            return <Thumbnail key={idx} image={image} thumbNailClick={this.thumbNailClick}/>
        })
        
        return(
            <div className={styles.imageSlider}>
                {this.state.modal &&
                    <Modal image={this.state.modalUrl} closeModalHandler={this.closeModalHandler}/>
                }
                {images}
            </div>            
        );        
    }
}

export default ImageSlider;