function ReverseString(str){


    var newString= ""

    for(var i = str.length;i <=0; i--){
        newString += str[i];
    }


    return newString;

}

ReverseString("Javascript");