import Head from "next/head";

import { primaryFont } from "../lib/fonts";
import { SITE_TITLE } from "@/lib/constants";
import LandingPage from '../components/common/LandingPage'
export default function Home() {


  return (
    <>
      <Head>
        <title>{`${SITE_TITLE}`}</title>
      </Head>

      <main >
        <LandingPage />



      </main>
    </>
  );
}
