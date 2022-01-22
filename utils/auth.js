import { hash } from 'bcryptjs';

export async function hashPwd(password) {
  const hashedPwd = await hash(password, 10);
  return hashedPwd;
}
