/**
 * Backend para contacto via WhatsApp
 * Usa Twilio para enviar mensajes a WhatsApp
 */

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const twilio = require('twilio');

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER; // Tu número de WhatsApp de Twilio (ej: whatsapp:+34672123456)
const recipientNumber = process.env.RECIPIENT_WHATSAPP_NUMBER; // Tu número donde recibirás mensajes (ej: whatsapp:+34612345678)

if (!accountSid || !authToken) {
  console.error('❌ Error: Falta configurar TWILIO_ACCOUNT_SID y TWILIO_AUTH_TOKEN en .env');
  process.exit(1);
}

const client = twilio(accountSid, authToken);

/**
 * POST /api/contact
 * Recibe datos del formulario y envía un mensaje a WhatsApp
 */
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validar datos
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Falta información en el formulario'
      });
    }

    // Construir mensaje formateado
    const mensajeFormateado = `
*📧 Nuevo Mensaje de Contacto*

*Nombre:* ${name}
*Email:* ${email}
*Asunto:* ${subject}

*Mensaje:*
${message}
    `.trim();

    // Enviar mensaje por WhatsApp
    const whatsappMessage = await client.messages.create({
      from: whatsappNumber,
      to: recipientNumber,
      body: mensajeFormateado
    });

    console.log(`✅ Mensaje enviado! ID: ${whatsappMessage.sid}`);

    return res.json({
      success: true,
      message: '¡Mensaje enviado correctamente! Te responderemos pronto.',
      messageSid: whatsappMessage.sid
    });

  } catch (error) {
    console.error('❌ Error al enviar mensaje:', error);
    return res.status(500).json({
      success: false,
      message: 'Error al enviar el mensaje. Intenta de nuevo.',
      error: error.message
    });
  }
});

/**
 * GET /health
 * Verificar que el servidor está funcionando
 */
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor funcionando correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📱 WhatsApp listo para recibir mensajes`);
});
