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

  // #3 Is the string a URL? (Does it start with http: or https:?)
   var UniformResourceLocator = function(URL) {
   var ColonMark = Url.indexOf(":");
   var Secure = Url.lastIndexOf("s");

   // Url borken into sections
   // http:

   var FirstPart = Url.substring(0 +4, ColonMark);
   var SecondPart = Url.substring(ColonMark, Url.length);

   // https:

   var FirstPart = Url.substring(0 +5, ColonMark);
   var SecondPart = Url.substring(ColonMark, Secure);
   var ThirdPart = Url.substring(Secure, Url.length);

   // Check for the http: and https: to confirm that the string is a url.

   if (ColonMark) {
    // Check Length
    if (FirstPart.length === 4 & SecondPart.length === 5);
    return true;
  } else {
    return false;
  }
    } else {
      return false;
    }

   };

   if (ColonMark & Secure) {
    //Check Length
    if (FirstPart.length === 5 & SecondPart.length === 6);
    return true;
  } else {
    return false;
  }
    } else {
      return false;
    }

   }:

// #4 Title-case a string (split into words, then uppercase the first letter of each word).
  // Variables:
  var Cocacola = function(Cocacola);
  var UpperCaseFirstWord = "Coca";
  var UpperCaseSecondWord = "Cola";
  var Coke = "CocaCola";
  var split = "Coca-Cola";


  // Confirm("we are going to split the string into two words and capitalize the frist letter of each word")

  // OutPut

  console.log(coke + "is now going to be split into two words");
  console.log("it is now view has" + split);
  console.log("next to capitalize the letter c which then becomes" + UpperCaseFirstWord);
  console.log("the second word will be capitalized as well" + UpperCaseSecondWord);
  console.log("the string will now look like this" + split);

  // #5 Find the number of hours or days difference between two dates.
     var Mybirthday = "September 13th 2014";
     var TodaysDate = "February 27th 2014";
     var Time = "Days"
     var Total days = 198;
     var Month1 = 30;
     var month2 = 31;

     console.log("the diffrence in days between" + Mybirthday + "And" + TodaysDate);
     console.log(Month1 * 3 + month2 * 4 + 1);
     console.log(Total days);
