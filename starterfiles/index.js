const xlsx = require('xlsx');
const fs = require('fs');

const file = xlsx.readFile('./EXCEL-FILE/sho_excel.xlsx');
const sheet_name_list = file.SheetNames;
const sheet = file.Sheets[sheet_name_list[0]];

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
const col = (char) => alphabet.indexOf(char);

const data = xlsx.utils.sheet_to_json(sheet, { header: "A" });

data.forEach(item => {
    let valueArr = Object.values(item);

    let fileName = valueArr[col('A')] + '.md';

    let fileContent = '#' + valueArr[col('B')] + '   \n';
    fileContent += valueArr[col('C')] + '   \n';
    fileContent += valueArr[col('D')] + '   \n';

    console.log(fileContent);

    fs.writeFile('./output/' + fileName, fileContent, function (err) {
        if (err) throw err;
    })
})