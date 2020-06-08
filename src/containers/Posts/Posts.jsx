import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    {posts.map(post => (
      <Post 
      key={post.id}
      postInfo={post}
      userInfo={getUserHandler(post.userId)}
      />
    ))}
  </div>
);

export default Posts;
