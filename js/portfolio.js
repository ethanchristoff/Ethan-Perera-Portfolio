function downloadpdf() {
    const link = document.createElement('a');
    link.href = 'css/images/CV/Ethan.Perera_Resume.pdf'; 
    link.download = 'Ethan.Perera_CV.pdf'; 
    link.click(); 
}

// Segment for the popup navigation bar
let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}

(function(){
    emailjs.init({
      publicKey: "3vKfHl_F8eO1j_0RR",
    });
 })();

function email_submit() {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('Email').value;
    const message = document.getElementById('Message').value;

    if (name == '' || email == ''){
        alert("Ensure that you've entered both you're name and Email address!")
    }else{
        const templateParams = {
            to_email: 'ethan.christoff@gmail.com',
            from_name: name, 
            message: message, 
            reply_to: email 
        };

        emailjs.send('service_rbgxt4h', 'template_99bnb6g', templateParams)
            .then(function(response) {
                alert('Email sent successfully!');
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                alert('Failed to send email. Please try again.');
                console.log('FAILED...', error);
            });

        return false; 
    }
}