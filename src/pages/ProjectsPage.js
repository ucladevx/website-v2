import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

import Container from '../components/Container'
import ContainerBody from '../components/ContainerBody'
import Text from '../components/Text'
import Row from '../components/Row'
import { colors, breakpoints } from '../styles'
import { projects } from '../config'

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
`

const Image = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: ${props => props.imageWidth};
  height: 100%;
`

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
            imageWidth={i === 0 ? '70%' : '100%' /* scale down logo */}
            image={image}
            hidden={index !== i}
          />
        ])}
    </Centered>
  )
}

const Projects = ({ match }) => {
  const [selectedProject, selectProject] = React.useState(null)
  const { year } = match.params

  return (
    <Container>
      <ContainerBody>
        <CenteredIfXS>
          <Text as="h2">Current Projects</Text>
        </CenteredIfXS>
        <ProjectPanel>
          {projects[year].map(project => (
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
                    width="70%"
                    alt={`${selectedProject.name} logo`}
                  />
                </Centered>
              )}
            </MobileHidden>
            <CloseButton href="#" onClick={() => selectProject(null)}>
              &times;
            </CloseButton>
          </Grid>
        )}
      </ReactModal>
    </Container>
  )
}

Projects.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      year: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default Projects
