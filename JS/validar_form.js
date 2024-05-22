$(document).ready(function(){
    //para el form de iniciar sesion
    $("#formEntrar").submit(function(event){
        // Evita que se envíe automáticamente
        event.preventDefault();
        
        // Realizar las validaciones
        var correo = $("#correo").val();
        var password = $("#password").val();
        var formato = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        // correo
        //test comprueba si "correo" coincide con el patron "formato" y devuelve un valor booleano, true coincide, false no coincide
        // con el ! da el valor booleano contrario al anterior, si el ! es false el if no se ejecuta
        if (!formato.test(correo)) {
            alert("Ingrese un correo válido");
            return;
        }

        if(password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password)){
            alert("La contraseña debe tener al menos 8 caracteres, un número y una letra mayúscula");
            return;
        }

        // Si todas las validaciones pasan, se puede enviar el formulario
        alert("¡Ha iniciado sesión!");
    });




    //para el form de registrarse
    $("#formRegistrarse").submit(function(event){
        // Evita que se envíe automáticamente
        event.preventDefault();
        
        // Realizar las validaciones
        var nombre = $("#nombre").val();
        var apellidoPaterno = $("#apellidoPaterno").val();
        var apellidoMaterno = $("#apellidoMaterno").val();
        var rut = $("#rut").val();
        var celular = $("#celular").val();
        var correo = $("#correo").val();
        var password = $("#password").val();
        var formato = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        //nombre
        if(nombre.length < 3 || nombre.length > 20 ||
            apellidoPaterno.length < 3 || apellidoPaterno.length > 20 ||
            apellidoMaterno.length < 3 || apellidoMaterno.length > 20){
            alert("El Nombre y los Apellidos deben tener entre 3 y 20 caracteres.");
            return;
        }
        
        //rut
        if(rut.length !=9 ){
            alert("El Rut debe tener 9 caracteres. Sin guion ni digito verificador.");
            return;
        }

        // Celular: largo entre 9 y 12 caracteres
        if(celular.length !=9 ){
            alert("El Celular debe tener 9 digitos");
            return;
        }        

        // correo
        if (!formato.test(correo)) {
            alert("Ingrese un correo válido");
            return;
        }

        if(password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password)){
            alert("La contraseña debe tener al menos 8 caracteres, un número y una letra mayúscula");
            return;
        }

        // Si todas las validaciones pasan, se puede enviar el formulario
        alert("¡Se ha registrado correctamente!");
    });
});
