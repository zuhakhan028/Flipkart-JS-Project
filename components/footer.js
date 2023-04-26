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
  
  export function footer(){
  let stringify_footer_json = JSON.stringify(footerJson);
  let parse_footer_json = JSON.parse(stringify_footer_json);
    
  //footer.
  let footer = document.createElement("footer");
  footer.classList.add("footer")
  let upperColumns = document.createElement("div");
  upperColumns.id = "upperColumns"
  upperColumns.classList.add("upperColumns")
  let bottomColunms = document.createElement("div");
  bottomColunms.id = "bottomColunms"
  
  let upper_coloums_div_1 = document.createElement("div");
  upper_coloums_div_1.classList.add("upper_coloums_div_1");
  upper_coloums_div_1.id = "upper_coloums_div_1"
  let coloums_div_2 = document.createElement("div");
  coloums_div_2.classList.add("coloums_div_2");
  coloums_div_2.id = "coloums_div_2"
  
  
  let vertical_hr_footer=document.createElement("hr");
  vertical_hr_footer.classList.add("vertical_hr_footer")
  
  coloums_div_2.appendChild(vertical_hr_footer)
  
  for (let footer_details_lists = 0; footer_details_lists < 1; footer_details_lists++) {
    for (let k = 0; k < parse_footer_json.colunms.length - 2; k++) {
      let each_list_div = document.createElement("div");
      each_list_div.id = `footerSections_${k}`
      let footerSections = document.createElement("ul");
      footerSections.classList.add("footerSections")
      let ul_title_head=document.createElement("h4");
      ul_title_head.classList.add("ul_title_head")
      ul_title_head.innerHTML = parse_footer_json.colunms[k].title.toUpperCase()
  
      each_list_div.appendChild(footerSections)
      footerSections.appendChild(ul_title_head)
      for (let l = 0; l < parse_footer_json.colunms[k].data.length; l++) {
        let li_footer = document.createElement("li");
        li_footer.innerHTML = parse_footer_json.colunms[k].data[l]
        footerSections.appendChild(li_footer);
      }
      upper_coloums_div_1.appendChild(each_list_div);
    }
    for (let mail_and_register = 4; mail_and_register < parse_footer_json.colunms.length; mail_and_register++) {
      let col_div_2_innerElement = document.createElement("div");
      let col_div_2_title=document.createElement("h4")
      col_div_2_title.classList.add("col_div_2_title")
      col_div_2_title.innerHTML = parse_footer_json.colunms[mail_and_register].title;
      col_div_2_innerElement.id = `col_div_2_innerElement${mail_and_register - 3}`
      col_div_2_innerElement.classList.add("col_div_2_innerElement")
      let list_div_2 = document.createElement("li");
      list_div_2.classList.add("list_div_2")
    

      let a=parse_footer_json.colunms[mail_and_register].data.split("Telephone");
      if (a.length==2){
        let telephone_text=document.createElement("span")
        telephone_text.classList.add("telephone")
        telephone_text.innerHTML=`${a[1]}`
        list_div_2.innerHTML=`${a[0]} Telephone`
        list_div_2.appendChild(telephone_text)
      }
      else{
        list_div_2.innerHTML = a[0];
      }
    
      // console.log(parse_footer_json.colunms[mail_and_register].data.split())
      
      col_div_2_innerElement.appendChild(col_div_2_title)
      col_div_2_innerElement.appendChild( list_div_2)
      coloums_div_2.appendChild(col_div_2_innerElement)
    }
    
  }
  
  
  
  upperColumns.appendChild(upper_coloums_div_1);
  upperColumns.appendChild(coloums_div_2);
  
  
  let bottom_coloum_div_1=document.createElement("div");
  bottom_coloum_div_1.classList.add("bottom_coloum_div_1")
  for (let other_services = 0; other_services < parse_footer_json.bottomColunms.length - 2; other_services++) {
    let bottom_coloums_div_1 = document.createElement("div");
    bottom_coloums_div_1.id = "bottom_coloums_div_1"
    bottom_coloums_div_1.classList.add("bottom_coloums_div_1")
    let the_cta_footer_icons = document.createElement("div");
    the_cta_footer_icons.classList.add("the_cta_footer_icons")
    let img = document.createElement("img")
    img.classList.add("icon_img")
    img.src = parse_footer_json.bottomColunms[other_services].img
    let icon_text = document.createElement("div");
    icon_text.innerHTML = parse_footer_json.bottomColunms[other_services].text
    icon_text.classList.add("icon_text")
  
    bottom_coloums_div_1.appendChild(img)
    bottom_coloums_div_1.appendChild(icon_text)
    bottom_coloum_div_1.appendChild(bottom_coloums_div_1)
  
  }
  bottomColunms.appendChild(bottom_coloum_div_1)
  let copyright = document.createElement("div");
  copyright.innerHTML = parse_footer_json.bottomColunms[4].text;
  copyright.classList.add("copyright");
  bottom_coloum_div_1.appendChild(copyright);
  
  for (let payment_options = 5; payment_options < parse_footer_json.bottomColunms.length; payment_options++) {
    let bottom_coloum_div_2 = document.createElement("div");
    bottom_coloum_div_2.id = "bottom_coloum_div_2";
    bottom_coloum_div_2.classList.add("bottom_coloum_div_2");
    let img = document.createElement("img")
    img.src = parse_footer_json.bottomColunms[payment_options].img;
    bottom_coloum_div_2.appendChild(img)
    bottomColunms.appendChild(bottom_coloum_div_2)
  
  }
  footer.appendChild(upperColumns);
  footer.appendChild(bottomColunms);
  document.body.appendChild(footer)
  
  }