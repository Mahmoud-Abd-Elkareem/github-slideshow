
var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get("id"));
let ID = urlParams.get("id")
var productapi = "https://afternoon-falls-30227.herokuapp.com/api/v1/products/"+ID;

const xhr = new XMLHttpRequest();
xhr.open("GET", productapi);
xhr.send();

xhr.onload = function(product){
    if (xhr.status == 200) {
        const user = JSON.parse(xhr.response).data;

        console.log(user)

        const usersListEl = document.querySelector("#products");

            // Create HTML elements
            const divEl = document.createElement("div");
            const divEl1 = document.createElement("div")
            const divEl2 = document.createElement("div")
            const disc = document.createElement("p");
            const imgEl = document.createElement("img");
            const name = document.createElement("p");
            const avail = document.createElement("p")
            const hr = document.createElement("hr")
            const price = document.createElement("p")
            const number = document.createElement("input")
            const btn = document.createElement("button")


            function change(word){
                disabled(word)
            }
          number.addEventListener("input",change)
          function disabled(word){
              if((number.value=="")){
                  btn.disabled = true;
              }else {
                  btn.disabled = false;
          
              }
          }


            imgEl.classList.add("img-thumbnail", "img-fluid");

            //name style
            name.innerHTML="Available : in stock"

            
            //div style
            divEl.style.display="flex";
            divEl.style.flex="wrap";
            divEl.style.height="400px"
            divEl.style.width="100%";

            divEl2.style.borderStyle="solid"
            divEl2.style.borderColor="rgba(0,0,0,.10)"
            divEl2.style.borderWidth="2px"
            divEl2.style.borderRadius="10px"
            divEl2.style.width="15%"
            divEl2.style.height="250px"
            divEl1.style.width="35%"
            divEl1.style.marginRight="10%"
            divEl2.style.padding="35px";

            //image style
            imgEl.style.width="40%"

            //name style
            name.style.height="30%"
            name.style.fontFamily="Arial"
            name.style.color="blue"
            name.style.fontSize="28px"
            name.style.marginLeft="5%"

            //divEl2 style
            avail.innerHTML="Availabilty : in Stock";
            price.innerHTML=`$${user.Price}`;
            avail.style.fontFamily="Arial";
            avail.style.fontSize="15px";
            avail.style.fontWeight="bold";
            price.style.fontSize="30px";
            price.style.fontWeight="bold";
            price.style.fontFamily="Arial";
            price.style.marginBottom="30%";
            number.style.width="70%"
            number.style.borderRadius="25px";
            number.style.borderColor="rgba(0,0,0,.10)"
            number.style.height="25px"
            number.value="";
            btn.style.width="100%";
            btn.innerHTML="Add to cart";
            btn.style.fontSize="16px";
            btn.style.padding="6px";
            btn.style.backgroundColor="rgb(214, 214, 214)";
            btn.style.borderRadius="25px";
            btn.style.borderStyle="none";
            btn.style.marginTop="25px";
            btn.disabled="true"; 


            //discription style
            disc.style.fontSize="16px"

            disc.innerHTML=user.Description;
            imgEl.src=user.ProductPicUrl;
            name.innerHTML=`${user.Name}`

          
            divEl.appendChild(imgEl);
            divEl.appendChild(divEl1);
            divEl.appendChild(divEl2);
            divEl1.appendChild(name);
            divEl1.appendChild(disc);
            divEl2.appendChild(avail);
            divEl2.appendChild(hr);
            divEl2.appendChild(price);
            divEl2.appendChild(number);
            divEl2.appendChild(btn);
           


            usersListEl.appendChild(divEl);
    }
}