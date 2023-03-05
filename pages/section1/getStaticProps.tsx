import type { NextPage } from 'next';

interface Props {
  data: number;
}

const Example: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>getStaticProps Page</h1>
      <p>값: {data}</p>
    </main>
  );
};

export default Example;

//2초 로딩 후 페이지 렌더인데.
// 미리 프리렌더된(빌드 시 2초 로딩이 적용됨) html이기 때문에 로딩 안함.ㅎㅎ (dev에선 2초 로딩)
export async function getStaticProps() {
  const delayInSeconds = 2;
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
  );

  return {
    props: { data },
    revalidate: 5, //5초마다 페이지 업데이트 처리
  };
}
