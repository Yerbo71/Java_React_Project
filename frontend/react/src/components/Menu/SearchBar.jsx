import React from "react";
import { Input, Button, Flex } from '@chakra-ui/react';

const SearchBar = ({ handleSubmit, query, isLoading, setQuery }) => {
    return (
        <Flex as="form" onSubmit={handleSubmit} align="center" padding={'30px'}>
            <Input
                value={query}
                variant="filled"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />
            <Button
                type="submit"
                variant="solid"
                colorScheme="teal"
                disabled={isLoading || !query}
                ml={2}
            >
                Search
            </Button>
        </Flex>
    );
};

export default SearchBar;
