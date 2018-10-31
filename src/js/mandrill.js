function sendEmailMandrill(){
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
        'message': {
          "html": `<div>    
          <p>Estimado Sr. A continuación se adjunta los principales contratos para completar su registro a Inteligo.
          Asimismo, un asesor se comunicará con usted a la brevedad posible.</p>
         Atte.
         Inteligo SAB
         </div>`,

          "text": "Example text content",
          "from_email":  "andrea.g@laboratoria.la",
          "from_name": "Registro de visitantes",
          "to": [
              {
                  "email": "andreale17@icloud.com",
                  "name": "Inteligo SAB",
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
