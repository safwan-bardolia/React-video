import React from 'react';

                // destructuring, instead of using 'props.video' we directly use video
const VideoDetail = ({video}) => {  // <VideoDetail video={this.state.selectedVideo}/>
    
    // when our app first render, then video is null, it's value is determine when user click on one of the video
    if(video==null) {
        return <div>Loading...</div>;
    }

    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div>
            <div className="ui embed">
                {/* An HTML iframe is used to display a web page within a web page. */}
                <iframe title="video player" src={videoSrc} />
            </div>

            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    ); 
}

export default VideoDetail;