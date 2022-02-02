import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Anna Website">
            <Container>
                <Title>
                    Anna Website <Badge>2021</Badge>
                </Title>
                <P>
                    A portfolio website to a model
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/KaioCalas/website-ana">
                            https://github.com/KaioCalas/website-ana <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/ana1.png" alt="Anna Website" />
                <WorkImage src="/images/works/ana2.png" alt="Anna Website" />
                <WorkImage src="/images/works/ana3.png" alt="Anna Website" />


            </Container>
        </Layout>
    )
}

export default Work