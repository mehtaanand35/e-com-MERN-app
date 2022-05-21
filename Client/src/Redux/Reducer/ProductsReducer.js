import { ActionTypes } from "../ActionType/ActionType";

const initialState = {
  products: [],
  menprods: [],
  womenprods: [],
  electronicprods: [],
  jeweleryprods: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PROD:
      return { ...state, products: payload };
    case ActionTypes.MEN_PROD:
      return { ...state, menprods: payload };
    case ActionTypes.WOMEN_PROD:
      return { ...state, womenprods: payload };
    case ActionTypes.ELECTRONIC_PROD:
      return { ...state, electronicprods: payload };
    case ActionTypes.JEWELERY_PROD:
      return { ...state, jeweleryprods: payload };

    default:
      return state;
  }
};

export const selectedProdReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PROD:
      return { ...state, ...payload };
    case ActionTypes.SELECTERD_MEN_PROD:
      return { ...state, ...payload };
    case ActionTypes.SELECTERD_WOMEN_PROD:
      return { ...state, ...payload };
    case ActionTypes.SELECTERD_ELECTRONIC_PROD:
      return { ...state, ...payload };
    case ActionTypes.SELECTERD_JEWELERY_PROD:
      return { ...state, ...payload };

    case ActionTypes.REMOVE_PROD:
      return {};
    case ActionTypes.REMOVE_MEN_PROD:
      return {};
    case ActionTypes.REMOVE_WOMEN_PROD:
      return {};
    case ActionTypes.REMOVE_ELECTRONIC_PROD:
      return {};
    case ActionTypes.REMOVE_JEWELERY_PROD:
      return {};

    default:
      return state;
  }
};
