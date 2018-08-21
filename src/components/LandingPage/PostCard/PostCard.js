import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import styles from './PostCard.css';

class PostCard extends Component {

    componentWillMount(){
        const imgArray = this.props.data.images;
        const randImage = imgArray[Math.floor(Math.random() * imgArray.length)];
        this.setState({image: randImage.image, color: randImage.color, size: randImage.size});
    }

    onClickHandler = () => {
        this.props.history.push(`/${this.props.name}`);
    }

    isTouchDevice() {
        return 'ontouchstart' in document.documentElement;
    }

    render() {
        const { data, width } = this.props;

        let height = '360';
        if(this.state.size){
            if(this.state.size === 'medium') {
                height = "525"
            } else if (this.state.size === 'large') {
                height = "630"
            }
        }

        height = width >= 600 ? height * (width / 1600) : height * (width / 1600) * 2;

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