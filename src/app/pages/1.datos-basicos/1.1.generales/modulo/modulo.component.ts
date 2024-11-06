import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../services/global.service';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html'
})
export class ModuloComponent implements OnInit {
  expanded: boolean = true;
  mmod: CustomStore | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.mmod = this.globalService.getData('codigo', '/modulo');
  }
}
