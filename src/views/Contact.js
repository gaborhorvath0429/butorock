import React from 'react'
import './Contact.scss'

let Contact = () => {

  return (
    <div className="kapcsolat" id="Kapcsolat">
      {window.matchMedia("(max-width: 768px)").matches ? 
      (<div className="media">
        <a href="https://www.facebook.com/sutheobutor" rel="noopener noreferrer" target="_blank"><img alt="" width="40px" src="images/facebook.png"/></a>
        <a href="https://www.instagram.com/butorock.hu" rel="noopener noreferrer" target="_blank"><img alt="" width="40px" src="images/instagram.png"/></a>
        <a href="mailto:info@butorock.hu" rel="noopener noreferrer" target="_blank"><img id="email" alt="" width="40px" src="images/email.png"/></a>
      </div>) : ''}
      <iframe title="térkép" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.868284160036!2d16.58002360391065!3d46.84628277313105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xef7b2701f6651ec3!2zU8O8dGhlxZEgQsO6dG9yIEtmdC4!5e0!3m2!1shu!2shu!4v1425893400262" id="iframe" frameBorder="0" style={{border: 0}}></iframe>
      <div className="contacts">
        <h1>Elérhetőségek:</h1>
        <strong>Sütheő János</strong><br/>
        Telefon: +36/30/979-7250<br/>
        E-mail: info@butorock.hu<br/>
        <br/>
        <strong>Sütheő Péter</strong><br/>
        Telefon: +36/30/216-2300<br/>
        E-mail: sutheopeter@butorock.hu<br/>
        <br/>

        <strong>Cégadatok:</strong><br/>
        Sütheő Bútor Kft.<br/>
        8999 Zalalövő<br/>
        Petőfi Sándor út 31.<br/>
        <br/>
        Adószám: 23832707-2-20<br/>
        Cégjegyzékszám: 20-09-072423<br/>
      </div>
    </div>
  )
}

export default Contact