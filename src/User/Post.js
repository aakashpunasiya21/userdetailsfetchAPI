import React from "react";
import { Button } from "react-bootstrap";
import { requestPost } from "../thunks/users";
//import { posts } from "../actions";
import axios from "axios";
import { showposts } from "../actions";
import { connect } from "react-redux";
class Post extends React.Component {
  constructor(props) {
    super(props);

  }
  comment_All = () => {
    const post_id = this.props.match.params.id
    this.props.history.push(`/posts/${post_id}/comments`);
  }
  // postData = async (userId) => {
  //   const api = await axios.get(`http://localhost:3000/users/${userId}/posts`);
  //   this.props.showposts(api.data);
  // }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.requestPost(id);
  }


  render() {
    // if(!this.post_id)return "loading"
    const { posts } = this.props;
    return (
      <>
        <div>
          <Button variant="outline-danger" className="" onClick={() => this.comment_All(this.data)}>Comments</Button>
          <h1 className="text-center">User Post</h1><hr />
          {posts.map((data) => (
            <div>
              <ul key={data.id}>
                <li>User Id : {data.userId}</li>
                <li>Title : {data.title}</li>
                <li>Body : {data.body}</li>

              </ul>

            </div>

          ))};
        </div>
      </>
    )

  }

}
const mapStateToProps = (state) => ({
  posts: state.showPosts.posts
})

const mapDispatchToProps = {
  showposts,
  requestPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
