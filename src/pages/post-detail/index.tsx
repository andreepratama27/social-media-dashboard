import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Wrapper from "components/wrapper";
import { Post } from "types";
import httpService from "utils/httpService";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await httpService<Post>(`/posts/${id}`);
        setPost(response)
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, []);

  return (
    <Wrapper>
      <div className="w-full p-4 bg-white">
        <div className="mt-10">
          <p className="font-bold text-xl">{post?.title}</p>
          <p className="font-light text-sm text-gray-500">
            by Andre Pratama
          </p>
        </div>

        <div className="text-content py-8">
          <p className="leading-6">{post?.body}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default PostDetail;
