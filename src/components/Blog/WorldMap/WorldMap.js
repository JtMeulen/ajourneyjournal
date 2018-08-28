import React, {Component} from 'react';
import SVGMap from './Maps/maps';
import styles from './WorldMap.css';

class WorldMap extends Component {

    componentDidMount() {
        const path = document.querySelector('.route');
        const pathLength = path.getTotalLength();
        this.setState({path: path, pathLength: pathLength})

        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength;

        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {
        const fullBody = document.documentElement.scrollHeight;
        const clientWindow = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollTop;

        const scrollPercentage = (scrollHeight) / (fullBody - clientWindow);
        const drawLength = this.state.pathLength * scrollPercentage;

        this.state.path.style.strokeDashoffset = this.state.pathLength - drawLength;
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