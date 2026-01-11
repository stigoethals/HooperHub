import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "demo@hooperhub.test" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // NOTE: Replace this with your real user validation (DB lookup / external API)
        if (!credentials) return null;
        const { email, password } = credentials;

        // Simple demo account: email=demo@hooperhub.test password=password
        if (email === "demo@hooperhub.test" && password === "password") {
          return { id: "1", name: "Demo User", email: "demo@hooperhub.test" };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      if (token?.user) session.user = token.user as any;
      return session;
    },
  },
  // In production, set NEXTAUTH_SECRET in your environment.
  secret: process.env.NEXTAUTH_SECRET || "dev-secret",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };