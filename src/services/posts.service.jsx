import { posts } from "./posts.mock";

export const fetchPosts = (url) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (url) {
        res(posts);
      }
      rej("Error: url not specified!");
    }, 500);
  });
};
