import React from "react";
import { WebCave } from '@acid-info/webcave-react/src/index.js'
import { EXAMPLE_TEXTURE_PACK } from '../texture'

const SingleplayerPage: React.FC = () => {
  return (
    <>
      <WebCave
        chunkSize={8}
        worldSize={64}
        texturePack={EXAMPLE_TEXTURE_PACK}
        height={"700px"}
      />
    </>
  )
}

export default SingleplayerPage;