import { Container } from "./style";
import iconLocation from "../../assets/Location.png";

type Props = {
  name: string;
  region: string;
  country: string;
};

export function CardSearch({ name, region, country }: Props) {
  return (
    <Container>
      <img src={iconLocation} />
      <strong>
        {name}-{region}, {country}
      </strong>
    </Container>
  );
}
