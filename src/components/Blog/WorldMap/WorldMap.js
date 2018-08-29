import React, {Component} from 'react';
import SVGMap from './Maps/maps';
import styles from './WorldMap.css';

class WorldMap extends Component {

    componentDidMount() {
        const path = document.querySelector('.route');
        if(path){
            const pathLength = path.getTotalLength();
            this.setState({path: path, pathLength: pathLength})

            path.style.strokeDasharray = pathLength + ' ' + pathLength;
            path.style.strokeDashoffset = pathLength;
            window.addEventListener("scroll", this.handleScroll);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {
        const path = document.querySelector('.route');
        const fullBody = document.documentElement.scrollHeight;
        const clientWindow = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollTop;

        const scrollPercentage = (scrollHeight) / (fullBody - clientWindow);
        const drawLength = this.state.pathLength * scrollPercentage;

        path.style.strokeDashoffset = this.state.pathLength - drawLength;
    }

    render() {
        return(
            <div className={styles.worldMap}>
                <SVGMap country={this.props.mapCountry} />
            </div>
        );
    }
}

export default WorldMap;