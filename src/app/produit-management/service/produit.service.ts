import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Produit} from '../produit';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  // GET https://jsonplaceholder.typicode.com/photos/
  listerProduits(): Observable<Produit[]>{
    return this.http.get<Produit[]>('http://localhost:8080/go/produits')
      ;
  }

  listerProduitsById(): Observable<Produit[]>{
    return this.http.get<Produit[]>('http://localhost:8080/go/produits')
      .pipe(
        map(prod => prod.filter(t => t.id === 4))
      )
      ;
  }

  rechercherParNom(nom: string): Observable<Produit[]> {
    return this.http.get<Produit[]>('http://localhost:8080/go/produits')
      .pipe(
        map(prod => prod.filter(p => p.nom === nom))
      )
      ;
  }


}
