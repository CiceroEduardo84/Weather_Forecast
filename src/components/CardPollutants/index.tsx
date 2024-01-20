import { Container } from "./style";

type Props = {
  name: string;
  data: number;
};

export function CardPollutants({ name, data }: Props) {
  return (
    <Container>
      <span>{data}</span>
      <span>{name}</span>
    </Container>
  );
}
