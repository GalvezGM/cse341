const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'models',
    'prove03.json'
);

let cpus = [];

exports.getProve03 = (req, res, next) => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log('Unreadable JSON');
            return [];
        } else {
            cpus = JSON.parse(fileContent);
        }
    });

    res.render('pages/proveAssignments/prove03Store', { 
        title: 'Prove03', 
        path: '/prove03',
        cpus: cpus
    });
}