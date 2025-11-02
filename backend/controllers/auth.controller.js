import User from "../models/user.model.js";

export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    if (!name || !email || !password) {
        res.status(401).json({ msg: 'fill all fields' })
    }
    try {

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "User already exists" });
        }
        const user = await User.create({ name, email, password });
        res.status(201).json({ msg: "User created successfully", user });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};
export const login = (req, res) => {
    res.send("login route called");
};
export const logout = (req, res) => {
    res.send("logout route called");
};

