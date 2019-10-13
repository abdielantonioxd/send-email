const {
  Router
} = require('express');
const configEmail = new Router();
const fs = require('fs');
configEmail.post('/create-file-email', function (req, res) {
  let body = req.body;
  let name_module_Export = body.name_module_Export;
  let path_api = body.path;
  let layoutsDir = body.layoutsDir;
  let nameFile = body.nameFile;
  let defaultLayout = body.defaultLayout;
  let partialsDir = body.partialsDir;
  let viewPath = body.viewPath;
  let extName = body.extName;
  let to = body.to;
  let subject = body.subject;
  let template = body.template
  let listening = body.listeningChange;
  // object to config file send email 
  var config = {
    name_module_Export: name_module_Export,
    path_api: path_api,
    layoutsDir: layoutsDir,
    nameFile: nameFile,
    defaultLayout: defaultLayout,
    partialsDir: partialsDir,
    viewPath: viewPath,
    extName: extName,
    to: to,
    subject: subject,
    template: template,
    listening: listening
  }
  dataFile(config);

  function dataFile(config) {
    var dataFile = ` const {
    Router
  } = require('express');
  const ${config.name_module_Export} = new Router();
  var nodemailer = require('nodemailer');
  var hbs = require('nodemailer-express-handlebars');
  const path = require('path');
  ${config.name_module_Export}.post('${config.path_api}', function  (req, res) {
    var body = req.body;
    let email = body.email;
    let token = body.message;
    async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // hostname
      secureConnection: false,
      port: 465,
      auth: {
        user: process.env.Email,
        pass: process.env.Password,  
      }
    });
    var options = {
      viewEngine: {
          extname: '${config.extName}',
          layoutsDir: '${config.layoutsDir}',
          defaultLayout : '${config.defaultLayout}',
          partialsDir : '${config.partialsDir}' 
      },
      viewPath: '${config.viewPath}' ,
      extName: '${config.extName}'
  };
    transporter.use('compile', hbs(options));
  
  
     transporter.sendMail({
      from: process.env.Email,
      to: ${config.to},
      subject: "${config.subject}",
      template: '${config.template}',
      context: {
       
      }
      },function (error, response) {
        console.log('response')
        transporter.close();
    })
  
    }
    main().catch(console.error);
    res.sendStatus(200)
    res.end()
  })
  module.exports = ${config.name_module_Export};`;
    validateForcreateFile(config, dataFile);
  }

  function validateForcreateFile(config, dataFile) {
    if (config.listening === true) {
      fs.exists(`content/modules/sendEmail/${config.nameFile}.js`, function (exists) {
        if (exists) {
          deleteFile(config, dataFile);
          // createFile(config, dataFile)
        } else {
          createFile(config, dataFile)
        }
      });
    }
  }


  function deleteFile(config, dataFile) {
    fs.unlink(`content/modules/sendEmail/${config.nameFile}.js`, (err) => {
      if (err) throw err;
      createFile(config, dataFile)
    })
  }

  function createFile(config, dataFile) {
    fs.appendFile(`content/modules/sendEmail/${config.nameFile}.js`, dataFile, (err) => {
      if (err) throw err;
      console.log('Archivo Creado Satisfactoriamente');
    });
  }

  res.sendStatus(200)
  res.end()
})


module.exports = configEmail;