
import music from "../../assets/songs/trap-future-bass-royalty-free-music-167020.mp3"


export const Audio = ( ) => {
    return (
       <>
       <audio controls>
        <source src={music} type="audio/mp3" />
        Seu navegador não suporta a tag de áudio.
        </audio>
       </>
    )
}
