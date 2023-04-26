
export function header(){
    let navbar = document.createElement("nav");
    navbar.id = "header"
    
    //logo
    let logo = document.createElement("img");
    logo.src = "images/Vector (1).png"
    logo.alt = "logo"
    logo.classList.add("logo");
    navbar.appendChild(logo);
    
    //searchbar.
    let searchbar = document.createElement("input");
    searchbar.type = "search"
    searchbar.classList.add("searchbar");
    searchbar.placeholder = "Search"
    navbar.appendChild(searchbar)
    
    //Cart list.
    let cart = document.createElement("a");
    cart.innerHTML = "Cart";
    cart.href = "./cart.html";
    cart.classList.add("cart")
    navbar.appendChild(cart);
    
    //Become a Seller.
    let seller = document.createElement("a");
    seller.href = "./seller.html"
    seller.classList.add("become-seller")
    seller.innerHTML = "Become a seller"
    navbar.appendChild(seller)
    document.body.appendChild(navbar)
  }
