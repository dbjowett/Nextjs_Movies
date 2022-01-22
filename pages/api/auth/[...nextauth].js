import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { connect } from '../../../utils/db';
import { comparePwd } from '../../../utils/auth';

export default NextAuth({
  session: {
    jwt: true
  },
  // Config one or more auth providers
  providers: [
    Credentials({
      // Next will fire this funciton when it gets an incoming login request
      async authorize({ email, password }) {
        const client = await connect();
        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({ email: email });

        if (!user) {
          throw new Error('This user was not found');
        }

        const isSame = await comparePwd(password, user.password);
        if (!isSame) {
          client.close();
          throw new Error('Can not login');
        }
        client.close();
        return { email: user.email };
      }
    })
  ]
});
