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

/**
   * Function : formateText
   * Description : removes all html tags from a string
   * Params : text to be formated
   */ 

  export function formateText(text){
    return  text.replace("<p>", "")
     .replace("</p>", "")
     .replace("<d>", "")
     .replace("</d>", "")
     .replace("<dfn>", "")
     .replace("</dfn>", "")
     .replace("<em>", "")
     .replace("</em>", "")
     .replace("&nbsp;", "")
     .replace("&amp;", "")
     .replace("&quot;", "")
     .replace("&#39;", "")
     .replace("<ul>", "")
     .replace("</ul>", "")
     .replace("<li>", "")
     .replace("</li>", "")
     .replace("<li>", "")
     .replace("</li>", "")
 
   }