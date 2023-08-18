import express from 'express';
import { sendMails } from '../controllers/mailController.js';

const router = express.Router();

router.post('/sendMail', sendMails);

export default router;
