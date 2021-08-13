// For Tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


  


  // For fixed height width table scroll which is used in Sales-Invoice page and modal
$(function() {
  //The passed argument has to be at least a empty object or a object with your desired options
  $('.scroll-only-y').overlayScrollbars({
      scrollbars: {
          autoHide: "scroll",
          autoHide: "never",

      },
  });

});


// For fixed height width table scroll which is used in Sales-Invoice page and modal
$(function() {
  //The passed argument has to be at least a empty object or a object with your desired options
  $('.table-scroll-x-y').overlayScrollbars({
      scrollbars: {
          autoHide: "scroll",
          autoHide: "never",

      },
  });

});


// For Calendar used in sales-invoice
$(function() {
  $('input[name="DatePickerOnly"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'), 10)
  });
});




  
on_load =()=>{
  document.getElementById('leave-request-form').style.display="none";
  
}
window.onload=on_load();

document.getElementById('add-request').onclick = function(){

document.getElementById('leave-request-section').style.display ="none";
document.getElementById('leave-request-form').style.display = "block";
 
}

document.getElementById('back-to-list').onclick = function(){
document.getElementById('leave-request-section').style.display="block";
document.getElementById('leave-request-form').style.display="none";
}






var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1st unit tests', '2nd unit tests', '3rd unit tests', '4th unit tests'],
        datasets: [{
            label: ' overall progress',
            display:false,
            data: [49, 61, 72, 83],
            callback: function(data){return data},
            backgroundColor: [
                'rgba(255,255, 255, 0.9)'
               
            ],
            borderColor: [
                'rgba(118, 190, 78, 1)'
                
            ],
            fontColor:[
              'rgba(0,0,0,1)'
            ],
            fontWeight:[
              'bold'
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive:false,
        scales: {
            yAxes: [{
                ticks: {
                  min: 20,
                   max: 100,
                   stepSize: 20,
                   callback: function(value){return value},

                   fontWeight:[
                    'bold'
                  ]
                }
            }],
            
        },
        legend:{
          position:"right",
         margin:{
          left:50,
          right:0
         }
          
        },
        layout:{
          padding:{
            top:50,
            left:20,
            right:0,
            bottom:10

          }
        }
        
    }
});



var ctx2 = document.getElementById('subjectChart');
var myChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['1st unit tests', '2nd unit tests', '1st Monthly tests', 'First Term','2nd Monthly tests'],
        datasets: [{
            label: ' overall progress',
            display:false,
            data: [49, 61, 72, 83,76],
            callback: function(data){return data+ "%"},
            backgroundColor: [
                'rgba(255,255, 255, 0.9)'
               
            ],
            borderColor: [
                'rgba(118, 190, 78, 1)'
                
            ],
            fontColor:[
              'rgba(0,0,0,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive:false,
        scales: {
            yAxes: [{
                ticks: {
                  min: 0,
                   max: 100,
                   stepSize: 20,
                   callback: function(value){return value}
                }
            }],
          
            
        },
        legend:{
          position:"right",
         margin:{
          left:50,
          right:0
         }
          
        },
        layout:{
          padding:{
            top:50,
            left:20,
            right:0,
            bottom:10

          }
        }
        
    }
});






