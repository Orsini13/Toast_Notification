let toastBox = document.getElementById('toastBox');   
let successMsg = '<i class="fa-solid fa-circle-check"></i>Succesfully submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>error occured!!, Please fix'
let InvalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Your input is invalid, carefully check again'

function showToast(msg){
   let toast = document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML = msg;
   toastBox.appendChild(toast);

   if(msg.includes('invalid')) {
    toast.classList.add('invalid');
   }
   if(msg.includes('error')) {
    toast.classList.add('error');
   }
   setTimeout(()=>{
        toast.remove();
   },6000);
}