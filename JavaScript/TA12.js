function generatePassword(length) {
    if (length < 8) return console.error("La longitud de la contraseña debe ser de al menos 8 caracteres"); 
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="; 
    let password = "";
      
    for (let i = 0; i < length; i++) password += chars[Math.floor(Math.random() * chars.length)];
    return password;
    }
         
console.log(generatePassword(8));
console.log(generatePassword(8));

