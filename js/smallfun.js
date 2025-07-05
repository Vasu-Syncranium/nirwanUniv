
 function disableNonNumeric(e)
     {
        
         var key;      
         if(window.event)
         {
              key = window.event.keyCode; //IE
              if(key<48 || key>58)
                        window.event.returnValue=false;
         }
         else
         {
              key = e.keyCode ? e.keyCode : e.which; //firefox 
                    
              if (key==8 || key==9)
              {}
              else
              {
                    if(key<48 || key>58)
                     e.preventDefault();
              }
          }
      }  
 function percentageValidation(e)
     {
         var key;      
         if(window.event)
         {
              key = window.event.keyCode; //IE
              if (key==46)
              {}
              else{
                  if(key<48 || key>58)
                        window.event.returnValue=false;
              }
         }
         else
         {
              key = e.keyCode ? e.keyCode : e.which; //firefox 
                    
              if (key==8 || key==9 || key==46)
              {}
              else
              {
                    if(key<48 || key>58)
                     e.preventDefault();
              }
          }
      } 
function isAadhaar(txt)
{
	var aNo=txt.value;
	var regExp= /^\d{12}$/;
        
	if(!aNo.match(regExp))
		return false;
	else
		return true;
}

function isEmail(txt)
{
	var email=txt.value;
	var regExp= /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        
	if(!email.match(regExp))
		return false;
	else
		return true;
}
function PINCheck(txt)
{

	var pin=txt.value;

	var regExp = /^\d{6}$/;

	if(!pin.match(regExp))
		return false;
	else
		return true;
}

function checkdate(txt){

var validformat=/^\d{2}\-\d{2}\-\d{4}$/;
var returnval=false;
if (!validformat.test(txt.value))
	{txt.value="";}
else{ 

	var dayfield=txt.value.split("-")[0]
	var monthfield=txt.value.split("-")[1]
	var yearfield=txt.value.split("-")[2]
	var dayobj = new Date(yearfield, monthfield-1, dayfield)
	if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield))
		{txt.value="";}
	else
		returnval=true;
}
return returnval;
} 

function updateClock ( )
{
  var currentTime = new Date ( );
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();
if (month < 10){
month = "0" + month;
}
if (day < 10){
day = "0" + day;
}
  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = day + "-" + month + "-" + year + " " + currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  
}
function todayDate(txt){
    var currentTime = new Date ( );
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    if (month < 10){
    month = "0" + month;
    }
    if (day < 10){
    day = "0" + day;
    }
    if(txt)
        txt.value=day + "-" + month + "-" + year;
}
function trim(text) {
    return text.replace(/^\s+|\s+$/g, "");
}

function manageDate(txt){
    var val=trim(txt.value);
    
    if(val.length=0)
        return
    else{
        var val1=val.split(/[-./,]+/);
        var d,m,y;
        d=val1[0];
        m=val1[1];
        y=val1[2];
        if(d.length<2)
            d="0"+d;
        if(m.length<2)
            m="0"+m;
        if(y.length==2) 
            y = (y>50) ? '19'+y : '20'+y;
        txt.value=d+"-"+m+"-"+y;
    }
}

