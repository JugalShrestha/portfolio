import PropTypes from 'prop-types'

const Marquee = ({text}) => {
  return (
    <div className="marquee">
        <div className="text">{text}</div>
        <div className="text">{text}</div>
        <div className="text">{text}</div>
        <div className="text">{text}</div>
        <div className="text">{text}</div>
        <div className="text">{text}</div>
        <div className="text">{text}</div>
        <div className="text">{text}</div>
        <div className="text">{text}</div>
        <div className="text">{text}</div>
    </div>
  )
}

Marquee.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Marquee