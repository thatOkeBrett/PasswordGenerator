function GeneratePassword(length = 16){
    
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjklmnopqrstuvwxwyz0123456789@?/|{]}]+_-#$";

    let password = "";

    for (let i = 0; i < length; ++i) {
        
        let at = Math.floor(Math.random() * (charset.length +1));

        password += charset.charAt(at)

        
    }
    return password;
}

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", ()=> {
    input.value = GeneratePassword(16);
})