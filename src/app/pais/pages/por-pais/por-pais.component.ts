import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];
  paisesSugeridos : Country[] = [];
  mostrarSugerencia:boolean = false;

  constructor(private paisService: PaisService) { }
 

  buscar(termino:string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.bucarPais(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.termino = '';
        this.hayError = true;
        this.paises = [];
        console.log(err);
      }); 

    console.log(this.termino);
  
  }


  sugerencias(termino:string){
   
    this.hayError = false;
    
    this.termino = termino;

    this.mostrarSugerencia = true;


    this.paisService.bucarPais(termino).subscribe( 
      paises => this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []
      )
    
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }

}
