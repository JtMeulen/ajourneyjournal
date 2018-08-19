import React, {Component} from 'react';

import ImageSlider from './ImageSlider/ImageSlider';
import breakline from '../../../../assets/images/breakline.png';
import styles from './BlogPost.css';

class BlogPost extends Component {

    render() { 
        
        return(
            <div className={styles.blogPost}>
                <h1 className={styles.title}>{this.props.title}</h1>
                <h2 className={styles.location}>{this.props.location}</h2>
                <p className={styles.description}>{this.props.description}</p>

                {this.props.images && <ImageSlider images={this.props.images} />}

                <img src={breakline} alt='' className={styles.breakline}/>
            </div>            
        );        
    }
}

export default BlogPost;