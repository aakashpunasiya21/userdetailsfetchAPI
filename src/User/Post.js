    import React from "react";
    import axios from "axios";
    import {Button, ThemeProvider} from "react-bootstrap";
    import { posts } from "../actions";
    import { connect } from "react-redux";
    class Post extends React.Component {
        constructor(props) {
            super(props);
           
        }
        comment_All = () => {
            const post_id = this.props.match.params.id
            this.props.history.push(`/posts/${post_id}/comments`);
        }
        postData = async (userId) => {
            const api = await axios.get(`http://localhost:3000/users/${userId}/posts`);
            this.props.posts(api.data);
        }

        componentDidMount() {
            const { id } = this.props.match.params;
            this.postData(id);
        }
       

        render() {
            // if(!this.post_id)return "loading"
            const postData = this.props.my_post;
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
    const mapDispatchToProps = {
        posts
    }
    const mapStateToProps = (state) =>({
        my_post :state.post
    })
    const UsersConnectedWithRedux = connect(mapStateToProps ,mapDispatchToProps)(Post)
    export default UsersConnectedWithRedux
    