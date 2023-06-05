//La idea es un simulador de una tienda . Primero se declaran los productos y sus precios
let total = 0;
let precios = [60000, 45000, 6000, 8000, 80000, 120000, 70000, 4000];
let productos = ["Bolsa de tierra 90lt", "Bolsa de tierra 50lt", "Maceta 10lt", "Macetas 20lt", "Panel led 400w", "Panel led 800w", "Carpa para indoor", "Combo de nutrientes"];

//Bienvenida y validacion de edad
alert("¡Bienvenido al growshop Jardin Japones! Por ahora nuestro sitio se encuentra en contruccion, de todos modos vas a poder acceder a algunos de nuestros productos y realizar tu compra.");

let edad = prompt("¿Eres mayor de edad?");

//se declaran condicionales 
if (edad.toLowerCase() === "no") {
    alert("¡Lo sentimos, en este momento no podemos darte asistencia! De todos modos podes acercarte, acompañado de un mayor, a nuestro local ubicado en Ibarbalz 946 de lunes a viernes de 8.00hs a 18.00hs ¡Te esperamos!");
} else {
    let seleccion = "";
    while (seleccion !== "9") {
        seleccion = prompt("¡Perfecto le dejamos una lista de nuestros productos! Le pedimos que los seleccione escribiendo el nro correspondiente y cuando desee treminar la compra presione el nro digite el nro 9. \n1-Bolsa de tierra 90lt \n2-Bolsa de tierra 50lt \n3-Maceta 10lt \n4-Macetas 20lt \n5-Panel led 400w \n6-Panel led 800w \n7-Carpa para indoor \n8-Combo de nutrientes \n9-Cerrar compra");
        //se declara la suma de los productos y se le va mostrando al usuario lo que selecciono con su precio 
        if (seleccion >= 1 && seleccion <= 8) {
            total += precios[seleccion - 1];
            alert("Agregaste " + productos[seleccion - 1] + " al carrito. El monto es $" + precios[seleccion - 1]);
        }
    }
    //se muestra el total y mensaje de cierre con las opciones de pago
    let nombre = prompt("¡¡Ya casi terminamos!! Ingresa tu nombre y apellido para registrar tu compra");
    let efectivo = prompt("¡Perfecto! " + nombre + " el total de su compra es $" + total + ". ¿Desea abonar en efectivo?");
    //condicionales en el caso del tipo de pago con un beneficio y otra operacion en el caso de seleccionar el pago en efectivo
    if (efectivo.toLowerCase() === "no") {
        alert("¡Perfecto! Te esperamos por nuestro local, ubicado en Ibarbalz 946, de lunes a viernes de 8.00hs a 18.00hs para retirar tu pedido y abonar. ¡Muchas gracias y buenos humos! ");
    } else {
        let descuento = total * 0.15;
        let totalConDescuento = total - descuento;
        alert("¡Perfecto! Contas con un 15% de descuento. El monto a abonar es $" + totalConDescuento + ". Te esperamos por nuestro local ubicado en Ibarbalz 946 de lunes a viernes de 8.00hs a 18.00hs, para abonar y retirar tu pedido. ¡Muchas gracias y buenos humos!");
    }
}

