const mailgun = require('mailgun-js');
const DOMAIN =
  'https://app.mailgun.com/app/sending/domains/sandboxd67a69c68c834d8fb48b02c238b52ddc.mailgun.org/settings';
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });

const sendVerificationEmail = async (email, token) => {
  const verificationLink = `http://localhost:3000/users/verify/${token}`;

  const data = {
    from: 'no-reply@your-domain.com',
    to: email,
    subject: 'Please verify your email',
    text: `Click on the link to verify your email: ${verificationLink}`,
  };

  await mg.messages().send(data);
};

module.exports = sendVerificationEmail;

// db96a88f32977cdebb9c5dd8dcba16e3-826eddfb-5ef5c3f9
