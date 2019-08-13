// This is the Link API
import Link from "next/link";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import { NextPage, NextPageContext } from "next";
import { User } from "../interfaces";
import React from "react";

// const PostLink = props => (
//   <li>
//     <Link href="/posts/[id]" as={`/posts/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ];
}

// const PostLink2 = ({ post }) => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${post.id}`}>
//       <a>{post.title}</a>
//     </Link>
//   </li>
// );

type Props = {
  items: any[];
  pathname: string;
};

class Home extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
      const data = await res.json();

      console.log(`Show data fetched. Count: ${data.length}`);
      var items = data.map((entry: { show: any }) => entry.show);
      console.log(items);

      return {
        items
      };
      // const { id } = query
      // const item = await findData(Array.isArray(id) ? id[0] : id)
      // return { item }
    } catch (err) {
      return { errors: err.message };
    }
  };

  // class Index = <{props}> => (
  render() {
    const { items, pathname } = this.props;
    console.log(items);
    return (
      <div>
        <Layout>
          <style jsx>{`
            h1,
            a {
              font-family: "Arial";
            }

            ul {
              padding: 0;
            }

            li {
              list-style: none;
              margin: 5px 0;
            }

            a {
              text-decoration: none;
              color: blue;
            }

            a:hover {
              opacity: 0.6;
            }
          `}</style>
          <h1>Batman TV Shows</h1>
          {
            <ul>
              {items.map(show => (
                <li key={show.id}>
                  <Link href="/posts/[id]" as={`/posts/${show.id}`}>
                    <a>{show.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          }

          <h1>My Blog</h1>
          <ul>
            {/* <PostLink id="Hello Next.js" />
        <PostLink id="Learn Next.js is awesome" />
        <PostLink id="Deploy apps with Zeit" /> */}
          </ul>
        </Layout>
      </div>
    );
  }
}

// Home.getInitialProps = async function() {
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };
// };

export default Home;
