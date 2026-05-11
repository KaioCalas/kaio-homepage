import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kaio Calás - Homepage</title>
        <meta name="description" content="Kaio Calás — Junior Full-Stack Developer based in Brazil, specializing in React, Node.js, and Docker." />
        <meta property="og:title" content="Kaio Calás — Developer Portfolio" />
        <meta property="og:description" content="Junior Full-Stack Developer specializing in React, Node.js, and Docker." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/footprint.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kaio Calás — Developer Portfolio" />
        <meta name="twitter:description" content="Junior Full-Stack Developer specializing in React, Node.js, and Docker." />
        <meta name="twitter:image" content="/images/footprint.png" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
