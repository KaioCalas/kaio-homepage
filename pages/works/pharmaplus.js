import { Container, Badge, Link, List, ListItem, Grid} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Pharma+">
            <Container>
                <Title>
                    Pharma+ <Badge>2024</Badge>
                </Title>
                <P>
                An application to manage medications for a pharmacy. Using React Native for the front-end, NodeJS for the back-end, and Docker to virtualize the MySQL database.
                On &quot;Preview&quot; you can download a demo from the project to test as you like.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/KaioCalas/pharma-">
                        https://github.com/KaioCalas/pharma-<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Preview</Meta>
                        <Link href="https://expo.dev/accounts/kaiocalas/projects/PharmaPlus/builds/7a876d16-0166-4cf2-ae48-037da02655a5">
                        https://expo.dev/accounts/kaiocalas/projects/PharmaPlus<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React Native, NodeJs, Axios, Express, Expo, Mysql, Docker</span>
                    </ListItem>
                </List>

                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <WorkImage src="/images/works/pharmaplus/home.jpg" alt="Pharma Plus" />
                    <WorkImage src="/images/works/pharmaplus/login.jpg" alt="Pharma Plus" />
                    <WorkImage src="/images/works/pharmaplus/telaInicial.jpg" alt="Pharma Plus" />
                    <WorkImage src="/images/works/pharmaplus/Consultar.jpg" alt="Pharma Plus" />
                    <WorkImage src="/images/works/pharmaplus/Editar.jpg" alt="Pharma Plus" />
                    <WorkImage src="/images/works/pharmaplus/Suporte.jpg" alt="Pharma Plus" />
                    <WorkImage src="/images/works/pharmaplus/Relatório.jpg" alt="Pharma Plus" />
                </Grid>

            </Container>
        </Layout>
    )
}

export default Work