import { Box, Flex } from '@chakra-ui/react';
import BalanceInsufficientAlert from '@/components/shared/BalanceInsufficientAlert.tsx';
import MainFooter from '@/components/shared/MainFooter';
import MainHeader from '@/components/shared/MainHeader';
import FungiblesBoard from './components/FungiblesBoard';

function App() {
  return (
    <Flex direction='column' minHeight='100vh'>
      <MainHeader />
      <Box maxWidth='container.md' mx='auto' my={4} px={4} flex={1} w='full'>
        <BalanceInsufficientAlert />
        <FungiblesBoard />
      </Box>
      <MainFooter />
    </Flex>
  );
}

export default App;
