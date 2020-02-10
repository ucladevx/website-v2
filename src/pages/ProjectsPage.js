import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'

import Container from '../components/Container'
import ContainerBody from '../components/ContainerBody'
import Text from '../components/Text'
import Row from '../components/Row'
import { colors } from '../styles'
import { projects } from '../config'

const ProjectPanel = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const ProjectIcon = styled.div`
  background-color: ${colors.white};
  width: 210px;
  height: 210px;
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
  }

  > img {
    max-width: 100%;
    max-height: 80%;
    padding-bottom: 20px;
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
    backgroundColor: colors.white
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

const PaddedRowItem = styled.div`
  padding: 10px;
`

const Grid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  grid-column-gap: 20px;
`

const Centered = styled(Row)`
  justify-content: center;
`

const UnderlinedText = styled(Text)`
  text-decoration: underline;
`

const Projects = ({ match }) => {
  const [selectedProject, selectProject] = React.useState(null)
  const { year } = match.params

  return (
    <Container>
      <ContainerBody>
        <Text as="h2">Current Projects</Text>
        <br />
        <ProjectPanel>
          {projects[year].map(project => (
            <ProjectIcon
              key={project.name}
              onClick={() => selectProject(project)}
            >
              <img src={project.logo} alt={`${project.name} logo`} />
              <Text italic color={colors.darkBlue}>
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
            <div>
              <Text color={colors.black} as="h2">
                {selectedProject.name}
              </Text>
              <br />
              <Text color={colors.darkBlue}>{selectedProject.tagline}</Text>
              <br />
              <Text color={colors.darkBlue}>{selectedProject.description}</Text>
              <Row>
                <PaddedRowItem>
                  <a href={selectedProject.link}>
                    <UnderlinedText color={colors.darkBlue} as="h5">
                      Project Link
                    </UnderlinedText>
                  </a>
                </PaddedRowItem>
                <PaddedRowItem>
                  <a href={selectedProject.notion}>
                    <UnderlinedText color={colors.darkBlue} as="h5">
                      Notion Page
                    </UnderlinedText>
                  </a>
                </PaddedRowItem>
              </Row>
            </div>
            {selectedProject.screenshots ? (
              <div>
                <ImageGallery
                  items={[{ original: selectedProject.logo }].concat(
                    selectedProject.screenshots.map(image => ({
                      original: image
                    }))
                  )}
                  showPlayButton={false}
                  showThumbnails={false}
                  showFullscreenButton={false}
                  showBullets
                />
              </div>
            ) : (
              <Centered>
                <img
                  src={selectedProject.logo}
                  width="100%"
                  alt={`${selectedProject.name} logo`}
                />
              </Centered>
            )}
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
