import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MypageItem from './mypage_item';
import Pagination from './pagination';

const Mypage = () => {
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPages] = useState(10);
  const indexOfLastPage = currentPage * contentPages;
  const indexOfFristPage = indexOfLastPage - contentPages;
  const currentPosts = content.slice(indexOfFristPage, indexOfLastPage);

  useEffect(() => {
    const contentApi = async () => {
      const response = await axios.get('http://106.10.53.116:8099/order');
      console.log(response.data.content);
      console.log(response.data.totalPages);
      console.log(response.data.currentPage);
      setContent(response.data.content);
    };
    setTimeout(contentApi(), 1000);
  }, []);

  return (
    <div className="container">
      <MypageItem posts={currentPosts} />
      <Pagination contentPages={contentPages} totalPosts={content.length} />
    </div>
  );
};

export default Mypage;
