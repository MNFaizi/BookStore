import { Card, Heading, VStack, Image, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({id, title, author, publisher, image, year}) {
    return (
        <Link to={`/Books/${id}`}>
            <Card key={id}>
                <VStack>
                    <Heading>
                        {title}
                    </Heading>
                    <Image src={`http://localhost:8000/${image}`}/>
                    <Text>
                        <HStack>
                            <span>Author:</span> {author}
                        </HStack>
                        <HStack>
                            <span>Year</span> {year}
                        </HStack>
                        <HStack>
                            <span>Publisher:</span> {publisher}
                        </HStack>
                    </Text>
                </VStack>
            </Card>
        </Link>

    )
}