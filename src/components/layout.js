import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-grey-darkest bg-gray-100">
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="flex flex-col flex-1 md:justify-center container mx-auto  py-8 md:p-8 w-full">
            {children}
          </div>

          <footer className="bg-gray-800 text-gray-100">
            <div className="flex justify-between container mx-auto  p-4 md:p-8 text-sm">
              <p className="">
                Created by{" "}
                <a
                  href="https://taylorbryant.blog"
                  className="font-bold no-underline text-white"
                >
                  Taylor Bryant
                </a>
              </p>

              <p>
                <a
                  href="https://github.com/taylorbryant/gatsby-starter-tailwind"
                  className="font-bold no-underline"
                >
                  GitHub
                </a>
              </p>
            </div>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
