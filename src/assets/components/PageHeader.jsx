import PropTypes from "prop-types"
import React from "react";

const PageHeader = React.forwardRef(({header},ref) => {
  return (
    <div ref={ref} className="page-header">{header}</div>
  )
})

PageHeader.displayName = "PageHeader"

PageHeader.propTypes = {
    header: PropTypes.string.isRequired
};

export default PageHeader