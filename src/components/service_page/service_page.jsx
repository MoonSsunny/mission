import React from 'react';
import Button from '../common/button';

const ServicePage = () => {
  return (
    <div>
      {/* NODE_PATH=public을 이용하여 절대경로로 사용 */}
      <img src="/img/example.jpg" alt="service img" />
      <Button type="button">주문하기</Button>
    </div>
  );
};

export default ServicePage;
