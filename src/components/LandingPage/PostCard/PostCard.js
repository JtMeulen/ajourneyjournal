import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import styles from './PostCard.css';

class PostCard extends Component {
    
    onClickHandler = () => {
        this.props.history.push(`/${this.props.name}`);
    }

    render() {
        let height = '360';
        if(this.props.data){
            if(this.props.data.size === 'medium') {
                height = "525"
            } else if (this.props.data.size === 'large') {
                height = "630"
            }
        }
        
        height = height * (this.props.width / 1600);
        const image = this.props.data ? this.props.data.image : '';
        const overlayColor = this.props.data ? this.props.data.color : 'grey';

        return(
            <div onClick={this.onClickHandler}  className={styles.postcard} style={{
                                                                                "height": `${height}px`, 
                                                                                "backgroundImage": `url(${image})`}}>
                <div className={styles.overlay} style={{"backgroundColor": `${overlayColor}`}}>
                    <p className={styles.title}>{this.props.data && this.props.data.title}</p>
                    <p className={styles.year}>{this.props.data && this.props.data.year}</p>
                </div>
                    
            </div>
        );        
    }
}

export default withRouter(PostCard);