import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MypageItem from './mypage_item';
import MyPagination from './mypagination';
import Layout from '../layout/layout';

const Mypage = () => {
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const paginate = (pageNumer) => setCurrentPage(pageNumer);

  useEffect(() => {
    const contentApi = async () => {
      const response = await axios.get(
        `http://106.10.53.116:8099/order?page=${currentPage}`,
      );
      setTotalPage(response.data.totalPages);
      setContent(response.data.content);
    };
    setTimeout(contentApi, 1000);
  }, [currentPage]);

  return (
    <Layout>
      <div className="container">
        <MypageItem posts={content} />
        <MyPagination totalPage={totalPage} paginate={paginate} />
      </div>
    </Layout>
  );
};

export default Mypage;
