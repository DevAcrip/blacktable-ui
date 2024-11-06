import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-tipo-movimiento',
  templateUrl: './tipo-movimiento.component.html'
})
export class TipoMovimientoComponent {
  expanded: boolean = true;
  mtim: CustomStore | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.mtim = this.globalService.getData('codigo', '/tipo_movimiento');
  }
}
