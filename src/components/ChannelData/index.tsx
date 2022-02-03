import React, {useRef, useEffect} from "react";
import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';
import {ChannelMessage} from "../ChannelMessage";
import {Mention} from "../ChannelMessage/styles";

export const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
           <Messages ref={messagesRef}>
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />
               <ChannelMessage
                   author="Gabriel Henrique"
                   date="03/02/2022"
                   content="Hoje estou bem feliz"
               />

               <ChannelMessage
                   author="Diego Fernandes"
                   date="03/02/2022"
                   content={
                   <>
                       <Mention>@Gabriel Henrique</Mention>, me carrega no LoL de novo por favor?
                   </>
                   }
                   hasMention
                   isBot
               />

           </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon/>
            </InputWrapper>

        </Container>
    )
};