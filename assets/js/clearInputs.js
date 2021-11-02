export function clearInputs(){
      const  inputs = document.querySelectorAll('.form-inputs')
      inputs.forEach((input)=>{
            input.value = null;
      });
}