let statusNow=document.querySelector('#status')
let addFriend=document.querySelector('#btn')

let flag=0;
addFriend.addEventListener('click',function(){
    if(flag==0){
        addFriend.innerHTML="Remove" ;
        statusNow.innerHTML="Friends";
        addFriend.style.backgroundColor="red";
        flag=1;

    }
    else {
       addFriend.innerHTML="Add Friend" ;
       statusNow.innerHTML="Strangers";
       addFriend.style.backgroundColor="green";
       flag=0;
       

    }
})