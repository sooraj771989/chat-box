import React, { Component,useState } from 'react';
import chat from './assets/training-icon.svg';
import chaticon from './assets/intent-icon.svg';
import { getToken, getSessionURL } from './Utils/Common';
import axios from 'axios';
import moment from "moment";

class ChatHistoryBox extends Component  {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      error : null,
      isLoaded : false,
      posts : []          
  };
  }

  onClick = ev => {
    this.props.updateKey(ev.currentTarget.dataset.div_id);
  };

  componentDidMount(){
  const token = getToken();
  const getSessionurl = getSessionURL(token);
  axios.get(getSessionurl, { headers: {  'Authorization': `${token}`}})
  .then(response => {
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
      <div className=" max-h-screen  w-8/12  flex flex-col bg-white">
        <div className="content-bar flex flex-row text-white py-2 px-2"> 
        <img className="small-icon mr-2" src={chat} alt="Logo" /> Training</div>
        {/* resize-x */}
            <div className="bg-white h-screen overflow-x-scroll ">
            <div className="item flex flex-col border-bottom">
                    <div className="px-2 py-2 text-sm flex flex-row justify-between border-bottom">
                    <div className="font-semibold">Sessions</div>
                    <div className="font-semibold">User</div>
                    <div className="font-semibold">Match/Fail</div>
                    <div className="font-semibold" >Date</div>
                    </div>
                    {
                        this.state.posts.map(post => (
                            <div data-div_id={post.id}  onClick={this.onClick} className="px-2 text-sm flex flex-row chat-items justify-between border-bottom " key={post.id}   align="start">     
                                   <p className="title"> <img className="chat-icon " src={chaticon} alt="Logo" /> {post.sessionId}</p>          
                                   <p className="title">{post.userSays}</p>
                                   
                                    <p className="body"> {post.createdOn} ></p>
                            </div>
                        ))
                    }
                    </div>
                    </div>
    </div>
    );
  }
}

export default ChatHistoryBox;