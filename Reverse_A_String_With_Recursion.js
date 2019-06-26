function reverseString(stringg){

    if(stringg === ""){
        return "";
    }else{
        return reverseString(stringg.substr(1)) + stringg.charAt(0);
         
    }
    
    
    
}


alert(reverseString("Hello"));
