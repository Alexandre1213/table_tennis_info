// POST https://api.emailjs.com/api/v1.0/email/send
// Content type is ‘application/json’

// service_id : Service ID of the service through which the email should be sent. Reserved keyword ‘default_service’ is supported, and should be used to use the default service, which can be set and changed via EmailJS dashboard.
// template_id : Template ID of the email
// user_id : User ID of the account
// template_params (Only if params needed) : Template parameters of the template

// Code example :
// var data = {
//     service_id: '<YOUR SERVICE ID>',
//     template_id: '<YOUR TEMPLATE ID>',
//     user_id: '<YOUR USER ID>',
//     template_params: {
//         'username': 'James',
//         'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
//     }
// };

function sendMail() {
    if(!window.confirm('Est-ce que vous êtes sûr ?')) { return; }

    var author = document.getElementById('author').value;
    var message = document.getElementById('message').value;

    var url = 'https://api.emailjs.com/api/v1.0/email/send';
    var data = {
            service_id: 'outlook',
            template_id: 'table_tennis_info',
            user_id: 'user_iVMGVAkKLA1zRwZknTGC4',
            template_params: {
                'author': author,
                'message': message
            }
        };

    console.log(data);

    fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
}