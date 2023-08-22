
class Rectangle {
    constructor(longueur, largeur) {
        this.longueur = longueur;
        this.largeur = largeur;
    }

    aire() {
        return this.longueur * this.largeur;
    }

    perimetre() {
        return 2 * (this.longueur + this.largeur);
    }
}

class Carre extends Rectangle {
    constructor(cote) {
        super(cote, cote);
    }
}

const monRectangle = new Rectangle(4, 5);
console.log(`Aire du rectangle: ${monRectangle.aire()}`);  // Affiche "Aire du rectangle: 20"
console.log(`Périmètre du rectangle: ${monRectangle.perimetre()}`);  // Affiche "Périmètre du rectangle: 18"

const monCarre = new Carre(4);
console.log(`Aire du carré: ${monCarre.aire()}`);  // Affiche "Aire du carré: 16"
