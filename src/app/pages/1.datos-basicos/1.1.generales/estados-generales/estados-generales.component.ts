import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-estados-generales',
  templateUrl: './estados-generales.component.html'
})
export class EstadosGeneralesComponent {
  expanded: boolean = true;
  mesg: CustomStore | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.mesg = this.globalService.getData('codigo', '/estados_generales');
  }
}

  // onExporting(e: any) {
  //   const workbook = new Workbook();
  //   const worksheet = workbook.addWorksheet('Main sheet');
  //   exportDataGrid({
  //     component: e.component,
  //     worksheet: worksheet,
  //   }).then(function () {
  //     workbook.xlsx.writeBuffer().then(function (buffer: BlobPart) {
  //       saveAs(
  //         new Blob([buffer], { type: 'application/octet-stream' }),
  //         'DataGrid.xlsx'
  //       );
  //     });
  //   });
  // }
