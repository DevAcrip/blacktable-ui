import { Component } from '@angular/core';
import { GlobalService } from '../../../../services/global.service';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-clase-cuenta',
  templateUrl: './clase-cuenta.component.html'
})
export class ClaseCuentaComponent {
  expanded: boolean = true;
  mclc: CustomStore | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.mclc = this.globalService.getData('codigo', '/clase_cuenta');
  }
}
