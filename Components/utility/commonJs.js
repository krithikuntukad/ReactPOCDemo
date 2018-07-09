export function checkForUndefinedORNull(data) {
    return (data == undefined ||
    data == "undefined" ||
    data == "null" ||
    data == null ||
    data == "")
}