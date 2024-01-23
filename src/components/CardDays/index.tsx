import { Container } from "./style";

type Props = {
  day: string;
  img: string;
  min: number;
  max: number;
};

export function CardDays({ day, img, min, max }: Props) {
  return (
    <Container>
      <h1>{day}</h1>
      <img src={img} />
      <span>
        {min}
        {max}
      </span>
    </Container>
  );
}
