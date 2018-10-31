function sendEmailMandrill(email, name, body){
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
        'message': {
          "html": `<div>    
          <p>Estimado Sr. ${name}
           A continuación se los datos registrados. Verifica su información</p>
          <div>
          ${body}
          </div>
         Atte.
         Inteligo SAB
         </div>
         <a>https://drive.google.com/drive/folders/1KSgQ2lJ2KepTwWMso6Svwprt5vztVJbZ</a>
         <a></a>

         `,
         "subject":"Te registraste en Inteligo!",
          "text": "Example text content",
          "from_email":  "andrea.g@laboratoria.la",
          "from_name": "Registro-Inteligo",
          "to": [
              {
                  "email": `${email}`,
                  "name": `${name}`,
                  "type": "to"
              }
          ],
          "headers": {
              "Reply-To": "andreale17@icloud.com"
          }
          
      },
      "async": false,
      "ip_pool": "Main Pool",
      "send_at": "2018-10-10 10:00:00"
      }
    });
  }
