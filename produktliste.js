const productContainer = document.querySelector(".produktliste_container");
fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `
   <div>
                <a href="produkt.html">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
                </a>
                <div class="textfelt">
                    <h3>${product.productdisplayname}</h3>
                    <p>${product.brandname} | ${product.articletype}</p>
                    <p>Gender: men</p>
                    <p>${product.price},</p>

                    <p class="tilbud">
                        25%
                    </p>
                </div>
            </div>`;
    })
    .join("");
  productContainer.innerHTML = markup;
}
