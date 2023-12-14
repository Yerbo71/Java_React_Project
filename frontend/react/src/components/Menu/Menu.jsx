import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import RecipeCard from "./RecipeCard.jsx";
import {Flex, Heading, Stack} from '@chakra-ui/react';

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function Menu() {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

    // search for the recipe
    const searchRecipes = async () => {
        setIsLoading(true);
        const url = searchApi + query;
        const res = await fetch(url);
        const data = await res.json();
        setRecipes(data.meals || []); // Ensure data.meals is not null
        setIsLoading(false);
    };

    useEffect(() => {
        searchRecipes();
    }, [query]); // Trigger the search on query change

    const handleSubmit = (event) => {
        event.preventDefault();
        searchRecipes();
    };

    return (
<Stack>
        <Stack
            direction={'column'}
            wrap={'wrap'}>
            <Heading
                alignSelf={'center'}
                marginTop={'15px'}
                >Our Food Recipes
            </Heading>
            <SearchBar
                isLoading={isLoading}
                query={query}
                setQuery={setQuery}
                handleSubmit={handleSubmit}
            />
        </Stack>
            <Flex wrap={'wrap'}
                  gap={'30px'}
                  justifyContent={'center'}
            >
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <RecipeCard key={recipe.idMeal}
                                    recipe={recipe}
                        />
                    ))
                ) : (
                    <p>No Results.</p>
                )}
            </Flex>
</Stack>
    );
}

export default Menu;
