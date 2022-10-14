import './App.css';
import mail1 from './mail1.png';
import mail2 from './mail2.png';
import mail3 from './mail3.png';

function Contact (){

    return <div>

    <div className="cont">
    <h2 className="header">Наши контакты</h2>
    </div>
    
    <div className='cont2'>

    <div className='container'>
    <h3>Адрес</h3> 
    <p className='adress'>Москва, ул. Московская, д.111, стр.11</p>

    <h3>Телефон</h3> 
    <p className='adress'>111-11-11</p>

    <h3>Email</h3> 
    <p className='adress'>mebel@gmail.com</p>

    <h3>Режим работы</h3> 
    <p className='adress'>Ежедневно с 8:00 до 20:00</p>
    </div>

    <div class="container">  
    <form id="contact"  method="POST">
    <h3 className='mailTo'>Напишите нам</h3>

    <fieldset>
        <input placeholder="Email" className='text-input' type="email" tabindex="2"  name="email" required/>
    </fieldset>

    <fieldset>
        <textarea placeholder="Сообщение..." className='text-input2' tabindex="5"  name="message" required></textarea>
    </fieldset>
    
    <div className='btn'>
    <button name="submit" type="submit" className='change'>Отправить</button>
    </div>

    </form>

    </div>

    
    </div>

    <div class="mail">
        <div>
        <button class="bu">
        <img class="pa" src={mail1} alt="mail1"/>
        </button> 
        </div>

        <div>
        <button class="bu">
        <img class="pa" src={mail2} alt="mail2"/>
        </button> 
        </div>

        <div>
        <button class="bu">
        <img class="pa" src={mail3} alt="mail3"/>
        </button>
        </div>

    </div>

    </div>
}

export default Contact;