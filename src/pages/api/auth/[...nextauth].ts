import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        usuEMailLogin: {
          label: "email",
          type: "text",
          placeholder: "jsmith",
        },
        usuSenhaLogin: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("entrou",credentials)

        const res = await fetch(
          "https://andraerp-backend-sp-dev-vagas.rj.r.appspot.com/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              usuEMailLogin: credentials?.usuEMailLogin,
              usuSenhaLogin: credentials?.usuSenhaLogin,
            }),
          }
        );
        console.log("res",res)
        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  jwt: {
    secret: "andra3RPW@8aZ",
  },
});
