import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"} style={{textDecoration:"none"}}>
        <img
          src="openai.png"
          alt="openai"
          width={"30px"}
          height={"30px"}
          className="image-inverted"
        />
        <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "800",
          textShadow: "2px 2px 20px #000",
          fontFamily:"Kode Mono"
        }}
      >
        <span style={{ fontSize: "20px", fontFamily:"Kode Mono" }}>Chat</span>-GPT <span style={{fontSize:"30px"}}>α</span>
      </Typography>
      </Link>{" "}
      
    </div>
  );
};

export default Logo;
