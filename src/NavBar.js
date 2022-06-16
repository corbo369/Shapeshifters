import React from 'react';
import { Box, Button, Flex, Link, Image, Spacer } from '@chakra-ui/react';
import Discord from './assets/social-media-icons/email_32x32.png';
import Twitter from './assets/social-media-icons/Twitter.png';
import Opensea from './assets/social-media-icons/Opensea.png';

const NavBar= ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
            {/* LHS: SOCIAL MEDIA */}
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href="https://twitter.com/Corbo369">
                    <Image src={Twitter} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href="https://opensea.io/CorboVault">
                    <Image src={Opensea} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>

            {/* RHS: WALLET BAR */}
            <Flex
                jusitfy="space-around"
                align="center"
                width="40%"
                padding="30px"
            >
                <Box margin="0 15px">
                    Mint
                </Box>
                <Spacer />
                <Box margin="0 15px">
                    About
                </Box>
                <Spacer />
                <Box margin="0 15px">
                    Team
                </Box>
                <Spacer />

                {isConnected ? (
                    <Box margin="0 30px">Connected</Box>
                ) : (
                    <Button 
                        backgroundColor="#D6517D"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        margin="0 15px"
                        onClick={connectAccount}
                    >
                        Connect
                    </Button>
                )}
            </Flex>
        </Flex>
    );
};

export default NavBar;