import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
} from "react";

import { BuildCircles } from "../components/OverviewFlow/renderItems";
import { api, getAllStructure } from "../services/api";

export const Circles = createContext();

const ElementsCirclesProvider = ({ children }) => {
  const [elements, setElements] = useState();
  const [originalData, setOriginalData] = useState();
  const [seeActivity, setSeeActivity] = useState(true);
  const [seeMission, setSeeMission] = useState(false);
  const [content, setContent] = useState();

  const handleRemoveInfos = useCallback(() => {
    setElements((oldValue) => oldValue.filter((item) => item.id !== "modal"));
  }, [setElements]);

  const handleRemoveActivitys = () => {
    setSeeActivity(!seeActivity);
  };
  const handleSeeMission = () => {
    setSeeMission(!seeMission);
  };

  const handleInfos = async (id) => {
    try {
      const { data: dataInfo } = await api.get(`objectdetail/${id}`);

      const details = BuildCircles({
        data: [
          {
            id: "modal",
            nivel_ordem: "details",
            category: dataInfo[0].nivel_id,
            subordinateTo: [],
            subordinates: [],
            data: {
              name: dataInfo[0].pessoa_nome,
              category: dataInfo[0].nivel_id,
              function: dataInfo[0].cargo_descricao,
              texto: dataInfo[0].objeto_detalhe.texto,
              area: dataInfo[0].area_descricao,
              email: dataInfo[0].pessoa_email,
              telefone: dataInfo[0].pessoa_celular,
              celular: dataInfo[0].pessoa_celular,
              data_de_nascimento: dataInfo[0].pessoa_aniversario,
              img: dataInfo[0].pessoa_foto,
            },
            style: {
              background: " none",
              border: "none",
              boxShadow: "none",
            },
            position: {
              x: 100,
              y: -250,
            },
            isHidden: false,
          },
        ],
        handleInfos,
        handleRemoveInfos,
        seeActivity,
        handleRemoveActivitys,
        handleSeeMission,
        seeMission,
      });
      setElements((oldValue) => [...oldValue, ...details]);
    } catch (error) {}
  };

  const circlesInfo = BuildCircles({
    data: originalData,
    handleInfos,
    handleRemoveInfos,
    seeActivity,
    handleRemoveActivitys,
    handleSeeMission,
    seeMission,
  });

  useEffect(() => {
    if (content) {
      setElements(
        BuildCircles({
          data: content,
          handleInfos,
          handleRemoveInfos,
          seeActivity,
          handleRemoveActivitys,
        })
      );
      setOriginalData(content);
    }
  }, [content, handleRemoveInfos]);

  const getDataDiagram = async () => {
    const dataApi = await getAllStructure();
    setContent(dataApi);
  };

  useEffect(() => {
    getDataDiagram();
  }, []);

  return (
    <Circles.Provider
      value={{
        circlesInfo,
        content,
        elements,
        originalData,
        setElements,
        setOriginalData,
        handleInfos,
        handleRemoveInfos,
        handleRemoveActivitys,
      }}
    >
      {children}
    </Circles.Provider>
  );
};
const useCirclesContext = () => {
  const context = useContext(Circles);

  if (!context) {
    throw new Error("Error");
  }

  return context;
};

export { useCirclesContext, ElementsCirclesProvider };
