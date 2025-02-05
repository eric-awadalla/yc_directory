import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import { handlers } from "@/auth"; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;
