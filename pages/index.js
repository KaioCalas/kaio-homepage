import NextLink from 'next/link'
import { 
	Container, 
	Box, 
	Heading, 
	Image, 
	List,
	ListItem,
	Link,
	Button,
	Icon,
	useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
	FaInstagram,
	FaGithubAlt
} from 'react-icons/fa'

const Page = () => {
	return (
		<Layout>
		<Container>
				<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} align="center">
			Hello, I &apos;m a front-end developer based in Brazil!	
				</Box>

			<Box display={{ md:'flex' }}>
			<Box flexGrow={1}>
				<Heading as="h2" variant="page-title">
					Kaio Calás
				</Heading>
					<p>Landing Page Designer ( HTML / CSS / JavaScript )</p>
			</Box>
			<Box flexShrink={0} 
			mt={{base: 4, md: 0}}
			ml={{md:6}}
			align="center"
			>
				<Image 
				borderColor="whiteAlpha.800" 
				borderWidth={2} 
				borderStyle="solid" 
				maxWidth="100px" 
				display="inline-block" 
				borderRadius="full" 
				src="images/kaio.jpeg" 
				alt="Profile Image" 
				/>
			</Box>
		</Box>
		<Section delay={0.1}>
			<Heading as="h3" variant="section-title">
				Work
			</Heading>
			<Paragraph>Kaio is a young web developer based in Brazil with a huge passion for developing Landing Pages to help sell other people&apos;s products and solve real problems. When not online, he loves listening to music, reading books and playing video games.
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							My portfolio
						</Button>
					</NextLink>
				</Box>
		</Section>
			<Section delay={0.2}>
				<Heading as="h3" variant="section-title" >
					Bio 
				</Heading>
				<BioSection>
					<BioYear>2003</BioYear>
					Born in Pernambuco, Brazil.
				</BioSection>
				<BioSection>
					<BioYear>2022</BioYear>
					Completed Computer technician course in the Technical school Grau Técnico.
				</BioSection>
				<BioSection>
					<BioYear>2021 to present</BioYear>
					Currently studying Web Development on the Udemy Plataform.
				</BioSection>
				<BioSection>
					<BioYear>2021 to present</BioYear>
					Currently studying Python on the Udemy Plataform.
				</BioSection>
				<BioSection>
					<BioYear>2022 to present</BioYear>
					Works as a freelance
				</BioSection>

			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					I ♥
				</Heading>
				<Paragraph>
					Art, Music, Drawing, Video Games, Machine Learning, Photography
				</Paragraph>
			</Section>
			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					On the web
				</Heading>
				<List>
					<ListItem>
						<Link href="https://github.com/KaioCalas" target="_blank">
							<Button 
							variant="ghost" 
							colorScheme="teal" 
							leftIcon ={<Icon as={FaGithubAlt} />}
							>
								@KaioCalas
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://www.instagram.com/ikayoui/" target="_blank">
							<Button 
							variant="ghost"
							colorScheme="teal"
							leftIcon ={<Icon as={FaInstagram} />}
							>
								@ikayoui
							</Button>
						</Link>
					</ListItem>
				</List>
			</Section>
		</Container>
	</Layout>
	)
}

export default Page
