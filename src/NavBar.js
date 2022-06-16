import React from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import { Box, Button, Flex, Link, Image, Spacer, Input } from '@chakra-ui/react';
import Twitter from './assets/social-media-icons/Twitter.png';
import Opensea from './assets/social-media-icons/Opensea.png';
import Goo from './Goo.json';

const GooAddress = "0x526acEe3039DCa0333492201FA5EBD11537B3B1C";

const NavBar= ({ accounts, setAccounts }) => {
    const [GooBalance, setGooBalance] = useState(0);
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            if(window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    GooAddress,
                    Goo.abi,
                    signer
                );
                try {
                    const response = await contract.balanceOf(accounts.toString());
                    setAccounts(accounts);
                    setGooBalance((response / 10e17).toString())
                    console.log('response: ', response);
                } catch (err) {
                    console.log("error: ", err);
                }
            }
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
                <Box 
                    backgroundColor="#D6517D"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    fontFamily="inherit"
                    padding="15px"
                    marginTop="0px"
                >
                    Goo:
                </Box>
                {isConnected ? (
                    <Input
                    readOnly="true"
                    fontFamily="inherit"
                    width="100px"
                    height="30px"
                    textAlign="center"
                    paddingLeft="19px"
                    marginTop="10px"
                    type="number"
                    value={GooBalance}
                    />
                ) : (
                    <Input
                    readOnly="true"
                    fontFamily="inherit"
                    width="100px"
                    height="30px"
                    textAlign="center"
                    paddingLeft="19px"
                    marginTop="10px"
                    type="number"
                    value={0}
                    />
                )}
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