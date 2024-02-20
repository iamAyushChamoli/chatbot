import User from "../models/user.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user)
            return res
                .status(401)
                .json({ message: "User not registered OR Token malfunctioned" });
        // grab chats of user
        const chats = user.chats.map(({ role, content }) => ({
            role,
            content,
        }));
        chats.push({ content: message, role: "user" });
        user.chats.push({ content: message, role: "user" });
        // send all chats with new one to openAI API
        // const config = configureOpenAI();
        const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GENAI_API);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const chatResponse = await model.generateContent(message);
        const result = await chatResponse.response;
        console.log(result.text);
        // get latest response
        // const chatResponse = await genAI.createChatCompletion({
        //   model: "gpt-3.5-turbo",
        //   messages: chats,
        // });
        user.chats.push(result.text);
        await user.save();
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
//# sourceMappingURL=chat-controller.js.map