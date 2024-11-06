import { Component } from '@angular/core';
import { GlobalService } from '../../../../services/global.service';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html'
})
export class OperacionComponent {
  expanded: boolean = true;
  mope: CustomStore | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.mope = this.globalService.getData('codigo', '/operacion');
  }
}
