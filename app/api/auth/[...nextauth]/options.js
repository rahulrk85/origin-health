import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'name',
        },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        let user = { name: 'admin', password: 'admin123' };

        if (credentials.username === user.name) {
          return user;
        }
        user.name = 'normal';
        return user;
      },
    }),
  ],
};
