import { Component } from '@angular/core';
import { Mtim, MtimService } from '../../services/mtim.service';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss',
})
export class DataGridComponent {
  mtim: Mtim[] = [];
  selectedMtim: Mtim = this.mtim[0];
  expanded: Boolean = true;


  constructor(service: MtimService) {
    this.mtim = service.getMtim();
    this.selectMtim = this.selectMtim.bind(this);
  }

  selectMtim(e: any) {
    e.component.byKey(e.currentSelectedRowKeys[0]).done((mtim: any) => {
      if (mtim) {
        this.selectedMtim = mtim;
      }
    });
  }

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
