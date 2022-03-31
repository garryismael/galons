export const PLEINE_0: string = 'pleine-0';
export const PLEINE_25: string = 'pleine-25';
export const PLEINE_50: string = 'pleine-50';
export const PLEINE_75: string = 'pleine-75';
export const PLEINE_100: string = 'pleine';
export const PRESQUE_PLEINE_0: string = 'presque-pleine-0';
export const PRESQUE_PLEINE_25: string = 'presque-pleine-25';
export const PRESQUE_PLEINE_50: string = 'presque-pleine-50';
export const PRESQUE_PLEINE_75: string = 'presque-pleine';
export const PRESQUE_PLEINE_100: string = 'presque-pleine-100';
export const MILIEU_0: string = 'milieu-0';
export const MILIEU_25: string = 'milieu-25';
export const MILIEU_50: string = 'milieu';
export const MILIEU_75: string = 'milieu-75';
export const MILIEU_100: string = 'milieu-100';
export const PRESQUE_VIDE_0: string = 'presque-vide-0';
export const PRESQUE_VIDE_25: string = 'presque-vide';
export const PRESQUE_VIDE_50: string = 'presque-vide-50';
export const PRESQUE_VIDE_75: string = 'presque-vide-75';
export const PRESQUE_VIDE_100: string = 'presque-vide-100';
export const VIDE_0: string = 'vide';
export const VIDE_25: string = 'vide-25';
export const VIDE_50: string = 'vide-50';
export const VIDE_75: string = 'vide-75';
export const VIDE_100: string = 'vide-100';

export interface IGalonXY {
  vide: string;
  presqueVide: string;
  milieux: string;
  presquePleine: string;
  pleine: string;
}

export const VIDE: IGalonXY = {
  vide: VIDE_0,
  presqueVide: VIDE_25,
  milieux: VIDE_50,
  presquePleine: VIDE_75,
  pleine: VIDE_100,
};

export const PLEINE: IGalonXY = {
  vide: PLEINE_0,
  presqueVide: PLEINE_25,
  milieux: PLEINE_50,
  presquePleine: PLEINE_75,
  pleine: PLEINE_100,
};
export const PRESQUE_PLEINE: IGalonXY = {
  vide: PRESQUE_PLEINE_0,
  presqueVide: PRESQUE_PLEINE_25,
  milieux: PRESQUE_PLEINE_50,
  presquePleine: PRESQUE_PLEINE_75,
  pleine: PRESQUE_PLEINE_100,
};

export const MILIEU: IGalonXY = {
  vide: MILIEU_0,
  presqueVide: MILIEU_25,
  milieux: MILIEU_50,
  presquePleine: MILIEU_75,
  pleine: MILIEU_100,
};

export const PRESQUE_VIDE: IGalonXY = {
  vide: PRESQUE_VIDE_0,
  presqueVide: PRESQUE_VIDE_25,
  milieux: PRESQUE_VIDE_50,
  presquePleine: PRESQUE_VIDE_75,
  pleine: PRESQUE_VIDE_100,
};
