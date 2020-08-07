import React from "react";
import whatsIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/45497111?s=460&u=e65a278bdfa3e900014024c0284d771fce481655&v=4"
          alt="Marcus Vinícius"
        />
        <div>
          <strong>Marcus Vinícius</strong>
          <span>Lorem</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsam nihil modi.
        <br />
        <br />
        Fugit voluptatem sit eveniet tenetur hic eaque, dolorum nisi reiciendis
        voluptates. Minima atque aliquam accusantium fugit debitis dolor!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 129,00</strong>
        </p>

        <button type="button">
          <img src={whatsIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
