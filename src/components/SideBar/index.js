import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SiderbarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
} from './SideBarElements'

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SiderbarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services">
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup">
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SiderbarWrapper>
        </SidebarContainer>
    )
}

export default SideBar;