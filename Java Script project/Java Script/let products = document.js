const usersApi = "https://afternoon-falls-30227.herokuapp.com/api/v1/products/";

const xhr = new XMLHttpRequest();
xhr.open("GET", usersApi);
xhr.send();

xhr.onload = function () {
  if (xhr.status == 200) {
    const users = JSON.parse(xhr.response).data;
console.log(users)
    // users list ELement
    const usersListEl = document.querySelector("#products");

    users.forEach((user) => {
      // Create HTML elements
      const divEl = document.createElement("div");
      const Name = document.createElement("p");
      const imgEl = document.createElement("img");
      const divEl2 = document.createElement("div");
      const Price = document.createElement("p");
      const imgEl2 = document.createElement("img")

      // Add style (classes)
      
      divEl.classList.add("col-4");
      imgEl.classList.add("img-thumbnail", "img-fluid");
      divEl.style.marginBottom = "100px";
      Name.innerText = `${user.Name}`;
      imgEl.src = user.ProductPicUrl;
      Price.innerText = `$${user.Price}`;
      imgEl2.src="https://static.thenounproject.com/png/8359-200.png";

      //image style
      imgEl.style.width="300px"

      //Name Style
        Name.style.fontFamily="Arial";
        Name.style.color="blue";
        Name.style.fontWeight="bold";
        Name.style.display="flex";
        Name.style.alignItems = "center";

        //divEl2 style
        divEl2.style.display="flex"
        divEl2.style.flex="wrap"
        divEl2.style.alignItems="center"

        //imgEl2 style
        imgEl2.style.marginLeft="75%"
        imgEl2.style.width="30px"

        //Price style
        Price.style.fontFamily="Arial";
        Price.style.color="red";
        Price.style.fontWeight="bold";
        Price.style.alignItems="flex-end";

        //div style
        divEl.style.borderRight="1px solid rgba(0,0,0,.10)";
        divEl.style.height="350px"
        divEl.style.width="350px"
        divEl.style.marginLeft="30px"

        
      divEl.appendChild(Name);
      divEl.appendChild(imgEl);
      divEl2.appendChild(Price);
      divEl2.appendChild(imgEl2);
      divEl.appendChild(divEl2);

      usersListEl.appendChild(divEl);

      imgEl.addEventListener("click",function(){
          let id = user.ProductId;
         window.location.href=`./HTML/singleproductpage.html?id=`+id;
      })
    })
}
};
