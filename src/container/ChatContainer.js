import React, {useState, useEffect} from 'react'
import { Chat, Channel, ChannelHeader, Window, renderText } from 'stream-chat-react'
import { MessageList, MessageInput, MessageLivestream } from 'stream-chat-react'
import { MessageInputSmall, Thread } from 'stream-chat-react'
import { StreamChat } from 'stream-chat'
import 'stream-chat-react/dist/css/index.css'
import {Button} from 'semantic-ui-react'
import {useSelector} from 'react-redux'


function ChatContainer(props){


    const [chatClient, setChatClient] = useState(null)
    const [channel, setChannel] = useState(null)


    const user =  useSelector(state => state.user)



    useEffect(()=>{
            if(user){
            let chatKey = process.env.REACT_APP_CHAT_KEY
            const chatClient = new StreamChat(chatKey)
            const userToken = `${user.user_token}`
            chatClient.setUser(
                {
                    id: `${user.username}`,
                    name: `${user.username}`,
                    image: 'https://toppng.com/uploads/preview/epic-seven-logo-115628650238rvr8yrfhx.png'
                },
                userToken,
                );
            const channel = chatClient.channel('messaging', 'EpicSevenChat', {
                // add as many custom fields as you'd like
                image: 'https://toppng.com/uploads/preview/epic-seven-logo-115628650238rvr8yrfhx.png',
                name: 'Epic Seven Chat'
            })
    
        
            setChatClient(chatClient)
            setChannel(channel)
        
        }

      },[user])

      console.log(chatClient)

    
  return (
    <>
    {user? 
    <>
    <Chat client={chatClient} theme={'livestream dark'}>
        <Channel  channel={channel}> 
        <Window hideOnThread>
            <ChannelHeader  />         
            <MessageList />
            <MessageInput Input={MessageInputSmall} focus />
            <Button onClick={props.close}> Close Chat </Button>
        </Window>
        <Thread/>
        </Channel>
    </Chat>
    </>:null}   
    </>
  )
}




export default ChatContainer