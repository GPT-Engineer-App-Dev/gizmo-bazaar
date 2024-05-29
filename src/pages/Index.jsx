import { Box, Container, VStack, Text, Image, Heading, SimpleGrid, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to ElectroShop
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your one-stop shop for the latest and greatest in electronics.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
              <VStack mt={4} spacing={2}>
                <Text fontWeight="bold" fontSize="xl">
                  {product.name}
                </Text>
                <Text color="gray.500">{product.price}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;