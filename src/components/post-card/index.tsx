import * as React from "react";
import { Link } from "react-router-dom";
import { Post, User } from "types";
import httpService from "utils/httpService";

const PostCard: React.FC<Post> = (item) => {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await httpService<User>(
          `/users/${item.userId}`
        );
        setUser(response);
      } catch (error) {
        console.error("error ", error);
      }
    };

    fetchUser();
  }, [item.userId]);

  return (
    <div className="w-full rounded-sm border border-gray-100 p-4 mb-4">
      <div className="content-wrapper__person flex items-center">
        <div className="w-8 h-8 rounded-full bg-red-100"></div>
        <Link to={`/user/${user?.id}`}>
          <p className="ml-4">{user?.name}</p>
        </Link>
      </div>
      <div className="content-wrapper__post my-2">
        <Link to={`/posts/${item.id}`}>
          <p className="mb-4 font-semibold">{item.title}</p>
        </Link>
        <p className="font-light">{item.body}</p>
      </div>
    </div>
  );
};

export default PostCard;
