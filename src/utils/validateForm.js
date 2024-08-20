const validateForm=(name,email,username,phone)=>{


    let valid=true;
    let invalid={
        name:false,
        email:false,
        username:false,
        phone:false,
    };
    if(!name || !email || !phone || !username){
        valid=false;
            invalid={
                name:!name,
                email:!email,
                username:!username,
                phone:!phone
            };
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^9}$/;

    if(!emailRegex.test(email) || !phoneRegex.test(phone)){

        invalid={
            ...invalid,
            email:!emailRegex.test(email),
            phone:!phoneRegex.test(phone)
        };
        valid=false;
    }
    return {
        valid,invalid,
    }
}
export default validateForm