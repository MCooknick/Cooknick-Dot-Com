import React from "react";

import { PaintByCountyPreview, PaintByCountyInfo } from '../projects/paint-by-county'
import { MemeCasedPreview, MemeCasedInfo } from '../projects/meme-cased'
import { PlusItPreview, PlusItInfo } from '../projects/plus-it'
import { AccutypePreview, AccutypeInfo } from '../projects/accutype'
import { ThickitPreview, ThickitInfo } from '../projects/thickit'

import ProjectWrapper from '../components/projectWrapper'

const Portfolio = () => (
    <div className="portfolio">
        <div className="webRow">
            <ProjectWrapper className="paintByCountyWrapper" preview={<PaintByCountyPreview />} info={<PaintByCountyInfo />} />
            <ProjectWrapper className="memeCasedWrapper" preview={<MemeCasedPreview />} info={<MemeCasedInfo />} />
        </div>
        <div className="phoneRow hide-mobile">
            <ProjectWrapper className="plusItWrapper" preview={<PlusItPreview />} info={<PlusItInfo />} />
            <ProjectWrapper className="accutypeWrapper" preview={<AccutypePreview />} info={<AccutypeInfo />} />
            <ProjectWrapper className="thickitWrapper" preview={<ThickitPreview />} info={<ThickitInfo />} />
        </div>
    </div>
)

export default Portfolio