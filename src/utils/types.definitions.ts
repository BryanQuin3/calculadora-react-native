export type ButtonType = {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  doubleSize?: boolean;
  action?: (text: string) => void | string;
};

export type ButtonFunctionsType = {
  [key: string]: (text: string) => void | string;
};
