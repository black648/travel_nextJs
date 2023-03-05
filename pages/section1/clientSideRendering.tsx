import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
// import NoSSR from '@/component/section1/NoSSR';

//CSR에서 SSR을 쓰고 싶을때..
const NoSSR = dynamic(() => import('../../component/section1/NoSSR'), {
  ssr: false,
});

const Example: NextPage = () => {
  const [data, setData] = useState(0);
  useEffect(() => {
    const delayInSeconds = 2;
    new Promise<number>((resolve) =>
      setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
    ).then((result) => setData(result));
  }, []);

  return (
    <main>
      <h1>Client-side data fetching</h1>
      <p>값: {data}</p>

      <h1>no SSR</h1>
      <NoSSR />
    </main>
  );
};

export default Example;
