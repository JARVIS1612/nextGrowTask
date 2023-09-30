const limit = 10;
let skip = 0;

async function handleScroll() {
    const displayContainer = document.getElementById("displayProducts");
    const alertMessage = document.getElementById("alertbox");

    if (displayContainer.scrollHeight - Math.ceil(displayContainer.scrollTop) === displayContainer.clientHeight) {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            if (response.status < 300 && response.status >= 200) {
                skip += limit;
                const responseText = await response.text();
                const responseJSON = JSON.parse(responseText);
                const products = responseJSON.products;

                products.forEach((element) => {
                    const bootstrapCard = `<div class="card" style="width:16rem">
                <img src=${element.images[0]} height=200px class="card-img-top">
                <div class="card-body">
            <h5 class="card-title text-truncate data-toggle="tooltip" title="${element.title}"">${element.title}</h5>
            <p class="card-text text-truncate data-toggle="tooltip" title="${element.description}">${element.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`;
                    const cardContainer = document.createElement("div");
                    cardContainer.innerHTML = bootstrapCard;
                    displayContainer.appendChild(cardContainer);
                });
            } 
            else if (response.status < 600 && response.status >= 500) {
                alertMessage.style.display = "block";
                alertMessage.innerHTML = "Server error ! try after some times...."    
            }
        } 
        catch {
            alertMessage.style.display = "block";
            alertMessage.innerHTML = "Network error ! check your network connect...."
        }
    }
}

