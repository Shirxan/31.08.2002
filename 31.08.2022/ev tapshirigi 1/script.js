function check() {
    let email = 'admin@gmail.com' ;
    let pass = 123456789 ;
    let usermail = document.getElementById('mail');
    let password = document.getElementById('pass');
    console.log(usermail.value);
    console.log(password.value);
    
    

    if(usermail.value==email && password.value==pass){
        Swal.fire({
            icon: 'success',
            title: 'Successfully',
            text: 'Something went right!',
            
          })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    



}
function pass(){
    let x = document.getElementById("password")
    let y = document.getElementById("hide2")
    let z = document.getElementById("hide1")
    
    if(password.type=='password'){
        x.setAttribute('type','text');
        y.classList.add('hide2S')

               

    }
    else{
        x.setAttribute('type','password');
        z.classList.remove('hide1')
    }
}