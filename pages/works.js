import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbCoffe from '../public/images/works/coffe.png'
import thumbPharma from '../public/images/works/pharmaplus/thumb.png'
import thumbKC from '../public/images/works/ecomerce.png'
import thumbBAT from '../public/images/works/movie1.png'
import thumbCaverna from '../public/images/works/batcaverna.png'
import thumbMusic from '../public/images/works/player-music1.png'
import thumbCalasTech from '../public/images/works/calastech1.png'
import thumbAna from '../public/images/works/ana.png'




const Works = () => {
    return(
    
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                        id="pharmaplus"
                        title="Pharma +"
                        thumbnail={thumbPharma}
                        tags={['React Native', 'Node.js', 'Docker', 'MySQL', 'Expo']}
                        >
                            An application to manage medications for a pharmacy.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem
                        id="calas-tech"
                        title="Calas Tech"
                        thumbnail={thumbCalasTech}
                        tags={['TailwindCSS', 'JavaScript', 'LocalStorage']}
                        >
                            An e-commerce to sell notebooks with a shopping cart using Local Storage.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem
                        id="coffe"
                        title="Coffe Website"
                        thumbnail={thumbCoffe}
                        tags={['HTML', 'CSS', 'JavaScript']}
                        >
                            A responsive website to sell coffee.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem
                        id="ecomerce"
                        title="KC Store"
                        thumbnail={thumbKC}
                        tags={['HTML', 'CSS', 'JavaScript']}
                        >
                            A website to sell consoles and games.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem
                        id="player-music"
                        title="Player Music"
                        thumbnail={thumbMusic}
                        tags={['HTML', 'CSS', 'JavaScript']}
                        >
                            A Spotify-inspired music player clone.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem
                        id="movie1"
                        title="Bat Filmes"
                        thumbnail={thumbBAT}
                        tags={['HTML', 'CSS', 'JavaScript', 'jQuery']}
                        >
                            A responsive website to watch hero movies.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        Collaborations
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem
                        id="batcaverna"
                        title="Bat Caverna Filmes"
                        thumbnail={thumbCaverna}
                        tags={['HTML', 'CSS', 'JavaScript', 'jQuery']}
                        >
                            A responsive website to watch hero movies with login and registration.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem
                        id="ana"
                        title="Anna Website"
                        thumbnail={thumbAna}
                        tags={['HTML', 'CSS']}
                        >
                            A portfolio website built for a model.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works 
