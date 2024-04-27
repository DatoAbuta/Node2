//First

// const path = require("path");

// async function main(Path) {
//   try {
//     const nomalizedPath = path.normalize(Path);

//     const basefilename = path.basename(nomalizedPath);

//     const directoryname = path.dirname(nomalizedPath);

//     const fileextension = path.extname(nomalizedPath);

//     console.log(basefilename);
//     console.log(directoryname);
//     console.log(fileextension);
//   } catch (err) {
//     console.log(err);
//   }
// }

// main("first/text.txt");

//Second

// const fs = require("fs/promises");

// async function main(folder) {
//   try {
//     const dir = await fs.readdir("../Node2");
//     console.log(dir);

//     if (dir.includes(folder)) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   } catch (er) {
//     console.log(er);
//   }
// }
// main("first");

//Third

// const fs = require("fs/promises");
// const http = require("http");

// const server = http.createServer(async (req, res) => {
//   try {
//     const data = await fs.readFile("data.json");
//     const parsed = JSON.parse(data);
//     res.end(JSON.stringify(parsed));
//     //res.write ro davwere gamicheda
//   } catch (er) {
//     console.error(er);
//   }
// });

// server.listen(1121, "localhost", () => {
//   console.log("server started on localhost:1121");
// });

//Fourth

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end(new Date().toString());
//   res.end(new Date().toISOString());
// });

// server.listen(1121, "localhost", () => {
//   console.log("server started on localhost:1121");
// });

//Fifth

// const http = require("http");

// const htmlContent = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Simple HTML Table</title>
// </head>
// <body>
//     <h1>Simple HTML Table</h1>
//     <table border="1">
//       <tr>
//         <th>Name</th>
//         <th>Age</th>
//         <th>Country</th>
//       </tr>
//       <tr>
//         <td>Giorgi</td>
//         <td>20</td>
//         <td>GE</td>
//       </tr>
//       <tr>
//         <td>DAVIT</td>
//         <td>21</td>
//         <td>GE</td>
//       </tr>
//     </table>
//   </body>
// </html>
// `;

// const server = http.createServer((req, res) => {
//   res.end(htmlContent);
// });

// server.listen(1121, () => {
//   console.log("Server running at http://localhost:1121");
// });
