import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <SearchBox />
    </>
  );
}
