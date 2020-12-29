import React from 'react';
import ProjectInfo from '../components/project-info'
import ProjectVideo from '../components/project-preview'

const title = 'Thickit';

const technicalDetails = [
    'React Native',
    'Native Camera',
    'Apple Push Notification Service',
    'Server-Side PHP',
    'MySQL'
]

const ThickitPreview = () => (
    <div className="thickitPreview">
        <ProjectVideo vidSrc="./assets/video/thickit.mp4" />
    </div>
)

const ThickitInfo = () => (
    <ProjectInfo title={title} technicalDetails={technicalDetails} />
)

export { ThickitPreview, ThickitInfo }
