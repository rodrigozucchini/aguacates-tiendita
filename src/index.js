/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = "https://platzi-avo.vercel.app";
const url = "https://platzi-avo.vercel.app/api/avo";

const appNode = document.querySelector('#app')

const formatPrice = (price) => {
    
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
    }).format(price)

    return newPrice;
};

//web api
// conectarnos al server
window.fetch(`${baseUrl}/api/avo`)

// procesar la respuesta y convertirla en JSON
.then((respuesta) => respuesta.json())

//JSON -> DATA -> Renderizar la info en el browser
.then((responseJson) => {
    const todosLosItems = []
    responseJson.data.forEach(item => {
        const imagen = document.createElement('img');
        imagen.src = `${baseUrl}${item.image}`;
        imagen.className = "h-21 w-21 md:h-21 md:w-21 rounded-full mx-auto md:mx-0 md:mr-6"

        const title = document.createElement('h2');
        title.textContent = item.name;
        title.className = "text-xl text-indigo-600 font-semibold tracking-wide uppercase";

        const price = document.createElement('div');
        price.textContent = formatPrice(item.price);
        price.className = "text-gray-600 m-1 ";

        const priceAndTitle = document.createElement('div')
        priceAndTitle.className = 'text-center md:text-left'
        priceAndTitle.append(title, price)

        const container = document.createElement('div')
        container.append(imagen, title, price);
        container.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300 border-2 border-dashed border-green-600 m-4"

        todosLosItems.push(container)
    });

    appNode.append(...todosLosItems)
});
