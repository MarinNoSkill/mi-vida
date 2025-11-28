import React, { useState } from 'react'

// Repeat images so the collage se vea más denso
const IMAGES = [
  '/img.jpg','/img2.jpg','/img3.jpg','/img4.jpg','/img5.jpg','/img6.jpg',
  '/img.jpg','/img2.jpg','/img3.jpg','/img4.jpg','/img5.jpg','/img6.jpg'
]
 
const MESSAGE = {
  title: 'Amor, mi vida, mi razón de ser',
  body: [
    'Hay tantas cosas hermosas que quiero decirte que a veces me quedo sin palabras: un "te amo" o un "te quiero" no alcanzan para transmitir lo profundo que me haces sentir.',
    'Hoy es un año más para ti, quizá algo normal para el mundo, pero para mí significa la fortuna de poder estar a tu lado y seguir construyendo recuerdos juntos. Gracias por cada risa, por cada abrazo, por comprenderme incluso en mis días complicados.',
    'Quiero que tengas muy presente cuánto te amo y lo que representas en mi vida: mi compañera, mi confidente, mi motivo para esforzarme. Si me dejas, quiero seguir llegando lejos contigo, apoyarte, protegerte y celebrar cada uno de tus sueños.',
    'Deseo que tu cumpleaños esté lleno de momentos sencillos que te hagan sonreír, rodeada de cariño y de las pequeñas cosas que tanto disfrutas. Hoy brindo por ti, por tus metas y por todo lo bonito que aún nos espera.'
  ],
  closing: 'Emiliana, te amo.',
  sign: 'Con todo mi cariño — Camilo'
}

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="page">
      <div className="collage-bg" aria-hidden="true">
        {IMAGES.map((src, i) => (
          <div key={i} className={`bg-photo bg-${i+1}`} style={{backgroundImage:`url(${src})`}} />
        ))}
      </div>

      <button className={`center-heart ${open ? 'opened' : 'pulse'}`} onClick={() => setOpen(true)} aria-label="Abrir carta">
        <img src="/cora.webp" alt="Corazón" className="center-heart-img" />
        <span className="center-heart-text">Para Emiliana</span>
      </button>

      {open && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-card">
            <button className="close" onClick={() => setOpen(false)} aria-label="Cerrar">×</button>
            <h2>{MESSAGE.title}</h2>
            {MESSAGE.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="closing">{MESSAGE.closing}</p>
            <p className="sign">{MESSAGE.sign}</p>
          </div>
        </div>
      )}
    </div>
  )
}
