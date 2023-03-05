import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Links() {
  //router 방식은 link방식처럼 바로 json을 불러오진 않음(prefetch). useEffect를 통해 직접 구현해 주어야 함..
  // const router = useRouter();
  // useEffect(() => {
  //   router.prefetch('/section1/getStaticProps');
  // }, [router]);
  //
  return (
    //router 방식
    //   <main>
    //     <h1>Links</h1>
    //     <button
    //       onClick={() => {
    //         router.push('/section1/getStaticProps');
    //       }}
    //     >
    //       /getStaticProps
    //     </button>
    //   </main>

    // next/link방식 (권장)
    <main>
      <h1>Links</h1>
      {/*  next/link로 페이지를 이동 시 html 재 생성 없이 CSR방식으로 DOM생성이 가능함. */}
      {/*  화면에 링크가 보이면 그때 json형식으로 link에 걸린 데이터를 읽음.*/}
      <Link href="/section1/getStaticProps">/getStaticProps</Link>
    </main>
  );
}
