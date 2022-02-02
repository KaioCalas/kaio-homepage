import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Player Music">
            <Container>
                <Title>
                    Player Music <Badge>2021</Badge>
                </Title>
                <P>
                    A  responsive website to watch movies of heroes.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/KaioCalas/Player-Music">
                            https://github.com/KaioCalas/Player-Music <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JavaScript</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/player-music2.png" alt="Player Music" />



            </Container>
        </Layout>
    )
}

export default Work