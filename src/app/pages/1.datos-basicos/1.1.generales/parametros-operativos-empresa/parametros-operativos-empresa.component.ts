import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-parametros-operativos-empresa',
  templateUrl: './parametros-operativos-empresa.component.html'
})
export class ParametrosOperativosEmpresaComponent {
  expanded: boolean = true;
  mpem: CustomStore | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.mpem = this.globalService.getData('empresa', '/parametros-operativos-empresa');
  }
}
