import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string = '';
  paises:Country[] = [];

  constructor( private paisService : PaisService ) { }

  getClaseCSS( region : string ) : string {
    return (region == this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary');
  }

  activaRegion( region : string ){
    if ( region === this.regionActiva ){ return; }
    this.paises = [];
    this.regionActiva = region;
    this.paisService.buscarRegion(region)
      .subscribe(
        (resp) => {
          this.paises = resp;
        }
      );
  }

}
