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
  console.log("content", content);

  const handleRemoveInfos = useCallback(() => {
    setElements((oldValue) => oldValue.filter((item) => item.id !== "modal"));
    console.log("remove info");
  }, []);

  const handleRemoveMission = useCallback(() => {
    console.log("remove mission");
    setElements((oldValue) => oldValue.filter((item) => item.id !== "mission"));
  }, []);

  const handleInfos = useCallback(async (id, x, y) => {
    // const find = content?.findIndex((item) => item.pessoa_objeto_id === id);
    // console.log("findindex", find)
    try {
      const { data: dataInfo } = await api.get(`objectdetail/${id}`);
      console.log("seta info");
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
              zIndex:'200',
              position: 'absolute',
            },
            position: {
              x: x - 30,
              y: y - 230,
            },
            isHidden: false,
          },
        ],
        handleInfos,
        handleRemoveInfos,
        handleRemoveMission,
        handleMission,
      });
      setElements((oldValue) => [...details, ...oldValue]);
    } catch (error) {}
  }, []);

  const handleMission = async (id, x, y) => {
    try {
      console.log("seta mission");
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
              descricao: dataInfo[0].objeto_detalhe.descricao,
              category: dataInfo[0].nivel_id,
              texto: dataInfo[0].objeto_detalhe.texto,
            },
            style: {
              background: " none",
              border: "none",
              boxShadow: "none",
              zIndex:'200',
              position: 'absolute',
            },
            position: {
              x: x -190,
              y: y - 400,
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
  }, [content]);

  const getDataDiagram = async () => {
    //tratar if aqui
    const dataApi = await getAllStructure();
    const getLinks = [];
    dataApi.forEach((element) => {
      if (
        element?.objeto_idsuperior &&
        element?.nivel_ordem !== 5 &&
        element?.nivel_ordem !== 6
      ) {
        element?.objeto_idsuperior.forEach((item) => {
          getLinks.push({
            id: `e${element?.pessoa_objeto_id}-${item}`,
            source: `${element?.pessoa_objeto_id}`,
            target: `${item}`,
            type: "straight",
            style: { stroke: "#a9b7b7", strokeWidth: "5", opacity: "1" },
            animated: false,
            isHidden: false,
          });
        });
      }
    });
    console.log("getLinks", getLinks);
    setContent([...dataApi, ...getLinks]); //[...dataApi, ...getLinks]
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
