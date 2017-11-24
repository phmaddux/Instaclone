import React, { Component } from 'react';
import Comment from './Comment';
import styled from 'styled-components';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components';

const PostContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
background-color: #fff;
border-radius: 4px;
width: 95vw;
maxwidth: 600px;
margin: 20pf auto;
gi
`
//Not Sure how I get everything centered. I try and it just mashes everything together.
const PostUser = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 16px;
img{
  height: 30px;
  width: 30px;
  border-radius: 100%;
}
span{
  padding-left: 5px;
  font-weight: bold;
}
`;
const PostContent = styled.div`
img{
  max-width: 600px;
  margin: 0 auto;
}
`;
const PostInfo = styled.div`
padding: 5px 16px;
`;
const PostActions = styled.div`
svg{
  padding: 5px;
}
`

class Post extends Component {

  render() {
    const { post } = this.props;
<<<<<<< HEAD

    const likes = post.likes.reduce((prev, curr, index) => {
      if (index === 0){
        return `${curr.username}`;
      } else if (index === post.likes.length -1){
        return `${prev} and ${curr.username}`;
      } else {
        return `${prev}, ${curr.username}`;
      }
    },"");
    return(
      <PostContainer>
        <PostUser>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <span>{post.user.username}</span>
=======
    return (
      <PostContainer>
        <PostUser>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
>>>>>>> starter-code
        </PostUser>
        <PostContent>
          <img src={post.image.url} />
        </PostContent>
        <PostInfo>
          <p>{post.caption}</p>
<<<<<<< HEAD
          <PostActions>
            <FaHeartO size={35} />
            <FaCommentO size={35} />
          </PostActions>
          <p><strong>{likes}</strong> like this</p>
          {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
        </PostInfo>
=======
        </PostContent>
        <PostInfo>
          <FaHeartO />
          <FaCommentO />
        </PostInfo>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
>>>>>>> starter-code
      </PostContainer>
    )
  }
}

export default Post;