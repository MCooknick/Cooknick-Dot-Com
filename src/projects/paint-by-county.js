import React from 'react';
import ProjectInfo from '../components/project-info'
import PreviewWrapper from '../components/project-preview'

const title = 'Paint By County';

const technicalDetails = [
    'React',
    'Node.js',
    'Express'
]

const PaintByCountyPreview = () => (
    <div className="paintByCountyPreview">
        <PreviewWrapper vidSrc="../assets/video/paint-by-county.mp4" />
    </div>
)

const PaintByCountyInfo = () => (
    <ProjectInfo title={title} link="http://paintbycounty.com" technicalDetails={technicalDetails} />
)

export { PaintByCountyPreview, PaintByCountyInfo }
