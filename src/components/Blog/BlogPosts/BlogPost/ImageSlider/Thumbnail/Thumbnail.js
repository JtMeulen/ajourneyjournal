import React, {Component} from 'react';

import styles from './Thumbnail.css';

class Thumbnail extends Component {

    onThumbnailClick = () => {
        this.props.thumbNailClick(this.props.image);
    }

    render() {
        
        return(
            <div 
                className={styles.image} 
                style={{"backgroundImage": `url(${this.props.image.url})`}}
                onClick={this.onThumbnailClick}
            ></div>         
        );        
    }
}

export default Thumbnail;