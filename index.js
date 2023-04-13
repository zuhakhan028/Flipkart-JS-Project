
//navbar.
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

for (let idx = 0; idx < productJSON.length; idx++) {


  let product_JSON_1_ele = productJSON[idx];
  let product_string = JSON.stringify(product_JSON_1_ele);
  let product_parse = JSON.parse(product_string);


  //----------------product div--------------------
  let product_div = document.createElement("div");
  product_div.id = `product_div_${idx + 1}`
  let product = document.createElement("div");
  product.classList.add("product");

  //Add to cart Functionality.
  let add_to_cart_div = document.createElement("div");
  add_to_cart_div.classList.add("add_to_cart_div")

  //add to compare checkbox.
  let add_to_cart_checkbox = document.createElement("input");
  add_to_cart_checkbox.classList.add("add_to_cart_checkbox")
  add_to_cart_checkbox.type = "checkbox";
  add_to_cart_checkbox.id = `add_to_cart_product${idx + 1}`
  add_to_cart_checkbox.name = "add_to_cart"
  add_to_cart_checkbox.value = "add_to_cart"
  add_to_cart_checkbox.classList.add("add_to_cart_checkbox")
  add_to_cart_div.appendChild(add_to_cart_checkbox)

  let checkbox_label_cart = document.createElement("label")
  checkbox_label_cart.htmlFor = "add_to_cart";
  checkbox_label_cart.innerHTML = "Add to Cart";
  add_to_cart_div.appendChild(checkbox_label_cart);

  //Add to compare Functionality.
  let add_to_compare_div = document.createElement("div");
  add_to_compare_div.id = `add_to_compare_div_${idx + 1}`
  add_to_compare_div.classList.add("add_to_compare_div")


  //add to compare checkbox.
  let add_to_compare_checkbox = document.createElement("input");
  add_to_compare_checkbox.classList.add("add_to_compare_checkbox")
  add_to_compare_checkbox.type = "checkbox";
  add_to_compare_checkbox.id = `add_to_compare_product${idx + 1}`
  add_to_compare_checkbox.name = "add_to_compare"
  add_to_compare_checkbox.value = "add_to_compare"
  add_to_compare_checkbox.classList.add("add_to_compare_checkbox")
  add_to_compare_div.appendChild(add_to_compare_checkbox)

  let checkbox_label = document.createElement("label")
  checkbox_label.htmlFor = "add_to_compare";
  checkbox_label.innerHTML = "Add to Compare";
  add_to_compare_div.appendChild(checkbox_label);

  //Add to compare functionality.


  //Appending all the elements of productdiv to productdiv.
  product_div.appendChild(product);
  product_div.appendChild(add_to_cart_div);
  product_div.appendChild(add_to_compare_div);

  //product details div.
  let product_details = document.createElement("div");
  product_details.classList.add("product_details");
  const product_img = document.createElement("img");
  product_img.src = `${product_parse.image.url}`

  //appending phone image to product details.
  let raw_image = product_details.appendChild(product_img)
  raw_image.classList.add("phone-image");

  //appending product_description ul to product details.
  let product_description = document.createElement("ul");
  product_description.classList.add("product_description");
  product_details.appendChild(product_description);

  //appending product_name to product description.
  let product_name = document.createElement("h4");
  product_name.classList.add("product-name")
  product_name.innerHTML = `${product_parse.title}`;
  product_description.appendChild(product_name);

  //appending ratings and reviews div.
  //ratings div.

  let ratings = document.createElement("div");
  ratings.classList.add("ratings");
  product_description.appendChild(ratings);

  //rating pill.
  let rating_pill = document.createElement("div");
  rating_pill.classList.add("rating-pill");
  rating_pill.innerHTML = `${product_parse.ratings.overallRating}`
  ratings.appendChild(rating_pill);

  //ratings and reviews count.

  let ratings_and_reviews = document.createElement("p");
  ratings_and_reviews.classList.add("ratings_and_reviews");
  ratings_and_reviews.innerHTML = `${product_parse.ratings.totalRatingsNum} Ratings & ${product_parse.ratings.totalReviewsNum} Reviews`
  ratings.appendChild(ratings_and_reviews)


  // ul for specifications.
  let specifications = document.createElement("ul");
  specifications.classList.add("specifications");
  product_description.appendChild(specifications);

  //features list li.
  for (i = 0; i < product_parse.featuresList.length; i++) {
    let featuresList = document.createElement("li");
    featuresList.innerHTML = `${product_parse.featuresList[i]}`
    specifications.appendChild(featuresList)
  }

  //-----------------------product_pricing-----------
  //product pricing div
  let product_pricing = document.createElement("div");
  product_pricing.classList.add("product_pricing");

  //h3 price.
  let price = document.createElement("h3");
  product_pricing.appendChild(price);
  price.innerHTML = `Rs.${product_parse.price.mrp}`
  price.classList.add("price");

  //price_list ul
  let price_list = document.createElement("ul");
  price_list.classList.add("price_list_ul")
  product_pricing.appendChild(price_list);

  // li - child of price_list.
  let finalprice = document.createElement("li");
  let finalprice_div = document.createElement("div");
  finalprice.appendChild(finalprice_div)
  finalprice.innerHTML = `Rs.${product_parse.price.finalPrice}`
  price_list.appendChild(finalprice);

  //1. span element.
  let span = document.createElement("span")
  if (product_parse.price.discount.type === "PERCENT") {
    span.innerHTML = `&nbsp;  ${product_parse.price.discount.data} % off`
  }
  else {
    span.innerHTML = `  ${product_parse.price.discount.data} ${toLowerCase(product_parse.price.discount.type)}`
  }
  finalprice.appendChild(span)

  let freeDelivery = document.createElement("li");
  if (product_parse.freeDelivery) {
    freeDelivery.innerHTML = `Free Delivery`
    price_list.appendChild(freeDelivery)
  }
  else {
    delivery = "not eligible"
  }

  let ExchangeOffer = document.createElement("li");
  ExchangeOffer.innerHTML = `Upto Rs.${product_parse.exchangeOfferDiscount.data} off on Exchange`
  price_list.appendChild(ExchangeOffer)

  //BankOffers.
  let bank_offers = document.createElement("li");
  let bank_offers_button = document.createElement("button")
  bank_offers_button.classList.add("bank_offers_button")
  price_list.appendChild(bank_offers);
  bank_offers.appendChild(bank_offers_button)
  bank_offers_button.innerHTML = `${product_parse.bankOffersLink.buttonText}`
  bank_offers_button.addEventListener("click", linkBankOffer)

  function linkBankOffer() {
    window.location = "https://nextleap.app/"
  }

  let hr = document.createElement("hr");
  hr.classList.add("hr")

  product.appendChild(product_details);
  product.appendChild(product_pricing);
  document.body.appendChild(product_div);
  document.body.appendChild(hr);
}

let compare_all_checkboxes = document.getElementsByName("add_to_compare");
compare_all_checkboxes.forEach(occurence => {
  occurence.addEventListener("click", function () {
    let compare_dialog_box = document.createElement("div");
    compare_dialog_box.innerHTML = "this is compare div."
    compare_dialog_box.id = "compare_dialog_box"
    compare_dialog_box.classList.add("add_to_compare_dialog_box");
    document.body.appendChild(compare_dialog_box);
  })
})



//JSON data.
const productJSON = [
  {
    title: "APPLE iPhone 11 (White, 64 GB)",
    image: {
      url: "https://assets.nextleap.app/images/iphone-image.webp",
      width: 146.42,
      height: 200,
      alt: "iphone",
    },
    ratings: {
      overallRating: 4.7,
      totalRatingsNum: 181870,
      totalReviewsNum: 10713,
    },
    featuresList: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR Display",
      "12MP + 12MP | 12MP Front Camera",
      "A15 Bionic Chip Processor",
      "Warranty for 1 Year",
    ],
    freeDelivery: true,
    price: {
      mrp: 48999,
      finalPrice: 44999,
      discount: {
        type: "PERCENT",
        data: 7,
      },
    },
    exchangeOfferDiscount: {
      type: "ABSOLUTE",
      data: 20000,
    },
    bankOffersLink: {
      buttonText: "Bank Offers",
      action: {
        type: "NAVIGATION",
        url: "",
      },
      textColor: "#388e3c",
    },
    productPageLink: {
      type: "NAVIGATION",
      url: "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSULUZ0N&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_1_1_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_1_na_na_na&fm=organic&iid=5d05607a-6345-4d19-b8c6-c8c4c21c050a.MOBFWQ6B7KKRXDDS.SEARCH&ppt=hp&ppn=homepage&ssid=0sc0d1awkg0000001675935199363&qH=0b3f45b266a97d70",
    },
  },
  {
    title: "APPLE iPhone 11 (Black, 64 GB)",
    image: {
      url: "https://assets.nextleap.app/images/iphone-image.webp",
      width: 146.42,
      height: 200,
      alt: "iphone",
    },
    ratings: {
      overallRating: 4.7,
      totalRatingsNum: 181870,
      totalReviewsNum: 10713,
    },
    featuresList: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR Display",
      "12MP + 12MP | 12MP Front Camera",
      "A15 Bionic Chip Processor",
      "Warranty for 1 Year",
    ],
    freeDelivery: true,
    price: {
      mrp: 48999,
      finalPrice: 44999,
      discount: {
        type: "PERCENT",
        data: 7,
      },
    },
    exchangeOfferDiscount: {
      type: "ABSOLUTE",
      data: 20000,
    },
    bankOffersLink: {
      buttonText: "Bank Offers",
      action: {
        type: "NAVIGATION",
        url: "",
      },
      textColor: "#388e3c",
    },
    productPageLink: {
      type: "NAVIGATION",
      url: "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSULUZ0N&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_1_1_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_1_na_na_na&fm=organic&iid=5d05607a-6345-4d19-b8c6-c8c4c21c050a.MOBFWQ6B7KKRXDDS.SEARCH&ppt=hp&ppn=homepage&ssid=0sc0d1awkg0000001675935199363&qH=0b3f45b266a97d70",
    },
  },
  {
    title: "APPLE iPhone 11 (White, 128 GB)",
    image: {
      url: "https://assets.nextleap.app/images/iphone-image.webp",
      width: 146.42,
      height: 200,
      alt: "iphone",
    },
    ratings: {
      overallRating: 4.7,
      totalRatingsNum: 181870,
      totalReviewsNum: 10713,
    },
    featuresList: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR Display",
      "12MP + 12MP | 12MP Front Camera",
      "A15 Bionic Chip Processor",
      "Warranty for 1 Year",
    ],
    freeDelivery: true,
    price: {
      mrp: 48999,
      finalPrice: 44999,
      discount: {
        type: "PERCENT",
        data: 7,
      },
    },
    exchangeOfferDiscount: {
      type: "ABSOLUTE",
      data: 20000,
    },
    bankOffersLink: {
      buttonText: "Bank Offers",
      action: {
        type: "NAVIGATION",
        url: "",
      },
      textColor: "#388e3c",
    },
    productPageLink: {
      type: "NAVIGATION",
      url: "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSULUZ0N&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_1_1_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_1_na_na_na&fm=organic&iid=5d05607a-6345-4d19-b8c6-c8c4c21c050a.MOBFWQ6B7KKRXDDS.SEARCH&ppt=hp&ppn=homepage&ssid=0sc0d1awkg0000001675935199363&qH=0b3f45b266a97d70",
    },
  },
  {
    title: "APPLE iPhone 11 (Black, 128 GB)",
    image: {
      url: "https://assets.nextleap.app/images/iphone-image.webp",
      width: 146.42,
      height: 200,
      alt: "iphone",
    },
    ratings: {
      overallRating: 4.7,
      totalRatingsNum: 181870,
      totalReviewsNum: 10713,
    },
    featuresList: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR Display",
      "12MP + 12MP | 12MP Front Camera",
      "A15 Bionic Chip Processor",
      "Warranty for 1 Year",
    ],
    freeDelivery: true,
    price: {
      mrp: 48999,
      finalPrice: 44999,
      discount: {
        type: "PERCENT",
        data: 7,
      },
    },
    exchangeOfferDiscount: {
      type: "ABSOLUTE",
      data: 20000,
    },
    bankOffersLink: {
      buttonText: "Bank Offers",
      action: {
        type: "NAVIGATION",
        url: "",
      },
      textColor: "#388e3c",
    },
    productPageLink: {
      type: "NAVIGATION",
      url: "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSULUZ0N&marketplace=FLIPKART&q=iphone&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_1_1_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_1_na_na_na&fm=organic&iid=5d05607a-6345-4d19-b8c6-c8c4c21c050a.MOBFWQ6B7KKRXDDS.SEARCH&ppt=hp&ppn=homepage&ssid=0sc0d1awkg0000001675935199363&qH=0b3f45b266a97d70",
    },
  },
];





//JSON for footer

const footerJson = {
  colunms: [
    {
      title: "About",
      dataType: "ARRAY",
      data: [
        "Contact Us",
        "About Us",
        "Careers",
        "Flipkart Stories",
        "Press",
        "Flipkart Wholesale",
        "Corporate Information",
      ],
    },
    {
      title: "HELP",
      dataType: "ARRAY",
      data: [
        "Payments",
        "Shipping",
        "Cancellation & Returns",
        "FAQ",
        "Report Infringement",
      ],
    },
    {
      title: "POLICY",
      dataType: "ARRAY",
      data: [
        "Return Policy",
        "Terms Of Use",
        "Security",
        "Privacy",
        "Sitemap",
        "EPR Compliance",
      ],
    },
    {
      title: "SOCIAL",
      dataType: "ARRAY",
      data: ["Facebook", "Twitter", "YouTube"],
    },
    {
      title: "Mail Us:",
      dataType: "MAIL_ADDRESS",
      data: "Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India",
    },
    {
      title: "Registered Office Address:",
      dataType: "REGISTERED_ADDRESS",
      data: "Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107 Telephone: 044-45614700",
    },
  ],
  bottomColunms: [
    {
      img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K",
      text: "Become a seller",
    },
    {
      img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=",
      text: "Advertise",
    },
    {
      img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==",
      text: "Gift Cards",
    },
    {
      img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=",
      text: "Help Center",
    },
    {
      text: "© 2007-2023 Flipkart.com",
    },
    {
      img: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg",
    },
  ],
}
