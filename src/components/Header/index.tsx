import { Container } from "./style";
import imgSearch from "../../assets/Search.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Input = {
  search: string;
};

export function Header() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>();

  const onsubmit: SubmitHandler<Input> = (data) => {
    navigate(`/`);
    console.log(data);

    reset();
  };

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
