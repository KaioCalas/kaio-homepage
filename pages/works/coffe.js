import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Coffe Website">
            <Container>
                <Title>
                    Coffe Website <Badge>2022</Badge>
                </Title>
                <P>
                    A responsive website to sell coffee
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/KaioCalas/coffee-website">
                            https://github.com/KaioCalas/coffee-website <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/coffe2.png" alt="Website Coffe" />
                <WorkImage src="/images/works/coffe3.png" alt="Website Coffe" />
                <WorkImage src="/images/works/coffe4.png" alt="Website Coffe" />


            </Container>
        </Layout>
    )
}

export default Work
