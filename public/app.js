const socket =io();

const btn=document.querySelector('#send-btn')
const txtarea=document.querySelector('#inp-msg');
const loginbtn=document.querySelector('#login-btn');
const loginname=document.querySelector('#login-name');
const logout=document.querySelector('#disc');

 console.log(logout);
 $('#chatting-area').hide();

$(btn).click(()=>{

    const text=txtarea.value;
    socket.emit('send-msg',{
        msg:text
    })
    
    txtarea.value="";
})


$(loginbtn).click(()=>{
    const text =loginname.value;
    
    socket.emit('login',{
        user:text
    })
    loginname.value="";
    $('#chatting-area').show();
    $('#login-area').hide();
    
})

socket.on('rec-msg',(data)=>{
    $('#chat').append(`<li><strong>${data.user}</strong> : ${data.msg}</li>`)
     $("#chat-area").scrollTop($("#chat-area").outerHeight());
})

$(logout).click(()=>{

    socket.close();
     $('#chatting-area').hide();
    $('#login-area').show();
    console.log('clicked');

})

