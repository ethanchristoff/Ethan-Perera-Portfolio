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

function announcement(){
    alert('Will be made public soon!')
}

function openImage(img_num) {
    const imageUrl_1 = "css/images/interschool\ esports\ poster\ var\ 5\ \ \(with\ brackets\).jpg";
    const imageUrl_2 = "css/images/teaser-poster-tes.png";
    const imageUrl_3 = "css/images/D1_Lewis.png";
    switch (img_num){
        case 1:
            window.open(imageUrl_1, '_blank');
            break;
        
        case 2:
            window.open(imageUrl_2, '_blank');
            break;
        
        case 3:
            window.open(imageUrl_3, '_blank');
            break;
    }
}