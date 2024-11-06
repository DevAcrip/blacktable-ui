import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-parametros-operativos-sistema',
  templateUrl: './parametros-operativos-sistema.component.html'
})
export class ParametrosOperativosSistemaComponent {
  expanded: boolean = true;
  mpos: CustomStore | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.mpos = this.globalService.getData('codigo', '/parametros-operativos-sistema');
  }
}
