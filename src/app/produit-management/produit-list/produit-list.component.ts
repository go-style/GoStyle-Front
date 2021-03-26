import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../service/produit.service';
import {Produit} from '../produit';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  produitTab: Produit[] = [];

  constructor(private produitServ: ProduitService) { }

  ngOnInit(): void {
  }

  montrerPromo(): void {
      this.produitServ.listerProduits().subscribe(
        listeProm => this.produitTab = listeProm,
        error => {},
        () => {}
      );
  }

  montrerPromoById(): void {
    this.produitServ.listerProduitsById().subscribe(
      listeProm => this.produitTab = listeProm,
      error => {}
    );
  }





}
