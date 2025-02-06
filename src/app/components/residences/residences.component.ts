import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  // Liste des favoris
  favorites: Residence[] = [];

  // Texte de recherche
  searchText: string = "";

  // Filtrage des résidences par adresse
  get filteredResidences(): Residence[] {
    return this.listResidences.filter(res =>
      res.address.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Méthode pour afficher l'adresse d'une résidence
  showLocation(residence: Residence) {
    if (residence.address === "inconnu") {
      alert("L'adresse de cette résidence est inconnue");
    } else {
      alert(`Adresse: ${residence.address}`);
    }
  }

  // Méthode pour ajouter une résidence aux favoris
  addToFavorites(residence: Residence) {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
      alert(`${residence.name} ajouté aux favoris !`);
    }
  }
}
