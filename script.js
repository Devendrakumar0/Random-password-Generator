function GeneratePassword() {
    const Numbers = "0123456789";
    const length = 12;
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/~`";
    let allowedchars = "";
    let password = "";
    allowedchars += lowercase;
    allowedchars += uppercase;
    allowedchars += Numbers;
    allowedchars += symbols;
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[random];
    }
    document.getElementById("myh2").textContent = `Generated password: ${password}`;
}
