import React, {Component} from 'react';

import TitleBar from './TitleBar/TitleBar';
import WorldMap from './WorldMap/WorldMap';
import BlogPosts from './BlogPosts/BlogPosts';

import {blogs} from '../../blogs';

class Blog extends Component {    
          
    render() {
        const blogName = this.props.location.pathname.slice(1);

        const blogData = blogs[blogName];

        return(
            <div>
                <TitleBar header={blogData.header}/>
                {blogData.worldMap && <WorldMap mapCountry={blogName}/>}
                <BlogPosts data={blogData}/>             
            </div>            
        );        
    }
}

export default Blog;