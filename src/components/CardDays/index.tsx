import { Container } from "./style";

type Props = {
  name: string;
  img: string;
  min: number;
  max: number;
};

export function CardDays({ name, img, min, max }: Props) {
  return (
    <Container>
      <h1>{name}</h1>
      <img src={img} />
      <span>
        {min}
        {max}
      </span>
    </Container>
  );
}
