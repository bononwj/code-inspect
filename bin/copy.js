var fs = require('fs')

var root = __dirname.split("/node_modules")[0]
var pkgPath = root + '/package.json'
var rcPathList = ['.eslintrc.js', '.stylelintrc', 'commitlint.config.js', '.huskyrc', '.jscpd.json']

for (var i = 0; i < rcPathList.length; i++) {
    var rcPath = './' + rcPathList[i];
    var newRcPath = root + '/' + rcPathList[i];

    if (!fs.existsSync(newRcPath)) {
        fs.copyFileSync(rcPath, newRcPath)
    }
}

var scripts = {
    "esLint": "./node_modules/.bin/eslint src/ --ext .jsx,.js",
    "styleLint": "stylelint ./src",
    "jscpd": "jscpd ./src",
    "lint": "npm run esLint && npm run styleLint && npm run jscpd",
    "commit": "commit",
    "ident": "npm run lint && npm run commit"
}

var pkgJson = JSON.parse(fs.readFileSync(pkgPath))

for (const key in scripts) {
    if (scripts.hasOwnProperty(key) && !pkgJson.scripts.hasOwnProperty(key)) {
        pkgJson.scripts[key] = scripts[key]
    }
}

fs.writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 4))