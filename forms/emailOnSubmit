function setTrigger() {
  ScriptApp.newTrigger('sendConfirmationEmail')
  .forForm('FORM ID')
  .onFormSubmit()
  .create();
}

function sendConfirmationEmail(e) {
  //const recipient = e.response.getRespondentEmail():
  let recipient = 'email@domain.com';
  let subject = "Badge Request";
  // FORM EDIT LINK: $(e.response.getEditResponseURL()
  const body = "Thank you for your request! We will get back to you shortly. To edit this response follow this link: $(e.response.getEditResponseURL()";
  
  GmailApp.sendEmail(recipient, subject, body);
}
