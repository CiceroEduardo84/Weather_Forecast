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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position: Position) => {
        const { latitude, longitude } = await position.coords;

        return { latitude, longitude };
      });
    }
  }

  const dataQuery = useQuery({
    queryKey: ["getQueryGeolocation"],
    queryFn: getQueryGeolocation,
  });
  console.log(dataQuery);

  return dataQuery;
}
