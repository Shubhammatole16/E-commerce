

function toggleBox() {
  const box = document.getElementById("infoBox");
  box.classList.toggle("visible");
}




// POPUP MESSAGE TIMEOUT 
function showPopupMessage(message) {
  const popupMessage = document.getElementById('popupMessage');
  const popupMessageText = document.getElementById('popupMessageText');

  popupMessageText.textContent = message;
  popupMessage.style.display = 'block';

  setTimeout(() => {
    popupMessage.style.display = 'none';
  }, 1000);
}




// SUBMIT FORM POPUP MESSAGE
function submitPop() {
  const name = document.getElementById('nameInput').value;
  const phone = document.getElementById('phoneInput').value;
  const email = document.getElementById('mailInput').value;
  const message = document.getElementById('msgInput').value;

  if (!name || !phone || !email || !message) {
    showPopupMessage(`Please enter all the required information.`)
  }
  else {
    showPopupMessage(`Message sent ✔ `)
    document.querySelector(".contact-form").reset();
  }
}



let itemCount = 0;
let totalPrice = 0;

// ADD TO CART ITEMS
function addToCart(name, price, image) {
  const cartItems = document.getElementById("cartItems");
  const cartEmptyMsg = document.getElementById("cartitem");
  const BuyNow = document.getElementById("BuyNow");
  const li = document.createElement("li");
  li.innerHTML = `
      <img src="${image}" alt="${name}" width="50">
      <strong>${name}</strong>
      <span>₹${(price).toFixed(2)}</span>
      <button onclick="removeFromCart(this)"><i class='fa fa-trash'></i</button>
    `;
  cartItems.appendChild(li);
  cartEmptyMsg.style.display = "none";
  BuyNow.style.display = "block";

  itemCount++;
  updateItemCount();

  totalPrice += price;
  updateTotalPrice();

  showPopupMessage(`✔ added to cart!`);
}





// REMOVE ITEMS FROM CART
function removeFromCart(button) {
  const li = button.parentNode;
  li.remove();

  const cartItems = document.getElementById("cartItems");
  const cartEmptyMsg = document.getElementById("cartitem");
  const BuyNow = document.getElementById("BuyNow");

  if (cartItems.children.length === 0) {
    cartEmptyMsg.style.display = "block";
    BuyNow.style.display = "none";
  }

  itemCount--;
  updateItemCount();


  const priceString = li.querySelector("span").textContent;
  const price = parseFloat(priceString.slice(1));
  totalPrice -= price;
  updateTotalPrice();

}





//UPDATE COUNT OF CART ITEMS
function updateItemCount() {
  const itemCountElement = document.getElementById("count");
  itemCountElement.textContent = itemCount;
}




//UPDATE OF TOTAL PRICE IN CART
function updateTotalPrice() {
  const totalElement = document.getElementById("totalPrice");
  totalElement.textContent = `Total: ₹${totalPrice}`;
}

