export type BasketStatusType = {
  menu: boolean;
  combo: boolean;
  size: boolean;
  purchase: boolean;
  pickupStrategy: boolean;
};

export const initialBasketStatus: BasketStatusType = {
  menu: false,
  combo: false,
  size: false,
  purchase: false,
  pickupStrategy: false,
};

export enum BasketStatusEnum {
  menu = 'menu',
  combo = 'combo',
  size = 'size',
  purchase = 'purchase',
  pickupStrategy = 'pickupStrategy',
}

export const basketStatusLabels = {
  [BasketStatusEnum.menu]: '메뉴',
  [BasketStatusEnum.combo]: '세트',
  [BasketStatusEnum.size]: '사이즈',
  [BasketStatusEnum.purchase]: '수량',
  [BasketStatusEnum.pickupStrategy]: '장소',
} as const;

export const basketStatusKeys = Object.keys(BasketStatusEnum) as (keyof typeof BasketStatusEnum)[];
