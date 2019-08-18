// This is the Link API
import Link from "next/link";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import { NextPage, NextPageContext } from "next";
import { User, PostItem } from "../interfaces";
import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import * as firebase from "firebase";
import { QuerySnapshot } from "@google-cloud/firestore";
import FireBaseUtils from "../interfaces/utils/firebaseUtils";

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
  items: PostItem[];
  pathname: string;
};

class Home extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    console.log("Get props.");
    try {
      var db = FireBaseUtils.getFirestore();
      // db.collection("users")
      //   .add({
      //     first: "Ada",
      //     last: "Lovelace",
      //     born: 1815
      //   })
      //   .then(function(docRef) {
      //     console.log("Document written with ID: ", docRef.id);
      //   })
      //   .catch(function(error) {
      //     console.error("Error adding document: ", error);
      //   });

      console.log("Querying users.");
      var snapshot = await db.collection("posts").get();
      console.log("Got snapshot users.");
      let items = snapshot.docs.map((entry: { data: any }) => {
        var d = entry.data() as PostItem;
        return d;
      });
      var foo = console.log(items);
      console.log("Finished logging snapshot.");

      // .then(querySnapshot => {
      //   querySnapshot.forEach(doc => {
      //     console.log(`${doc.id} => ${doc.data()}`);
      //   });
      // });

      // {
      //   apiKey: "### FIREBASE API KEY ###",
      //   authDomain: "### FIREBASE AUTH DOMAIN ###",
      //   projectId: "### CLOUD FIRESTORE PROJECT ID ###"
      // });

      // const db = new Firestore({
      //   projectId: "expected-actual",
      //   keyFilename: "config/expected-actual-dc16a1602380.json"
      // });

      // let setAda = docRef.set({
      //   first: "Ada",
      //   last: "Lovelace",
      //   born: 1815
      // });

      console.log(items);

      return {
        items
      };
    } catch (err) {
      console.log("Get props error.");
      console.log(err.message);

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
          <Container maxWidth="sm">
            <Box my={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                Create React App v4-beta example with TypeScript
              </Typography>
            </Box>
          </Container>

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
          <h1>Items</h1>
          {items !== undefined && (
            <ul>
              {items.map(item => (
                <li key={item.index}>
                  <Link href="/posts/[id]" as={`/posts/${item.index}`}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Layout>
      </div>
    );
  }
}

export default Home;
