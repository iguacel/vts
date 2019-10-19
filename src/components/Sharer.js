import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

const shareUrl = "https://iguacel.github.io/vts/index.html";
const title = "A guide to Dr. Chris Mullen's The Visual Telling of Stories";
const sharerFillColor = "white";
const sharerBgColor = "transparent";

const size = 35;
const maxWidth = 260;

const Sharer = () => {
  return (
    <div className="sharer">
      <div
        className="sharerWrapper"
        style={{
          margin: "2em auto",
          padding: "0",
          display: "flex",
          justifyContent: "space-between",
          maxWidth: `${maxWidth}px`
        }}
      >
        <div>
          <FacebookShareButton
            className="icono"
            url={shareUrl}
            quote={`${title}`}
            additionalProps={{ "aria-label": "Comparte en Facebook" }}
            style={{ cursor: "pointer" }}
          >
            <FacebookIcon
              size={size}
              round
              logoFillColor={sharerFillColor}
              iconBgStyle={{ fill: sharerBgColor }}
            />
          </FacebookShareButton>
        </div>

        <div>
          <TwitterShareButton
            className="icono"
            url={shareUrl}
            title={`${title}`}
            additionalProps={{ "aria-label": "Comparte en Twitter" }}
            style={{ cursor: "pointer" }}
          >
            <TwitterIcon
              size={size}
              round
              logoFillColor={sharerFillColor}
              iconBgStyle={{ fill: sharerBgColor }}
            />
          </TwitterShareButton>
        </div>

        <div>
          <WhatsappShareButton
            aria-label="Comparte en Whatsapp"
            className="icono"
            url={shareUrl}
            title={`${title}`}
            additionalProps={{ "aria-label": "Comparte en Whatsapp" }}
            style={{ cursor: "pointer" }}
            separator="| "
          >
            <WhatsappIcon
              size={size}
              round
              logoFillColor={sharerFillColor}
              iconBgStyle={{ fill: sharerBgColor }}
            />
          </WhatsappShareButton>
        </div>

        <div>
          <TelegramShareButton
            aria-label="Comparte en Telegram"
            className="icono"
            url={shareUrl}
            additionalProps={{ "aria-label": "Comparte en Telegram" }}
            style={{ cursor: "pointer" }}
            title={`${title}`}
          >
            <TelegramIcon
              size={size}
              round
              logoFillColor={sharerFillColor}
              iconBgStyle={{ fill: sharerBgColor }}
            />
          </TelegramShareButton>
        </div>

        <div>
          <EmailShareButton
            aria-label="Comparte por mail"
            className="icono"
            url={shareUrl}
            subject={`${title}`}
            additionalProps={{ "aria-label": "Enviar por mail" }}
            style={{ cursor: "pointer" }}
            body={shareUrl}
          >
            <EmailIcon
              size={size}
              round
              logoFillColor={sharerFillColor}
              iconBgStyle={{ fill: sharerBgColor }}
            />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

export default Sharer;
