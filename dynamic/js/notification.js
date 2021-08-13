

on_load =()=>{
    document.getElementById('notification-details').style.display = "none";
   

    }
    window.onload=on_load();
// notification
    document.getElementById('notification').onclick = function(){ 
        document.getElementById('notification-details').style.display ="block";
        document.getElementById('personal-section').style.display = "none";
         
        }
    
        document.getElementById('back-to-list').onclick=function(){
            document.getElementById('personal-section').style.display ="block";
            document.getElementById('notification-details').style.display = "none";
        }


 $( 'a a' ).remove();

 document.documentElement.setAttribute("lang", "en");
 document.documentElement.removeAttribute("class");