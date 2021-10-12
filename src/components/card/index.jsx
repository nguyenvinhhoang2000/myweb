import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Card.propTypes = {
  style: PropTypes.any,
  content: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  btnContent: PropTypes.string,
  btnIcon: PropTypes.string,
  btnHref: PropTypes.string,
};

Card.defaultProps = {
  style: "",
  content: "",
  description: "",
  icon: "",
  btnContent: "",
  btnIcon: "",
  btnHref: "",
};

const cardList = [
  {
    style: "#E5999B",
    content: "Todo List",
    description: "Save your to-dos",
    icon: "far fa-list-alt",
    btnContent: "Open",
    btnIcon: "fas fa-external-link-alt",
    btnHref: "https://todo-list-xi-three.vercel.app/",
  },
  {
    style: "#B3C0ED",
    content: "Zing mp3",
    description: "Let the Music Speak!",
    icon: "fas fa-music",
    btnContent: "Open",
    btnIcon: "fas fa-external-link-alt",
    btnHref: "https://zing-mp3.vercel.app/",
  },
  {
    style: "#A1D9CE",
    content: "Learn React",
    description: "Learn react to die",
    icon: "fab fa-react",
    btnContent: "Open",
    btnIcon: "fas fa-external-link-alt",
    btnHref: "https://learn-reactjs-eight-orcin.vercel.app/",
  },
  {
    style: "#E0B3EA",
    content: "Todo List",
    description: "Save your to-dos",
    icon: "far fa-list-alt",
    btnContent: "Open",
    btnIcon: "fas fa-external-link-alt",
    btnHref: "https://todo-list-xi-three.vercel.app/",
  },
];

function Card(props) {
  // const { content, description, icon, btnContent, btnIcon, btnHref } = props;
  return (
    <>
      {cardList.map((card) => (
        <div className='card' style={{ backgroundColor: `${card.style}` }}>
          <div className='card_content'>
            <i className={card.icon}></i>
            <p className='card_content--title'>{card.content}</p>
            <span className='card_content--description'>
              {card.description}
            </span>
          </div>

          <a className='card_btn' href={card.btnHref} target='_blank'>
            <i className={card.btnIcon}></i>
            <p>{card.btnContent}</p>
          </a>
        </div>
      ))}
    </>
  );
}

export default Card;
