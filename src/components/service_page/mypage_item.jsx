import React from 'react';
import styled from 'styled-components';

const StyledItemList = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MypageItem = ({ posts }) => {
  return (
    <ul className="postList">
      {posts.map((post) => (
        <li className="list_item" key={post.id}>
          <a href={`/mypage/order/${post.id}`}>
            <StyledItemList>
              <div>{post.id}</div>
              <div> {post.itemName}</div>
            </StyledItemList>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MypageItem;
