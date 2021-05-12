console.log ('Margarita Zakharova') ;

var hobbies = {
  "mused" : "",
  "why" : "",
  "genre" : "",
  "band" : "",
  "guitartype" : "",
  "guitarlabel" : "",
  "stringsnum" : "",
  
} ;

function HandlemusedChange() {
  hobbies.mused = document.getElementById("mused").value;
  console.log(hobbies.mused);
}

function HandlewhyChange() {
  hobbies.why = document.getElementById("why").value;
  console.log(hobbies.why);
}

function HandlegenreChange() {
  hobbies.genre = document.getElementById("genre").value; console.log(hobbies.genre);
}

function HandlebandChange() {
  hobbies.band = document.getElementById("band").value; console.log(hobbies.band);
} 

function HandleguitartypeChange (e) {
 hobbies.guitartype=e.target.value;
 if (hobbies.guitartype!="other") {
   hobbies.guitartype="";
   document.getElementById("guitartype").style.display="none";
 }
 else{
   document.getElementById("guitartype").style.display="block";
 }

function HandleguitarlabelChange() {
  hobbies.guitarlabel = document.getElementById("guitarlabel").value;
  console.log(hobbies.guitarlabel);
}

function HandlestringsnumChange() {
  hobbies.stringsnum = document.getElementById("stringsnum").value;
  console.log(hobbies.stringsnum);
}

}