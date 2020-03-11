import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export const ExportExcel = ({ csvData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF=8";
  const fileExtension = ".xlsx";

  const exportToExcel = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData, {blankColumns: false});
    const wscols = [
      {wpx:100},
      {wpx:50},
      {wpx:150},
      {wpx:200}
    ];
    ws["!cols"] = wscols;
    const wb = { Sheets: { EmployeeRegister: ws }, SheetNames: ["EmployeeRegister"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  const clickHandler = e => {
    e.preventDefault();
    exportToExcel(csvData, fileName);
  };
  return (
    <button type="button" className="btn btn-primary" onClick={clickHandler}>
      Export Excel
    </button>
  );
};
