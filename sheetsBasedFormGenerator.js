function generateForm() {
  
  // Supervisor's Spreadsheet 
  //let SpreadsheetID = "SHEET ID";
  //let SheetName = "SHEET NAME";

  //let ss = SpreadsheetApp.openById(SpreadsheetID)
  //let sheet = ss.getSheetByName(SheetName)

  // Access Logbook
  let activess = SpreadsheetApp.getActiveSpreadsheet();
  let activessSheet = activess.getSheetByName("SHEET NAME");

  // Written Date
  let dateLocation = activessSheet.getRange(2,10);
  let date = dateLocation.getValue();

  // Shorthand Date for Title
  let titleDateLocation = activessSheet.getRange(4,5);
  let titleDate = titleDateLocation.getValue();

  // Shift
  let shiftLocation = activessSheet.getRange(4, 4);
  let shift = shiftLocation.getValue();

  // Security Officer #1
  let activess = SpreadsheetApp.getActiveSpreadsheet();
  let activessSheet = activess.getSheetByName("SHEET NAME");
  let securityOfficer1Location = activessSheet.getRange(4, 10);
  let securityOfficer1 = securityOfficer1Location.getValue();
  
  // Security Officer #2
  let activess = SpreadsheetApp.getActiveSpreadsheet();
  let activessSheet = activess.getSheetByName("SHEET NAME");
  let securityOfficer2Location = activessSheet.getRange(5, 10);
  let securityOfficer2 = securityOfficer2Location.getValue();

  // Security Officer #3
  let activess = SpreadsheetApp.getActiveSpreadsheet();
  let activessSheet = activess.getSheetByName("SHEET NAME");
  let securityOfficer3Location = activessSheet.getRange(6, 10);
  let securityOfficer3 = securityOfficer3Location.getValue();

  // Badging and Lenel Narrative
  let badingAndLenelNarativeLocation = activessSheet.getRange(9, 9);
  let badingAndLenelNarative = badingAndLenelNarativeLocation.getValue();

  // Camera Audit Narrative
  let cameraAuditNarrativeLocation = activessSheet.getRange(12, 9);
  let cameraAuditNarrativeNarative = cameraAuditNarrativeLocation.getValue();

  // Comms Check
  let commsCheckStatusLocation = activessSheet.getRange(18, 12);
  let commsCheckStatus = commsCheckStatusLocation.getValue();

  // Badge Tracker
  let badgeTrackerStatusLocation = activessSheet.getRange(17, 12);
  let badgeTrackerStatus = badgeTrackerStatusLocation.getValue();

  // Camera Audit
  let cameraAuditStatusLocation = activessSheet.getRange(18, 12);
  let cameraAuditStatus = cameraAuditStatusLocation.getValue();

  // TES Rover 
  let roverStatusLocation = activessSheet.getRange(19, 12);
  let roverStatus = roverStatusLocation.getValue();

  // TES SOC
  let socStatusLocation = activessSheet.getRange(20, 12);
  let socStatus = socStatusLocation.getValue();

  // Post Keys
  let postKeysStatusLocation = activessSheet.getRange(21, 12);
  let postKeysStatus = postKeysStatusLocation.getValue();

  // Master Keys
  let masterKeysStatusLocation = activessSheet.getRange(22, 12);
  let masterKeysStatus = masterKeysStatusLocation.getValue();

  // Temperature Reader #1
  let tempReader1StatusLocation = activessSheet.getRange(23, 12);
  let tempReader1Status = tempReader1StatusLocation.getValue();

  // Temperature Reader #2
  let tempReader2StatusLocation = activessSheet.getRange(24, 12);
  let tempReader2Status = tempReader2StatusLocation.getValue();
  
  let messageBody = tempReader1Status;

  // SET DOC letS

  // Logbook Folder ID: LOGBOOK FOLDER ID // Must be availiable to all users
  // Temp Doc ID: TEMP DOC ID
  
  // Template Location
  let templateID = "TEMPLATE ID";
  let docFile = DriveApp.getFileById(templateID);

  // Main Folder
  let logbookFolderID = "LOGBOOK FOLDER ID";
  let logbookFolder = DriveApp.getFolderById(logbookFolderID);
  
  // Make copy of template
  let tempFile = docFile.makeCopy(logbookFolder);

  // Get ID
  let tempDocFile = DocumentApp.openById(tempFile.getId())

  // EST Body
  let body = tempDocFile.getBody();

  // Get Shift
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("FORM INPUTS - LOCATION SHEET TAB NAME");
  let range = sheet.getRange(3, 10);
  let shift = range.getValue();

  // Search and Replace All Values From Template
  body.replaceText("{Date}", date);
  body.replaceText("{Shift}", shift);  
  body.replaceText("{Security Officer #1}", securityOfficer1);
  body.replaceText("{Security Officer #2}", securityOfficer2);
  body.replaceText("{Security Officer #3}", securityOfficer3);
  body.replaceText("{Badging and Lenel Narrative}", badingAndLenelNarative);
  body.replaceText("{Camera Audit Narrative}", cameraAuditNarrativeNarative);
  //body.replaceText("{Comms Check Status}", commsCheckStatus);
  body.replaceText("{Badge Tracker Status}", badgeTrackerStatus);
  body.replaceText("{Camera Audit Status}", cameraAuditStatus);
  body.replaceText("{Rover Status}", roverStatus);
  body.replaceText("{SOC Status}", socStatus);              
  body.replaceText("{Post Keys Status}", postKeysStatus);
  body.replaceText("{Master Keys Status}", masterKeysStatus);    
  body.replaceText("{Temp Reader #1 Status}", tempReader1Status);
  body.replaceText("{Temp Reader #2 Status}", tempReader2Status); 

  tempDocFile.setName("New Form
  
  
  ");
  tempDocFile.saveAndClose(); 

  // Generate Blob
  let tempDocFileBlob = tempDocFile.getAs(MimeType.PDF);
  
  /////////////////////////////////////////////////////////////////////////
  // CONDITIONALS FOR SAVING IN CORRECT FOLDER

  // Generate Date lets
  let today = new Date();
  //Use this if padding doesn't work: let dd = today.getDate();
  let dd = String(today.getDate()).padStart(2, '0');
  //Use this if padding doesn't work: let mm = today.getMonth() +1;
  let mm = String(today.getMonth() +1).padStart(2, '0');
  let yyyy = today.getFullYear();

  let todaysFormattedDate = mm + "/" + dd + "/" + yyyy;

  if(yyyy == '2021'){
    // Establish Folder IDs  > DriveApp.getFolderById("")
    let JanFolder = DriveApp.getFolderById("ID")
    let FebFolder = DriveApp.getFolderById("ID")
    let MarFolder = DriveApp.getFolderById("ID")
    let AprFolder = DriveApp.getFolderById("ID")
    let MayFolder = DriveApp.getFolderById("ID")
    let JunFolder = DriveApp.getFolderById("ID")
    let JulFolder = DriveApp.getFolderById("ID")
    let AugFolder = DriveApp.getFolderById("ID")
    let SepFolder = DriveApp.getFolderById("ID")
    let OctFolder = DriveApp.getFolderById("ID")
    let NovFolder = DriveApp.getFolderById("ID")
    let DecFolder = DriveApp.getFolderById("ID")
  }

  else if(yyyy == '2022'){
    // Establish Folder IDs  > DriveApp.getFolderById("")
    let JanFolder = DriveApp.getFolderById("ID")
    let FebFolder = DriveApp.getFolderById("ID")
    let MarFolder = DriveApp.getFolderById("ID")
    let AprFolder = DriveApp.getFolderById("ID")
    let MayFolder = DriveApp.getFolderById("ID")
    let JunFolder = DriveApp.getFolderById("ID")
    let JulFolder = DriveApp.getFolderById("ID")
    let AugFolder = DriveApp.getFolderById("ID")
    let SepFolder = DriveApp.getFolderById("ID")
    let OctFolder = DriveApp.getFolderById("ID")
    let NovFolder = DriveApp.getFolderById("ID")
    let DecFolder = DriveApp.getFolderById("ID")
  }
  
  // Correctly Formated Current Date
  let conditionalDTG = mm + "/" + yyyy;
  
  if(mm == '01'){
    formFolder = JanFolder;

  }
  
  else if(mm == '02'){
    formFolder = FebFolder;
          
  }

  else if(mm == '03'){
    formFolder = MarFolder;
          
  }

  else if(mm == '04'){
    formFolder = AprFolder;
          
  }
  
  else if(mm == '05'){
    formFolder = MayFolder;
          
  }
  
  else if(mm == '06'){
    formFolder = JunFolder;
          
  }
  
  else if(mm == '07'){
    formFolder = JulFolder;
          
  }
  
  else if(mm == '08'){
    formFolder = AugFolder;
          
  }
  
  else if(mm == '09'){
    formFolder = SepFolder;
          
  }
  
  else if(mm == '10'){
    formFolder = OctFolder;
          
  }
  
  else if(mm == '11'){
    formFolder = NovFolder;
          
  }
  
  else if(mm == '12'){
    formFolder = DecFolder;
          
  }

  let formName = mm + "/" + dd + "/" + yyyy + "_" + shift;
  
  let newPassOn = formFolder.createFile(tempDocFileBlob).setName(formName);
  let newPassOnURL = newPassOn.getUrl();
  let URL = formFolder.getUrl(); 

  // Remove Temp Doc
  logbookFolder.removeFile(tempFile);
  //logbookFolder.removeFile(tempDocFile);
  //.removeFile(tempDocFile);
  //logbookFolder.removeFile(tempDocFile);
  
  // Send Message
  //let messageBody = "The Pass On PDF named \'" + formName + "\' has been saved at FOLDER PATH NAME" + yyyy + "/" + formFolder + " or " + URL;
  let messageBody = "<strong>Shift: </strong>" + shift + "<br><strong>Filename: </strong>" + formName + "<br><b>File URL: </b>" + newPassOnURL + "<br><b>Folder Location: </b> Thomas Edison/Audits/Pass Ons/" + yyyy + "/" + formFolder + "<br><b>Folder URL: </b>" + URL;

  let rslMessageBody = "<strong>Badging and Lenel</strong>" +  "<br>" + badingAndLenelNarative + "<br>" + "<br>" + "<strong>Cameras</strong>" + "<br>" + cameraAuditNarrativeNarative + "<br>" + "<br>" + newPassOnURL;

  let subject = 'A ' + shift + ' pass on has been generated for Thomas Edison';

  let modalMessage = "The orm named \'" + formName + "\' has been saved at Thomas Edison/Audits/Pass Ons/" + yyyy + "/" + formFolder + " or " + URL;
  Browser.msgBox(modalMessage);

  if(Session.getActiveUser().getEmail() != 'admin email'){

    if(todaysFormattedDate == titleDate){
        // MANAGEMENT NOTIFICATION
        GmailApp.sendEmail('another admin email',subject,messageBody,{
        noReply: true,
        htmlBody: messageBody,
        });
        GmailApp.sendEmail('admin email',subject,rslMessageBody,{
        noReply: true,
        htmlBody: rslMessageBody,
        })
      }

      else {
        let subject = "A form was generated for a different day other than today."

        // SUPERVISOR NOTIFICATION
        GmailApp.sendEmail('admin email',subject,rslMessageBody,{
        noReply: true,
        htmlBody: rslMessageBody,
        })
      }
  }

}
