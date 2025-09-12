import express from "express";
import prisma from "../utils/ConnectDB.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

export const adminLogin = async (req, res) => {
  const { email, pass } = req.body;

  try {
    const validUser = await prisma.user.findFirst({
      where: { email, role: "ADMIN" },
    });

    if (!validUser) {
      return res.status(400).json({ message: "User doesn't exist" });
    }

    const validPass = await bcrypt.compare(pass, validUser.password);
    if (!validPass) {
      return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: validUser.id, email: validUser.email, role: validUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "6h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
