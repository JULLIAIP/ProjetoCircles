import React, { useRef, useState, useCallback, useEffect } from "react";

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "react-flow-renderer";

import { BuildCircles } from "./renderItems";
import { uuid } from "uuidv4";
import { useCirclesContext } from "../../global/context";

const OverviewFlow = () => {
  const {
    elements,
    setElements,
    content,
    handleInfos,
    handleRemoveInfos,
    showAll,
  } = useCirclesContext();

  const [key, setKey] = useState(uuid());
  const [loaded, setLoaded] = useState(false);

  /** @type {React.MutableRefObject<HTMLDivElement>} */
  const itemRef = useRef(null);
  /** useRef used for count **/
  const countRef = React.useRef(0);
  /** useRef used for timer id **/
  const timerRef = React.useRef(null);

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const onLoad = useCallback((reactFlowInstance) => {
    reactFlowInstance.fitView();
    setLoaded(true);
  }, []);

  function handleDobleClick(element) {
    const nodes = [];

    const find = content.find((item) => item.pessoa_objeto_id === +element.id);

    function recursive(findItems) {
      const subs = findItems.area_subordinados || {};

      if (!subs.length) {
        return;
      }

      content.forEach((item) => {
        if (subs.includes(item.pessoa_objeto_id)) {
          nodes.push(item);

          recursive(item);
        }
      });
    }

    recursive(find);
    nodes.push(find);

    if (nodes.length > 0) {
      setElements(
        BuildCircles({
          data: [...nodes],
          handleInfos,
          handleRemoveInfos,

          showAll,
        })
      );
      setKey(uuid());
    }
  }

  const onElementClick = useCallback(
    (element) => {
      const find = content.find(
        (item) => item.pessoa_objeto_id === +element.id
      );

      const newElements = [find];

      find?.objeto_idsuperior?.forEach((idSuperior) => {
        const objSubTo = content.find(
          (obj) => obj.pessoa_objeto_id === idSuperior
        );

        newElements.push(objSubTo || {});
      });

      find?.area_subordinados?.forEach((idSubordinados) => {
        const objSubo = content.find(
          (obj) => obj.pessoa_objeto_id === idSubordinados
        );

        newElements.push(objSubo || {});
      });

      if (newElements.length > 0) {
        setElements(
          BuildCircles({
            data: newElements,
            handleInfos,
            handleRemoveInfos,
          })
        );
        setKey(uuid);
      }

      return;
    },
    [content, setElements]
  );
  const handleClick = (event, element) => {
    const isDoubleClick = countRef.current + 1 === 2;
    const timerIsPresent = timerRef.current;

    if (timerIsPresent && isDoubleClick) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
      countRef.current = 0;
      if (element.id !== "modal" && element.id !== "mission") {
        handleDobleClick(element);
      } else {
      }
    }
    if (!timerIsPresent) {
      countRef.current = countRef.current + 1;
      const timer = setTimeout(() => {
        clearTimeout(timerRef.current);
        timerRef.current = null;
        countRef.current = 0;
        if (element.id !== "modal" && element.id !== "mission") {
          onElementClick(element);
        } else {
        }
      }, 200);
      timerRef.current = timer;
    }
  };

  useEffect(() => {
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, [key]);

  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onElementClick={handleClick}
      onConnect={onConnect}
      onLoad={onLoad}
      snapToGrid={true}
      snapGrid={[15, 15]}
      ref={itemRef}
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === "input") return "#0041d0";
          if (n.type === "output") return "#ff0072";
          if (n.type === "default") return "#1a192b";

          return "#eee";
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return "#fff";
        }}
        nodeBorderRadius={2}
      />
      <Controls />
      <Background variant="dots" gap={26} size={1} style={{ opacity: "50%" }} />
    </ReactFlow>
  );
};

export default OverviewFlow;
