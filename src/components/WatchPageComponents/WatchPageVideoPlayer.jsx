
import ReactPlayer from "react-player"
export default function VideoPlayer({url, thumbnail}) {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={url}
            width='100%'
            height='100%'
            controls={true}
            light={thumbnail}
          />
        </div>
      )
  }