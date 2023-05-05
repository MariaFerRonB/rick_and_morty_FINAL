const validation = (userData) => {

    const errors = {};
    if(!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email =" El email ingresado no es valido"
          
        }
        if(!userData.email){
            errors.email ="Debe ingresar un email"
        }
        if(userData.email.length > 35) {
            errors.email = "El email solo puede tener un maximo de 35 caracteres."
        }

        if(!/\d/.test(userData.password)){
            errors.password ="La contraseña debe contener por lo menos un numero"
        }

        if(userData.password.length < 6 || userData.password.length > 10){
            errors.password ="La contraseña debe contener de 6 a 10 caracteres"
        }
        return errors;
 }


export default validation;