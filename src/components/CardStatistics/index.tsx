import { Container } from "./style";

type Props = {
  img: string;
  name: string;
  data: number;
  type: string;
};

export function CardStatistics({ img, name, data, type }: Props) {
  return (
    <Container>
      <img src={img} />
      <div className="datas">
        <span>{name}</span>
        <strong>
          {data} <span>{type}</span>
        </strong>
      </div>
    </Container>
  );
}
