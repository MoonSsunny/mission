import React from 'react';
import styled from 'styled-components';

const StyledPageNumber = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  li {
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    line-hight: 2;
    margin: 3px;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 4px;
  }
`;
const Pagination = ({ totalPage, paginate }) => {
  const pageNumber = [];
  for (let i = 0; i < totalPage; i++) {
    pageNumber.push(i + 1);
  }

  return (
    <StyledPageNumber>
      {pageNumber.map((pageNum) => (
        <li
          key={pageNum}
          onClick={() => {
            paginate(pageNum - 1);
          }}
        >
          {pageNum}
        </li>
      ))}
    </StyledPageNumber>
  );
};

export default Pagination;
