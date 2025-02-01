import React from "react";
import "../../components/Button/button.css";
import { RotatingLines } from "react-loader-spinner";
import Tooltip from "@mui/material/Tooltip";

const BTN = ({ onClick, name, classValue, disabled, imgPath, imgClassValue, loading }) => {
  return (
    <Tooltip title={disabled ? "Please fill all fields" : ""} disableHoverListener={!disabled} leaveDelay={500}>
      <button
        onClick={onClick}
        className={classValue}
        disabled={disabled}
        aria-disabled={disabled ? "true" : "false"}
      >
        {loading ? (
          <RotatingLines strokeColor="black" strokeWidth="5" animationDuration="0.75" width="15" visible={true} />
        ) : (
          <>
            {imgPath && <img src={imgPath} className={imgClassValue} alt="button-icon" />}
            {name}
          </>
        )}
      </button>
    </Tooltip>
  );
};

export default BTN;
