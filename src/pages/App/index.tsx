import { Container } from "./style";
import { Outlet } from "react-router-dom";

export function App() {
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
