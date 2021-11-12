$(document).ready(function(){
    
    var inputs = document.getElementsByClassName('formulario__input');
    for (var i = 0; i<inputs.length; i++){
        inputs[i].addEventListener('keyup', function(){
            if(this.value.length >=1){
                this.nextElementSibling.classList.add('fijar');
            }else{
                this.nextElementSibling.classList.remove('fijar');
            }
        });
    }

    $('#btnComenzar').click(function(){
        var nombre = $('#txtNombre').val();
        var cedula = $('#txtCedula').val();
        var telefono = $('#txtTelefono').val();
        var cargo = $('#slcCargo').val();

        if(nombre != '' && cedula!= ''&& telefono!= '' && cargo!= ''){
            console.log(nombre,cedula,telefono,cargo);
            return true;
        }
            
        else{
            console.log('error');
            return false;
        }
            
    });



});

