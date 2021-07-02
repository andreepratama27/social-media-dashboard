import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Albums from "components/albums";
import Articles from "components/articles";
import Wrapper from "components/wrapper";
import { User } from "types";
import httpService from "utils/httpService";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  text: string;
}

const Avatar = ({ userId = 1 }: { userId: number | string }) => {
  return (
    <div className="w-20 h-20 rounded-full bg-white border-4 border-purple-500 mr-6">
      <img
        src={`https://avatars.dicebear.com/api/avataaars/${userId}.svg`}
        className="w-full h-full rounded-full"
        alt=""
      />
    </div>
  );
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={`border border-purple-500 px-10 py-1 mr-2 rounded-sm font-semibold ${
        props.active
          ? "bg-purple-500 text-white"
          : "bg-white text-purple-500"
      }`}
      {...props}
    >
      {props.text}
    </button>
  );
};

const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [activeTabs, setActiveTabs] = useState<"feeds" | "albums">(
    "feeds"
  );

  const Component = {
    albums: <Albums userId={id} />,
    feeds: <Articles userId={id} />,
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await httpService<User>(`/users/${id}`);
        setUser(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApi();
  }, []);

  return (
    <Wrapper>
      <div className="bg-white h-screen">
        <div className="w-full bg-gray-200 h-56 flex items-center p-4 px-8">
          <Avatar userId={id} />
          <div className="flex flex-col">
            <p className="text-lg font-semibold">{user?.name}</p>
            <p className="text-md">{user?.website}</p>
          </div>
        </div>

        <div className="p-8 bg-white">
          <div className="flex justify-end mb-8">
            <Button
              text="Feed"
              onClick={() => setActiveTabs("feeds")}
              active={activeTabs === "feeds"}
            />
            <Button
              text="Albums"
              onClick={() => setActiveTabs("albums")}
              active={activeTabs === "albums"}
            />
          </div>
          <p className="text-lg font-bold">Users {activeTabs}</p>

          <div className="py-4">{Component[activeTabs]}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserProfile;
