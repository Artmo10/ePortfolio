function openMenu() { 
    const body = document.body;

    body.classList.add("open")
}

function closeMenu() { 
    const body = document.body;

    body.classList.remove("open");
}

// template_y61wr1u
// service_rp9zf5l
// nkkaCcHuk9QNnD2oo

async function sendEmail(event) { 
    event.preventDefault();
    const body = document.body;
    const loading = document.querySelector(".contact_form_loading");
    const form = document.querySelector(".contact_form");

    try {
        //throw new Error();
        // Loading State
        loading.classList.remove("hidden");
        
        await emailjs.sendForm("service_rp9zf5l", "template_y61wr1u", event.target, "nkkaCcHuk9QNnD2oo");

        // Success State
        form.reset();
        loading.classList.add("hidden");
        body.classList.add("success-open");
        setTimeout(() => { 
            body.classList.remove("success-open");
        }, 4000);
    } catch { 
        loading.classList.add("hidden");
        alert("Error sending email. Please try again later or contact me at arturo.morales.veliz@gmail.com");
    }
    
}