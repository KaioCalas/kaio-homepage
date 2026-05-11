import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Wrap, Tag } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => {
    return <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
}

export const WorkGridItem = ({ children, id, title, thumbnail, tags = [] }) => (
    <Box w="100%" align="center">
        <NextLink href={`/works/${id}`}>
            <LinkBox cursor="pointer">
                <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                />
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
                {tags.length > 0 && (
                    <Wrap justify="center" mt={2} spacing={1}>
                        {tags.map(tag => (
                            <Tag key={tag} size="sm" colorScheme="teal" variant="subtle">{tag}</Tag>
                        ))}
                    </Wrap>
                )}
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles = {`
    .grid-item-thumbnail {
        border-radius: 12px;
    }
    `}
    />
)