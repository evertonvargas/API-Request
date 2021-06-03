function show(data){
    const name = data[0].name;
    const email= data[0].email;

    document.querySelector('h1').innerHTML = "<h1>Nome: " + name + "ºC</h1>";
    
    document.querySelector('p').innerHTML = "<p>E-mail:" + email +"</p>";
}

//navegador tem uma API, por isso uso o fetch
// esperar vc fazer o q prometeu(response)
// await só funciona dentro de uma funcionalidade assíncrona
async function getContent(){
    const url = "https://jsonplaceholder.typicode.com/users"
    try {
        //demora um pouco para dar o retorno, promete que vai entregar
        const response = await fetch(url) 
        const data = await response.json()

        show(data)
    } catch (error) {
        console.log(error)
    }  
}

getContent()


