import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export const SESSION_COOKIE = "amber_session";

export type SessionPayload = {
  sub: string;
  role: "STUDENT" | "ADMIN";
  jti: string;
};

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function signSessionToken(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    if (typeof payload.sub !== "string" || typeof payload.jti !== "string") return null;
    if (payload.role !== "STUDENT" && payload.role !== "ADMIN") return null;
    return { sub: payload.sub, role: payload.role, jti: payload.jti };
  } catch {
    return null;
  }
}
