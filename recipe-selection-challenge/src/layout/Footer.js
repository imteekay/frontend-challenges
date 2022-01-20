import React from 'react';
import Flex from '../components/Flex';
import Text from '../components/Text';

const Footer = () => (
  <footer>
    <Flex
      borderTopWidth="sm"
      borderTopColor="border"
      borderTopStyle="solid"
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
      padding="sm">
      <Text fontSize="sm">© FreshFood 2022</Text>
    </Flex>
  </footer>
);

export default Footer;
