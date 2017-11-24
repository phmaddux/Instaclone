import React, {Component} from 'react';
import styled from 'styled-components';
<<<<<<< HEAD

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  img{
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
`;
=======
>>>>>>> starter-code

const CommentContainer = styled.div`
display: flex;
align-items: center;
img{
  height: 30px;
  width: 30px;
  border-radius: 100%;
}`;
class Comment extends Component {
  render() {
    const {comment} = this.props;
    return (
      <CommentContainer>
        <img src={comment.profile_pic}/>
<<<<<<< HEAD
        <p><strong>{comment.username}</strong>   {comment.text}</p>
=======
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
>>>>>>> starter-code
      </CommentContainer>
    );
  }
}

export default Comment;