import { Container } from "./style";

type Props = {
  name: string;
  region: string;
  country: string;
};

export function CardSearch({ name, region, country }: Props) {
  return (
    <Container>
      <h1>
        {name}-{region}, {country}
      </h1>
    </Container>
  );
}
