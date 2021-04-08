import React from 'react';

const MypageItem = ({ posts }) => {
  return (
    <ul className="postList">
      {posts.map((post) => (
        <li className="list_item" key={post.id}>
          <div> {post.itemName}</div>
          <div>{post.id}</div>
        </li>
      ))}
    </ul>
  );
};

export default MypageItem;
