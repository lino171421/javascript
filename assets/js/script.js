function calcular() {
    cantidad = document.querySelector('#cantidad').value;
    color = document.querySelector('#color').value;
    precio = document.querySelector('#precio').innerHTML;


    console.log('cantidad' + cantidad);
    console.log('color' + color);
    console.log('precio' + precio)


    document.querySelector('#total_suma').innerHTML = cantidad * precio;
    document.querySelector('#total_cantidad').innerHTML = cantidad
    document.querySelector('#color_final').style.backgroundColor = color;
}