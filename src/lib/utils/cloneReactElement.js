import { cloneElement } from "react";

const cloneReactElement = (elem, attributes) => {
  const clonedElement = cloneElement(elem, attributes);

  return clonedElement;
};

export default cloneReactElement;
