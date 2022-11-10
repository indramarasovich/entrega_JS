let planes = [
  {nombre: "Plan x4 clases", precio: 2000, cantidad: 4, foto: "images/g1.jpeg"},
  {nombre: "Plan x8 clases", precio: 4000, cantidad: 8, foto: "images/g2.jpeg"},
  {nombre: "Plan x12 clases", precio: 6000, cantidad: 12, foto:"images/g3.jpg" }
]//array de obj

let clientes = [];
let carrito = []
let formulario;
let seccion;
let inputNombre;
let inputEdad;
let inputEmail;
let tabla;

class Clientes {
  constructor(nombre, edad, email, pack) {
    this.nombre = nombre.toUpperCase();
    this.edad = edad;
    this.email = email;
    this.pack = pack;
  }
}

function inicializar() {
  formulario = $("formulario");
  seccion = $("seccion");
  info = $("info");
  inputNombre = $("inputNombre");
  inputEdad = $("inputEdad");
  inputEmail = $("inputEmail");
  tabla = $("tablaClientes");
}

let indice = Math.floor(Math.random()*planes.length)
console.log(planes[indice]) //solo probando

console.log("Contamos con los siguientes planes: ")
planes.forEach( plan => console.log(plan.nombre + " - Precio: " + plan.precio))

const promocion = planes.map(function(item) {
  return "\n" + item.nombre + " - Precio: " + item.precio * 0.90 
})
console.log("Precio promocional: " + promocion)

function mostrarPlanes() {
  let i = 1
  for (const plan of planes) {
      let columna = document.createElement("div")
      columna.className = "estilo"
      columna.innerHTML = `
        <div class="img-clases">
          <h2 id="btn${i}">${plan.nombre}</h2>
          <img src="${plan.foto}" alt="Imagen">
        </div>
        <button id="botonDeCompra" type="submit" class="m-2 btn btn-dark">Agregar a carrito</button>`;
      i++;
      seccion.append(columna);
  }

  let boton1 = $("btn1")
    boton1.addEventListener("click", () => {
      Toastify({
        text: "Plan x 4 clases: Durante el mes trabajaremos flexibilidad y aeróbico una vez por semana",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'center',
        type: 'info',
        backgroundColor: '#fbc3bf',
      }).showToast()
    })

  let boton2 = $("btn2")
    boton2.addEventListener("click", () => {
      Toastify({
        text: "Plan x 8 clases: Durante el mes trabajaremos flexibilidad, resistencia y aeróbico dos veces por semana",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'center',
        backgroundColor: '#fbc3bf',
      }).showToast()
    })

  let boton3 = $("btn3")
    boton3.addEventListener("click", () => {
      Toastify({
        text: "Plan x 12 clases: Durante el mes trabajaremos flexibilidad, resistencia, aeróbico, fuerza y estabilidad tres veces por semana",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'center',
        backgroundColor: '#fbc3bf',
      }).showToast()
    })
}

function inicializarEventos() {
  formulario.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario(event) {
  event.preventDefault();
  let nombre = inputNombre.value;
  nombre || Swal.fire('Falta ingresar datos')
  let edad = parseInt(inputEdad.value);
  edad || Swal.fire('Falta ingresar datos')
  let email = inputEmail.value;
  email || Swal.fire('Falta ingresar datos')
  let cliente  = new Clientes(nombre, edad, email);
  clientes.push(cliente) 
  formulario.reset();

  limpiarTabla();
  agregarClientesTabla();
  almacenarClientesSessionStorage();
}

function agregarClientesTabla() {
  clientes.forEach((cliente) => {
    let filaTabla = document.createElement("tr");
    filaTabla.innerHTML = `
      <td>${cliente.nombre}</td>
      <td>${cliente.edad}</td>
      <td>${cliente.email}</td>`;
    tabla.tBodies[0].append(filaTabla);
  });
}

function limpiarTabla() {
  while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
  }
}

function almacenarClientesSessionStorage() {
  sessionStorage.setItem("listaClientes", JSON.stringify(clientes));
}

function obtenerClientesSessionStorage() {
  let clientesAlmacenados = sessionStorage.getItem("listaClientes");
  console.log(typeof clientesAlmacenados)
  if (clientesAlmacenados !== null) {
    clientes = JSON.parse(clientesAlmacenados);
  }
}

function main() {
  inicializar();
  mostrarPlanes();
  inicializarEventos();
  obtenerClientesSessionStorage();
  agregarClientesTabla();
}

main();

