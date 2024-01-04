import { useEffect, useState } from "react";
import { Container } from "./style";

type Position = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

export function App() {
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

  return (
    <Container>
      <h1>Header</h1>
      <h2>
        {latitude} {longitude}
      </h2>
    </Container>
  );
}
