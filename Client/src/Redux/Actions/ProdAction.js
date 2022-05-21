import { ActionTypes } from "../ActionType/ActionType";

export const SetProd = (prods) => {
  return {
    type: ActionTypes.SET_PROD,
    payload: prods,
  };
};

export const SelectedProd = (prod) => {
  return {
    type: ActionTypes.SELECTED_PROD,
    payload: prod,
  };
};
export const RemoveProd = () => {
  return {
    type: ActionTypes.REMOVE_PROD,
  };
};
export const MenProd = (prods) => {
  return {
    type: ActionTypes.MEN_PROD,
    payload: prods,
  };
};
export const SelectedMenProd = (prod) => {
  return {
    type: ActionTypes.SELECTERD_MEN_PROD,
    payload: prod,
  };
};
export const removeMenProd = () => {
  return {
    type: ActionTypes.REMOVE_MEN_PROD,
  };
};

export const WomenProd = (prods) => {
  return {
    type: ActionTypes.WOMEN_PROD,
    payload: prods,
  };
};
export const SelectedWomenProd = (prod) => {
  return {
    type: ActionTypes.SELECTERD_WOMEN_PROD,
    payload: prod,
  };
};
export const removeWomenProd = () => {
  return {
    type: ActionTypes.REMOVE_MEN_PROD,
  };
};

export const ElectronicProd = (prods) => {
  return {
    type: ActionTypes.ELECTRONIC_PROD,
    payload: prods,
  };
};
export const SelectedElectronicProd = (prod) => {
  return {
    type: ActionTypes.SELECTERD_ELECTRONIC_PROD,
    payload: prod,
  };
};
export const removeElectronicProd = () => {
  return {
    type: ActionTypes.REMOVE_ELECTRONIC_PROD,
  };
};

export const JeweleryProd = (prods) => {
  return {
    type: ActionTypes.JEWELERY_PROD,
    payload: prods,
  };
};
export const SelectedJeweleryProd = (prod) => {
  return {
    type: ActionTypes.SELECTERD_JEWELERY_PROD,
    payload: prod,
  };
};
export const removeJeweleryProd = () => {
  return {
    type: ActionTypes.REMOVE_ELECTRONIC_PROD,
  };
};

