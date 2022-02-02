import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbCoffe from '../public/images/works/coffe.png'
import thumbAnna from '../public/images/works/ana.png'
import thumbKC from '../public/images/works/ecomerce.png'
import thumbBAT from '../public/images/works/movie1.png'
import thumbCaverna from '../public/images/works/batcaverna.png'
import thumbMusic from '../public/images/works/player-music1.png'




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
                        id="coffe" 
                        title="Coffe Website" 
                        thumbnail={thumbCoffe}
                        >
                            A responsive website to sell coffe.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem 
                        id="ana" 
                        title="Portfolio Anna" 
                        thumbnail={thumbAnna}
                        >
                            A portfolio to a model named Anna
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem 
                        id="ecomerce" 
                        title="KC Store" 
                        thumbnail={thumbKC}
                        >
                            A website to sell consoles and games.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem
                        id="movie1" 
                        title="Bat Filmes"
                        thumbnail={thumbBAT}
                        >
                            A website to watch movies of heroes.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem
                        id="player-music"
                        title="Player Music"
                        thumbnail={thumbMusic}
                        >
                            A spotify player clone.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        Collaborations
                    </Heading>
                </Section>

                <SimpleGrid columns={1, 1, 2} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem 
                        id="batcaverna"
                        title="Bat Caverna Filmes"
                        thumbnail={thumbCaverna}
                        >
                            A responsive website to watch movies of heroes with login and registration system.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works 
