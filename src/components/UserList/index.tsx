import React from "react";
import {Container, Role, User, Avatar} from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
    isOnline?:boolean;
}


export const UserRow: React.FC<UserProps> = ({nickname, isBot, isOnline}) => {
    return (
    <User>
        <Avatar className={isBot ? 'bot' : '' }/>
        <strong>{nickname}</strong>

        {isBot && <span>Bot</span>}
    </User>
    )
}

export const UserList: React.FC = () => {
    return (
        <Container>
            <Role> Disponível - 1</Role>
            <UserRow nickname="Gabriel Henrique" isOnline/>

            <Role> Offline - 18</Role>
            <UserRow nickname="Diego Fernandes" isBot />
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
        </Container>
    )
};