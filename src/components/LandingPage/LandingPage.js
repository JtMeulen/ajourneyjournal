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

        const column1 = [], column2 = [], column3 = [], column4= [], column5 = [];

        if(this.props.windowWidth >= 1400) {
            blogPosts.forEach((blog, idx) => {
                if([0,5,10,15,20].includes(idx)){column1.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
                if([1,6,11,16,21].includes(idx)){column2.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
                if([2,7,12,17,22].includes(idx)){column3.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
                if([3,8,13,18,23].includes(idx)){column4.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
                if([4,9,14,19,24].includes(idx)){column5.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
            });
        } else if(this.props.windowWidth >= 1100 && this.props.windowWidth < 1400) {
            blogPosts.forEach((blog, idx) => {
                if([0,4,8,12,16].includes(idx)){column1.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
                if([1,5,9,13,17].includes(idx)){column2.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
                if([2,6,10,14,18].includes(idx)){column3.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
                if([3,7,11,15,19].includes(idx)){column4.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
            });
        } else if (this.props.windowWidth >= 800 && this.props.windowWidth < 1100) {
            blogPosts.forEach((blog, idx) => {
                if([0,3,6,9,12,15,18].includes(idx)){column1.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
                if([1,4,7,10,16,19].includes(idx)){column2.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
                if([2,5,11,13,17,20].includes(idx)){column3.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
            });
        } else if (this.props.windowWidth >= 600 && this.props.windowWidth < 800) {
            blogPosts.forEach((blog, idx) => {
                if([0,2,4,6,8,10,12,14,16,18].includes(idx)){column1.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
                if([1,3,5,7,9,11,13,15,17,19].includes(idx)){column2.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)}
            });
        } else {
            blogPosts.forEach((blog, idx) => {
                column1.push(<PostCard key={idx} name={blog} data={blogs[blog].postcard} width={this.props.windowWidth}/>)
            });
        }

        return(
            <div className={styles.postcards}>
                {column1.length > 0 && <div className={styles.column}>{column1}</div>}
                {column2.length > 0 && <div className={styles.column}>{column2}</div>}
                {column3.length > 0 && <div className={styles.column}>{column3}</div>}
                {column4.length > 0 && <div className={styles.column}>{column4}</div>}
                {column5.length > 0 && <div className={styles.column}>{column5}</div>}
            </div>
        );
    }
}

export default windowSize(LandingPage);