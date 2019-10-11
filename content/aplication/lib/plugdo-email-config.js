function send_email_PlugdoNode(config) {
  for (let index = 0; index < config.length; index++) {
    var configuration = config[index];
    sendForCreateFile_SendEmail(configuration);
  }

  function sendForCreateFile_SendEmail(configuration) {
    console.log(configuration)
    fetch("/create-file-email",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(configuration)
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })
  }
}