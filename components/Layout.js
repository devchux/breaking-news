import Head from "next/head";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next Blog</title>
        <meta name="utf-8" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
      </Head>
      <div className="layout-container">
        <Header />
        <main>{children}</main>
        <style jsx>{`
          .layout-container {
            width: 70%;
            margin: auto;
          }
          @media (max-width: 600px) {
            .layout-container {
              width: 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default Layout;
