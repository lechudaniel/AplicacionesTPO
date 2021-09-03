const functions = require('firebase-functions');

const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'commudus.online@gmail.com',
        pass: 'commudus123'
    }
});

exports.sendMailVocucher = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        // getting dest email by query string
        const email = req.query.email;
        const hotel = req.query.hotel;
        const nroReserva = req.query.nroReserva;
        const fechaHoy = req.query.fechaHoy;
        const checkIn = req.query.checkIn;
        const checkOut = req.query.checkOut;
        const huespedes = req.query.huespedes;
        const tipoTarjeta = req.query.tipoTarjeta;
        const nombre = req.query.nombre;
        const numeroTarjeta = req.query.numeroTarjeta;
        const tipoHabitacion = req.query.tipoHabitacion;
        const noches = req.query.noches;
        const precioNoche = req.query.precioNoche;
        const total = req.query.total;


        const mailOptions = {
            from: 'Commmudus <commudus.online@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: email,
            subject: 'Voucher de tu reserva', // email subject
            html: `
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
            <head> 
             <meta charset="UTF-8"> 
             <meta content="width=device-width, initial-scale=1" name="viewport"> 
             <meta name="x-apple-disable-message-reformatting"> 
             <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
             <meta content="telephone=no" name="format-detection"> 
             <title>Nuevo correo electrónico 2</title> 
             <!--[if (mso 16)]>    <style type="text/css">    a {text-decoration: none;}    </style>    <![endif]--> 
             <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
             <!--[if gte mso 9]>
           <xml>
               <o:OfficeDocumentSettings>
               <o:AllowPNG></o:AllowPNG>
               <o:PixelsPerInch>96</o:PixelsPerInch>
               </o:OfficeDocumentSettings>
           </xml>
           <![endif]--> 
             <style type="text/css">
           @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:30px!important } h2 a { font-size:26px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button { font-size:20px!important; display:block!important; border-width:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
           .rollover:hover .rollover-first {
               max-height:0px!important;
           }
           .rollover:hover .rollover-second {
               max-height:none!important;
           }
           #outlook a {
               padding:0;
           }
           .ExternalClass {
               width:100%;
           }
           .ExternalClass,
           .ExternalClass p,
           .ExternalClass span,
           .ExternalClass font,
           .ExternalClass td,
           .ExternalClass div {
               line-height:100%;
           }
           .es-button {
               mso-style-priority:100!important;
               text-decoration:none!important;
           }
           a[x-apple-data-detectors] {
               color:inherit!important;
               text-decoration:none!important;
               font-size:inherit!important;
               font-family:inherit!important;
               font-weight:inherit!important;
               line-height:inherit!important;
           }
           .es-desk-hidden {
               display:none;
               float:left;
               overflow:hidden;
               width:0;
               max-height:0;
               line-height:0;
               mso-hide:all;
           }
           .es-button-border:hover a.es-button {
               background:#0a9e91!important;
               border-color:#0a9e91!important;
           }
           td .es-button-border:hover a.es-button-1 {
               background:#0a9e91!important;
               border-color:#0a9e91!important;
           }
           td .es-button-border-2:hover {
               background:#0a9e91!important;
               border-color:#076c64 #076c64 #076c64 #076c64!important;
           }
           td .es-button-border:hover a.es-button-3 {
               background:#1565c0!important;
               border-color:#1565c0!important;
           }
           td .es-button-border-4:hover {
               background:#1565c0!important;
           }
           td .es-button-border:hover a.es-button-5 {
               background:#2f6ca2!important;
               border-color:#2f6ca2!important;
           }
           td .es-button-border-6:hover {
               border-style:solid solid solid solid!important;
               background:#2f6ca2!important;
               border-color:#42d159 #42d159 #42d159 #42d159!important;
           }
           </style> 
            </head> 
            <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
             <div class="es-wrapper-color" style="background-color:#F6F6F6"> 
              <!--[if gte mso 9]>
                       <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                           <v:fill type="tile" color="#f6f6f6"></v:fill>
                       </v:background>
                   <![endif]--> 
              <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
                <tr style="border-collapse:collapse"> 
                 <td valign="top" style="padding:0;Margin:0"> 
                  <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
                    <tr style="border-collapse:collapse"> 
                     <td align="center" bgcolor="#e5b568" style="padding:0;Margin:0;background-color:#E5B568"> 
                      <table bgcolor="#f69d0f" class="es-header-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F69D0F;width:600px"> 
                        <tr style="border-collapse:collapse"> 
                         <td align="left" bgcolor="#e5b568" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#E5B568"> 
                          <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                            <tr style="border-collapse:collapse"> 
                             <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:3px solid #212522;border-right:3px solid #212522;border-top:3px solid #212522;border-bottom:3px solid #212522;background-position:center bottom" role="presentation"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:30px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:45px;color:#FFFFFF">Commudus</p></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table></td> 
                        </tr> 
                      </table></td> 
                    </tr> 
                  </table> 
                  <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
                    <tr style="border-collapse:collapse"> 
                     <td align="center" style="padding:0;Margin:0;background-image:url(https://free4kwallpapers.com/uploads/originals/2019/11/25/lost-paradise-wallpaper.jpg);background-color:transparent;background-position:center top;background-repeat:no-repeat" bgcolor="transparent" background="https://free4kwallpapers.com/uploads/originals/2019/11/25/lost-paradise-wallpaper.jpg"> 
                      <table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"> 
                        <tr style="border-collapse:collapse"> 
                         <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"> 
                          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                            <tr style="border-collapse:collapse"> 
                             <td align="center" valign="top" style="padding:0;Margin:0;width:560px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" height="40" style="padding:0;Margin:0"></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table></td> 
                        </tr> 
                        <tr style="border-collapse:collapse"> 
                         <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#E5B568" bgcolor="#e5b568"> 
                          <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]--> 
                          <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                            <tr style="border-collapse:collapse"> 
                             <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:47px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:39px;font-style:normal;font-weight:bold;color:#333333;text-align:center">Hotel&nbsp; ${hotel}</h1></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table> 
                          <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]--> 
                          <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                            <tr style="border-collapse:collapse"> 
                             <td align="left" style="padding:0;Margin:0;width:270px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" role="presentation"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="Margin:0;padding-top:5px;padding-bottom:10px;padding-left:10px;padding-right:10px"><span class="es-button-border es-button-border-4" style="border-style:solid;border-color:#2CB543;background:#1565C0;border-width:0px;display:inline-block;border-radius:0px;width:auto"><a href="https://commudus.web.app/" class="es-button es-button-3" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;color:#FFFFFF;border-style:solid;border-color:#1565C0;border-width:10px 20px;display:inline-block;background:#1565C0;border-radius:0px;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">Tu Reserva</a></span></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:25px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:38px;color:#333333"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:25px;text-decoration:none;color:#333333" href="tel:123456789">#${nroReserva}</a></p></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table> 
                          <!--[if mso]></td></tr></table><![endif]--></td> 
                        </tr> 
                        <tr style="border-collapse:collapse"> 
                         <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#7CCDC7" bgcolor="#7ccdc7"> 
                          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                            <tr style="border-collapse:collapse"> 
                             <td align="center" valign="top" style="padding:0;Margin:0;width:560px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#FFFFFF">¡Gracias por reservar con nosotros!</h1></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#FFFFFF">Acordate que accediendo a nuestra web tenes</p></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#FFFFFF">muchos beneficios para disfrutar en tu estadia.</p></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#FFFFFF">Te esperamos!</p></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table></td> 
                        </tr> 
                        <tr style="border-collapse:collapse"> 
                         <td align="left" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#76A5AF" bgcolor="#76a5af"> 
                          <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]--> 
                          <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                            <tr style="border-collapse:collapse"> 
                             <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" class="es-m-txt-l" style="padding:0;Margin:0"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333"><strong>Numero de Reserva</strong></h3></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"> 
                                  <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                    <tr style="border-collapse:collapse"> 
                                     <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px"></td> 
                                    </tr> 
                                  </table></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" class="es-m-txt-l" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333">#${nroReserva}</p></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333"><strong>Reserva</strong></p></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333">Check-In: ${checkIn}<br>Check-Out: ${checkOut}<br>Huespedes: ${huespedes}</p></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table> 
                          <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]--> 
                          <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                            <tr style="border-collapse:collapse"> 
                             <td align="left" style="padding:0;Margin:0;width:270px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" class="es-m-txt-l" style="padding:0;Margin:0"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333"><b>Dia realizado</b></h3></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;padding-right:10px"> 
                                  <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                    <tr style="border-collapse:collapse"> 
                                     <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px"></td> 
                                    </tr> 
                                  </table></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333">${fechaHoy}</p></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333"><strong>Tarjeta de reserva</strong></p></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333">${tipoTarjeta}<br>${nombre}<br>${numeroTarjeta}</p></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table> 
                          <!--[if mso]></td></tr></table><![endif]--></td> 
                        </tr> 
                        <tr style="border-collapse:collapse"> 
                         <td class="esdev-adapt-off" align="left" bgcolor="#76a5af" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#76A5AF"> 
                          <table cellpadding="0" cellspacing="0" class="esdev-mso-table" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px"> 
                            <tr style="border-collapse:collapse"> 
                             <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0"> 
                              <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0;width:270px"> 
                                  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                    <tr style="border-collapse:collapse"> 
                                     <td align="left" style="padding:0;Margin:0"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif">Habitacion</h4></td> 
                                    </tr> 
                                  </table></td> 
                                 <td style="padding:0;Margin:0;width:20px"></td> 
                                </tr> 
                              </table></td> 
                             <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0"> 
                              <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0;width:270px"> 
                                  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                    <tr style="border-collapse:collapse"> 
                                     <td align="left" style="padding:0;Margin:0"> 
                                      <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%" class="cke_show_border" cellspacing="1" cellpadding="1" border="0" role="presentation"> 
                                        <tr style="border-collapse:collapse"> 
                                         <td style="padding:0;Margin:0;text-align:center;font-size:13px;line-height:13px" width="15%" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333"><strong>Noches</strong></p></td> 
                                         <td style="padding:0;Margin:0;text-align:center;font-size:13px;line-height:13px" width="30%"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333"><b>Precio</b></p></td> 
                                        </tr> 
                                      </table></td> 
                                    </tr> 
                                  </table></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table></td> 
                        </tr> 
                        <tr style="border-collapse:collapse"> 
                         <td align="left" style="padding:0;Margin:0"> 
                          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                            <tr style="border-collapse:collapse"> 
                             <td align="center" valign="top" style="padding:0;Margin:0;width:600px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0px" bgcolor="#76a5af"> 
                                  <table border="0" width="95%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                    <tr style="border-collapse:collapse"> 
                                     <td style="padding:0;Margin:0px;border-bottom:1px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px"></td> 
                                    </tr> 
                                  </table></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table></td> 
                        </tr> 
                        <tr style="border-collapse:collapse"> 
                         <td class="esdev-adapt-off" align="left" bgcolor="#76a5af" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#76A5AF"> 
                          <table cellpadding="0" cellspacing="0" class="esdev-mso-table" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px"> 
                            <tr style="border-collapse:collapse"> 
                             <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0"> 
                              <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0;width:271px"> 
                                  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                    <tr style="border-collapse:collapse"> 
                                     <td align="left" style="padding:0;Margin:0"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif">${tipoHabitacion}</h4></td> 
                                    </tr> 
                                  </table></td> 
                                 <td style="padding:0;Margin:0;width:20px"></td> 
                                </tr> 
                              </table></td> 
                             <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0"> 
                              <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="left" style="padding:0;Margin:0;width:269px"> 
                                  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                    <tr style="border-collapse:collapse"> 
                                     <td align="left" style="padding:0;Margin:0"> 
                                      <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%" class="cke_show_border" cellspacing="1" cellpadding="1" border="0" role="presentation"> 
                                        <tr style="border-collapse:collapse"> 
                                         <td style="padding:0;Margin:0;text-align:center;font-size:13px;line-height:13px" width="15%" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333"><b>${noches}</b></p></td> 
                                         <td style="padding:0;Margin:0;text-align:center;font-size:13px;line-height:13px" width="30%"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333"><strong>$ ${precioNoche}</strong></p></td> 
                                        </tr> 
                                      </table></td> 
                                    </tr> 
                                  </table></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table></td> 
                        </tr> 
                        <tr style="border-collapse:collapse"> 
                         <td align="left" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#76A5AF" bgcolor="#76a5af"> 
                          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                            <tr style="border-collapse:collapse"> 
                             <td align="center" valign="top" style="padding:0;Margin:0;width:560px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0px"> 
                                  <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                    <tr style="border-collapse:collapse"> 
                                     <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px"></td> }
                                    </tr> 
                                  </table></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="right" class="es-m-txt-r" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:20px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:30px;color:#333333"><strong>Total: $ ${total}</strong></p></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table></td> 
                        </tr> 
                        <tr style="border-collapse:collapse"> 
                         <td align="left" style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#7CCDC7" bgcolor="#7ccdc7"> 
                          <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:194px" valign="top"><![endif]--> 
                          <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                            <tr style="border-collapse:collapse"> 
                             <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:174px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://www.bythebook.com/s/BTG8KehHiUaghqbVAI_f7g/ci_silhouette.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="139"></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333"><strong>Check-In Online</strong></p></td> 
                                </tr> 
                              </table></td> 
                             <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td> 
                            </tr> 
                          </table> 
                          <!--[if mso]></td><td style="width:173px" valign="top"><![endif]--> 
                          <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                            <tr style="border-collapse:collapse"> 
                             <td class="es-m-p20b" align="center" style="padding:0;Margin:0;width:173px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://www.clipartmax.com/png/full/288-2884422_%C2%A0-services-icon.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="143"></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333"><b>Elegi tus servicios</b></p></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table> 
                          <!--[if mso]></td><td style="width:20px"></td><td style="width:173px" valign="top"><![endif]--> 
                          <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                            <tr style="border-collapse:collapse"> 
                             <td align="center" style="padding:0;Margin:0;width:173px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" role="presentation"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://cdn1.iconfinder.com/data/icons/hotel-facilities-1/500/late-512.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="138"></td> 
                                </tr> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333"><strong>Check-Out Online</strong></p></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table> 
                          <!--[if mso]></td></tr></table><![endif]--></td> 
                        </tr> 
                        <tr style="border-collapse:collapse"> 
                         <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;background-color:#E5B568" bgcolor="#e5b568"> 
                          <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]--> 
                          <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                            <tr style="border-collapse:collapse"> 
                             <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#FFFFFF">WILD TRAVEL</p></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table> 
                          <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]--> 
                          <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                            <tr style="border-collapse:collapse"> 
                             <td align="left" style="padding:0;Margin:0;width:270px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#FFFFFF"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:none;color:#FFFFFF" href="https://viewstripo.email">viewstripo.email</a></p></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table> 
                          <!--[if mso]></td></tr></table><![endif]--></td> 
                        </tr> 
                        <tr style="border-collapse:collapse"> 
                         <td align="left" style="padding:0;Margin:0;background-position:center top"> 
                          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                            <tr style="border-collapse:collapse"> 
                             <td align="center" valign="top" style="padding:0;Margin:0;width:600px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" bgcolor="#e5b568" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0px;background-color:#E5B568"> 
                                  <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                    <tr style="border-collapse:collapse"> 
                                     <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://viewstripo.email/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#2CB543"><img title="Facebook" src="https://frhnta.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                                     <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://viewstripo.email/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#2CB543"><img title="Twitter" src="https://frhnta.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                                     <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#2CB543"><img title="Instagram" src="https://frhnta.stripocdn.email/content/assets/img/social-icons/circle-colored/instagram-circle-colored.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                                    </tr> 
                                  </table></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table></td> 
                        </tr> 
                        <tr style="border-collapse:collapse"> 
                         <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"> 
                          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                            <tr style="border-collapse:collapse"> 
                             <td align="center" valign="top" style="padding:0;Margin:0;width:560px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" height="40" style="padding:0;Margin:0"></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table></td> 
                        </tr> 
                      </table></td> 
                    </tr> 
                  </table> 
                  <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
                    <tr style="border-collapse:collapse"> 
                     <td align="center" bgcolor="#e5b568" style="padding:0;Margin:0;background-color:#E5B568"> 
                      <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
                        <tr style="border-collapse:collapse"> 
                         <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#E5B568" bgcolor="#e5b568"> 
                          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                            <tr style="border-collapse:collapse"> 
                             <td align="center" valign="top" style="padding:0;Margin:0;width:560px"> 
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                <tr style="border-collapse:collapse"> 
                                 <td align="center" height="40" bgcolor="#e5b568" style="padding:0;Margin:0"></td> 
                                </tr> 
                              </table></td> 
                            </tr> 
                          </table></td> 
                        </tr> 
                      </table></td> 
                    </tr> 
                  </table></td> 
                </tr> 
              </table> 
             </div>  
            </body>
           </html>
            ` // email content in HTML
        };

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });
});


