import { Box, Text, useColorModeValue } from '@chakra-ui/react'

export const BioSection = ({ children }) => {
  const borderColor = useColorModeValue('#7b3f3f', '#5a7a5a')
  return (
    <Box
      pl="1em"
      borderLeft="3px solid"
      borderColor={borderColor}
      mb="0.75em"
    >
      {children}
    </Box>
  )
}

export const BioYear = ({ children }) => {
  const color = useColorModeValue('#7b3f3f', '#7a9e7a')
  return (
    <Text
      as="span"
      fontWeight="bold"
      color={color}
      display="block"
      fontSize="0.85em"
      letterSpacing="0.05em"
      mb="0.1em"
    >
      {children}
    </Text>
  )
}
