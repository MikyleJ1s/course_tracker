import React from 'react'
import * as FileSaver from 'file-saver'
import XLSX from 'sheetjs-style'
import Button from 'react-bootstrap/esm/Button'

const ExportExcel = ({excelData, fileName}) => {
    const fileType = 'application/vnd.openxlmformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    const fileExtension = '.xlsx'

    const exportToExcel = async()=>{

        const ws = XLSX.utils.json_to_sheet(excelData);
        
        const wb = {Sheet: {'data': ws}, SheetNames: ['data']}
        
        const excelBuffer = XLSX.write(wb, {bookType: 'xlsx', type: 'array'})
         alert("hi")     
              const data = new Blob([excelBuffer], {type: fileType})
        FileSaver.saveAs(data, fileName, fileExtension)
    }
  return (
    <>

        <Button variant="contained"             onClick={(e)=>exportToExcel(fileName)} color="primary">
hello
        </Button>

    </>
  )
}

export default ExportExcel
