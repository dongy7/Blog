import Meta from '../components/meta';

export default ({ children }) =>
  <div className="main">
    {children}
    {/* global styles and meta tags */}
    <Meta />
    <style jsx>{`
      .main {
          padding: 25px 50px;
        }

        @media (max-width: 500px) {
          .main {
            padding: 25px 15px
          }
        }
    `}</style>
  </div>;
