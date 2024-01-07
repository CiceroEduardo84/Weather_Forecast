import { useQuery } from "@tanstack/react-query";

type Position = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

export function useQueryGeolocation() {
  // coordinated from the browser
  async function getQueryGeolocation() {
    return new Promise<{ latitude: number; longitude: number }>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position: Position) => {
            const { latitude, longitude } = position.coords;

            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error.code == 1 ? "Localização não encontrada!" : error);
          }
        );
      }
    );
  }

  const dataQuery = useQuery({
    queryKey: ["getQueryGeolocation"],
    queryFn: getQueryGeolocation,
  });

  return {...dataQuery};
}
