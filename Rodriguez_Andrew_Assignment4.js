//alert("JavaScript works!");

// Andrew Rodriguez
// SDI 1407
// Project 4 Assignment 4
// String, Number, Array Assignment 4

// ------ < String Problems for Assignment 4 > ------

// #1 Does a string follow a 123-456-7890 like a phone number?
   var PhoneNumber = function(number) {
   var FirstHyphen = number.indexOf("_");
   var LastHyphen = number.lastIndexOf("-");

   // Phone Number broken into three sections

   var Areacode = number.substring(0, FirstHyphen);
   var FirstThreeNumbers = number.substring(FirstHyphen +1, LastHyphen);
   var LastFourNumbers = number.substring(LastHyphen + 1, Number.length);

   // Check for the two hyphens in a 123-456-7890 number.

   if(FirstHyphen & LastHyphen) {
     // Check Length
     if (Areacode.length === 3 & FirstThreeNumbers.length === 3 & LastFourNumbers.length === 4)
     	return true;
 } else {
 	return false;
   } else {
   	return false;
   }

};

// #2 Does a string follow an aaa@bbb.ccc pattern like an email address?
   var EmailAddress = function(EmailAddress) {
   var AtSymbol = EmailAddress.indexOf("@");
   var Dot = EmailAddress.lastIndexOf(".");

   // EmailAddress borken into sections

   var FirstPart = EmailAddress.substring(0, AtSymbol);
   var SecondPart = EmailAddress.substring(AtSymbol +1, Dot);
   var ThirdPart = EmailAddress.substring(Dot +1, EmailAddress.length);

   // Check for the At Symbol and Dot in an EmailAddress

   if (AtSymbol & Dot) {
    // Check Length
    if (FirstPart.length === 4 & SecondPart.length === 8 & ThirdPart.length === 12)
      return true;
  } else {
    return false;
  }
    } else {
      return false;
    }

  };
