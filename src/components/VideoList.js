import React from 'react';
import VideoItem from './VideoItem';

// responcible for displaying VideoList by passing 1 video at a time to VideoItem

const VideoList= (props) => {
    
    const renderedVideoList = props.videos.map((cur)=>{
        return <VideoItem key={cur.id.videoId} video={cur} onVideoSelect={props.onVideoSelect}/> //it is return to array 'renderedVideoList'
    });

    return <div className="ui relaxed divided list">{renderedVideoList}</div>;
}

export default VideoList;