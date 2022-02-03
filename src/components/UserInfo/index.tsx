import React from "react";
import {Container, Profile, Avatar, Icons, UserData, MicIcon, HeadphoneIcon, SettingsIcon} from './styles';

export const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar/>
                <UserData>
                    <strong>Gabriel Henrique</strong>
                    <span>#2202</span>
                </UserData>
            </Profile>
            <Icons>
                <MicIcon/>
                <HeadphoneIcon/>
                <SettingsIcon/>
            </Icons>
        </Container>
    )
};