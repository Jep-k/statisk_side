let productId = 1163;
let productContainer = document.querySelector(".produktet");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
 
 
 
 
 
 
 
 <div>
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="">

            <div class="tekt_pro">
                <h1>${data.productdisplayname}</h1>

                <h3>${data.price}</h3>
                <p>${data.articletype}|${data.brandname}</p>
                <p>${data.gender}</p>

            </div>
        </div> 
`;
  });
