function send_email_PlugdoNode(config) {
  var isValidateFunc = "";
  for (let index = 0; index < config.length; index++) {
    var configuration = config[index];
    sendForCreateFile_SendEmail(configuration);
  }

  function sendForCreateFile_SendEmail(configuration) {
    for (const i in configuration) {
      if (configuration[i] != "") {
        isValidateFunc = true;
      } else {
        isValidateFunc = false;
        throw `this object have  a value empty ${JSON.stringify(configuration)}`;
      }
    }

    if (isValidateFunc !=  false) {
      console.log(isValidateFunc)
      func_createFile();
    }else{
      throw Error("this object have  a value empty") ;
    }

    function func_createFile() {
      fetch("/create-file-email", {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(configuration)
        })
        .then(function (res) {
          console.log(res)
        })
        .catch(function (res) {
          // console.log(res)
        })
    }
  }
}