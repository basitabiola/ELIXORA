

function buyPerfume(name, size) {
    let message = `Hello ELIXORA CEO, I want to buy ${name} perfume.

    size: ${size}

    Name: 
    Phone: 
    Address: 
    Quantity: `;

    let whatsappURL =

    `https://wa.me/+2349136768457?text=${encodeURLIComponent(message)}`;

    window.open(whatsappURL, "_blank"); 

}


const overlay = document.getElementById("orderOverlay");

const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalImage = document.getElementById("modalImage");

const quantityDisplay = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");

const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

const closeModal = document.getElementById("closeModal");

const placeOrder = document.getElementById("placeOrder");

let quantity = 1;
let currentPrice = 0;

document.querySelectorAll(".buy-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        modalName.textContent = btn.dataset.name;

        currentPrice = Number(btn.dataset.price);

        modalPrice.textContent =
            currentPrice.toLocaleString();

        modalImage.src = btn.dataset.image;

        quantity = 1;

        updateTotal();

        overlay.classList.add("active");

    });

});

function updateTotal(){

    quantityDisplay.textContent = quantity;

    totalPrice.textContent =
        (currentPrice * quantity).toLocaleString();

}

plusBtn.addEventListener("click", () => {

    quantity++;

    updateTotal();

});

minusBtn.addEventListener("click", () => {

    if(quantity > 1){

        quantity--;

        updateTotal();

    }

});

closeModal.addEventListener("click", () => {

    overlay.classList.remove("active");

});

overlay.addEventListener("click", e => {

    if(e.target === overlay){

        overlay.classList.remove("active");

    }

});

placeOrder.addEventListener("click", () => {

    const name =
        document.getElementById("customerName").value;

    const phone =
        document.getElementById("customerPhone").value;

    const address =
        document.getElementById("customerAddress").value;

    if(!name || !phone || !address){

        alert("Please fill all fields.");

        return;

    }

    const total = currentPrice * quantity;

    const message =
`🛍 ELIXORA ORDER

Product: ${modalName.textContent}

Quantity: ${quantity}

Total: ₦${total.toLocaleString()}

Customer Name: ${name}

Phone: ${phone}

Address: ${address}`;

    const whatsappNumber =
        "2349136768457";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
    );

});












