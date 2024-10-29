import { Component } from '@angular/core';
import { Mmod, MmodService } from './modulo.service';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrl: './modulo.component.scss'
})
export class ModuloComponent {
  mmod: Mmod[] = [];
  selectedMmod: Mmod = this.mmod[0];
  expanded: Boolean = true;
  // For api implement
  remoteDataSource: any;

  // Old constructor
  // constructor(service: MmodService) {
  //   this.mmod = service.getMmod();
  //   this.selectMmod = this.selectMmod.bind(this);
  // }

  constructor() {
    const serviceUrl: String = 'http://localhost:3000';
    this.remoteDataSource = createStore({
      key: 'codigo',
      loadUrl: serviceUrl + '/modulo'
    })
  }

  // selectMmod(e: any) {
  //   e.component.byKey(e.currentSelectedRowKeys[0]).done((mmod: any) => {
  //     if (mmod) {
  //       this.selectedMmod = mmod;
  //     }
  //   });
  // }

  onExporting(e: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');
    exportDataGrid({
        component: e.component,
        worksheet: worksheet
    }).then(function() {
        workbook.xlsx.writeBuffer()
            .then(function(buffer: BlobPart) {
                saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
            });
    });
}
}
