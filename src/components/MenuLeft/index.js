import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { InputBar, Legendas, SeeAll, WrapperMenuLeft } from "./style";
import logo from "../../assets/Logo-Norte-Energia-Horizontal.png";
import { useCirclesContext } from "../../global/context";
import { BuildCircles } from "../OverviewFlow/renderItems";
import conexao from "../../assets/logo-conexao-3.png";
import axios from "axios";

const MenuLeft = () => {
  const [search, setSearch] = useState();
  const {
    setElements,
    originalData,
    content,
    handleInfos,
    handleRemoveInfos,

    circlesInfo,
  } = useCirclesContext();

  const [niveis, setNiveis] = useState();
  const getLevel = () => {
    axios
      .get("http://177.84.146.212:9999/level")
      .then((res) => {
        setNiveis(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function filterByNivel(nivel) {
    const nivelFilter = content?.filter((item) => item.nivel_ordem <= nivel);

    await setElements(
      BuildCircles({
        data: nivelFilter,
        handleInfos,
        handleRemoveInfos,
      })
    );
  }
  const showAll = () => {
    setElements(circlesInfo);
  };
  function searchBy(text) {
    const nameSearched = content.filter((item) =>
      item?.pessoa_descricaolonga?.toUpperCase().includes(text.toUpperCase())
    );

    const functionSearched = content?.filter((item) =>
      item?.cargo_descricaolonga?.toUpperCase().includes(text.toUpperCase())
    );

    const areaSearched = content?.filter((item) =>
      item?.area_descricaolonga?.toUpperCase().includes(text.toUpperCase())
    );

    setElements(
      BuildCircles({
        data: [...nameSearched, ...functionSearched, ...areaSearched],
        handleInfos,
        handleRemoveInfos,
      })
    );
  }
  useEffect(() => {
    getLevel();
  }, []);
  return (
    <WrapperMenuLeft>
      <img src={conexao} alt="logo-norte-energia" />
      <InputBar>
        <input
          placeholder="|Pesquisar Pessoas|cargos"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => searchBy(search)}>
          <FontAwesomeIcon icon={faSearch} color={"#268898"} />
        </button>
      </InputBar>
      {niveis ? (
        <div>
          {niveis.map((cargo) => (
            <Legendas key={cargo.ordem} nivel={cargo.ordem}>
              <p
                onClick={() => filterByNivel(cargo.ordem)}
                onDoubleClick={() =>
                  setElements(
                    BuildCircles({
                      data: originalData,
                      handleInfos,
                      handleRemoveInfos,
                    })
                  )
                }
              >
                {cargo.descricao}
              </p>
            </Legendas>
          ))}
        </div>
      ) : (
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          style={{ width: "20%", height: "20%", color: "#ee7c32" }}
        />
      )}

      <SeeAll onClick={showAll}>Mostrar Tudo</SeeAll>

      <img src={logo} alt="logo-norte-energia" id="logo" />
    </WrapperMenuLeft>
  );
};

export default MenuLeft;
