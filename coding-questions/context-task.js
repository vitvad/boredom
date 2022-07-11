/**
 * Description:
 * 
 * You're working on a chat app for WhatIsThisApp. Someone from your team has committed this code, 
 * but there's a problem with it: the Receiver doesn't seem to be receiving any messages.
 * The manager on your team has asked if you can look into this problem to resolve the issue.
 * Can you get the code into a working state?
 *  
 */


const solution = (messages) => {
  class Emitter {
    constructor(messages = []) {
      this.messages = messages;
      this.event = () => {};
    }

    setEvent(fn) {
      this.event = fn;
    }

    trigger() {
      this.messages.forEach(message => this.event(message));
    }
  }

  class Receiver {
    constructor() {
      this.messages = [];
    }

    ping(message) {
      this.messages.push(message);
    }
  }

  const myEmitter = new Emitter(messages);
  const myReceiver = new Receiver();

  myEmitter.setEvent(myReceiver.ping);
  myEmitter.trigger();

  return myReceiver.messages;
};