import type { GetServerSideProps, NextPage } from 'next';

interface Props {
  data: number;
}

const Example: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>getServerSideProps Page</h1>
      <p>값: {data}</p>
    </main>
  );
};

export default Example;

//페이지가 동적으로 변해야 하지만 보안은 중요한 페이지에서 사용
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  //getServerSideProps 에선 사용할 일이 거의 없지만.. revalidate 를 사용할 수 있다.
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=5, stale-while-revalidate=10'
  );

  const delayInSeconds = 2;
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
  );

  return {
    props: { data },
  };
};
