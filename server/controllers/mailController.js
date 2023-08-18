import Email from '../lib/email.js';

export const sendMails = async (req, res) => {
  const email = req.body;
  try {
    await new Email(email).send();
    res.status(200).send({ status: 'success' });
  } catch (error) {
    res.status(400).send(error);
  }
};
