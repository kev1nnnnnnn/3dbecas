import React, { useEffect, useRef } from "react";
import music from "../../assets/songs/trap-future-bass-royalty-free-music-167020.mp3";

export const Audio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Quando o componente montar, inicie a reprodução automática
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <>
      {/* Adicione a propriedade 'hidden' para esconder o player de áudio */}
      <audio ref={audioRef} controls hidden>
        <source src={music} type="audio/mp3" />
        Seu navegador não suporta a tag de áudio.
      </audio>
    </>
  );
};
