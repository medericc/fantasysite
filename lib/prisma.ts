// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "error", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// 🚀 Log la DATABASE_URL (masquée pour éviter de leak le mot de passe)
const dbUrl = process.env.DATABASE_URL || "❌ DATABASE_URL not set";
const safeDbUrl = dbUrl.replace(/:\/\/(.*):(.*)@/, "://****:****@");
console.log("[Prisma] DATABASE_URL =", safeDbUrl);

// 🚀 Teste la connexion dès le chargement
(async () => {
  try {
    await prisma.$connect();
    console.log("[Prisma] ✅ Connected to database");
  } catch (err) {
    console.error("[Prisma] ❌ Failed to connect to database:", err);
  }
})();
