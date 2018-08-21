import React, {Component} from 'react';

import BlogPost from './BlogPost/BlogPost';
import styles from './BlogPosts.css';

class BlogPosts extends Component {

    render() {

        const blogposts = this.props.data.days.map((post, idx) => {
            return <BlogPost key={idx} {...post} />
        });

        let paddingLeft = this.props.worldMap ? "400px" : "100px";
        if(this.props.isMobile) {
            paddingLeft = "30px";
        }

        return(
            <div className={styles.blogContainer} style={{"paddingLeft": `${paddingLeft}`}}>
                {blogposts}
            </div>
        );
    }
}

export default BlogPosts;