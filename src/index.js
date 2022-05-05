/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseurl  = "https://platzi-avo.vercel.app";

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency:"USD",
    }).format(price);
    return newPrice;
}

//Web api
//Conectar al servidor
window
    .fetch(`${baseurl}/api/avo`)
    //procesar la respuesta y convertirla en JSON
    .then((respuesta) => respuesta.json())
    //renderizar la info en el navegador
    .then(responseJson => {
        const todosLosItems = [];
        responseJson.data.forEach((item) => {
            //crear imagen
            const image = document.createElement('img');
            image.src = `${baseurl}${item.image}`;
  
            //crear titulo
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.style.fontSize = "3rem";

            //crear precio
            const price = document.createElement('div');
            price.textContent = formatPrice(item.price);

            const container = document.createElement('div');
            container.append(image, title, price)

            todosLosItems.push(container);
        });

        document.body.append(... todosLosItems);
    }) 
