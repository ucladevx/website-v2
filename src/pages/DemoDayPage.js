import React from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'

import Container from '../components/Container'
import ContainerBody from '../components/ContainerBody'
import Text from '../components/Text'
import Row from '../components/Row'
import { colors, breakpoints } from '../styles'
import { demoday } from '../config'

const ProjectPanel = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  ${breakpoints.sm`
    justify-content: flex-start;
    margin-left: -20px;
  `}
`

const ProjectIcon = styled.div`
  background-color: ${colors.white};
  width: 250px;
  height: 280px;

  ${breakpoints.sm`
    width: 210px;
    height: 230px;
  `}

  margin: 20px;
  text-align: center;
  border: 20px solid ${colors.white};
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-around;

  transition: margin 200ms;
  &:hover {
    margin-top: 10px;
    margin-bottom: 30px;
    cursor: pointer;
  }

  > img {
    max-width: 100%;
    max-height: 80%;
    padding-bottom: 20px;
    padding-top: 20px;
    width: auto;
    height: auto;
  }
`

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '70%',
    height: '70%',
    backgroundColor: colors.lightGray,
    overflow: 'auto',
    border: ''
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
}

const Grid = styled.div`
  display: grid;

  grid-auto-crows: 1fr;
  grid-auto-flow: row;
  grid-row-gap: 20px;

  ${breakpoints.sm`
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    grid-column-gap: 20px;
  `}
  height: 100%;
`

const Centered = styled(Row)`
  justify-content: center;
  height: 100%;
`

const CenteredIfXS = styled(Row)`
  justify-content: center;
  ${breakpoints.sm`
    justify-content: flex-start;
  `}
`

const MobileHidden = styled.div`
  display: none;
  ${breakpoints.sm`
    display: block;
  `}
`

const UnderlinedText = styled(Text)`
  text-decoration: underline;
`

const BottomGradient = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 100%;
  ${breakpoints.sm`
    width: calc(50% + 10px);
  `}
  margin-left: -20px;
  height: 100px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(31, 31, 31, 0.58)
  );
  mix-blend-mode: multiply;
`

const Thumbnail = styled.div`
  position: absolute;
  width: 37px;
  height: 37px;
  bottom: 25px;
  left: calc(50% - 10px + 25px + ${props => props.index * 50}px);

  background-color: ${props => (props.selected ? '#ffffff' : '#e3e3e3')};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${props => (props.selected ? 'border: 2px solid #0e0e3c;' : '')}
  border-radius: 3px;
  z-index: 100;
`

const CloseButton = styled.a`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 30px;

  &:hover {
    cursor: pointer;
  }
`

const Image = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: ${props => props.imageWidth};
  height: 100%;
`

const TextContainer = styled.div`
  flex: 0 1 100%;
  ${breakpoints.lg`
      flex: 0 1 60%;
  `}
`

// eslint-disable-next-line react/prop-types
const Slideshow = ({ images, logo }) => {
  const [index, setIndex] = React.useState(0)

  return (
    <Centered>
      {[logo]
        .concat(images)
        .map((image, i) => [
          <Thumbnail
            index={i}
            selected={index === i}
            onClick={() => setIndex(i)}
            image={image}
          />,
          <Image
            imageWidth={i === 0 ? '50%' : '100%' /* scale down logo */}
            image={image}
            hidden={index !== i}
          />
        ])}
    </Centered>
  )
}

const DemoDay = () => {
  const [selectedProject, selectProject] = React.useState(null)
  const year = 'spring20'

  return (
    <Container>
      <ContainerBody>
        <CenteredIfXS>
          <Text as="h2">Demo Day Spring 2022</Text>
        </CenteredIfXS>
        <br />
        <TextContainer>
          <Text as="p">
            Welcome to the UCLA DevX Spring 2022 Demo Day! On Demo Day, DevX
            teams will showcase their products and solutions to problems facing
            the UCLA community and beyond. Demo Day is on Thursday, June 4, from
            8PM to 10PM (Pacific Time).
          </Text>
        </TextContainer>
        <br />
        <CenteredIfXS>
          <Text as="h2">How Will Demo Day Be Hosted?</Text>
        </CenteredIfXS>
        <br />
        <TextContainer>
          <Text as="p">
            We usually look forward to hosting this event on campus, but because
            of the pandemic we have had to find ways to do this virtually. We
            have worked hard to find a way to run Demo Day online in a way that
            allows us to preserve the excitement and fun of our regular
            on-campus events.
          </Text>
          <br />
          <Text as="p">
            Therefore, our Spring Demo Day is being be hosted online using Zoom
            meetings. Each of our teams will host their own conference calls,
            which will act like exhibition rooms where you can chat with the
            team members, view product demos, and ask questions about their
            products and journey.
          </Text>
          <br />
          <Text as="p">
            We also have a main Zoom meeting where you can chat with members of
            DevX and learn more about the club. This is also is also where we
            will be announcing our prize winners. We also have some exciting
            prizes for those of you who attend the event and interact interact
            with the teams!
          </Text>
        </TextContainer>
        <br />
        <CenteredIfXS>
          <Text as="h2">Main Room</Text>
        </CenteredIfXS>
        <br />
        <Text as="p">
          Join this meeting at 8PM (Pacific Time) for the launch of Demo Day,
          and at 9:45PM (Pacific Time) to see who wins our awards.
        </Text>
        <br />
        <Text as="p">
          <a href="https://ucla.zoom.us/j/91167926883?pwd=UkVPMFo2aDl1Z2ovMlZUMGVYT0F3QT09">
            <UnderlinedText weight={600} color={colors.yellow}>
              Join our main Demo Day Zoom Meeting!
            </UnderlinedText>
          </a>
          <br />
          You can also join this meeting to get more information about the club,
          chat with members, or if you need help finding your way around this
          virtual Demo Day.
        </Text>
        <br />
        <CenteredIfXS>
          <Text as="h2">Prizes</Text>
        </CenteredIfXS>
        <br />
        <Text as="p">
          Tonight, our judges will award a prize to the best overall product!
          Stick around till the end of Demo Day to find out who our winners are!
        </Text>
        <br />
        <Text as="p">
          We will also be giving away 3 20$ gift cards to 3 randomly selected
          participants who visit all the teams! Everytime you visit a product
          demo, you can ask the team to give you their unique code. Once
          you&apos;ve visited all the teams you can fill out{' '}
          <a
            href="https://airtable.com/shr8FPkJvlrZwpkGF"
            style={{ color: colors.yellow }}
          >
            this
          </a>{' '}
          form to enter the raffle.
        </Text>
        <br />
        <CenteredIfXS>
          <Text as="h2">Project Demos</Text>
        </CenteredIfXS>
        <br />
        <Text as="p">
          The following projects will be demoing their products tonight! Click
          on a project to find out more about them, and connect to their Zoom
          meeting for the demo!
        </Text>
        <ProjectPanel>
          {demoday[year].map(project => (
            <ProjectIcon
              key={project.name}
              onClick={() => selectProject(project)}
            >
              <img src={project.logo} alt={`${project.name} logo`} />
              <Text italic color={colors.darkBlue} size={12} weight={600}>
                {project.tagline}
              </Text>
            </ProjectIcon>
          ))}
        </ProjectPanel>
      </ContainerBody>
      <ReactModal
        isOpen={selectedProject != null}
        style={modalStyle}
        onRequestClose={() => selectProject(null)}
      >
        {selectedProject && (
          <Grid>
            <Centered>
              <div
                style={{
                  padding: '25px',
                  paddingRight: '50px',
                  marginTop: '-10px'
                }}
              >
                <Text color={colors.black} as="h2">
                  {selectedProject.name}
                </Text>
                <br />
                <Text color={colors.darkBlue}>{selectedProject.tagline}</Text>
                <br />
                <Text color={colors.darkBlue}>
                  {selectedProject.description}
                </Text>
                <br />
                <div>
                  {selectedProject.zoomLink && (
                    <>
                      <a href={selectedProject.zoomLink}>
                        <UnderlinedText
                          as="span"
                          weight={600}
                          color={colors.darkBlue}
                        >
                          Click here to join this projects Zoom meeting!
                        </UnderlinedText>
                      </a>
                      <span style={{ paddingRight: '40px' }} />
                    </>
                  )}
                  <br />
                  {selectedProject.link && (
                    <>
                      <a href={selectedProject.link}>
                        <UnderlinedText
                          as="span"
                          weight={600}
                          color={colors.darkBlue}
                        >
                          Project Link
                        </UnderlinedText>
                      </a>
                      <span style={{ paddingRight: '40px' }} />
                    </>
                  )}
                  <a href={selectedProject.notion}>
                    <UnderlinedText
                      as="span"
                      weight={600}
                      color={colors.darkBlue}
                    >
                      Notion Page
                    </UnderlinedText>
                  </a>
                </div>
              </div>
            </Centered>
            <MobileHidden
              style={{ backgroundColor: colors.white, margin: '-20px' }}
            >
              {(selectedProject.screenshots || []).length > 0 ? (
                <div style={{ height: '100%' }}>
                  <Slideshow
                    logo={selectedProject.logo}
                    images={selectedProject.screenshots}
                  />
                  <BottomGradient />
                </div>
              ) : (
                <Centered>
                  <img
                    src={selectedProject.logo}
                    width="50%"
                    alt={`${selectedProject.name} logo`}
                  />
                </Centered>
              )}
            </MobileHidden>
            <CloseButton onClick={() => selectProject(null)}>
              &times;
            </CloseButton>
          </Grid>
        )}
      </ReactModal>
    </Container>
  )
}

export default DemoDay
