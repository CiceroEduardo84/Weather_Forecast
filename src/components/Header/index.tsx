import { Container } from "./style";
import imgSearch from "../../assets/Search.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useQuerySearchCity } from "../../hooks/useQuerySearchCity";
import { ChangeEvent, MouseEventHandler } from "react";
import { CardSearch } from "../CardSearch";

type Input = {
  search: string;
};

export function Header() {
  const { data, setCity } = useQuerySearchCity();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>();

  const onClick: MouseEventHandler = () => {
    setCity("");
    reset();
  };

  const onsubmit: SubmitHandler<Input> = (search) => {
    console.log(search);
    reset();
  };

  function searchOnchage(event: ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  function onPaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const text = e.clipboardData.getData("text");
    setCity(text);
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
              onPaste={onPaste}
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

      {data && data.length > 0 && (
        <div className="boxSearch">
          <div className="locations">
            {data.map(({ id, name, region, country }) => (
              <Link key={name} to={`/${name}`} onClick={onClick}>
                <CardSearch
                  key={id}
                  name={name}
                  region={region}
                  country={country}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}
