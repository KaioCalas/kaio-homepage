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
	Wrap,
	Tag,
	useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon, DownloadIcon, EmailIcon } from '@chakra-ui/icons'
import {
	FaGithubAlt,
	FaLinkedin
} from 'react-icons/fa'

const techStack = [
	'React',
	'Node.js',
	'Docker',
	'TypeScript',
	'React Native',
	'Express',
	'MySQL',
	'TailwindCSS',
	'Git',
	'Linux',
]

const Page = () => {
	return (
		<Layout>
		<Container>
				<Box
				borderRadius="lg"
				bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
				border="1px solid"
				borderColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
				mb={6}
				p={3}
				align="center"
				fontSize="sm"
				letterSpacing="wide"
			>
				Hello, I&apos;m a full-stack developer based in Brazil!
			</Box>

			<Box display={{ md:'flex' }}>
			<Box flexGrow={1}>
				<Heading as="h2" variant="page-title">
					Kaio Calás
				</Heading>
					<p style={{ opacity: 0.75, fontSize: '0.95em' }}>Junior Developer · React · Node.js · Docker</p>
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
			<Paragraph>Kaio is a Junior Developer at Duo Technology, building modern web applications with React and Node.js. He has experience developing portals, dashboards, and forms in the healthcare sector, deploying scalable solutions with Docker. His work is driven by efficiency, clean code, and delivering great user experiences.
				</Paragraph>
				<Box align="center" my={4} display="flex" gap={3} justifyContent="center" flexWrap="wrap">
					<NextLink href="/works">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							My portfolio
						</Button>
					</NextLink>
					<Link href="/kaio-calas-cv.pdf" download>
						<Button rightIcon={<DownloadIcon />} variant="outline" colorScheme="teal">
							Download CV
						</Button>
					</Link>
				</Box>
		</Section>

			<Section delay={0.15}>
				<Heading as="h3" variant="section-title">
					Tech Stack
				</Heading>
				<Wrap spacing={2} mt={2}>
					{techStack.map(tech => (
						<Tag key={tech} colorScheme="teal" variant="subtle" size="md">
							{tech}
						</Tag>
					))}
				</Wrap>
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
					Completed Computer technician course at Grau Técnico.
				</BioSection>
				<BioSection>
					<BioYear>2023 to 2025</BioYear>
					Worked as an Office Assistant at Real Hospital Português.
				</BioSection>
				<BioSection>
					<BioYear>2024 to present</BioYear>
					Currently studying System Analysis and Development at Estácio.
				</BioSection>
				<BioSection>
					<BioYear>2025 to 2026</BioYear>
					Worked as a Development Analyst at Tascom Saúde, developing portals, dashboards, and forms using React and Node.js, deploying applications with Docker.
				</BioSection>
				<BioSection>
					<BioYear>2026 to present</BioYear>
					Working as a Junior Developer at Duo Technology.
				</BioSection>
			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					I ♥
				</Heading>
				<Paragraph>
					Art, Music, Classic Literature, Workout, Technologies in general
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
						<Link href="https://www.linkedin.com/in/kaio-cal%C3%A1s-a7ba56207/" target="_blank">
							<Button 
							variant="ghost"
							colorScheme="teal"
							leftIcon ={<Icon as={FaLinkedin} />}
							>
								@Kaio Calas
							</Button>
						</Link>
					</ListItem>
				</List>
			</Section>

			<Section delay={0.4}>
				<Heading as="h3" variant="section-title">
					Contact
				</Heading>
				<Paragraph>
					Open to full-stack and front-end opportunities. Feel free to reach out.
				</Paragraph>
				<Box align="center" my={4}>
					<Link href="mailto:kaiomonteiro151@gmail.com">
						<Button leftIcon={<EmailIcon />} colorScheme="teal">
							Send me an email
						</Button>
					</Link>
				</Box>
			</Section>
		</Container>
	</Layout>
	)
}

export default Page
