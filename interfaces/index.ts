import { string } from "prop-types";

export type User = {
  id: number;
  name: string;
};

export type PostItem = {
  index: number;
  expectedUri: string;
  actualUri: string;
  title: string;
};
