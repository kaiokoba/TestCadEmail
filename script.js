let e = document.querySelector("#enviar");

e.addEventListener('click', ()=>{
    fetch(
        //Aqui coloca link para banco de dados
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    email: document.getElementById('email').value
                }
            )
        }
     )
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.log(error))
 })

class Produto {
    constructor(){
        this.email = "";
    }

    enviar() {
        const button = document.querySelector('#enviar');
        button.classList.add('enviado');
        button.innerText = 'Enviado!';
        alert("Enviado!")
    }

    
}




let produto = new Produto();
