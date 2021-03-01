"use strict";
import data from './data/messages.js';

const chatBot = {
  initFields() {

    this.renderMessages();
  },
  submitHandler(e) {
    e.preventDefault();
  },
  renderMessages() {
    // Vergeet geen melding te geven indien geen berichten beschikbaar zijn
  }
};

chatBot.initFields();