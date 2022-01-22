import { hashPwd } from '../../../utils/auth';
import { connect } from '../../../utils/db';

export default async function handler(req, res) {
  // console.log(req.body);
  if (req.method !== 'POST') {
    return;
  }
  const data = req.body;
  const { email, password } = data;

  if (!email || !email.includes('@') || !password || password.trim().length < 6) {
    res.status(422).json({ message: 'Invalid input. Make sure password is over 6 characters' });
    return;
  }

  const client = await connect();
  const db = client.db();

  // undefined or an object with the data
  const existingUser = await db.collection('users').findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: 'You have an account already' });
    client.close();
    return;
  }

  const hashedPwd = await hashPwd(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPwd
  });

  res.status(201).json({ message: 'Your user was created.' });
  client.close();
}
