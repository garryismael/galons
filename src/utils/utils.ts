import {
  VIDE,
  PLEINE,
  MILIEU,
  PRESQUE_VIDE,
  PRESQUE_PLEINE,
  IGalonXY,
  RESTER_0,
  RESTER_100,
  RESTER_25,
  RESTER_50,
  RESTER_75,
} from './../constants/animation';

const cssStyle = (noeudActuel: number, noeudSuivant: number, max: number) => {
  const milieux = max / 2;
  if (noeudActuel !== noeudSuivant) {
    if (noeudActuel === 0) {
      return valeurCssStyle(noeudSuivant, max, VIDE);
    } else if (noeudActuel === max) {
      return valeurCssStyle(noeudSuivant, max, PLEINE);
    } else if (noeudActuel < milieux) {
      if (noeudSuivant < milieux) return cssStagne(noeudSuivant, max, milieux);
      else return valeurCssStyle(noeudSuivant, max, PRESQUE_VIDE);
    } else if (noeudActuel === milieux) {
      return valeurCssStyle(noeudSuivant, max, MILIEU);
    } else {
      if (noeudSuivant < max) return cssStagne(noeudSuivant, max, milieux);
      else return valeurCssStyle(noeudSuivant, max, PRESQUE_PLEINE);
    }
  } else {
    return cssStagne(noeudActuel, max, milieux);
  }
};

const cssStagne = (noeudActuel: number, max: number, milieux: number) => {
  if (noeudActuel === 0) {
    return RESTER_0;
  } else if (noeudActuel === max) {
    return RESTER_100;
  } else if (noeudActuel < milieux) {
    return RESTER_25;
  } else if (noeudActuel === milieux) {
    return RESTER_50;
  } else {
    return RESTER_75;
  }
};

const valeurCssStyle = (noeudSuivant: number, max: number, galonxy: IGalonXY) => {
  const milieux = max / 2;
  if (noeudSuivant === 0) return galonxy.vide;
  else if (noeudSuivant === max) return galonxy.pleine;
  else if (noeudSuivant < milieux) return galonxy.presqueVide;
  else if (noeudSuivant === milieux) return galonxy.milieux;
  else return galonxy.presquePleine;
};

export { cssStyle };
