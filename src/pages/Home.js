import { Box, Flex, Text } from '@chakra-ui/react';

export default function Home() {

    return(
        <div>
        <Flex justify="center" align="center" height="100vh" padding="150px">
            <Box width="520px">
                <div>
                    <Text fontSize="48px" textAlign="center" textShadow="0 7px #301934" lineHeight="1.2">Shape Shifters</Text>
                </div>
                <div>
                <Text fontSize="15px" textAlign="center" textShadow="0 3px #301934" lineHeight="2">
                    FREE MINT, 1 NFT per wallet!
                </Text>
                </div>
                <div>
                <Text fontSize="12px" textAlign="center" textShadow="0 3px #301934" lineHeight="2">
                    ShapeShifters are the first NFT that can swap between ERC721 and ERC20 form with no third-party protocol
                </Text>
                </div>
            </Box>
        </Flex>
        </div>
    );
}