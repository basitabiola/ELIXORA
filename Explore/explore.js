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


// OPEN PRODUCT MODAL
document.querySelectorAll(".buy-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        // Product name
        modalName.textContent = btn.dataset.name;

        // Product price
        currentPrice = Number(btn.dataset.price);

        modalPrice.textContent =
            "₦" + currentPrice.toLocaleString();

        // Product image
        modalImage.src = btn.dataset.image;

        // Reset quantity
        quantity = 1;

        // Update total
        updateTotal();

        // Show modal
        overlay.classList.add("active");

    });

});


// UPDATE QUANTITY AND TOTAL
function updateTotal() {

    quantityDisplay.textContent = quantity;

    const total = currentPrice * quantity;

    totalPrice.textContent =
        "₦" + total.toLocaleString();

}


// PLUS BUTTON
plusBtn.addEventListener("click", () => {

    quantity++;

    updateTotal();

});


// MINUS BUTTON
minusBtn.addEventListener("click", () => {

    if (quantity > 1) {

        quantity--;

        updateTotal();

    }

});


// CLOSE MODAL BUTTON
closeModal.addEventListener("click", () => {

    overlay.classList.remove("active");

});


// CLOSE WHEN CLICKING OUTSIDE MODAL
overlay.addEventListener("click", e => {

    if (e.target === overlay) {

        overlay.classList.remove("active");

    }

});


// PLACE ORDER
placeOrder.addEventListener("click", () => {

    const customerName =
        document.getElementById("customerName").value.trim();

    const customerPhone =
        document.getElementById("customerPhone").value.trim();

    const customerAddress =
        document.getElementById("customerAddress").value.trim();


    // VALIDATION
    if (!customerName || !customerPhone || !customerAddress) {

        alert("Please fill all fields.");

        return;

    }


    // GET PRODUCT DETAILS
    const productName = modalName.textContent;

    const total = currentPrice * quantity;


    // WHATSAPP MESSAGE
    const message = `🛍️ *ELIXORA ORDER*

🌸 *Product:* ${productName}

📦 *Quantity:* ${quantity}

💰 *Total Price:* ₦${total.toLocaleString()}

👤 *Customer Name:* ${customerName}

📞 *Phone:* ${customerPhone}

📍 *Address:* ${customerAddress}`;


    // WHATSAPP NUMBER
    const whatsappNumber = "2349136768457";


    // OPEN WHATSAPP
    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

});
