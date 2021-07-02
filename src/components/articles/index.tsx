import React, { useContext, useEffect, useState } from "react";
import { Post } from "types";
import httpService from "utils/httpService";
import PostCard from "components/post-card";
import { AppContext } from "context";

const Articles = ({ userId = "" }: { userId?: string }) => {
  const { state, dispatch } = useContext(AppContext)
  const { allPost = []} = state

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `/posts?_start=0&_limit=40${
          userId ? `&userId=${userId}` : ""
        }`;
        const response = await httpService<Post[]>(url);
        const filteredResponse = response.filter(item => item.userId !== 1)

        dispatch({
          type: 'INIT_POST',
          payload: filteredResponse
        })

      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, [userId]);

  return (
    <>
      {allPost?.map((item, key) => (
        <PostCard {...item} key={key} />
      ))}
    </>
  );
};

export default Articles;
