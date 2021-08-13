on_load =()=>{
    document.getElementById('pending').style.display = "none";
    document.getElementById('submitted').style.display = "none";
    document.getElementById('approved').style.display = "none";
    document.getElementById('resubmit').style.display = "none";

   

    }
    window.onload=on_load();
// homework List
    document.getElementById('submitted-btn').onclick = function(){ 
        document.getElementById('homework-list').style.display ="none";
        document.getElementById('submitted').style.display = "block";
         
        }
    
        document.getElementById('back-to-homeworklist').onclick=function(){
            document.getElementById('homework-list').style.display ="block";
            document.getElementById('submitted').style.display = "none";
        }
    
        // submitted homework list
        // pending 
    document.getElementById('pending-btn').onclick = function(){ 
    document.getElementById('submitted-homework').style.display ="none";
    document.getElementById('pending').style.display = "block";
     
    }

    document.getElementById('back-to-list').onclick=function(){
        document.getElementById('submitted-homework').style.display ="block";
        document.getElementById('pending').style.display = "none";
    }
 // approved 
 document.getElementById('approved-btn').onclick = function(){ 
    document.getElementById('submitted-homework').style.display ="none";
    document.getElementById('approved').style.display = "block";
     
    }

    document.getElementById('back-to-list-approved').onclick=function(){
        document.getElementById('submitted-homework').style.display ="block";
        document.getElementById('approved').style.display = "none";
    }
    // resubmit 
 document.getElementById('resubmit-btn').onclick = function(){ 
    document.getElementById('submitted-homework').style.display ="none";
    document.getElementById('resubmit').style.display = "block";
     
    }

    document.getElementById('back-to-list-resubmit').onclick=function(){
        document.getElementById('submitted-homework').style.display ="block";
        document.getElementById('resubmit').style.display = "none";
    }
    

    // teacher file attach preview and download
    $( 'a a' ).remove();

    document.documentElement.setAttribute("lang", "en");
    document.documentElement.removeAttribute("class");
    
    // axe.run( function(err, results) {
    //   console.log( results.violations );
    // } );
    


    