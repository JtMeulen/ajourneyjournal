import React, {Component} from 'react';
import windowSize from 'react-window-size';

import TitleBar from './TitleBar/TitleBar';
import WorldMap from './WorldMap/WorldMap';
import BlogPosts from './BlogPosts/BlogPosts';

import {blogs} from '../../blogs';

class Blog extends Component {

    render() {
        const blogName = this.props.location.pathname.slice(1);

        const blogData = blogs[blogName];
        const showMap = blogData.worldMap && this.props.windowWidth > 800;
        const isMobile = this.props.windowWidth <= 450;

        return(
            <div>
                <TitleBar header={blogData.header}/>
                {showMap && <WorldMap mapCountry={blogName}/>}
                <BlogPosts data={blogData} worldMap={showMap} isMobile={isMobile}/>
            </div>
        );
    }
}

export default windowSize(Blog);