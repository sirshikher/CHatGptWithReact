import axios from "axios";
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import {
  ActionRequest,
  AudioActionResponse,
  ChatController,
  FileActionResponse,
  MuiChat,
} from "chat-ui-react";
import React from "react";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#007aff",
    },
  },
});
import {TestChatGpt} from './ChatGPTIntialize';
export function Chat() {
  const [chatCtl] = React.useState(
    new ChatController({
      showDateTime: true,
    })
  );
  React.useMemo(() => {
    echo(chatCtl);
  }, [chatCtl]);
  const handleSubmit = (prompt) => {
     TestChatGpt(prompt).then((res)=>{
      chatCtl.addMessage({
        type: "text",
        content: res,
        self: false,
        avatar: "-",
      });
    })
  };
  async function echo(chatCtl) {
    const prompt = await chatCtl.setActionRequest({
      type: "text",
      placeholder: "Please enter something",
    });
    handleSubmit(prompt.value);
    echo(chatCtl);
  }
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box sx={{ height: "1000px", backgroundColor: "black"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            maxWidth: "640px",
            marginLeft: "auto",
            marginRight: "auto",
            bgcolor: "black",
            opacity:0.6 
          }}
        >
          <Box sx={{ flex: "1 1 0%", minHeight: 0 }}>
            <MuiChat chatController={chatCtl} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
