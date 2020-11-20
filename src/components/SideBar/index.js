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
                    <SidebarLink
                        to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}
                    >
                        About
                    </SidebarLink>
                    <SidebarLink
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        to="discover"
                        onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink
                        to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink
                        to="sign up"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}>
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