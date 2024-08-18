

export const validate = (email, password)=>{
const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
if(!isEmailValid){
    return "email not valid"
}
if(!isPasswordValid){
    return "password not valid, it must contain one capital alphabet, one number, one special character and one small character."
}


return null



}