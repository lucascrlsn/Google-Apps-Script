function generateForm() {
  
  // Supervisor's Spreadsheet 
  //var SpreadsheetID = "SHEET ID";
  //var SheetName = "SHEET NAME";

  //var ss = SpreadsheetApp.openById(SpreadsheetID)
  //var sheet = ss.getSheetByName(SheetName)

  // Access Logbook
  var activess = SpreadsheetApp.getActiveSpreadsheet();
  var activessSheet = activess.getSheetByName("Pass On");

  // Written Date
  var dateLocation = activessSheet.getRange(2,10);
  var date = dateLocation.getValue();

  // Shorthand Date for Title
  var titleDateLocation = activessSheet.getRange(4,5);
  var titleDate = titleDateLocation.getValue();

  // Shift
  var shiftLocation = activessSheet.getRange(4, 4);
  var shift = shiftLocation.getValue();

  // Security Officer #1
  var activess = SpreadsheetApp.getActiveSpreadsheet();
  var activessSheet = activess.getSheetByName("Pass On");
  var securityOfficer1Location = activessSheet.getRange(4, 10);
  var securityOfficer1 = securityOfficer1Location.getValue();
  
  // Security Officer #2
  var activess = SpreadsheetApp.getActiveSpreadsheet();
  var activessSheet = activess.getSheetByName("Pass On");
  var securityOfficer2Location = activessSheet.getRange(5, 10);
  var securityOfficer2 = securityOfficer2Location.getValue();

  // Security Officer #3
  var activess = SpreadsheetApp.getActiveSpreadsheet();
  var activessSheet = activess.getSheetByName("Pass On");
  var securityOfficer3Location = activessSheet.getRange(6, 10);
  var securityOfficer3 = securityOfficer3Location.getValue();

  // Badging and Lenel Narrative
  var badingAndLenelNarativeLocation = activessSheet.getRange(9, 9);
  var badingAndLenelNarative = badingAndLenelNarativeLocation.getValue();

  // Camera Audit Narrative
  var cameraAuditNarrativeLocation = activessSheet.getRange(12, 9);
  var cameraAuditNarrativeNarative = cameraAuditNarrativeLocation.getValue();

  // Comms Check
  var commsCheckStatusLocation = activessSheet.getRange(18, 12);
  var commsCheckStatus = commsCheckStatusLocation.getValue();

  // Badge Tracker
  var badgeTrackerStatusLocation = activessSheet.getRange(17, 12);
  var badgeTrackerStatus = badgeTrackerStatusLocation.getValue();

  // Camera Audit
  var cameraAuditStatusLocation = activessSheet.getRange(18, 12);
  var cameraAuditStatus = cameraAuditStatusLocation.getValue();

  // TES Rover 
  var roverStatusLocation = activessSheet.getRange(19, 12);
  var roverStatus = roverStatusLocation.getValue();

  // TES SOC
  var socStatusLocation = activessSheet.getRange(20, 12);
  var socStatus = socStatusLocation.getValue();

  // Post Keys
  var postKeysStatusLocation = activessSheet.getRange(21, 12);
  var postKeysStatus = postKeysStatusLocation.getValue();

  // Master Keys
  var masterKeysStatusLocation = activessSheet.getRange(22, 12);
  var masterKeysStatus = masterKeysStatusLocation.getValue();

  // Temperature Reader #1
  var tempReader1StatusLocation = activessSheet.getRange(23, 12);
  var tempReader1Status = tempReader1StatusLocation.getValue();

  // Temperature Reader #2
  var tempReader2StatusLocation = activessSheet.getRange(24, 12);
  var tempReader2Status = tempReader2StatusLocation.getValue();
  
  var messageBody = tempReader1Status;

  // SET DOC VARS

  // Logbook Folder ID: LOGBOOK FOLDER ID // Must be availiable to all users
  // Temp Doc ID: TEMP DOC ID
  
  // Template Location
  const templateID = "TEMPLATE ID";
  const docFile = DriveApp.getFileById(templateID);

  // Main Folder
  const logbookFolderID = "LOGBOOK FOLDER ID";
  const logbookFolder = DriveApp.getFolderById(logbookFolderID);
  
  // Make copy of template
  const tempFile = docFile.makeCopy(logbookFolder);

  // Get ID
  const tempDocFile = DocumentApp.openById(tempFile.getId())

  // EST Body
  const body = tempDocFile.getBody();

  // Get Shift
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("FORM INPUTS - LOCATION SHEET TAB NAME");
  var range = sheet.getRange(3, 10);
  var shift = range.getValue();

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
  const tempDocFileBlob = tempDocFile.getAs(MimeType.PDF);
  
  /////////////////////////////////////////////////////////////////////////
  // CONDITIONALS FOR SAVING IN CORRECT FOLDER

  // Generate Date Vars
  let today = new Date();
  //Use this if padding doesn't work: let dd = today.getDate();
  let dd = String(today.getDate()).padStart(2, '0');
  //Use this if padding doesn't work: let mm = today.getMonth() +1;
  let mm = String(today.getMonth() +1).padStart(2, '0');
  let yyyy = today.getFullYear();

  let todaysFormattedDate = mm + "/" + dd + "/" + yyyy;

  if(yyyy == '2021'){
    // Establish Folder IDs  > DriveApp.getFolderById("")
    var JanFolder = DriveApp.getFolderById("ID")
    var FebFolder = DriveApp.getFolderById("ID")
    var MarFolder = DriveApp.getFolderById("ID")
    var AprFolder = DriveApp.getFolderById("ID")
    var MayFolder = DriveApp.getFolderById("ID")
    var JunFolder = DriveApp.getFolderById("ID")
    var JulFolder = DriveApp.getFolderById("ID")
    var AugFolder = DriveApp.getFolderById("ID")
    var SepFolder = DriveApp.getFolderById("ID")
    var OctFolder = DriveApp.getFolderById("ID")
    var NovFolder = DriveApp.getFolderById("ID")
    var DecFolder = DriveApp.getFolderById("ID")
  }

  else if(yyyy == '2022'){
    // Establish Folder IDs  > DriveApp.getFolderById("")
    var JanFolder = DriveApp.getFolderById("ID")
    var FebFolder = DriveApp.getFolderById("ID")
    var MarFolder = DriveApp.getFolderById("ID")
    var AprFolder = DriveApp.getFolderById("ID")
    var MayFolder = DriveApp.getFolderById("ID")
    var JunFolder = DriveApp.getFolderById("ID")
    var JulFolder = DriveApp.getFolderById("ID")
    var AugFolder = DriveApp.getFolderById("ID")
    var SepFolder = DriveApp.getFolderById("ID")
    var OctFolder = DriveApp.getFolderById("ID")
    var NovFolder = DriveApp.getFolderById("ID")
    var DecFolder = DriveApp.getFolderById("ID")
  }
  
  // Correctly Formated Current Date
  var conditionalDTG = mm + "/" + yyyy;
  
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

  var formName = mm + "/" + dd + "/" + yyyy + "_" + shift;
  
  var newPassOn = formFolder.createFile(tempDocFileBlob).setName(formName);
  var newPassOnURL = newPassOn.getUrl();
  var URL = formFolder.getUrl(); 

  // Remove Temp Doc
  logbookFolder.removeFile(tempFile);
  //logbookFolder.removeFile(tempDocFile);
  //.removeFile(tempDocFile);
  //logbookFolder.removeFile(tempDocFile);
  
  // Send Message
  //var messageBody = "The Pass On PDF named \'" + formName + "\' has been saved at FOLDER PATH NAME" + yyyy + "/" + formFolder + " or " + URL;
  var messageBody = "<strong>Shift: </strong>" + shift + "<br><strong>Filename: </strong>" + formName + "<br><b>File URL: </b>" + newPassOnURL + "<br><b>Folder Location: </b> Thomas Edison/Audits/Pass Ons/" + yyyy + "/" + formFolder + "<br><b>Folder URL: </b>" + URL;

  var rslMessageBody = "<strong>Badging and Lenel</strong>" +  "<br>" + badingAndLenelNarative + "<br>" + "<br>" + "<strong>Cameras</strong>" + "<br>" + cameraAuditNarrativeNarative + "<br>" + "<br>" + newPassOnURL;

  var subject = 'A ' + shift + ' pass on has been generated for Thomas Edison';

  var modalMessage = "The orm named \'" + formName + "\' has been saved at Thomas Edison/Audits/Pass Ons/" + yyyy + "/" + formFolder + " or " + URL;
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
