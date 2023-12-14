import React from "react";
import {Card, CardBody, CardFooter, Image, Text, Link, Stack, Heading, Flex} from '@chakra-ui/react';

const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;

    return (
        <Card maxWidth={'500px'}>
            <CardBody>
                <Image
                    src={strMealThumb}
                    alt={strMeal}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Text>{strCategory}</Text>
                    <Heading size='md'>{strMeal}</Heading>
                </Stack>
            </CardBody>
            <CardFooter>
                <Link href={"https://www.themealdb.com/meal/" + idMeal} isExternal
                backgroundColor={'yellow'}
                padding={'10px'}
                textDecoration={'none'}
                borderRadius={'3px'}
                >Instruction</Link>
            </CardFooter>
        </Card>
    );
};

export default RecipeCard;

