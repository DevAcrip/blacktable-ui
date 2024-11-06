import { Component } from '@angular/core';
import { GlobalService } from '../../../../services/global.service';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-fondos',
  templateUrl: './fondos.component.html'
})
export class FondosComponent {
  expanded: boolean = true;
  mfon: CustomStore | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.mfon = this.globalService.getData('codigo', '/fondo');
  }
}
