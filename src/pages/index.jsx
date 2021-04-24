import Head from "next/head";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <SearchBox />
    </>
  );
}
