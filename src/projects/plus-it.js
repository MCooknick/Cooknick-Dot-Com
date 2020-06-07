import React from 'react';
import ProjectInfo from '../components/project-info'
import ProjectVideo from '../components/project-video'

const title = 'Plus It';

const technicalDetails = [
    'React Native',
    'Node.js',
    'MySQL'
]

const PlusItPreview = () => (
    <div className="plusItPreview">
        <ProjectVideo src="./assets/video/plusit.mp4"/>
    </div>
)

const PlusItInfo = () => (
    <ProjectInfo title={title} technicalDetails={technicalDetails} />
)

export { PlusItPreview, PlusItInfo }
