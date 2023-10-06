import React, { useState } from "react";
import Cuma from "../img/cuma.png";
import Menta from "../img/menta.png";
import Bana from "../img/bana.png";
import Toca from "../img/toca.png";
import Stroke from "../img/stroke.png";
import Fome from "../img/fome2.jpg";
import Restaurant from "../img/restaurant.png";



function Card() {
  const [mensagem, setMensagem] = useState("");
  const [pizza, setPizza] = useState("");
  const [pizzaImagem, setPizzaImagem] = useState(Fome);

  const pizzaCuma = () => {
    setTimeout(()=>{
      setMensagem("Seu pedido é")
      setPizza("La cuma")
      setPizzaImagem(Cuma)
    }, 1000)

  };

  // setTimeout()
  // setTimeout(função, time)


  const pizzaMenta = () => {
    setPizza("La Menta")
    setPizzaImagem(Menta);
  }
  const pizzaBana = () => {
    setPizza("La Bana")
    setPizzaImagem(Bana);
  }

  const pizzaToca = () => {
    setPizza("La Toca")
    setPizzaImagem(Toca);
  }

  const fome = () => {
    setPizza("")
    setPizzaImagem(Fome);
  }


  

  return (
    <main>
      <section className="pedido">
        <h2>{mensagem}</h2>
          <h3>{pizza}</h3>
        <img className="fome" src={pizzaImagem} />
        <button className="limpar" onClick={fome}>Limpar</button>
      </section>

      <section>
        <div className="card">
          <img className="imagem" src={Cuma} alt="pizza" />
          <button className="coracao" ><img className="stroke" src={Stroke} alt="emoji coração" /></button>
          <h4 className="sabores">La Cuma</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h3 className="custo">R$ 23</h3>
          <button onClick={pizzaCuma}>Comprar agora</button>
        </div>

        <div className="card">
          <img className="imagem" src={Menta} alt="pizza" />
          <button className="coracao" ><img className="stroke"  src={Stroke} alt="emojo coração" /></button>
          <h4 className="sabores">La Menta</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h3 className="custo">R$ 23</h3>
          <button onClick={pizzaMenta}>Comprar agora</button>
        </div>
        
        <div className="card">
          <img className="imagem" src={Bana} alt="pizza" />
          <button className="coracao" ><img className="stroke"  src={Stroke} alt="emojo coração" /></button>
          <h4 className="sabores">La Bana</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h3 className="custo">R$ 23</h3>
          <button onClick={pizzaBana}>Comprar agora</button>
        </div>

        <div className="card">
          <img className="imagem" src={Toca} alt="pizza" />
          <button className="coracao" ><img className="stroke"  src={Stroke} alt="emojo coração" /></button>
          <h4 className="sabores">La Toca</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h3 className="custo">R$ 23</h3>
          <button onClick={pizzaToca}>Comprar agora</button>
        </div>
      </section>

      <section className="end">
        <img src={Restaurant} alt="imagem de um restaurante" />
        <div>
          <h2>Sobre a La P<p className="i">i</p><p className="zred">z</p><p className="zgreen">z</p>a</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum. </p>
          <button>Ler mais</button>
        </div>
      </section>
      
    </main>
  );
}
export default Card;
