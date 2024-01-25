import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./style";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <Container>
      <Header />

      {/* Outlet is main */}
      <Outlet />

      <Footer />
    </Container>
  );
}
