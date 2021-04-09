import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

const StyledDetailHead = styled.h1`
  margin-left: 30px;
`;
const StyledDetail = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;

  p {
    margin: 30px;
  }
`;

const MypageDetail = () => {
  const pathName = useLocation().pathname.split('/')[3];
  const [detailId, setDetailId] = useState('');
  const [detailItem, setDetailItem] = useState('');
  const contentDetailApi = async () => {
    const response = await axios.get(
      `http://106.10.53.116:8099/order/${pathName}`,
    );
    setDetailId(response.data.id);
    setDetailItem(response.data.itemName);
  };
  contentDetailApi();
  return (
    <>
      <StyledDetailHead>주문상세내용</StyledDetailHead>
      <StyledDetail>
        <p>{detailId}</p>
        <p>{detailItem}</p>
      </StyledDetail>
    </>
  );
};

export default MypageDetail;
