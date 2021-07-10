let btn = document.querySelector('#btn');
btn.addEventListener("click",function login()
{
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let subject = document.querySelector('#subject').value;
    let message = document.querySelector('#message').value;
    loginreq(name,email,subject,message)
    console.log("clicked")
});
async function loginreq(name,useremail,subject,message){
    let obj = {
        name : name,
        email : useremail,
        subject : subject,
        message : message,
      }
        let res = await fetch("https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us",{
         method:"post",
         headers:{
        "content-type":"application/json"
        },
        body:JSON.stringify(obj)
     });
     let resBody = await res.json();
    if(resBody.error){
    alert(resBody.error);
     }else{
    alert("sending message was success")

    }
    console.log(resBody);
}