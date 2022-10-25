let planes = [
    {nombre: "Plan x4 clases", precio: 2000, cantidad: 4, foto: "images/g1.jpeg"},
    {nombre: "Plan x8 clases", precio: 4000, cantidad: 8, foto: "images/g2.jpeg"},
    {nombre: "Plan x12 clases", precio: 6000, cantidad: 12, foto:"images/g3.jpg" }
]//array de obj

let clientes = [];
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
    formulario = document.getElementById("formulario");
    seccion = document.getElementById("seccion");
    info = document.getElementById("info");
    inputNombre = document.getElementById("inputNombre");
    inputEdad = document.getElementById("inputEdad");
    inputEmail = document.getElementById("inputEmail");
    tabla = document.getElementById("tablaClientes");
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
        columna.className = "img-clases"
        columna.innerHTML = `
            <h2 id="boton${i}">${plan.nombre}</h2>
            <img src="${plan.foto}" alt="Imagen">`;
        i++;
        seccion.append(columna);
    }

let boton1 = document.getElementById("boton1")
    boton1.addEventListener("click", (e) => {
        const texto = document.createElement("div")
        texto.textContent = "Plan x 4 clases: Durante el mes trabajaremos flexibilidad y aeróbico una vez por semana"
        texto.classList.add('m-3')
        texto.classList.add('border')
        texto.classList.add('text-center')
        info.appendChild(texto)
    })

let boton2 = document.getElementById("boton2")
    boton2.addEventListener("click", () => {
        const texto = document.createElement("div")
        texto.textContent = "Plan x 8 clases: Durante el mes trabajaremos flexibilidad, resistencia y aeróbico dos veces por semana"
        texto.classList.add('m-3')
        texto.classList.add('border')
        texto.classList.add('text-center')
        info.appendChild(texto)
    })

let boton3 = document.getElementById("boton3")
    boton3.addEventListener("click", () => {
        const texto = document.createElement("div")
        texto.textContent = "Plan x 12 clases: Durante el mes trabajaremos flexibilidad, resistencia, aeróbico, fuerza y estabilidad tres veces por semana"
        texto.classList.add('m-3')
        texto.classList.add('border')
        texto.classList.add('text-center')
        info.appendChild(texto)
    })
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
  }

function validarFormulario(event) {
    event.preventDefault();
    let nombre = inputNombre.value;
    nombre || alert("No ingresó nombre")
    let edad = parseInt(inputEdad.value);
    edad || alert("No ingresó edad")
    let email = inputEmail.value;
    email || alert("No ingresó email")
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

