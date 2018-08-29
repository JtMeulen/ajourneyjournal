import React, {Component} from 'react';
import SVGMap from './Maps/maps';
import styles from './WorldMap.css';

class WorldMap extends Component {
    state = {
        percent: 0
    }

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
        this.setState({percent: scrollPercentage});
        const drawLength = this.state.pathLength * scrollPercentage;

        path.style.strokeDashoffset = this.state.pathLength - drawLength;
    }

    render() {
        // console.log(this.state.percent)
        return(
            <div className={styles.worldMap}>
                <SVGMap country={this.props.mapCountry} percent={this.state.percent}/>
            </div>
        );
    }
}

export default WorldMap;