import React, {Component} from 'react';

import BlogPost from './BlogPost/BlogPost';
import styles from './BlogPosts.css';

class BlogPosts extends Component {

    render() {
        const {days} = this.props.data;

        const allImg = days.map(day => day.images);
        const allImages = [].concat(...allImg);

        allImages.forEach((image, idx) => {
            image.idx = idx
        });

        let counter = 0;
        days.forEach(day => {
            if(day.images.length > 0){
                day.images.forEach(image => {
                    image.idx = counter;
                    counter = counter + 1;
                })
            }
        });

        const blogposts = days.map((post, idx) => {
            return <BlogPost key={idx} {...post} allImages={allImages} />
        });

        let paddingLeft = this.props.worldMap ? "400px" : "";

        return(
            <div className={styles.blogContainer} style={{"paddingLeft": `${paddingLeft}`}}>
                {blogposts}
            </div>
        );
    }
}

export default BlogPosts;