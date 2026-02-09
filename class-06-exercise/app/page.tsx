import Image from "next/image";
import StickerDisplay from "./shared/compononets/StickerDisplay/index"
import StickerGallery from "./shared/compononets/StickerGallery/index"

import "./styles.css"

export default function Home() {
  return (
  <div >
    <main>
  <div>Hello this is my app</div>
  <StickerDisplay/>
  <StickerGallery />
</main>
</div>

  
  );
}
