import { domAnimation, LazyMotion } from 'framer-motion';

const OrderPage = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div style={{ width: '100%', height: '5px', backgroundColor: 'red' }} />
    </LazyMotion>
  );
};

export default OrderPage;
