class Noeud:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y

    def depart(self):
        return (self.x == 0 and self.y == 0)

    def equals(self, noeud):
        return self.x == noeud.x and self.y == noeud.y

    def toDict(self):
        return {
            'x': self.x,
            'y': self.y
        }

    def __str__(self):
        return "(%d, %d)" % (self.x, self.y)


class Tree:
    """
    racine: Predecesseur pour permettre de trouver le chemin depuis (0, 0)
    carafe: Noeud contenant la racine
    Representation:
                [(x, y)]
    [(x1,x2)]----  |  ----[(x2, y2)]
                   .
                   .
                   |
                [xi, yi]
    """

    def __init__(self, data: Noeud):
        self.racine: Tree = None
        self.noeud: Noeud = data
        self.successeurs: list[Tree] = []

    def insert(self, noeud: Noeud, successeurs):
        for item_succ in self.successeurs:
            if item_succ.noeud.equals(noeud):
                if len(item_succ.successeurs) < 0:
                    item_succ.successeurs.append(Tree(noeud))
                else:
                    item_succ.racine.successeurs.extend(successeurs)

    def __repr__(self):
        return self.noeud.__str__()

    def __str__(self):
        return self.noeud.__str__()


class Carafe:
    def __init__(self, x, y, but=2):
        d = Noeud()
        self.max_x = x
        self.max_y = y
        self.graphe = Tree(d)
        self.ouvert: list[Tree] = [Tree(d)]
        self.ferme: list[Tree] = []
        self.but = but

    def proceder(self) -> list[Noeud]:
        resultat: list[Noeud] = []
        while len(self.ouvert) > 0:
            n = self.ouvert.pop(0)
            if not self.exists(n):
                self.ferme.append(n)
            if n.noeud.x == self.but:
                Carafe.chemin(self.graphe, self.but, resultat)
                break
            else:
                successeurs = self.creersuccesseur(n)
                if len(successeurs) > 0:
                    self.graphe_successeurs(n, successeurs)
        return resultat

    def remplir(self, n: Tree, set_attr: str, get_attr: str, res: list[Tree]):
        """
        Remplir x ou y
        Cas possible: (4, y) ou (x, 3) 
        """
        val_set_attr = getattr(n.noeud, set_attr)
        max_set_attr = getattr(self, str.format("max_{0}", set_attr))
        if val_set_attr < max_set_attr:
            add_x_or_y = val_set_attr + max_set_attr
            # Maximum de galon
            if add_x_or_y <= max_set_attr:
                get_x_or_y = getattr(n.noeud, get_attr)
                # Initialiser un noeud de 0, 0
                noeud = Noeud(0, 0)
                setattr(noeud, set_attr, add_x_or_y)
                setattr(noeud, get_attr, get_x_or_y)
                tree = Tree(noeud)
                if not self.exists(tree):
                    self.ferme.append(tree)
                    self.ouvert.append(tree)
                    res.append(tree)

    def vider(self, n: Tree, set_attr: str, get_attr: str, res: list[Tree]):
        """
            Vider x ou y
            si set_attr: x -> (0, y)
            sinon set_attr: y -> (x, 0)
        """
        val_set_attr = getattr(n.noeud, set_attr)
        if val_set_attr > 0:
            get_x_or_y = getattr(n.noeud, get_attr)
            noeud = Noeud(0, 0)
            setattr(noeud, get_attr, get_x_or_y)
            tree = Tree(noeud)
            if not self.exists(tree):
                self.ferme.append(tree)
                self.ouvert.append(tree)
                res.append(tree)

    def transvaser(self, n: Tree, set_attr: str, get_attr: str, res: list[Tree]):
        """
        Verser le contenu de x dans y ou y dans x
        """
        val_set_attr = getattr(n.noeud, set_attr)
        val_get_attr = getattr(n.noeud, get_attr)
        max_val_set_attr = getattr(self, str.format('max_{0}', set_attr))
        sum_x_y = n.noeud.x + n.noeud.y
        noeud = Noeud()
        edit = False

        if sum_x_y <= max_val_set_attr and val_get_attr > 0:
            setattr(noeud, set_attr, sum_x_y)
            edit = True
        elif sum_x_y >= max_val_set_attr and val_get_attr > 0:
            setattr(noeud, set_attr, max_val_set_attr)
            setattr(noeud, get_attr, val_get_attr -
                    (max_val_set_attr - val_set_attr))
            edit = True

        tree = Tree(noeud)
        if edit and not n.noeud.equals(noeud) and not self.exists(tree):
            self.ferme.append(tree)
            self.ouvert.append(tree)
            res.append(tree)

    def graphe_successeurs(self, n: Tree, successeurs: list[Tree]):
        if n.noeud.depart():
            self.graphe.successeurs = successeurs
        else:
            n.successeurs = successeurs

    def creersuccesseur(self, n: Tree):
        res: list[Tree] = []
        if n.noeud.depart():
            left = Tree(Noeud(self.max_x, 0))
            middle = Tree(Noeud(self.max_x, self.max_y))
            right = Tree(Noeud(0, self.max_y))
            res = [left, middle, right]
            self.init_ferme(res)
            self.init_ouvert(res)
        else:
            # Remplir x et y
            self.remplir(n, 'x', 'y', res)
            self.remplir(n, 'y', 'x', res)
            # Vider x et y
            self.vider(n, 'x', 'y', res)
            self.vider(n, 'y', 'x', res)
            # Verser x et y
            self.transvaser(n, 'x', 'y', res)
            self.transvaser(n, 'y', 'x', res)

        return res

    @staticmethod
    def chemin(graphe: Tree, but: int, resultat: list[Noeud], path: list[Noeud] = []):
        path.append(graphe.noeud)
        if len(graphe.successeurs) == 0:
            size = len(path)
            if path[size-1].x == but:
                if not len(resultat) > 0:
                    for p in path:
                        resultat.append(p)
            path.pop()
        else:
            for child in graphe.successeurs:
                Carafe.chemin(child, but, resultat, path)
            path.pop()

    def exists(self, tree: Tree) -> bool:
        for elem_ferme in self.ferme:
            if elem_ferme.noeud.equals(tree.noeud):
                return True
        return False

    def init_ferme(self, trees: list[Tree]):
        self.ferme.extend(trees)

    def init_ouvert(self, trees: list[Tree]):
        self.ouvert.extend(trees)
