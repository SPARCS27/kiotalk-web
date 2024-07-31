export enum MenuNameEnum {
  BTD = '베이컨 토마토 디럭스',
  MCS = '맥스파이 상하이 버거',
}

export enum MenuSizeEnum {
  M = '미디움',
  L = '라지',
}

export enum MenuDrinkEnum {
  HT = '환타',
  CC = '콜라',
}

export type MenuType = {
  name: MenuNameEnum;
  isCombo: boolean;
  size: MenuSizeEnum;
  drink: string;
  purchase: number;
};
