import { useEffect, useState } from "react"
import { getAllBook } from "../fetcher";
import Books from "../components/Books";
import { Container } from "@chakra-ui/react";

export default function HomePage(){
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        const fetchBook = async () => {
            const books = await getAllBook();
            setBooks(books);
        };
        fetchBook()
    }, [])
    return (
        <Container>
            {books?.books?.map((book) => {
                <Books key={`${book.id} ${book.title}`} {...book}/>
            })}
        </Container>
    )

};