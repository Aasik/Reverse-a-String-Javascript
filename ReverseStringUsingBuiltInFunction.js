function ReverseString(str){


        //split the string  and assigned that into a variable
        var splittedString = str.split("");

        // reverse the elements 
        var reveresedElemtsBeforeJoin = splittedString.reverse();

        //Merge them into a string 
        var FinalElemnt = reveresedElemtsBeforeJoin.join("");

        alert(FinalElemnt);

}



ReverseString("hello");