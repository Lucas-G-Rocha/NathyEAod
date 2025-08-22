import { useState, useEffect } from 'react';
import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {

  const [anos, setAnos] = useState(0);
  const [meses, setMeses] = useState(0);
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  let dataInicio = new Date(2023, 7, 22);

  const calcularTempo = () => {
    let agora = new Date();

    // Certifica que dataInicio é um Date
    if (!(dataInicio instanceof Date)) {
      dataInicio = new Date(dataInicio);
    }

    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();
    let horas = agora.getHours() - 0;      // consideramos meia-noite
    let minutos = agora.getMinutes() - 0;
    let segundos = agora.getSeconds() - 0;

    // Ajustes caso algum valor seja negativo
    if (segundos < 0) {
      segundos += 60;
      minutos--;
    }
    if (minutos < 0) {
      minutos += 60;
      horas--;
    }
    if (horas < 0) {
      horas += 24;
      dias--;
    }
    if (dias < 0) {
      // pega quantidade de dias do mês anterior
      let mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
      dias += mesAnterior;
      meses--;
    }
    if (meses < 0) {
      meses += 12;
      anos--;
    }
    setAnos(anos);
    setMeses(meses);
    setDias(dias);
    setHoras(horas);
    setMinutos(minutos);
    setSegundos(segundos);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      calcularTempo();
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const images = [
    "%PUBLIC_URL%/vigesimaSegunda.jpeg",
    "%PUBLIC_URL%/decimaPrimeira.jpeg",
    "%PUBLIC_URL%/primeira.jpeg",
    "%PUBLIC_URL%/segunda.jpeg",
    "%PUBLIC_URL%/terceira.jpeg",
    "%PUBLIC_URL%/quarta.jpeg",
    "%PUBLIC_URL%/quinta.jpeg",
    "%PUBLIC_URL%/sexta.jpeg",
    "%PUBLIC_URL%/setima.jpeg",
    "%PUBLIC_URL%/oitava.jpeg",
    "%PUBLIC_URL%/decima.jpeg",
    "%PUBLIC_URL%/decimaSegunda.jpeg",
    "%PUBLIC_URL%/decimaTerceira.jpeg",
    "%PUBLIC_URL%/decimaQuarta.jpeg",
    "%PUBLIC_URL%/decimaQuinta.jpeg",
    "%PUBLIC_URL%/decimaSexta.jpeg",
    "%PUBLIC_URL%/decimaSetima.jpeg",
    "%PUBLIC_URL%/decimaOitava.jpeg",
    "%PUBLIC_URL%/decimaNona.jpeg",
    "%PUBLIC_URL%/vigesima.jpeg",
    "%PUBLIC_URL%/nona.jpeg",
    "%PUBLIC_URL%/vigesimaPrimeira.jpeg"
  ]
  return (
    <>
      <div id='mainContainer'>
        <div id='slideContainer'>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className='swiper'
          >
            {
              images.map((src, index) => (
                <SwiperSlide key={index} className='swiperSlide'>
                  <img src={src} className='imageContent' />
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
        <div id='messageContainer'>
          <h1 className='titleMessage'>Aod e Nathy</h1>
          <p className='textMessage'>Aqui vai um presente para outro presente.<br /> Isto é para nos lembrar de alguns dos nossos momentos juntos e também quanto tempo faz que estamos juntos, te amo e sou muito grato por esses e todos os outros momentos, que venham mais momentos como esse. Te amo meu amor ❤️</p>
        </div>
        <div id='temporizadorContainer'>
          <h1 className="titleTemporizador">Compartilhando momentos há</h1>
          <div className='temporizador'>
            <div className="temporizadorItemContainer">
              <p className="temporizadorItem">{anos}</p>
              <p className="temporizadorItemMessage">anos</p>
            </div>
            <div className="temporizadorItemContainer">
              <p className="temporizadorItem">{meses}</p>
              <p className="temporizadorItemMessage">meses</p>
              </div>
            <div className="temporizadorItemContainer">
              <p className="temporizadorItem">{dias}</p>
              <p className="temporizadorItemMessage">dias</p>
              </div>
            <div className="temporizadorItemContainer">
              <p className="temporizadorItem">{horas}</p>
              <p className="temporizadorItemMessage">horas</p>
              </div>
            <div className="temporizadorItemContainer">
              <p className="temporizadorItem">{minutos}</p>
              <p className="temporizadorItemMessage">minutos</p>
              </div>
            <div className="temporizadorItemContainer">
              <p className="temporizadorItem">{segundos}</p>
              <p className="temporizadorItemMessage">segundos</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
