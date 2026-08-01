

document
.getElementById("vendorForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const business = document.getElementById("business").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const location = document.getElementById("location").value;
    const businessType = document.getElementById("businessType").value;
    const experience = document.getElementById("experience").value;
    const quantity = document.getElementById("quantity").value;
    const extra = document.getElementById("message").value;

    const message = `*ELIXORA VENDOR APPLICATION*

Full Name: ${name}

Business Name: ${business}

Phone Number: ${phone}

Email Address: ${email}

Location: ${location}

Business Type: ${businessType}

Currently Sells Perfumes: ${experience}

Expected Monthly Order Quantity: ${quantity}

Additional Information:
${extra}`;

    const whatsappNumber = "2348012345678";

    const url =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});

