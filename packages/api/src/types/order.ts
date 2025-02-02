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

export enum OrderPickupStrategyEnum {
  TAKEOUT = '포장하기',
  DINE_IN = '먹고가기',
}

export type MenuType = {
  name: MenuNameEnum;
  isCombo: boolean;
  size: MenuSizeEnum;
  drink: MenuDrinkEnum;
  purchase?: number;
};

export enum OrderStepType {
  PAY = 'PAY',
  ORDER = 'ORDER',
  INITIAL = 'INITIAL',
  CARD = 'CARD',
  COMPLETE = 'COMPLETE',
}

export type OrderTaskType = {
  menus: MenuType[];
  pickupStrategy: OrderPickupStrategyEnum;
  totalPrice?: number;
  step: OrderStepType;
};

export enum OrderRoleEnum {
  user = 'user',
  assistant = 'assistant',
}

export type OrderMessageType = {
  content: string;
  role: OrderRoleEnum;
};

export type RecommendMenuType = {
  code: string;
  ingredients: string[];
  link: string;
  name: string;
  price: number;
};

export type RecommendType = {
  comment: string;
  menu: RecommendMenuType;
};

export type OrderResponse = {
  cart?: { task: OrderTaskType };
  history: OrderMessageType[];
  message: OrderMessageType;
  recommend?: RecommendType;
  result: boolean;
};
