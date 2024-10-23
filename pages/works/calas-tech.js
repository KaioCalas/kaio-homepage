import { Container, Badge, Link, List, ListItem, Flex} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Calas Tech">
            <Container>
                <Title>
                    Calas Tech <Badge>2023</Badge>
                </Title>
                <P>
                    An E-commerce to sell Notebooks with a shopping cart and using Local Storage as database.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://kaiocalas.github.io/CalasTech/">
                        https://kaiocalas.github.io/CalasTech/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, TailWindCss and Javascript</span>
                    </ListItem>
                </List>
                <Flex justify="center" wrap="wrap" mt={4}>
                    <WorkImage src="/images/works/calastech1.png" alt="Calas Tech" />
                    <WorkImage src="/images/works/calastech2.png" alt="Calas Tech" />
                    <WorkImage src="/images/works/calastech3.png" alt="Calas Tech" />
                    <WorkImage src="/images/works/calastech4.png" alt="Calas Tech" />
                </Flex>


            </Container>
        </Layout>
    )
}

export default Work