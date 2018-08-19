import React, {Component} from 'react';
import windowSize from 'react-window-size';

import PostCard from './PostCard/PostCard';
import {blogs} from '../../blogs';
import styles from './LandingPage.css';

class LandingPage extends Component {

    render() {

        // retrieve all excisting blog posts
        const blogPosts = [];
        for(var blog in blogs) {
            blogPosts.push(blog);
        };

        const column1 = [], column2 = [], column3 = [], column4= [];

        blogPosts.forEach((blog, idx) => {
            if([0,4,8,12,16].includes(idx)){column1.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
            if([1,5,9,13,17].includes(idx)){column2.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
            if([2,6,10,14,18].includes(idx)){column3.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
            if([3,7,11,15,19].includes(idx)){column4.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
        });

        return(
            <div className={styles.postcards}>                
                <div className={styles.column}>{column1}</div>
                <div className={styles.column}>{column2}</div>
                <div className={styles.column}>{column3}</div>
                <div className={styles.column}>{column4}</div>
            </div>
        );        
    }
}

export default windowSize(LandingPage);