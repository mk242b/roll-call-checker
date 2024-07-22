function getSelectedValue() {
   var selectElement = document.getElementById('subjects');
   var selectedValue = selectElement.value;
   
}
function check(){
   
   
   var subject = document.getElementById('subjects').value;
   var month = document.getElementById('months').value;
   var abs = document.getElementById("abs-input").value;
   if (!isNaN(abs) && abs.trim() !== "" && abs <= 30) {

      var rollCall_result;
      var sessions = getSession(subject,month);
      var attendence = sessions - abs;
      var maj_name = getsubID(subject);
      if (month == "sept") {
         var newAtd = septAdder(subject,attendence);
         rollCall_result = calculateRollCallPercentage(newAtd,sessions);
        
      }else{
         rollCall_result = calculateRollCallPercentage(attendence,sessions);
      
      }
      document.getElementById("box").style.display = "none";
      document.getElementById("result").style.display = "block";
      document.getElementById("prediction-text").textContent = monthUpperCase(month) + " , " +maj_name + " - " + rollCall_result;
      document.getElementById("loading").style.display = "none";
   
   }else{
      alert("ကျေးဇူးပြု၍ မှန်ကန်သော အချက်အလက်ကို ထည့်သွင်းပါ။");
      document.getElementById("loading").style.display = "none";
      document.getElementById("check").style.display = "inline-block";
   }
   
}

function monthUpperCase(str)
{   if (!str) return str;
   let words = str.split(' ');


    if (words.length > 0) {
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }

    return words.join(' ');
}

function septAdder(name,atd){
   if (name == "myanmar") {
      return atd + 2;
   }
   if (name == "english") {
      return atd + 2;
   }
   if (name == "math") {
      return atd + 2;
   }
   if (name == "phys") {
      return atd + 5;
   }
   if (name == "pre") {
      return atd + 3;
   }if (name == "ics") {
      return atd + 5;
   }if (name == "c") {
      return atd + 3;
   }if (name == "dld") {
      return atd + 2;
   }
}

function getsubID(name){
   if (name == "myanmar") {
      return "M-12011";
   }
   if (name == "english") {
      return "E-12011";
   }
   if (name == "math") {
      return "CM-12011";
   }
   if (name == "phys") {
      return "EPh-12011";
   }
   if (name == "pre") {
      return "PrE-12011";
   }if (name == "ics") {
      return "ISCE-12012";
   }if (name == "c") {
      return "ISCE-12021";
   }if (name == "dld") {
      return "ISCE-12127";
   }
}

function getSession(name,month){
   

   if (month == "june") {
      if (name == "myanmar") {
         return 8;
      }
      if (name == "english") {
         return 11;
      }
      if (name == "math") {
         return 14;
      }
      if (name == "phys") {
         return 20;
      }
      if (name == "pre") {
         return 12;
      }if (name == "ics") {
         return 20;
      }if (name == "c") {
         return 15;
      }if (name == "dld") {
         return 14;
      }
   }

   if (month == "july") {
      if (name == "myanmar") {
         return 10;
      }
      if (name == "english") {
         return 15;
      }
      if (name == "math") {
         return 18;
      }
      if (name == "phys") {
         return 23;
      }
      if (name == "pre") {
         return 15;
      }if (name == "ics") {
         return 19;
      }if (name == "c") {
         return 15;
      }if (name == "dld") {
         return 18;
      }
   }
   if (month == "august") {
      if (name == "myanmar") {
         return 8;
      }
      if (name == "english") {
         return 12;
      }
      if (name == "math") {
         return 18;
      }
      if (name == "phys") {
         return 22;
      }
      if (name == "pre") {
         return 12;
      }if (name == "ics") {
         return 24;
      }if (name == "c") {
         return 19;
      }if (name == "dld") {
         return 17;
      }
   }
   if (month == "sept") {
      if (name == "myanmar") {
         return 8;
      }
      if (name == "english") {
         return 14;
      }
      if (name == "math") {
         return 16;
      }
      if (name == "phys") {
         return 22;
      }
      if (name == "pre") {
         return 12;
      }if (name == "ics") {
         return 21;
      }if (name == "c") {
         return 16;
      }if (name == "dld") {
         return 17;
      }
   }

   
   
}

function calculateRollCallPercentage(attended, total) {
   if (total === 0) {
       return 'Total number of classes cannot be zero.';
   }
   let percentage = (attended / total) * 100;
   if (percentage > 100) {
      return 100 + '%';
   }
   if (percentage < 0) {
      return 0 + '%';
   }
   
   return percentage.toFixed(2) + '%'; // Return percentage rounded to two decimal places
}



function z_returnToIndex(){
   document.getElementById("z-box").style.display = "block";
   document.getElementById("z_result").style.display = "none";
   document.getElementById("z-text").textContent = "";
   document.getElementById("z_loading").style.display = "none";
   document.getElementById("z-check").style.display = "inline-block";
}

function returnToIndex(){
   document.getElementById("box").style.display = "block";
   document.getElementById("result").style.display = "none";
   document.getElementById("prediction-text").textContent = "";
   document.getElementById("loading").style.display = "none";
   document.getElementById("check").style.display = "inline-block";
}

function delay_check(){
   document.getElementById("loading").style.display = "block";
   document.getElementById("check").style.display = "none";
   check();
}

//make a random prediction for the user funny
//need to make javascript for that need more styling and more funcitons 
