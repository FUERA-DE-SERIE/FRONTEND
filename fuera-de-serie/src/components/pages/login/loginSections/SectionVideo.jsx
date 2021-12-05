import React from 'react'

const SectionVideo = () => {
  return (
    <div className="row video-section">

      <div className="video-section-body">
        <div>
          <iframe className="video"  title="cocina-video"
            src="https://www.youtube.com/embed/tgbNymZ7vqY" 
            >
          </iframe>
        </div>
        <div className="video-section-text">
          <h2 className="fontPlayfair">Recetas 2021.</h2>
          <p className="fontCalibri">Las mejores recetas por expertos internacionales.</p>
        </div>
      </div>

    </div>
  )
}

export default SectionVideo
