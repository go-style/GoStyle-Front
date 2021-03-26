import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../service/produit.service';
import {Produit} from '../produit';

@Component({
  selector: 'app-produit-par-nom',
  templateUrl: './produit-par-nom.component.html',
  styleUrls: ['./produit-par-nom.component.css']
})
export class ProduitParNomComponent implements OnInit {

  // à définir
  produitTab: Produit[] = [];
  messageErreur = '';

  constructor(private produitServ: ProduitService) { }

  ngOnInit(): void {
  }

  rechercherProd(nomSaisie: string): void {
    this.produitTab = null;
    this.produitServ.rechercherParNom(nomSaisie)
      .subscribe(tabBackend => {
        if (tabBackend.length > 0) {
          this.produitTab = tabBackend;
          this.messageErreur = '';
        }else{
          this.messageErreur = 'L\'article que vous avez saisié n\'existe pas';
        }
      });
  }
}
