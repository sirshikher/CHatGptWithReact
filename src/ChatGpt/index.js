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
  } from '@mui/material';
  import {
    ActionRequest,
    AudioActionResponse,
    ChatController,
    FileActionResponse,
    MuiChat,
  } from 'chat-ui-react';
  import React from 'react';
  
  const muiTheme = createTheme({
    palette: {
      primary: {
        main: '#007aff',
      },
    },
  });
  
  export function Chat() {
    const [chatCtl] = React.useState(
      new ChatController({
        showDateTime: true,
      }),
    );
  const [response, setResponse] = React.useState("");

    React.useMemo(() => {
      echo(chatCtl);
    }, [chatCtl]);
    const handleSubmit = (prompt) => {

        // Send a request to the server with the prompt
        axios
          .post("http://localhost:3002/message", { prompt })
          .then((res) => {
            // Update the response state with the server's response
            setResponse(res.data);
             chatCtl.addMessage({
                type: 'text',
                content: res.data,
                self: false,
                avatar: '-',
            });
          })
          .catch((err) => {
            console.error(err);
          });
      };
      async function echo(chatCtl) {
        const prompt = await chatCtl.setActionRequest({
          type: 'text',
          placeholder: 'Please enter something',
        });
        handleSubmit(prompt.value);
        echo(chatCtl);
        
    }
    return (
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Box sx={{ height: '100%', backgroundColor: 'gray' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              maxWidth: '640px',
              marginLeft: 'auto',
              marginRight: 'auto',
              bgcolor: 'background.default',
            }}
          >
            <Box sx={{ flex: '1 1 0%', minHeight: 0 }}>
              <MuiChat chatController={chatCtl} />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    );
}
