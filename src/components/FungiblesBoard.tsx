import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { ContractId } from '@/contracts/deployments.ts';
import { FungiblesContractApi } from '@/contracts/types/fungibles';
import useContract from '@/hooks/useContract.ts';
import useContractTx from '@/hooks/useContractTx.ts';

export default function FungiblesBoard() {
  const { contract } = useContract<FungiblesContractApi>(ContractId.FUNGIBLES);
  const [message, setMessage] = useState('');
  const setMessageTx = useContractTx(contract, 'setMessage');

  return (
    <Box>
      <Heading size='md'>POP API Fungibles Contract</Heading>
      <Flex justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
        <FormControl>
          <FormLabel>Update greeting message:</FormLabel>
          <Input
            type='input'
            maxLength={50}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            isDisabled={setMessageTx.isInProgress}
          />
        </FormControl>
        <Button size='sm' mt={4} isDisabled={!message} isLoading={setMessageTx.isInProgress} onClick={() => {}}>
          Update Greeting
        </Button>
      </Flex>
    </Box>
  );
}
