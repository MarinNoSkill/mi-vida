import React from 'react'

const MESSAGE = [
  `Hoy cumplimos 3 meses y estoy infinitamente agradecido contigo y con la vida por ponerte en mi camino.`,
  `No ha sido fácil, pero juntos hemos superado cosas y creado recuerdos que cada dia guardo, quiero compartir el resto de mis días contigo, mientras Dios y la vida nos lo permitan.`,
  `Eres una mujer maravillosa, cariñosa, que me ha mostrado lo bonito que es amar y sentirse amado, tu me inspiras cada día y me haces querer ser una mejor persona, me siento muy orgulloso de ti y de todo lo que hemos construido juntos.`,
  `Gracias por enseñarme tanto y por transformar cosas en mí, te lo agradezco de corazón, siempre soy feliz de ser tu novio y poder escribir nuestro futuro a tu lado, Te amo con todo mi corazón mi niña.`
]

export default function App() {
  return (
    <div className="page">
      {/* High-quality background image placed as an <img> to preserve resolution and use object-fit */}
      <img src="/fondo.jpg" alt="Fondo" className="bg-img" />
      <div className="video-container">
        {/* Video file should be placed in `public/video.mp4` (already present) */}
        <video
          className="hero-video"
          src="/video.mp4"
          loop
          muted
          autoPlay
          playsInline
          aria-label="Video principal"
        />
      </div>

      <div className="text-card" role="region" aria-label="Monita">
        <h2 className="title">Para el amor de mi vida</h2>
        {MESSAGE.map((line, i) => (
          <p key={i} className="message-text">{line}</p>
        ))}
      </div>
    </div>
  )
}
