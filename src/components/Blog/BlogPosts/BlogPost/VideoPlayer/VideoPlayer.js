import React, {Component} from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube';

import styles from './VideoPlayer.css';

class VideoPlayer extends Component {

    render() {
        return(
            <div className={styles.videoWrapper}>
                <YouTubePlayer
                    url={this.props.videoLink}
                    className={styles.videoPlayer}
                    controls
                    width='100%'
                    height='100%'
                    config={{
                        youtube: {
                          playerVars: { modestbranding: 0 }
                        }
                      }}
                    />
            </div>
        );
    }
}

export default VideoPlayer;