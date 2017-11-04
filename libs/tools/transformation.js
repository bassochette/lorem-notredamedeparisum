const fs = require("fs")
const originalPath =`${__dirname}/notre_dame_de_paris.txt`
const destinationPath = `${__dirname}/../quotes.json`;
const file = fs.readFileSync(originalPath).toString()

let text = file.split("LIVRE PREMIER")[2];
text = text.split("NOTES")[0]
text = text.split("\r\n\r\n")
text = text.map((element) => element.split("\r\n").join(" "))
text = text.filter((element) => element.length > 20)
fs.writeFileSync(destinationPath, JSON.stringify(text))
