 
import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ChatHistoryBox from './ChatHistoryBox';
import chat from './assets/chat-icon.svg';
import { getToken, getChatURL ,setUserId } from './Utils/Common';
import axios from 'axios';

class Dashboard extends Component  {
  constructor(props){
    super(props);
    this.updateKey = this.updateKey.bind(this);
    this.state = {
      error : null,
      isLoaded : false,
      posts : [],
      keyData : null         
  };
  }

  updateKey(keyData) {
    this.setState({ keyData: keyData });
    console.log(this.state.keyData);
     setUserId( keyData );
    if(this.state.keyData !== null){
      this.getChats();
    }
   }

  getChats(){
    this.state.posts=[];
    const token = getToken();
    const url = getChatURL(this.state.keyData);
    axios.get(url, {
    headers: {
      'Authorization': `${token}`
    }
  }).then(response => {
    console.log(response.data);
    this.setState({
      isLoaded : true,
      posts : response.data
  });
  }).catch(error => {
    if (error.response.status === 401) 
      console.log("Something went wrong. Please try again later.");
  });
  }

  render() {
    return(
    <div className="flex w-full border-div">
      <Sidebar/>
      <ChatHistoryBox  updateKey={this.updateKey} />

      <div className="w-full   h-screen ">
      <div className="py-2 px-2 flex flex-row text-white content-bar"> <img className="small-icon mr-2" src={chat} alt="Logo" /> Chat Session</div>
      <div className="bg-white ">
      <div className="px-4 item mt-4 overflow-x-scroll  h-screen ">
      {
        this.state.posts.map(post => (
            <div className="mb-6" key={post.id}>
                    <p className="comments">{post.userSays}</p>
                    <p className="text-sm">Bot:{post.createdOn}</p>
            </div>
        ))
      }
      </div>
      </div>
    </div>
    </div>
    );
  }
}

export default Dashboard;
