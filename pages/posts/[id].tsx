import { useRouter } from "next/router";
import Markdown from "react-markdown";
import Layout from "../../components/layout";

import fetch from "isomorphic-unfetch";
import React from "react";
import { NextPageContext } from "next";
import { ImageDisplay } from "../../components/ImageDisplay";

type Props = {
  show: any;
  id: number;
};

class Post extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    const { id } = query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return {
      show,
      id: id
    };
  };

  render() {
    return (
      <Layout>
        <h1>{this.props.id}</h1>
        <ImageDisplay />
        <div className="markdown">
          <Markdown
            source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
      `}
          />
        </div>
        <style jsx global>{`
          .markdown {
            font-family: "Arial";
          }

          .markdown a {
            text-decoration: none;
            color: blue;
          }

          .markdown a:hover {
            opacity: 0.6;
          }

          .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}</style>

        <h1>{this.props.show.name}</h1>
        <p>{this.props.show.summary.replace(/<[/]?p>/g, "")}</p>
        <img src={this.props.show.image.medium} />
      </Layout>
    );
  }
}

export default Post;
