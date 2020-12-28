import React from 'react';
import ProjectInfo from '../components/project-info'
import PreviewWrapper from '../components/project-preview'

const title = 'Plus It';

const technicalDetails = [
    'React Native',
    'Node.js',
    'MySQL'
]

const PlusItPreview = () => (
    <div className="plusItPreview">
        <PreviewWrapper isPhoneApp={true} imgSrc="./assets/img/plus-it-poster.jpg" vidSrc="./assets/video/plus-it.mp4" />
    </div>
)

const PlusItInfo = () => (
    <ProjectInfo title={title} technicalDetails={technicalDetails} />
)

export { PlusItPreview, PlusItInfo }
