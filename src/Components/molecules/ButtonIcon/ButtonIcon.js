import React from "react";
import Icon from "../../atoms/Icons/Icon";

function ButtonIcon(props) {
  return (
    <div className={props.className} onClick={() => props.onClick()}>
      <Icon icon={props.icon} />
    </div>
  );
}

export default ButtonIcon;
