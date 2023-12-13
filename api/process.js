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
                user: 'your.email@gmail.com',
                pass: 'your-email-password',
            },
        });

        // Compose email
        const mailOptions = {
            from: 'your.email@gmail.com',
            to: 'your.email@gmail.com',  // Your email address
            subject: 'New Form Submission',
            text: `Name: ${name}\nEmail: ${email}`,
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).send('Email sent successfully');
            }
        });
    } else {
        res.status(405).send({ error: 'Method Not Allowed' });
    }
};
