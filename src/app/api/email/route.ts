import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const {
  NODEMAILER_PORT,
  NODE_SENDER_EMAIL,
  NODE_SENDER_PASSWORD,
  TARGET_EMAIL,
} = process.env;

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const transport = nodemailer.createTransport({
    host: 'smtp.meta.ua',
    port: NODEMAILER_PORT,
    secure: true,
    auth: {
      user: NODE_SENDER_EMAIL,
      pass: NODE_SENDER_PASSWORD,
    },
  } as nodemailer.TransportOptions);

  const dateAndTime = new Date().toISOString().split('T');
  const date = dateAndTime[0].split('-').join('');
  const time = dateAndTime[1].split('.')[0].split(':').join('');
  const orderNumber = `${date}.${time}`;

  const orderTemplate = `
  Order nubmer: ${orderNumber}
  Name: ${name}
  Email: ${email}
  Message: ${message}`;

  const mailOption: Mail.Options = {
    from: NODE_SENDER_EMAIL,
    to: TARGET_EMAIL,
    subject: `Order №${orderNumber} from ${name}`,
    text: orderTemplate,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOption, err => {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
