import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";


class ExcelExport {


    static exportToExcel(data, cols, fileName){
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        const ws = XLSX.utils.json_to_sheet(data, {header:cols});
        const wb = {Sheets: {data: ws}, SheetNames: ['data'], Workbook: {
                Views: [
                    {RTL: true}
                ]
            }};
        const excelBuffer = XLSX.write(wb, {bookType: 'xlsx', type: 'array'});
        const dataFile = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(dataFile, fileName + fileExtension);
    }


}

export default ExcelExport;