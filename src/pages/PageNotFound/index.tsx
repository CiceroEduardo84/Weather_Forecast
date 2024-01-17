import { Container } from "./style";
import page404 from "../../assets/erro404.svg";
import { useNavigate } from "react-router-dom";

export function PageNotFound() {
  const navigate = useNavigate();

  const returnPage = () => navigate(-1);

  return (
    <Container>
      <div className="boxPageNotFound">
        <img src={page404} />
        <h1>Page not found</h1>
      </div>
      
      <div className="boxReturnPage">
        <button onClick={returnPage}>Voltar</button>
      </div>
    </Container>
  );
}
