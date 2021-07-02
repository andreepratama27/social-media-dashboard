import Wrapper from "components/wrapper";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router";
import { Photos as PhotosType } from "types";
import httpService from "utils/httpService";

const Photos = () => {
  const { state } = useLocation<{ data: any }>();
  const { id } = useParams<{ id: string }>();
  const [photosData, setPhotosData] = useState<PhotosType[] | null>(
    null
  );

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await httpService<PhotosType[]>(
          `/photos?albumId=${id}`
        );
        setPhotosData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <Wrapper>
      <div className="w-full bg-gray h-56 flex flex-col items-center bg-purple-200 justify-center">
        <p className="text-xl font-bold mb-1">{state.data?.title}</p>
        <p className="text-sm font-light text-italic">
          By Andre Pratama
        </p>
      </div>

      <div className="p-8 bg-white">
        <div className="grid grid-cols-3 gap-4">
          {photosData?.map((item) => (
            <div
              key={item.id}
              className="w-full bg-purple-100 h-56 relative"
            >
              <img
                alt={`Image-${item.id}`}
                src={item.thumbnailUrl}
                className="w-full h-full"
              />
              <div className="p-4 absolute bg-black bottom-0 w-full z-10">
                <p className="font-semibold text-white text-sm">
                  #{item.title.substr(0, 14)}..
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Photos;
