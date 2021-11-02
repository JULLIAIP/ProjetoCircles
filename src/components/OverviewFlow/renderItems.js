import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faGift,
  faInfo,
  faMobile,
  faPhoneAlt,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  ButtonContainer,
  DataContainer,
  ImgContainer,
  WrapperPopover,
  ButtonActividades,
} from "./styles";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// import ActivyPopover from "./activePopover";

export function BuildCircles({
  data: content,
  handleInfos,
  handleRemoveInfos,
  handleMission,
  handleRemoveMission,
}) {
  const tags = [];

  content?.forEach((element) => {
    if (element?.nivel_ordem === 1) {
      tags.push({
        id: element?.pessoa_objeto_id,
        data: {
          label: (
            <div
              key={element?.pessoa_objeto_id}
              id={element?.pessoa_objeto_id}
              className="default-item lvl-1"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon className="avatar-icon" icon={faUser} />
              <div className="more-infos">
                <button>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <button
                  onClick={() =>
                    handleInfos(
                      element?.pessoa_objeto_id,
                      element?.ponto_x,
                      element.ponto_y
                    )
                  }
                >
                  <FontAwesomeIcon icon={faInfo} />
                </button>
              </div>
              <div className="user-texts">
                <label className="user-pessoa_descricaolonga">
                  {element?.pessoa_descricaolonga}
                </label>
                <label className="user-function">
                  {element?.cargo_descricaocurta}
                </label>
                <label className="user-area">
                  {element?.area_descricaolonga}
                </label>
              </div>
            </div>
          ),
        },
        style: {
          display: "flex",
          padding: 0,
          width: 100,
          height: 100,
          alignItems: "center",
          borderRadius: "50%",
          background: "#e1e1e1",
          border: "15px solid  #6badf0",
          opacity: 1,

          cursor: "pointer",
          boxShadow: "1px 3px 6px 1px gray",
        },
        position: { x: element?.ponto_x, y: element.ponto_y },
      });

      return;
    }
    if (element?.nivel_ordem === 2) {
      tags.push({
        id: element?.pessoa_objeto_id,
        data: {
          label: (
            <div
              key={element?.pessoa_objeto_id}
              id={element?.pessoa_objeto_id}
              className="default-item lvl-2"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon className="avatar-icon" icon={faUser} />
              <div className="more-infos">
                <button>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <button
                  onClick={() =>
                    handleInfos(
                      element?.pessoa_objeto_id,
                      element?.ponto_x,
                      element.ponto_y
                    )
                  }
                >
                  <FontAwesomeIcon icon={faInfo} />
                </button>
              </div>
              <div className="user-texts">
                <label className="user-pessoa_descricaolonga">
                  {element?.pessoa_descricaolonga}
                </label>
                <label className="user-function">
                  {element?.cargo_descricaocurta}
                </label>
                <label className="user-area">
                  {element?.area_descricaolonga}
                </label>
              </div>
            </div>
          ),
        },
        style: {
          display: "flex",
          padding: 0,
          width: 100,
          height: 100,
          alignItems: "center",
          borderRadius: "50%",
          background: "#e1e1e1",
          border: "15px solid #1e279a",
          cursor: "pointer",
          boxShadow: "1px 3px 6px 1px gray",
          opacity: 1,
        },
        position: { x: element?.ponto_x, y: element?.ponto_y },
      });
      if (element?.objeto_idsuperior && element?.objeto_idsuperior?.length) {
        element?.objeto_idsuperior.forEach((item) => {
          tags.push({
            id: `e${element?.pessoa_objeto_id}-${item}`,
            source: `${element?.pessoa_objeto_id}`,
            target: `${item}`,
            type: "straight",
            style: { stroke: "#a9b7b7", strokeWidth: "5" },
            animated: false,
            isHidden: false,
          });
        });
      }
      return;
    }
    if (element?.nivel_ordem === 3) {
      tags.push({
        id: element?.pessoa_objeto_id,
        data: {
          label: (
            <div
              key={element?.pessoa_objeto_id}
              id={element?.pessoa_objeto_id}
              className="default-item lvl-3"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon className="avatar-icon" icon={faUser} />
              <div className="more-infos">
                <button>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <button
                  onClick={() =>
                    handleInfos(
                      element?.pessoa_objeto_id,
                      element?.ponto_x,
                      element.ponto_y
                    )
                  }
                >
                  <FontAwesomeIcon icon={faInfo} />
                </button>
              </div>
              <div className="user-texts">
                <label className="user-pessoa_descricaolonga">
                  {element?.pessoa_descricaolonga}
                </label>
                <label className="user-function">
                  {element?.cargo_descricaocurta}
                </label>
                <label className="user-area">
                  {element?.area_descricaolonga}
                </label>
              </div>
            </div>
          ),
        },
        style: {
          display: "flex",
          padding: 0,
          width: 100,
          height: 100,
          alignItems: "center",
          borderRadius: "50%",
          background: "#e1e1e1",
          border: "15px solid  #9172a6",
          opacity: 1,
          cursor: "pointer",
          boxShadow: "1px 3px 6px 1px gray",
        },
        position: { x: element?.ponto_x, y: element?.ponto_y },
      });
      if (element?.objeto_idsuperior && element?.objeto_idsuperior?.length) {
        element?.objeto_idsuperior.forEach((item) => {
          tags.push({
            id: `e${element?.pessoa_objeto_id}-${item}`,
            source: `${element?.pessoa_objeto_id}`,
            target: `${item}`,
            type: "straight",
            style: { stroke: "#a9b7b7", strokeWidth: "5" },
            animated: false,
            isHidden: false,
          });
        });
      }
      return;
    }
    if (element?.nivel_ordem === 4) {
      tags.push({
        id: element?.pessoa_objeto_id,
        data: {
          label: (
            <div
              key={element?.pessoa_objeto_id}
              id={element?.pessoa_objeto_id}
              className="default-item lvl-4"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon className="avatar-icon" icon={faUser} />
              <div className="more-infos">
                <button>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <button
                  onClick={() =>
                    handleInfos(
                      element?.pessoa_objeto_id,
                      element?.ponto_x,
                      element.ponto_y
                    )
                  }
                >
                  <FontAwesomeIcon icon={faInfo} />
                </button>
              </div>
              <div className="user-texts">
                <label className="user-pessoa_descricaolonga">
                  {element?.pessoa_descricaolonga}
                </label>
                <label className="user-function">
                  {element?.cargo_descricaocurta}
                </label>
                <label className="user-area">
                  {element?.area_descricaolonga}
                </label>
              </div>
            </div>
          ),
        },
        style: {
          display: "flex",
          padding: 0,
          width: 100,
          height: 100,
          alignItems: "center",
          borderRadius: "50%",
          background: "#e1e1e1",
          border: "15px solid  #db8a4f",
          opacity: 1,
          cursor: "pointer",
          boxShadow: "1px 3px 6px 1px gray",
        },
        position: { x: element?.ponto_x, y: element?.ponto_y },
      });
      if (element?.objeto_idsuperior && element?.objeto_idsuperior?.length) {
        element?.objeto_idsuperior.forEach((item) => {
          tags.push({
            id: `e${element?.pessoa_objeto_id}-${item}`,
            source: `${element?.pessoa_objeto_id}`,
            target: `${item}`,
            type: "straight",
            style: { stroke: "#a9b7b7", strokeWidth: "5" },
            animated: false,
            isHidden: false,
          });
        });
      }
      return;
    }
    if (element?.nivel_ordem === 5) {
      tags.push({
        id: element?.pessoa_objeto_id,
        data: {
          label: (
            <div
              key={element?.pessoa_objeto_id}
              id={element?.pessoa_objeto_id}
              className="default-item lvl-6"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon className="avatar-icon" icon={faUser} />
              <div className="more-infos">
                <button>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <button
                  onClick={() =>
                    handleInfos(
                      element?.pessoa_objeto_id,
                      element?.ponto_x,
                      element.ponto_y
                    )
                  }
                >
                  <FontAwesomeIcon icon={faInfo} />
                </button>
              </div>
              <div className="user-texts">
                <label className="user-pessoa_descricaolonga">
                  {element?.pessoa_descricaolonga}
                </label>
                <label className="user-function">
                  {element?.cargo_descricaocurta}
                </label>
                <label className="user-area">
                  {element?.area_descricaolonga}
                </label>
              </div>
            </div>
          ),
        },
        style: {
          display: "flex",
          padding: 0,
          width: 80,
          height: 80,
          alignItems: "center",
          borderRadius: "50%",
          background: "#e1e1e1",
          border: "10px solid  #62e8e9",
          opacity: 1,
          cursor: "pointer",
          boxShadow: "1px 3px 6px 1px gray",
        },
        position: { x: element?.ponto_x, y: element?.ponto_y },
      });

      return;
    }
    if (element?.nivel_ordem === 6) {
      tags.push({
        id: element?.pessoa_objeto_id,
        data: {
          label: (
            <div className="lvl-7">
              <FontAwesomeIcon className="avatar-icon" icon={faUser} />
              <button
                onClick={() =>
                  handleInfos(
                    element?.pessoa_objeto_id,
                    element?.ponto_x,
                    element.ponto_y
                  )
                }
              >
                <FontAwesomeIcon icon={faInfo} />
              </button>

              <div className="user-texts">
                <span className="user-PESSOA_SDescricaoLonga">
                  {element?.pessoa_descricaolonga}
                </span>
                <span className="user-function">
                  {element?.cargo_descricaocurta}
                </span>
              </div>
            </div>
          ),
        },
        style: {
          display: "flex",
          width: 150,
          height: 50,
          padding: "2",
          alignItems: "center",
          borderRadius: "20px",
          background: "#e1e1e1",
          border: "none",
          cursor: "pointer",
          boxShadow: "1px 3px 6px 1px gray",
          opacity: "80%",
        },
        position: { x: element?.ponto_x, y: element?.ponto_y },
      });
      if (element?.objeto_idsuperior) {
        element?.objeto_idsuperior.forEach((item) => {
          tags.push({
            id: `e${element?.pessoa_objeto_id}-${item}`,
            source: `${element?.pessoa_objeto_id}`,
            target: `${item}`,
            type: "output",
            style: { stroke: " #a9b7b7", strokeWidth: "5", opacity: "80%" },
            animated: true,
            isHidden: false,
          });
        });
      }
      return;
    }
    if (element?.nivel_ordem === "details") {
      tags.push({
        id: element?.id,
        data: {
          label: (
            <div>
              <ImgContainer color={element.category}>
                {element.img ? (
                  <img src={element.data.img} />
                ) : (
                  <FontAwesomeIcon icon={faUser} />
                )}
              </ImgContainer>
              <WrapperPopover>
                <DataContainer color={element.category}>
                  <div>
                    <h1>{element.data.name}</h1>
                    <button>
                      <FontAwesomeIcon icon={faLinkedinIn} className="in" />
                    </button>
                  </div>
                  <h2 color={element.category}>{element.data.function}</h2>

                  <p>{element.data.texto}</p>

                  <label>
                    <FontAwesomeIcon icon={faEnvelope} />
                    {element.data.email}
                  </label>
                  <label>
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    {element.data.telefone}
                  </label>
                  <label>
                    <FontAwesomeIcon icon={faMobile} />
                    {element.data.celular}
                  </label>
                  <label>
                    <FontAwesomeIcon icon={faGift} />
                    {element.data.data_de_nascimento}
                  </label>
                  <button
                    className="button"
                    onClick={() =>
                      handleMission(
                        element?.id_do_pai,
                        element?.data.position_x,
                        element.data.position_y
                      )
                    }
                  >
                    Descrição do Cargo
                  </button>
                </DataContainer>

                <ButtonContainer color={element?.category}>
                  <button className="more-top" onClick={handleRemoveInfos}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>

                  <button>
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                </ButtonContainer>
              </WrapperPopover>

              <div>
                <ButtonActividades color={element?.category}>
                  <button>Missão da Área</button>
                  <button>Unidade</button>
                  <button>Admissão</button>
                </ButtonActividades>
              </div>
            </div>
          ),
        },
        style: element?.style,
        position: { x: element?.position?.x, y: element?.position?.y },
      });
      return;
    }
    if (element?.nivel_ordem === "mission") {
      tags.push({
        id: element?.id,
        data: {
          label: (
            <div>
              <WrapperPopover>
                <DataContainer color={element.category}>
                  <div>
                    <h1>{element.data.name}</h1>
                    <button>
                      <FontAwesomeIcon icon={faLinkedinIn} className="in" />
                    </button>
                  </div>
                  <h2 color={element.category}>{element.data.function}</h2>
                  <p>{element.data.descricao}</p>
                </DataContainer>
              </WrapperPopover>
              <ButtonContainer color={element?.category}>
                <button
                  className="misison-button"
                  onClick={handleRemoveMission}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </ButtonContainer>
            </div>
          ),
        },
        style: element?.style,
        position: { x: element?.position?.x, y: element?.position?.y },
      });
      return;
    }
    if (element?.source) {
      tags.push(element);
    }
  });
  console.log("tags", tags);
  return tags;
}
