import { Container } from "./style";
import page404 from "../../assets/erro404.svg"

export function PageNotFound() {
  return (
    <Container>
      <h1>PageNotFound</h1>
      <img src={page404} alt="" />
    </Container>
  );
}
