import { Component } from '@angular/core';
import { GlobalService } from '../../../../services/global.service';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-tipo-informacion',
  templateUrl: './tipo-informacion.component.html'
})
export class TipoInformacionComponent {
  expanded: boolean = true;
  mtif: CustomStore | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.mtif = this.globalService.getData('codigo', '/tipo_informacion');
  }
}
