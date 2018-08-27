import React, {Component} from 'react';

import styles from './Modal.css';

class ImageSlider extends Component {

    state = {
        allImages: this.props.allImages,
        idx: this.props.idx
    }

    closeModalHandler = () => {
        this.props.closeModalHandler();
    }

    doNothingHandler = (e) => {
        e.stopPropagation();
    }

    previousImageHandler = (e) => {
        e.stopPropagation();
        const imgArrLength = this.state.allImages.length - 1;

        if(this.state.idx > 0){
            this.setState(prevState => {
                return {idx: prevState.idx - 1}
            });
        } else {
            this.setState({idx: imgArrLength})
        }
    }

    nextImageHandler = (e) => {
        e.stopPropagation();
        const imgArrLength = this.state.allImages.length - 1;

        if(this.state.idx < imgArrLength){
            this.setState(prevState => {
                return {idx: prevState.idx + 1}
            });
        } else {
            this.setState({idx: 0})
        }
    }

    render() {
        const { allImages, idx } = this.state;
        const currentImage = allImages[idx];

        return(
            <div className={styles.modalBackground} onClick={this.closeModalHandler}>
                <div className={styles.leftButton} onClick={this.previousImageHandler}>&lt;</div>
                <div className={styles.rightButton} onClick={this.nextImageHandler}>&gt;</div>

                <img className={styles.image} src={currentImage.url} alt="" onClick={this.doNothingHandler}/>

                <div className={styles.subtext} onClick={this.doNothingHandler}>
                    {currentImage.text}
                </div>
            </div>
        );
    }
}

export default ImageSlider;