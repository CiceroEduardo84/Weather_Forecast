import { Container } from "./style";
import imgSearch from "../../assets/Search.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQuerySearchCity } from "../../hooks/useQuerySearchCity";
import { CardSearch } from "../CardSearch";
import { ChangeEvent } from "react";

type Input = {
  search: string;
};

export function Header() {
  const navigate = useNavigate();
  const { data, setCity } = useQuerySearchCity();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>();

  const onsubmit: SubmitHandler<Input> = (search) => {
    navigate(`/?q=Iguatu`);
    console.log(search);
    reset();
  };

  function searchOnchage(event: ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <section>
            <label htmlFor="inputSearch" className="srOnly">
              Pesquisar Cidade
            </label>
            <input
              type="text"
              id="inputSearch"
              autoFocus
              placeholder="Digite uma cidade..."
              {...register("search", {
                required: "Preencha o nome da cidade!",
                onChange: searchOnchage,
              })}
            />
            <span className="inputError">{errors.search?.message}</span>
          </section>

          <button type="submit">
            <img src={imgSearch} alt="Botão de pesquisa" />
          </button>
        </form>
      </div>

      <div className="boxSearch">
        {data?.map(({ id, name, region, country }) => {
          return (
            <CardSearch
              key={id}
              name={name}
              region={region}
              country={country}
            />
          );
        })}
      </div>
    </Container>
  );
}
