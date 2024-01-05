import { useEffect, useState } from "react";
import { Container } from "./style";
import { Outlet } from "react-router-dom";

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

  console.log(latitude, longitude);

  return (
    <Container>
      <header>
        <h1>Header</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h1>footer</h1>
      </footer>
    </Container>
  );
}
