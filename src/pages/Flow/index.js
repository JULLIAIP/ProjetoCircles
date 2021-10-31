import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OverviewFlow from "../../components/OverviewFlow";
import { useCirclesContext } from "../../global/context";
import { WrapperFlowSection } from "./styles";

export function Flow() {
  const { content } = useCirclesContext();
  return (
    <WrapperFlowSection>
      {content ? (
        <OverviewFlow />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            style={{
              width: "20%",
              height: "20%",
              color: "#ee7c32",
              opacity: "50%",
            }}
          />
        </div>
      )}
    </WrapperFlowSection>
  );
}
