import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import styles from './PostCard.css';

class PostCard extends Component {

    componentWillMount(){
        const {width, data} = this.props;

        const selectedStartImage = width <= 500 ? data.mobileImage - 1 : 0;
        const firstImage = data.images[selectedStartImage];
        const overlayColor = this.isTouchDevice() ? "rgba(30, 62, 107, 0.6)" : firstImage.color;

        this.setState({image: firstImage.image, color: overlayColor, idx: 1});
    }

    componentDidMount(){
        const {data, width} = this.props;
        const image = data.images;
        const arrLength = data.images.length - 1 ;

        if(width > 500){
        setInterval(() => this.setState(prevState => {
            return {
                    image: image[this.state.idx].image,
                    color: image[this.state.idx].color,
                    idx: prevState.idx < arrLength ? prevState.idx + 1 : 0
            }}), 7000);
        }
    }

    onClickHandler = () => {
        this.props.history.push(`/${this.props.name}`);
    }

    isTouchDevice() {
        return 'ontouchstart' in document.documentElement;
    }

    render() {
        const { data, width } = this.props;

        let height = '300';
        if(data.size){
            if(data.size === 'medium') {
                height = "400"
            } else if (data.size === 'large') {
                height = "500"
            }
        }

        height = width >= 500 ? height * (width / 1600) : 230;

        const image = this.state.image || '';
        const overlayColor = this.state.color || 'rgba(204, 132, 44, 0.7)';

        return(
            <div onClick={this.onClickHandler}  className={styles.postcard} style={{
                                                                                "height": `${height}px`,
                                                                                "backgroundImage": `url(${image})`}}>
                <div className={!this.isTouchDevice() ? styles.overlay : styles.mobileOverlay} style={{"backgroundColor": `${overlayColor}`}}>
                    <p className={styles.title}>{data && data.title}</p>
                    <p className={styles.year}>{data && data.year}</p>
                </div>

            </div>
        );
    }
}

export default withRouter(PostCard);