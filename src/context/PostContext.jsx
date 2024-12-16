// PostContext.js
import React, { createContext, useState, useContext } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '첫 번째 게시글',
      content: '첫 번째 게시글 내용입니다.',
      commentCount: 2,
    },
  ]);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      { id: prevPosts.length + 1, ...newPost, commentCount: 0, comments: [] },
    ]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
