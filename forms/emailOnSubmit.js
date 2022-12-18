// FORM: https://docs.google.com/forms/d/e/1FAIpQLSeKm-6XQziNTIIt8XJzLPQ61a39mHsulykk__xnvrLn0KHkQg/viewform


/*function setTrigger() {
  ScriptApp.newTrigger('sendConfirmationEmail')
  .forForm('1FAIpQLSeKm-6XQziNTIIt8XJzLPQ61a39mHsulykk__xnvrLn0KHkQg')
  .onFormSubmit()
  .create();
}*/

function sendConfirmationEmail(e) {
  //const recipient = e.response.getRespondentEmail():
  let recipient = 'EMAIL ADDRESS';
  let subject = "CRM Entry";
  // FORM EDIT LINK: $(e.response.getEditResponseURL();
  //let editResponseURL = e.response.getEditResponseUrl();
  let body = "Thank you for your request! We will get back to you shortly!";
  
  //GmailApp.sendEmail(recipient, subject, body);

  GmailApp.sendEmail(
    recipient,
    subject,
    body,{
      name: 'Test Script'
      }
  )
}
