import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-parametros-operativos-usuario',
  templateUrl: './parametros-operativos-usuario.component.html'
})
export class ParametrosOperativosUsuarioComponent {
  expanded: boolean = true;
  mpsu: CustomStore | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.mpsu = this.globalService.getData('codigo', '/parametros-operativos-usuario');
  }
}
