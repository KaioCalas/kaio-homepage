import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="KC Store">
            <Container>
                <Title>
                    KC Store <Badge>2021</Badge>
                </Title>
                <P>
                    A website to sell consoles and games.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/KaioCalas/site-games">
                            https://github.com/KaioCalas/site-games <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JavaScript</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/kcstore1.png" alt="KC Store" />
                <WorkImage src="/images/works/kcstore2.png" alt="KC Store" />
                <WorkImage src="/images/works/kcstore3.png" alt="KC Store" />
                <WorkImage src="/images/works/kcstore4.png" alt="KC Store" />


            </Container>
        </Layout>
    )
}

export default Work