//la lógica es registrarse, loguearse y mostrar el usuario una vez autenticados

const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateToken } = require("../helpers/generateToken");

//función para registrar usuarios
const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            return res.status(400).json( { message: "All fields are required" });
        }
        if (role !== "user" && role !== "restaurant") {
            return res.status(400).json({ message: "Invalid role" });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters" });
        }
        if (!/[!@#$€^&*(),.?":{}|<>]/.test(password)) {
            return res.status(400).json({ message: "Password must include a special character" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        const token = generateToken(newUser);

        return res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }
        });

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

//función para loguearnos.
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user);

        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

//función para devolver el usuario actual una vez autenticados.
const me = async (req, res) => {
    try {
        return res.status(200).json(req.user);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = { register, login, me };