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
  const [content, setContent] = useState();

  const handleRemoveInfos = useCallback(() => {
    setElements((oldValue) => oldValue.filter((item) => item.id !== "modal"));
  }, [setElements]);

  const handleRemoveMission = useCallback(() => {
    setElements((oldValue) => oldValue.filter((item) => item.id !== "mission"));
  }, [setElements]);

  const handleInfos = async (id, x, y) => {
    try {
      const { data: dataInfo } = await api.get(`objectdetail/${id}`);

      const details = BuildCircles({
        data: [
          {
            id: "modal",
            id_do_pai: id,
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
              position_x: x,
              position_y: y,
            },
            style: {
              background: " none",
              border: "none",
              boxShadow: "none",
            },
            position: {
              x: x + 200,
              y: y - 220,
            },
            isHidden: false,
          },
        ],
        handleInfos,
        handleRemoveInfos,
        handleRemoveMission,
        handleMission,
      });
      setElements((oldValue) => [...oldValue, ...details]);
    } catch (error) {}
  };

  const handleMission = async (id, x, y) => {
    console.log("x", x);
    try {
      const { data: dataInfo } = await api.get(`objectdetail/${id}`);

      const mission = BuildCircles({
        data: [
          {
            id: "mission",
            nivel_ordem: "mission",
            category: dataInfo[0].nivel_id,
            subordinateTo: [],
            subordinates: [],
            data: {
              name: dataInfo[0].pessoa_nome,
              category: dataInfo[0].nivel_id,
              area: dataInfo[0].area_descricao,
            },
            style: {
              background: " none",
              border: "none",
              boxShadow: "none",
            },
            position: {
              x: x + 380,
              y: y + 200,
            },
            isHidden: false,
          },
        ],
        handleInfos,
        handleRemoveInfos,
        handleRemoveMission,
      });
      setElements((oldValue) => [...oldValue, ...mission]);
    } catch (error) {}
  };

  const circlesInfo = BuildCircles({
    data: originalData,
    handleInfos,
    handleRemoveInfos,
    handleRemoveMission,
    handleMission,
  });

  useEffect(() => {
    if (content) {
      setElements(
        BuildCircles({
          data: content,
          handleInfos,
          handleRemoveInfos,
          handleRemoveMission,
          handleMission,
        })
      );
      setOriginalData(content);
    }
  }, [content, handleRemoveInfos, handleRemoveMission]);

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
        handleMission,
        handleRemoveInfos,
        handleRemoveMission,
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
