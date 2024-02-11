import React from 'react'
import { Avatar, Box, Button, Typography, IconButton } from '@mui/material'
import { useAuth } from '../context/AuthContext'
import { red } from '@mui/material/colors'
import ChatItem from '../components/chat/ChatItem'
import { IoMdSend } from 'react-icons/io'
const chatMessages = [
  {
    "role": "assistant",
    "content": "Hello! How can I assist you today?"
  },
  {
    "role": "user",
    "content": "Hi there! I need help with setting up my email account."
  },
  {
    "role": "assistant",
    "content": "Of course, I'd be happy to help with that. Could you please specify which email service you're using?"
  },
  {
    "role": "user",
    "content": "I'm using Gmail."
  },
  {
    "role": "assistant",
    "content": "Great choice! To set up your Gmail account, you'll need to go to the settings in your email client and select 'Add Account'. Then, follow the prompts to enter your Gmail address and password."
  },
  {
    "role": "user",
    "content": "Thank you! That was very helpful."
  }
]


const Chat = () => {
  const auth =useAuth();
  return <Box sx={{
    display:"flex",
    flex:1,
    width:"100%",
    height:"100%",
    mt:3,
    gap:3,
  }}>
    <Box sx={{
      display:{md:"flex", xs:"none", sm:"none"}, 
      flex:0.2, 
      flexDirection:"column",
    }}>
      <Box sx={{
        display:"flex",
        width:"100%",
        height:"60vh",
        bgcolor:"rgb(17, 29, 39)",
        borderRadius:5,
        flexDirection:"column",
        mx:3,
      }}>
        <Avatar sx={{
          mx:"auto",
          my:2,
          bgcolor:"white",
          color:"black",
          fontWeight:700,
        }}>{auth?.user?.name[0]}{auth?.user?.name.split(" ")[1][0]}</Avatar>
        <Typography sx={{
          mx:"auto",
          fontFamily:"work sans"
        }}>
          You Are Talking To A Chatbot!
        </Typography>
        <Typography sx={{
          fontFamily:"work sans",
          my:4,
          mb:1,
          p:3,
          pb:1,
          textAlign:"center"
        }}>
          You can ask questions, get things done, and much more! 
        </Typography>
        
        <Typography sx={{
          textAlign:"center",
          fontFamily:"work sans",
          my:2,
          p:1,
        }}>
          ⚠️Avoid Sharing Sensitive Details To Ensure Your Privacy Is Not Compromised! ⚠️
        </Typography>
        <Button sx={{
          width:"200px",
          my:"auto",
          color:"white",
          fontWeight:700,
          borderRadius:3,
          mx:"auto",
          bgcolor:red[300],
          ":hover":{
            bgcolor:red[500],
          }
        }}> 
          Clear Chats
        </Button>
      </Box>
    </Box>
    <Box sx={{
      display:"flex",
      flex:{
        md:0.8,
        xs:1,
        sm:1,
      },
      flexDirection:"column",
      px:3,
    }}>
      <Typography sx={{
        fontSize:"40px",
        color:"white",
        mx:"auto",
        mb:2,
      }}>
        Model - GPT 3.5 Turbo
      </Typography>
      <Box sx={{
        width:"100%",
        height:"60vh",
        borderRadius:3,
        mx:"auto",
        display:"flex",
        flexDirection:"column",
        overflow:"scroll",
        overflowX:"hidden",
        overflowY:"auto",
        scrollBehavior:"smooth",
      }}>
        {chatMessages.map((chat, index)=>
          (
            <ChatItem content={chat.content} role={chat.role} key={index}/>
          )
        )}
      </Box>
      <div style={{width:"100%", padding:"20px", borderRadius:8, backgroundColor:"rgb(18,27,39)", display:"flex", margin:"auto", }}>
      <input type="text" style={{
        width:"100%",
        backgroundColor:"transparent",
        padding:"10px",
        border:"none",
        outline:"none",
        color:"white",
        fontSize:"10px",
    }} />

      <IconButton sx={{ml:"auto", color:"white"}}> <IoMdSend></IoMdSend> </IconButton>

      </div>
    </Box>
  </Box>
}

export default Chat