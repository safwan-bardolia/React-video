import React from 'react';

class SearchBar extends React.Component {
    state={videoName:''}

    onFormSubmit=(event)=> {
        //default action is prevented such as when form is submitted page is reload
        event.preventDefault();
    
        //communicating child to parent
        this.props.onSubmit(this.state.videoName);
    }


    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <input
                            type="text"
                            placeholder="Enter video name"
                            value={this.state.videoName}
                            onChange={(e)=>this.setState({videoName: e.target.value})}
                        />
                        <div className="ui pointing label">
                            search for videos
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;