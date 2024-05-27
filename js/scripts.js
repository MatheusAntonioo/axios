// testando instalação
console.log(axios);

// primeiro request
const getData = async() => {

  try {

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      // definindo headers
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response)
    return response.data;

  } catch (error) {
    console.log(error);
  }

};

getData();

//imprimindo dados na tela
const container = document.querySelector("#user-container")

const printData = async() => {

  const data = await getData()

  console.log(data)

  data.forEach((user) => {
    const div = document.createElement("div") 

    const nameElement = document.createElement("h2") //criando os elementos
    const phoneElement = document.createElement("p")

    nameElement.textContent = user.name //usando conteúdo do array
    phoneElement.textContent = user.phone

    div.appendChild(nameElement) // adicionando o conteúdo na div para exibir na tela
    div.appendChild(phoneElement)

    container.appendChild(div)

  })

}

printData()

// post
const form = document.querySelector("#post-form")
const titleInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1,
  })
})