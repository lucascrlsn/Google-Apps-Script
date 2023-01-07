function testREGEX() {

  try {

    let rawSheetData = `This is a test of a multi-
    line string. There should be
    at least two lines in this string that should be 
    split, removed, combined, and re-written into a single
    line string.`;

    //let sheetData = Utilities.parseCsv(rawSheetData);
    let unformattedSheetData = Utilities.parseCsv(rawSheetData);

    //let regexExp = new RegExp("(/(\r\n|\n|\r)/)","gm");
    let regexExp = new RegExp("(/\n|\r/g)","");

    // CONVERT TO STRING, SPLIT BY REGEX PARAMS, EXECUTE REGEX, REJOIN 
    let sheetData = unformattedSheetData.toString().split(regexExp).join();

    console.log(sheetData);

  } catch (err) {
    // HANDLE EXCEPTION
    console.log('Failed with error: %s', err.message);
  }

}
