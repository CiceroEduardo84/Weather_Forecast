import { Container } from "./style";
import imgSearch from "../../assets/Search.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQuerySearchCity } from "../../hooks/useQuerySearchCity";
import { ChangeEvent, useEffect } from "react";

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
    navigate(`/`);
    console.log(search);
    reset();
  };

  function searchOnchage(event: ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  useEffect(() => {
    data?.map((data) => {
      console.log(data.name);
    });
  }, [data]);

  return (
    <Container>
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
    </Container>
  );
}
