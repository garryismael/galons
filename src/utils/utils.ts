import {
  VIDE,
  PLEINE,
  MILIEU,
  PRESQUE_VIDE,
  PRESQUE_PLEINE,
  IGalonXY,
} from './../constants/animation';

const cssStyle = (noeudActuel: number, noeudSuivant: number, max: number) => {
  const milieux = max / 2;
  if (noeudActuel === 0) {
    return valeurCssStyle(noeudSuivant, max, VIDE);
  } else if (noeudActuel === max) {
    return valeurCssStyle(noeudSuivant, max, PLEINE);
  } else if (noeudActuel < milieux) {
    return valeurCssStyle(noeudSuivant, max, PRESQUE_VIDE);
  } else if (noeudActuel === milieux) {
    return valeurCssStyle(noeudSuivant, max, MILIEU);
  } else {
    return valeurCssStyle(noeudSuivant, max, PRESQUE_PLEINE);
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
