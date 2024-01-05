import { Container } from "./style";
import { useEffect, useState } from "react";

type Position = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

export function Home() {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, []);

  console.log(latitude, longitude);

  return (
    <Container>
      <h1>Home</h1>
    </Container>
  );
}
