import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-tipo-movimiento-operacion',
  templateUrl: './tipo-movimiento-operacion.component.html'
})
export class TipoMovimientoOperacionComponent {
  expanded: boolean = true;
  mtmo: CustomStore | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.mtmo = this.globalService.getData('tipo_movimiento', '/tipo_movimiento_operacion');
  }
}
