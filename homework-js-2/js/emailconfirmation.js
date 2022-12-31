//Подтверждение почты
let mail = "sam@example.com";
let mailConfirmation = showEmailConfirmation(mail);
console.log(mailConfirmation);
function showEmailConfirmation(email){
    let Confirmation = `We just sent an email to ${email}. Please check your inbox.`
    return  Confirmation;
}