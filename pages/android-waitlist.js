import React, { useEffect } from "react"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import ModalContent from "../components/ModalContent"
import { useRouter } from 'next/router'
import Hamburger from "../components/Mobile/MobileMenu/MobileMenu"
import ChalkLogo from "../public/static/images/ChalkLogoOutlined.svg"

const AndroidWaitlist = () => {
    const router = useRouter()

    const handleClose = () =>{
        router.push("/")
    }

    return(
        <div style={{backgroundColor: "#F7F7F7", height: "100%"}}>
            <Flex ml={30} justifyContent="left">
                <MobileLogo
                    onClick={() => { 
                        handleClose() 
                    }}
                />
			</Flex>
            <Hamburger/>

            <ModalContent
                onClose={()=>{
                    handleClose()
                }}
                returnClick={()=>{
                    handleClose()
                }}
            />
            <div style={{marginTop: 50, backgroundColor: "#F7F7F7"}}></div>
        </div>
    )
    
}

export default AndroidWaitlist

const MobileLogo = styled(ChalkLogo)`
	position: fixed;
	top: 0;
	z-index: 10;
	margin-top: 40px;
`