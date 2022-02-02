import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Bat Filmes">
            <Container>
                <Title>
                    Bat Filmes <Badge>2021</Badge>
                </Title>
                <P>
                    A  responsive website to watch movies of heroes.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/KaioCalas/Website-Filmes">
                            https://github.com/KaioCalas/Website-Filmes <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JavaScript, JQuery</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/movie2.png" alt="Bat Filmes" />
                <WorkImage src="/images/works/movie3.png" alt="Bat Filmes" />



            </Container>
        </Layout>
    )
}

export default Work