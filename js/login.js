function Login() {
    var done = 0;
    var usuario = document.login.usuario.value;
    var password = document.login.password.value;
    if (usuario == "prueba" && password == "12345") {
        window.location = "tabla.html";
    } else {
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
    }
}

document.oncontextmenu = function() {
    return false
}