import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    
    state={videos:[], selectedVideo:null}

    // #this code is written at last
    //when app is start then we display the default videos by passing default videoName to onSearchSubmit() 
    // using ComponentDidMount() :- it is called before component rendered
    componentDidMount() {
        // pass the default name as Reactjs, means when our app start it will by default show Reactjs videos
        this.onSearchSubmit('Reactjs');
    }


    onSearchSubmit=async (videoName)=> {
        const responce=await youtube.get('/search',{
            params:{
                q:videoName,        //q means query
                part: 'snippet',    //means display snippet type info such as description,authorName etc
                maxResult:5,
                key:"AIzaSyBRYTD4dDP7LPoO9a_EyUC7QsvoigR1IX4"       //authentication (from console.developer.google.com)  
            }        
        });

        this.setState({videos: responce.data.items});

        // when user search the videos then only <VideoList> is shown(because we change the state(videos) on api fetch ), 
        // <VideoDetail> is not shown ,because we change the selectedVideo state only on user click, 
        // so we fix this problem by, when user fetch the api then we update {selectedVideo} by selecting one of the video from {responce.data.items} array
        
        this.setState({selectedVideo: responce.data.items[0]});     // #this code is written at the 2nd last (by removing above problem)
    }

    onVideoSelect= (video)=> {
        this.setState({selectedVideo: video});
    }
    
    render() {
        return (
            <div className="ui container" >
               
                {/* passing onSearchSubmit() as props , so SearchBar can access this method with the help of ref onSubmit */}
                <SearchBar onSubmit={this.onSearchSubmit}/>
               
                <div className="ui grid">
                    <div className="ui row">
                      
                        <div className="twelve wide column">
                           <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                    
                        <div className="four wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>                                                           {/*not necessary to have same name, we are just referencing that callback function using same name*/}
                        </div>
                    
                    </div>
                </div>
           
            </div>
        );
    }
}

export default App;