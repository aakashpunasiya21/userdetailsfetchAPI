import React from "react";
import axios from "axios";
class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state={
            CommentArray :[]
        }
    }
    CommentData = async (post_id)=>{
        const commentGet = await axios.get(`http://localhost:3000/posts/${post_id}/comments`);
        this.setState({
            CommentArray : commentGet.data,
        });

    }
    componentDidMount(){
        const{id} = this.props.match.params;
        this.CommentData(id);

    }
  render(){
      const commentData = this.state.CommentArray;
      let single_comment = commentData.map((data) => {
        return (
         
            <ul key={data.id}>
              <li>PoostId : {data.postId}</li>
              <li >Id : {data.id}</li>
              <li>Email : {data.email}</li>
              <li>Name : {data.name}</li>
              <li>Body : {data.body}</li>
            </ul>
            
        );
    });
    return(
        <><br/>
         <h1 className="text-center ">User Comments</h1><hr/>
        {single_comment}</>
    )
}
}
export default Comment