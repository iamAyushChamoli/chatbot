import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Ask Anything!",
        1000,
        "Built Using OpenAI API",
        2000,
        "A More Personalized and Secure Chatbot",
        1500,
      ]}
      speed={20}
      style={{
        fontSize: "60px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
