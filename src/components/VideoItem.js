import React from 'react';
import './VideoItem.css';

const VideoItem = (props) =>{
    return (
        // when user click on video item, call the method of App component by passing current video object
        // note: App component pass the ref of that method to VideoList i.e <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
        // & videoList pass that ref to VideoItem i.e return <VideoItem video={cur} onVideoSelect={props.onVideoSelect}/>
        <div onClick={() => props.onVideoSelect(props.video)} className="video-item item">
            <img className="ui image" alt={props.video.snippet.title} src={props.video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {props.video.snippet.title}
                </div>
            </div>
        </div>
    ); 
}

export default VideoItem;