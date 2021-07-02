import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Albums as AlbumsType } from "types";
import httpService from "utils/httpService";

const Albums = ({ userId }: { userId?: string }) => {
  const history = useHistory();
  const [data, setData] = useState<AlbumsType[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await httpService<AlbumsType[]>(
          `/albums?userId=${userId}`
        );

        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbums();
  }, []);

  const goToPhotos = (data: AlbumsType) => () => {
    history.push(`/photos/${data.id}`, {
      data,
    });
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4">
        {data?.map((item, key) => (
          <div
            key={key}
            className="w-full h-56 bg-purple-100 p-4 flex flex-col items-center justify-center text-center shadow"
            onClick={goToPhotos(item)}
          >
            <p className="font-bold">#{item.id}</p>
            <p className="text-lg">Album {item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
