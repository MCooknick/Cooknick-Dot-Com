import React from "react"
import { map } from "lodash";
import "./blog.css"

const Navigation = () => {

  const categories = []

  return (
    <div className="blog_nav">
      Cats
      {/* {_.uniqBy(categories, 'category').map(({ node }) => (
        <Link to={`/${node.frontmatter.category}`} className="nav_item">
          {node.frontmatter.category}
        </Link>
      ))} */}
    </div>
  )
}

export default Navigation
