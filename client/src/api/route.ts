import bcrypt from "bcrypt";
import prisma from "../libs/prismadb";
import { jsonResponse } from "../utils";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma?.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return jsonResponse(user);
}