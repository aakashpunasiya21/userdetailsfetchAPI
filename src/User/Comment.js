import React from "react";
import axios from "axios";
import { showcomments } from "../actions"
import { connect } from "react-redux";
class Comment extends React.Component {
  constructor(props) {
    super(props)

  }
  CommentData = async (post_id) => {
    const commentGet = await axios.get(`http://localhost:3000/posts/${post_id}/comments`);
    this.props.showcomments(commentGet.data)

  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.CommentData(id);

  }
  render() {
    const { comments } = this.props;
    console.log(comments)

    return (
      <>
        <h1 className="text-center ">User Comments</h1><hr />
        {comments.map((data) => (
          <div>
            <ul key={data.id}>
              <li>PostId : {data.postId}</li>
              <li>Name : {data.name}</li>
              <li>Email : {data.email}</li>
              <li>Body : {data.body}</li>
            </ul>
          </div>
        ))};
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  comments: state.showComments.comments
})

const mapDispatchToProps = {
  showcomments
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)

