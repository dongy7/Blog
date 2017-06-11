import Page from '../layouts/main';
import Link from 'next/prefetch';
import Head from 'next/head';

export default () =>
  <Page>
    <Head>
      <title>Dong Yeop Lee</title>
    </Head>

    <div className="home">
      <div className="main">
        <h1>Dong Yeop Lee</h1>
        <nav>
          <a target="_blank" href="https://twitter.com/dongy7">Twitter</a>
          <Link href="/posts"><a>Posts</a></Link>
          <a href="mailto:dongy7@gmail.com">Email</a>
        </nav>
      </div>
    </div>

    <style jsx>{`
      .home {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }
      .main {
        flex: none;
        text-align: center;
      }
      h1 {
        font-size: 2em;
        font-weight: normal;
      }
      nav {
        margin-top: 20px;
      }
      a {
        display: inline-block;
        margin: 0 15px;
        text-decoration: none;
      }
    `}</style>
  </Page>;
