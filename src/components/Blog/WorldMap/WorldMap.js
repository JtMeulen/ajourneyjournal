import React, {Component} from 'react';

import styles from './WorldMap.css';

class WorldMap extends Component {    
          
    render() {

        return(
            <div className={styles.worldMap}>
                {this.props.mapLocation}
            </div>            
        );        
    }
}

export default WorldMap;