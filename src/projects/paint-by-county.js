import React from 'react';
import ProjectInfo from '../components/project-info'

const title = 'Paint By County';

const technicalDetails = [
    'React',
    'Node.js',
    'Express'
]

const PaintByCountyPreview = () => (
    <div className="paintByCountyView" style={{ backgroundImage: "url(../assets/img/paint-by-county-still.png)" }} />
)

const PaintByCountyInfo = () => (
    <ProjectInfo title={title} link="http://paintbycounty.com" technicalDetails={technicalDetails} />
)

export { PaintByCountyPreview, PaintByCountyInfo }
