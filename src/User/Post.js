    import React from "react";
    import axios from "axios";
    import { Table, Button, ListGroup } from "react-bootstrap";
    class Post extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                PostArray: [],
            }
        }
        
        comment_All = () => {
            const post_id = this.props.match.params.id
            this.props.history.push(`/posts/${post_id}/comments`);
        }
        postData = async (userId) => {
            const api = await axios.get(`http://localhost:3000/users/${userId}/posts`);
            this.setState({
                PostArray: api.data
            })
        }

        componentDidMount() {
            const { id } = this.props.match.params;
            this.postData(id);
        }
       

        render() {
            // if(!this.post_id)return "loading"
            const postData = this.state.PostArray;
            let post_Data = postData.map((data) => (
                <div>
                    <ul key={data.id}>
                      <li>User Id : {data.userId}</li>
                      <li>Title : {data.title}</li>
                      <li>Body : {data.body}</li>
                     
                    </ul>
                   
                </div>
            
            ));
           
            return (
                <>
                    <div>
                    <Button variant="outline-danger" className="" onClick={() => this.comment_All(this.data)}>Comments</Button>
                      <h1 className="text-center">User Post</h1><hr/>
                      {post_Data}
                    </div>
                </>
            )

        }

    }
    export default Post