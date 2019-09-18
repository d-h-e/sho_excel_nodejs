const xlsx = require('xlsx');
const fs = require('fs');

const file = xlsx.readFile('sho_excel.xlsx');
const sheet = file.Sheets['Sheet1'];

const data = xlsx.utils.sheet_to_json(sheet);



data.forEach(item => {
    let valueArr = Object.values(item);

    let fileName = valueArr[0] + '.md';

    let fileContent = '#' + valueArr[1] + '   \n';
    fileContent += valueArr[2] + '   \n';
    fileContent += valueArr[3] + '   \n';

    console.log(fileContent);

    fs.writeFile('./output/' + fileName, fileContent, function (err) {
        if (err) throw err;
    })
})