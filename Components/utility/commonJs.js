 /**
  * Function : checkForUndefinedORNull
  * Description : Function checks for undefined or null or w=empty value of data and returns true if data satisfied with any of these.
  */
export function checkForUndefinedORNull(data) {
    return (data == undefined ||
    data == "undefined" ||
    data == "null" ||
    data == null ||
    data == "")
}