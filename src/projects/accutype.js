import React from 'react';
import ProjectInfo from '../components/project-info'
import ProjectVideo from '../components/project-video'

const title = 'Accutype';

const technicalDetails = [
    'React Native',
    'Node.js',
    'Facebook API Intergration',
    'MySQL'
]

const AccutypePreview = () => (
    <div className="accutypePreview">
        <ProjectVideo src="./assets/video/accutype.mp4"/>
    </div>
)

const AccutypeInfo = () => (
    <ProjectInfo title={title} technicalDetails={technicalDetails} />
)

export { AccutypePreview, AccutypeInfo }
