import Head from "next/head";
import { useRouter } from "next/router";
import SearchBox from "./SearchBox";

export default function MyLayout({ children }) {
  const router = useRouter;
  return (
    <div>
      <Head>
        <link rel="icon" type="image/x-icon" href="Logo_ML_header.png" />
        <title>Inventrixx Challenge!</title>
      </Head>
      <SearchBox />
      {children}
    </div>
  );
}
