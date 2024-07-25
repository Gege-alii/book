var bmark=document.getElementById('bookmarkName')
var burl=document.getElementById('bookmarkURL')
var submitbtn = document.getElementById('submitBtn')
var booking=[]

if (localStorage.getItem('book') === null) {
  booking=[];
}else{
  booking = JSON.parse(localStorage.getItem("book"));
 
    display();
  
}

submitBtn.onclick=function(){
  if(valid() === true){
  book()
      display()
    }else{
    alert('Site Name or Url is not valid, Please follow the rules below :                    -1 Site name must contain at least 3 characters                                        -2 Site URL must be a valid one')
  }
}


function book(){
  var bmarks={
        bookName:bmark.value,
        bookUrl:burl.value
    }
    
    booking.push(bmarks)
    localStorage.setItem('book',JSON.stringify(booking))
    display();
    console.log(bmarks)
    console.log(booking)
}
function display(){
    var str=``
    for( var i=0;i<booking.length;i++){
        str +=`
        <tr>
        <td>${i+1}</td>
        <td>${booking[i].bookName}</td>              
        <td>
        <a href="${booking[i].bookUrl}">
          <button class="btn btn-visit" data-index="0">
            <i class="fa-solid fa-eye pe-2"></i>Visit
          </button>
          </a> 
        </td>
        <td>
          <button class="btn btn-delete pe-2" data-index="0" onclick="delet(${i})">
            <i class="fa-solid fa-trash-can"></i>
            Delete
          </button>
        </td>
    </tr>
                    `
    }
document.getElementById('tableContent').innerHTML=str
}
function delet(index){
    booking.splice(index,1);
    localStorage.setItem('book',JSON.stringify(booking))
    display();
}

function valid(){
  var urlregex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
  var bookingurl = burl.value;
  var nameregex = /^[a-zA-Z]+$/;
   var bookingname = bmark.value;
  if(urlregex.test(bookingurl) && nameregex.test(bookingname)){
    return true;
  }else{
  return false;
  }
}
