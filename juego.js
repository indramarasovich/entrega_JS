let btnJuego = $('btnJuego');
let juego = $('juego');

btnJuego.addEventListener("click", () => {
        juego.innerHTML = `
        <div class="p-texto">
            <h2>¿Que debemos hacer antes de estirar?</h2>
            <button class="m-2 btn btn-light" id="correcto" class="botoninicio">Entrar en calor</button>
            <button class="m-2 btn btn-light" id="incorrecto" class="botoninicio">Correr 200 metros</button>
            <button class="m-2 btn btn-light" id="incorrecto2" class="botoninicio">No debemos estirar</button>
        </div>`

        let incorrecto = document.querySelector('#incorrecto')  
        incorrecto.addEventListener("click", () => {
            Swal.fire({
                icon: 'error',
                title: 'Incorrecto',
                text: 'La respuesta correcta es "Entrar en calor"',
              })
            })

        let incorrecto2 = document.querySelector('#incorrecto2')  
        incorrecto2.addEventListener("click", () => {
            Swal.fire({
                icon: 'error',
                title: 'Incorrecto',
                text: 'La respuesta correcta es "Entrar en calor"',
              })
            })

        let correcto = document.querySelector('#correcto')  
        correcto.addEventListener("click", () => {
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Muy bien!',
              })
        
            juego.innerHTML = `
            <div class="p-texto">
                <h2>¿Como realizar una apertura de cadera?</h2>
                <button class="m-2 btn btn-light" id="incorrecto" class="botoninicio">Que tire demasiado y duela</button>
                <button class="m-2 btn btn-light" id="incorrecto2" class="botoninicio">Con la espalda encorvada</button>
                <button class="m-2 btn btn-light" id="correcto" class="botoninicio">Con piernas flexionadas o estiradas y la espalda recta</button>
            </div>`
            
            let incorrecto = document.querySelector('#incorrecto')  
            incorrecto.addEventListener("click", () => {
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrecto',
                    text: 'La respuesta correcta es "Entrar en calor"',
                })
                })

            let incorrecto2 = document.querySelector('#incorrecto2')  
            incorrecto2.addEventListener("click", () => {
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrecto',
                    text: 'La respuesta correcta es "Entrar en calor"',
                })
                })

            let correcto = document.querySelector('#correcto')  
            correcto.addEventListener("click", () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Correcto',
                    text: 'Muy bien!',
                })
        
                juego.innerHTML = `
                <div class="p-texto">
                    <h2>¿Qué tener en cuenta cuando hacemos estocadas?</h2>
                    <button class="m-2 btn btn-light" id="incorrecto" class="botoninicio">Espalda hacia adelante</button>
                    <button class="m-2 btn btn-light" id="correcto" class="botoninicio">Espalda recta, rodilla y cadera a la misma altura</button>
                    <button class="m-2 btn btn-light" id="incorrecto2" class="botoninicio">Rodilla mas atrás que la cadera</button>
                </div>`

                let incorrecto = document.querySelector('#incorrecto')  
                incorrecto.addEventListener("click", () => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Incorrecto',
                        text: 'La respuesta correcta es "Entrar en calor"',
                    })
                    })

                let incorrecto2 = document.querySelector('#incorrecto2')  
                incorrecto2.addEventListener("click", () => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Incorrecto',
                        text: 'La respuesta correcta es "Entrar en calor"',
                    })
                    })

                let correcto = document.querySelector('#correcto')  
                correcto.addEventListener("click", () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Correcto',
                        text: 'Muy bien!',
                    })
                    
                    juego.innerHTML = `
                    <div class="presentacion">
                        <div>
                            <img width="250px" src="images/profe.JPG" alt="profesora">
                        </div>
                        <div class="p-texto">
                            <h1>¡Muchas gracias por participar!</h1>
                            <h3>Espero que hayas aprendido algo nuevo...</h3>
                            <h5 class="p-3 card-text">Mi nombre es Agustina, soy profe de Ed. Fisica y te invito a sumarte a cualquiera de mis clases, para agregar ejercicio a tu vida y lograr cambiar tus hábitos :)</h5>
                        </div>
                        
                    </div>`
                })
            })
        })
    })

                