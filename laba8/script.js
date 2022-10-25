const http = require('http')
const fs = require("fs")

const hostname = '127.0.0.1'
const port = 3000

const array = fs.readFileSync("file.txt").toString().split("\n");
let html;

fs.readFile("index.html", (err, data) => {
  html = data.toString();
})

const sortedAsc = array.sort((a, b) => a-b);
fs.writeFileSync("sortedAsc", sortedAsc.toString());
const sortedDesc = array.sort((a, b) => b-a);
fs.writeFileSync("sortedDesc", sortedDesc.toString());



const server = http.createServer((req, res) => {
  const url = req.url;
  
  switch(url) {
    case "/sortAsc?": {
        let arr = fs.readFileSync("sortedAsc").toString().split(",");
        let newArr = [];
        while(arr.length) {
          newArr.push(arr.splice(0, 10));
        }
        let newHtmlTable = newArr.reduce((prev, cur) => {
          return prev+`<tr>${cur.reduce((prevCur, curCur) => {
            return prevCur+`<td>${curCur}</td>`
          }, "")}</tr>`
        }, "");
        let newHtml = html.replace("<table style='border: 1px solid black;' id='tableSorted'><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>", `<table>${newHtmlTable}</table>`);
        res.write(newHtml);
        break;
    };
    case "/sortDesc?": {
      let arr = fs.readFileSync("sortedDesc").toString().split(",");
      let newArr = [];
      while(arr.length) {
        newArr.push(arr.splice(0, 10));
      }
      let newHtmlTable = newArr.reduce((prev, cur) => {
        return prev+`<tr>${cur.reduce((prevCur, curCur) => {
          return prevCur+`<td>${curCur}</td>`
        }, "")}</tr>`
      }, "");
      let newHtml = html.replace("<table style='border: 1px solid black;' id='tableSorted'><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>", `<table>${newHtmlTable}</table>`);
      res.write(newHtml);
      break;
    }
    default: break;
  }
  res.end(html)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})