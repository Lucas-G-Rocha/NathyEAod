import { useState, useEffect } from 'react';
import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import primeira from './assets/primeira.jpeg';
import segunda from './assets/segunda.jpeg';
import terceira from './assets/terceira.jpeg';
import quarta from './assets/quarta.jpeg';
import quinta from './assets/quinta.jpeg';
import sexta from './assets/sexta.jpeg';
import setima from './assets/setima.jpeg';
import oitava from './assets/oitava.jpeg';
import nona from './assets/nona.jpeg';
import decima from './assets/decima.jpeg';
import decimaPrimeira from './assets/decimaPrimeira.jpeg';
import decimaSegunda from './assets/decimaSegunda.jpeg';
import decimaTerceira from './assets/decimaTerceira.jpeg';
import decimaQuarta from './assets/decimaQuarta.jpeg';
import decimaQuinta from './assets/decimaQuinta.jpeg';
import decimaSexta from './assets/decimaSexta.jpeg';
import decimaSetima from './assets/decimaSetima.jpeg';
import decimaOitava from './assets/decimaOitava.jpeg';
import decimaNona from './assets/decimaNona.jpeg';
import vigesima from './assets/vigesima.jpeg';
import vigesimaPrimeira from './assets/vigesimaPrimeira.jpeg';
import vigesimaSegunda from './assets/vigesimaSegunda.jpeg';

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
    vigesimaSegunda,
    decimaPrimeira,
    primeira,
    segunda,
    terceira,
    quarta,
    quinta,
    sexta,
    setima,
    oitava,
    decima,
    decimaSegunda,
    decimaTerceira,
    decimaQuarta,
    decimaQuinta,
    decimaSexta,
    decimaSetima,
    decimaOitava,
    decimaNona,
    vigesima,
    nona,
    vigesimaPrimeira,
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
