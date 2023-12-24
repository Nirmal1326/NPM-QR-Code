import inquirers from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirers
  .prompt([
    {
        message:"Type in your URL:",
        name:"URL",
    },
    {
        message:"Type in your file name:",
        name:"NAME",
    }
  ])
  .then((answers) => {
    const url=answers.URL; 
    const name=answers.NAME;
    var qr_svg= qr.image(url);
    qr_svg.pipe(fs.createWriteStream(name+".png"));
    fs.writeFile(name+".txt",url,(err)=>{
            if(err) throw err;
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong
      console.log("Something else went wrong");
    }
  });
//   {
//     "type": "module",
//     "dependencies": {
//         "inquirer":"^9.2.10",
//         "qr-image":"^3.2.0"
//     }https://nirmal1326.github.io/Portfolio/
// }