import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2}>
      <Flex align="center">
        <Heading as="h1" size="lg" color="white">
          ElectroShop
        </Heading>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" color="white" mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/products" color="white" mx={2}>
            Products
          </Link>
          <Link as={RouterLink} to="/about" color="white" mx={2}>
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" color="white" mx={2}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;