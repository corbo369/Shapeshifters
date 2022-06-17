import { useState } from 'react';
import { ethers } from 'ethers';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Shapeshifters from './Shapeshifters.json';


const ShapeshifterAddress = "0xdBC5Fc4F321eEDF6644520aa0898C4d9e524315D";

const MainMint = ({ accounts, setAccounts }) => {
    const [supply, setSupply] = useState(handleSupply().response);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                ShapeshifterAddress,
                Shapeshifters.abi,
                signer
            );
            try {
                const response = await contract.mint( {
                    value: ethers.utils.parseEther((0 * 1).toString()),
                });
                handleSupply();
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err);
            }
        }
    }

    async function handleSupply() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                ShapeshifterAddress,
                Shapeshifters.abi,
                signer
            );
            try {
                const response = await contract.poolSupply();
                setSupply(response.toString());
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err);
            }
        }
    }

    return (
        <Flex justify="center" align="center" height="100vh" padding="150px">
            <Box width="520px">
                <div>
                    <Text fontSize="48px" textAlign="center" textShadow="0 7px #301934">Mint</Text>
                </div>
                {isConnected ? (
                    <div>
                    <Flex align="center" justify="center">
                        <Button 
                            backgroundColor="#301934"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color ="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            marginTop="0px"
                            onClick={handleMint}
                        >
                            MINT
                        </Button>
                    </Flex>
                        <Text
                            fontSize="24px"
                            letterSpacing="-5.5%"
                            fontFamily="VT323"
                            textShadow="0 2px 2px #000000"
                        >
                            Total Minted: {supply}/10000
                        </Text>
                    </div>
                ) : (
                    <Text
                        marginTop="70px"
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        fontFamily="VT323"
                        textShadow="0 3px #000000"
                        color="D6517D"
                    >
                        Connect Wallet
                    </Text>
                )}
            </Box>
        </Flex>
    );
};

export default MainMint;