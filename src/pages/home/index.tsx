import React from "react";
import Articles from "components/articles";
import Wrapper from "components/wrapper";

function Home() {
  return (
    <Wrapper>
      <div className=" bg-purple-400 p-4 h-56 flex items-center justify-center">
        <p className="text-lg font-bold text-white">
          Welcome, Andre!
        </p>
      </div>
      <div className="bg-white p-4">
        <div className="content-wrapper h-full px-4">
          <div className="my-6">
            <p className="text-xl font-bold text-gray-900">
              All Feeds
            </p>
          </div>
          <Articles />
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
