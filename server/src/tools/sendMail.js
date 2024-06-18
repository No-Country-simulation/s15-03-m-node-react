const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'buildinghub15@gmail.com',
        pass: 'fnktftbwiguniqnp'
    }
    /*host: 'smtp.gmail.com',
    port: 465*/
});

module.exports = (email, code) => {
    try {
        transporter.sendMail({
            from: '"Equipo BuildingHub" <buildinghub15@gmail.com>',
            to: email,
            subject: '¡Bienvenid@ a BuildingHub!',
            html: `
            <style type="text/css">
                @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
                body {
                    font-family: 'Work Sans', sans-serif;
                    margin: 0;
                    padding: 0;
                }
                .work-sans {
                    font-family: "Work Sans", sans-serif;
                    font-optical-sizing: auto;
                    font-weight: 700;
                    font-style: normal;
                }
                .text-primary {
                    color: #483ae7;
                }
                .header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }
                .header img {
                    margin-right: 30px;
                }
                .welcome {
                    padding: 20px;
                    text-align: center;
                }
                .content {
                    padding: 20px;
                    text-align: left;
                }
            </style>
            <header class="header">
                <img src="https://buildinghub.vercel.app/assets/Logo-Building-CZZkYgJ8.png" alt="Logo" height="50">
                <div class="work-sans">La solucion integral<br>para la <span class="text-primary">gestion eficiente<br></span> de tu edificio</div>
            </header>
            <div class="welcome">
                <h1>¡Hola! 👋</h1>
                <h4>Te damos la bienvenida a <span class="text-primary">Building</span>Hub.</h3>
            </div>
            <div class="content">
                <p>Estamos emocionados de tenerte como administrador en nuestra plataforma. Como l&iacute;der, tienes un papel fundamental en conectar a los residentes y fomentar una comunidad activa y pr&oacute;spera.</p>

            <p>Aqu&iacute; est&aacute;n los&nbsp;<strong>pasos clave</strong>&nbsp;para comenzar:</p>

            <ol>
                <li>
                <p><strong>Registro del Administrador</strong>:</p>

                <ul>
                    <li>Has dado el primer paso al registrarte como administrador en&nbsp;<strong style="font-weight: 600;"><span class="text-primary">Building</span>Hub</strong>. &iexcl;Gracias por unirte a nosotros! &#127881;</li>
                </ul>
                </li>
                <li>
                <p><strong>Invita a tus Residentes</strong>:</p>

                <ul>
                    <li>Ahora es el momento de invitar a tus residentes a unirse a la comunidad. Simplemente comparte este enlace con ellos: <a href="https://buildinghub.vercel.app/register/${code}">Reg&iacute;strate en BuildingHub.</a></li>
                    <li>Cuantos m&aacute;s residentes se unan, m&aacute;s vibrante ser&aacute; nuestra comunidad. &#128588;</li>
                </ul>
                </li>
                <li>
                <p><strong>Explora las Funcionalidades</strong>:</p>

                <ul>
                    <li>Una vez que tus residentes se registren, podr&aacute;n:
                    <ul>
                        <li><strong>Conectar con Vecinos</strong>: Encuentra a otros residentes con intereses similares y establece conexiones comerciales.</li>
                        <li><strong>Comprar y Vender</strong>: Explora productos y servicios locales dentro de la plataforma.</li>
                        <li><strong>Eventos y Anuncios</strong>: Mantente al tanto de eventos comunitarios y anuncios importantes.</li>
                        <li><strong>Reserva de espacios</strong>: Reserva tus zonas sociales de modo r&aacute;pido y eficiente.</li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li>
                <p><strong>Soporte Personalizado</strong>:</p>

                <ul>
                    <li>Si tienes alguna pregunta o necesitas ayuda, nuestro equipo de soporte est&aacute; aqu&iacute; para ti. No dudes en contactarnos en cualquier momento.</li>
                </ul>
                </li>
            </ol>

            <p>&iexcl;Gracias por ser parte de la familia&nbsp;<strong style="font-weight: 600;"><span class="text-primary">Building</span>Hub</strong>! &#127775;&#129309;</p>
            `,
        });
        return true;
    } catch (error) {
        console.error('Error enviando el correo:', error.message);
        throw error;
    }
}