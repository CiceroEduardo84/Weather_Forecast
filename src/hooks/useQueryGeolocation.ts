import { useQuery } from "@tanstack/react-query";

type Position = {
  latitude: number;
  longitude: number;
};

export function useQueryGeolocation() {
  async function getQueryGeolocation() {
    return new Promise<Position>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  const query = useQuery({
    queryKey: ["getQueryGeolocation"],
    queryFn: getQueryGeolocation,
  });

  return { ...query };
}
