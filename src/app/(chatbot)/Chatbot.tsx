import Script from "next/script";
import React from "react";

const Chatbot = () => {
  return (
    <div>
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        strategy="lazyOnload"
      />
      <div
        data-chat-widget
        data-location-id="E3wHADdGAtBvgCLlgIg9"
        data-style="--chat-widget-primary-color: #395DDC; --chat-widget-active-color:#395DDC ;--chat-widget-bubble-color: #395DDC ;"
        data-heading="Digitális Asszisztens"
        data-sub-heading="Szia! Én vagyok az AutoLuxe AI asszisztense, miben segíthetek?"
        data-prompt-msg="Szia! Miben segíthetek?"
        data-legal-msg=""
        data-enable-revisit-message="false"
        data-success-msg=""
        data-thank-you-msg="Köszönöm!"
        data-prompt-avatar="https://images.leadconnectorhq.com/image/f_webp/q_100/r_45/u_https://cdn.filesafe.space/locationPhotos%2FE3wHADdGAtBvgCLlgIg9%2Fchat-widget-person?alt=media&token=da213307-9984-40c6-af8e-bc38d1aca66f"
        data-locale="hu"
        data-send-label="Küldés"
        data-chat-type="liveChat"
        data-live-chat-user-inactive-msg=""
        data-live-chat-visitor-inactive-msg=""
        data-live-chat-ack-msg="A chat befejeződött "
        data-live-chat-feedback-msg="Kérlek értékeld segítségem!"
        data-live-chat-feedback-note="Köszönöm!"
        data-live-chat-end-msg="Új beszélgetés kezdés"
        data-primary-color="#395DDC"
        data-show-live-chat-welcome-msg="false"
      ></div>
    </div>
  );
};

export default Chatbot;
