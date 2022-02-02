import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Bat Caverna Filmes">
            <Container>
                <Title>
                    Bat Caverna Filmes <Badge>2021</Badge>
                </Title>
                <P>
                    A responsive website to watch movies of heroes with login and registration system.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/KaioCalas/website-BatCaverna">
                            https://github.com/KaioCalas/website-BatCaverna <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript, JQuery</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/bat2.png" alt="BatCaverna" />
                <WorkImage src="/images/works/bat3.png" alt="BatCaverna" />
                <WorkImage src="/images/works/bat4.png" alt="BatCaverna" />
                <WorkImage src="/images/works/bat5.png" alt="BatCaverna" />
                <WorkImage src="/images/works/bat5.png" alt="BatCaverna" />




            </Container>
        </Layout>
    )
}

export default Work