function 1DArrayFilter() {

  try {

    let sampleArray = [10,"text3563",6,3,77,"ejetextkj25"];

    let newArray = sampleArray.filter(filterLogic)

    console.log(newArray);

  } catch (err) {
    // HANDLE EXCEPTION
    let functionName = arguments.callee.name;
    console.log("Failed in function " + functionName  + " with error \"" + err.message + "\"");
  }

}

let filterLogic = function(item){

  try {

    if(item.toString().indexOf("text") === -1){
      return true;
    } else {
      return false;
    }

    } catch (err) {
      // HANDLE EXCEPTION
      let functionName = arguments.callee.name;
      console.log("Failed in function " + functionName  + " with error \"" + err.message + "\"");
    }

}
