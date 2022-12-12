const verificar = document.getElementById ("Verificar");

(function () {
    
    if (validationCustom08 !== validationCustom09){
        verificar.innerText = "Son iguales";
    }else{
        verificar.innerText = "No son iguales"
    }
    
    'use strict'
    
    var forms = document.querySelectorAll('.needs-validation')
  
    
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()