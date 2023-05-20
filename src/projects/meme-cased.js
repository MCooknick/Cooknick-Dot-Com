import React from 'react';
import ProjectInfo from '../components/project-info'
import PreviewWrapper from '../components/project-preview'

const title = 'Meme Cased';

const technicalDetails = [
    'React',
]

const MemeCasedPreview = () => (
    <div className="memeCasedPreview">
        <PreviewWrapper vidSrc="../assets/video/meme-cased.mp4" />
    </div>
)

const MemeCasedInfo = () => (
    <ProjectInfo title={title} link="http://memecased.com" technicalDetails={technicalDetails} />
)

export { MemeCasedPreview, MemeCasedInfo }
