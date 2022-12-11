function accessCRMCRUD() {

  var startFunc = new Date().getTime();

  var scriptProperties = PropertiesService.getScriptProperties();

  // SET WORKSHEET ID
  var SpreadsheetID = "1ASSelzFhN32EU--JyhYspcy3ZNDZmLWq1Q7Zgupdus4";
  scriptProperties.setProperty('SpreadsheetID', JSON.stringify(SpreadsheetID).replace(/['"]+/g,""));

  // SET COLUMN HEADER INDEXS IN THE BACKGROUND
  var ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SpreadsheetID'));
  var ws = ss.getSheetByName("main");

  var headers = ws.getDataRange().getValues().shift();
  // SET HEADER INDICES PROPERTY FOR LATER USE
  scriptProperties.setProperty('rawDataColIndices', JSON.stringify(headers).replace(/['"]+/g,""))

  // CALL PROPERTY BY: PropertiesService.getScriptProperties().getProperty('rawDataColIndices')

  var firstNameColumnIndex = headers.indexOf("First Name")+1;
  scriptProperties.setProperty('firstNameColumnIndex', JSON.stringify(firstNameColumnIndex).replace(/['"]+/g,""));

  var lastNameColumnIndex = headers.indexOf("Last Name")+1;
  scriptProperties.setProperty('lastNameColumnIndex', JSON.stringify(lastNameColumnIndex).replace(/['"]+/g,""));

  var phoneNumberColumnIndex = headers.indexOf("Phone Number")+1;
  scriptProperties.setProperty('phoneNumberColumnIndex', JSON.stringify(phoneNumberColumnIndex).replace(/['"]+/g,""));

  var jobTitleColumnIndex = headers.indexOf("Job Title")+1;
  scriptProperties.setProperty('jobTitleColumnIndex', JSON.stringify(jobTitleColumnIndex).replace(/['"]+/g,""));

  var companyColumnIndex = headers.indexOf("Company")+1;
  scriptProperties.setProperty('companyColumnIndex', JSON.stringify(companyColumnIndex).replace(/['"]+/g,""));

  var addressColumnIndex = headers.indexOf("Address")+1;
  scriptProperties.setProperty('addressColumnIndex', JSON.stringify(addressColumnIndex).replace(/['"]+/g,""));

  var leadTypeColumnIndex = headers.indexOf("Lead Type")+1;
  scriptProperties.setProperty('leadTypeColumnIndex', JSON.stringify(leadTypeColumnIndex).replace(/['"]+/g,""));

  const htmlServ = HtmlService.createTemplateFromFile("app_CRM");
  const html = htmlServ.evaluate();
  html.setWidth(1200).setHeight(600);
  const ui = SpreadsheetApp.getUi();

  ui.showModalDialog(html, "Customer Relationship Management");

  var endFunc = new Date().getTime();

  Logger.log('The CRM tool opened in ' + (endFunc - startFunc) + ' microseconds');

}

function loadCRMPartialHTML_(partial){
  // REUSABLE FOR TABS WITHIN CRM EDIT GUI
  const htmlServ = HtmlService.createTemplateFromFile(partial);
  return htmlServ.evaluate().getContent();
}

function loadCRMSearchView(){

  return loadCRMPartialHTML_("searchView_CRM");

}

function loadCRMEditView(){

  return loadCRMPartialHTML_("editView_CRM");

}

function loadCRMHelpView(){

  return loadCRMPartialHTML_("helpView_CRM");

}

function getCRMDataForSearch(){

  var startFunc = new Date().getTime();

  var ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SpreadsheetID'));
  const ws = ss.getSheetByName("main");

  var endFunc = new Date().getTime();

  Logger.log('All data was returned in ' + (endFunc - startFunc) + ' microseconds');

  return ws.getRange(2,1,ws.getLastRow()-1,ws.getMaxColumns()).getDisplayValues().withFailureHandler(failedDataRetrieval);

}

function deleteCRMDataByID(CRMIdForDelete){

  var startFunc = new Date().getTime();

  const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SpreadsheetID'));
  const ws = ss.getSheetByName("main");

  const CRMRecordId = ws.getRange(2,1,ws.getLastRow()-1,1).getDisplayValues().map(r => r[0].toString().toLowerCase());
  const CRMRecordIdPosition = CRMRecordId.indexOf(CRMIdForDelete.toString().toLowerCase());
  const CRMRecordIdRowNumber = CRMRecordIdPosition === -1 ? 0 : CRMRecordIdPosition + 2;

  ws.deleteRow(CRMRecordIdRowNumber);

  var endFunc = new Date().getTime();

  Logger.log('The record was deleted in ' + (endFunc - startFunc) + ' microseconds');
}

function getCRMRecordById(CRMIdForEdit){

  var startFunc = new Date().getTime();

  const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SpreadsheetID'));
  const ws = ss.getSheetByName("main");

  const CRMRecordId = ws.getRange(2,1,ws.getLastRow()-1,1).getDisplayValues().map(r => r[0].toString().toLowerCase());
  const CRMRecordIdPosition = CRMRecordId.indexOf(CRMIdForEdit.toString().toLowerCase());
  const CRMRecordIdRowNumber = CRMRecordIdPosition === -1 ? 0 : CRMRecordIdPosition + 2;
  const CRMRecordInfo = ws.getRange(CRMRecordIdRowNumber,1,1,ws.getMaxColumns()).getDisplayValues()[0];

  // GET ROW VALUES
  var headers = ws.getDataRange().getValues().shift();
  var dateAddedIndex = headers.indexOf("Date Added");
  var firstNameIndex = headers.indexOf("First Name");
  var lastNameIndex = headers.indexOf("Last Name");
  var phoneNumberIndex = headers.indexOf("Phone Number");
  var jobTitleIndex = headers.indexOf("Job Title");
  var companyIndex = headers.indexOf("Company");
  var addressIndex = headers.indexOf("Address");
  var leadTypeIndex = headers.indexOf("Lead Type");

  var endFunc = new Date().getTime();

  Logger.log('A specific record was grabbed in ' + (endFunc - startFunc) + ' microseconds');

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // FIND AND SET COLUMN INDEXES BASED OF COLUMN NAMES - THIS ALLOWS SERVER TO FLEX IF/WHEN COLUMN/FIELDS ARE MODIFIED AND/OR MOVED

  return {recordID: CRMRecordInfo[0],
            dateAdded: CRMRecordInfo[dateAddedIndex],
            fname: CRMRecordInfo[firstNameIndex],
            lname: CRMRecordInfo[lastNameIndex],
            phoneNumber: CRMRecordInfo[phoneNumberIndex],
            jobTitle: CRMRecordInfo[jobTitleIndex],
            company: CRMRecordInfo[companyIndex],
            address: CRMRecordInfo[addressIndex],
            leadType: CRMRecordInfo[leadTypeIndex]
            }

}

function editCRMRecordById(CRMIdForEdit,CRMRecordInfo){

  var startFunc = new Date().getTime();

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("main");
  const CRMRecordId = ws.getRange(2,1,ws.getLastRow()-1,1).getDisplayValues().map(r => r[0].toString().toLowerCase());
  const CRMRecordIdPosition = CRMRecordId.indexOf(CRMIdForEdit.toString().toLowerCase());
  const CRMRecordIdRowNumber = CRMRecordIdPosition === -1 ? 0 : CRMRecordIdPosition + 2;

  // ONLY WRITE IF A CHANGE WAS MADE BY THE USER

  // PREVIOUS CONDITIONALS

  /*if(CRMRecordInfo.date != ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('dateColumnIndex'))){
    ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('dateColumnIndex')).setValue(CRMRecordInfo.date);
  }*/

  //TERNARY

  let changeValue = 'False';

  CRMRecordInfo.dateAdded != ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('dateColumnIndex')) ? (ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('dateColumnIndex')).setValue(CRMRecordInfo.dateAdded),(changeValue = 'True')) : PASS;

  CRMRecordInfo.fname != ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('siteColumnIndex')) ? ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('siteColumnIndex')).setValue(CRMRecordInfo.fname) : PASS;

  CRMRecordInfo.lname != ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('processColumnIndex')) ? ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('processColumnIndex')).setValue(CRMRecordInfo.lname) : PASS;

  CRMRecordInfo.phoneNumber != ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('phoneNumberColumnIndex')) ? ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('phoneNumberColumnIndex')).setValue(CRMRecordInfo.phoneNumber) : PASS;

  CRMRecordInfo.jobTitle != ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('justificationColumnIndex')) ? ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('justificationColumnIndex')).setValue(CRMRecordInfo.jobTitle) : PASS;

  CRMRecordInfo.company != ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('jobTitleColumnIndex')) ? ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('jobTitleColumnIndex')).setValue(CRMRecordInfo.company) : PASS;

  CRMRecordInfo.address != ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('firstNameColumnIndex')) ? ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('firstNameColumnIndex')).setValue(CRMRecordInfo.address) : PASS;

  CRMRecordInfo.leadType != ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('lastNameColumnIndex')) ? ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('lastNameColumnIndex')).setValue(CRMRecordInfo.leadType) : PASS;

  CRMRecordInfo.company != ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('companyColumnIndex')) ? ws.getRange(CRMRecordIdRowNumber,PropertiesService.getScriptProperties().getProperty('companyColumnIndex')).setValue(CRMRecordInfo.company) : PASS;

  var endFunc = new Date().getTime();

  Logger.log('A specific record was edited in ' + (endFunc - startFunc) + ' microseconds. Was the date changed? ' + changeValue);

  return true;
}