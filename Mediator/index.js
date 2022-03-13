// A mediator between the same type of object.
// For example, a chat room.
// This allows you to decouple logic and add additional features.
// Members only sending details to other members would make it tricky when wanting
// to send a group message etc. Instead multiple chat rooms can be created.
function Member(name) {
  this.name = name;
  this.chatroom = null;
}

Member.prototype = {
  send: function (message, toMember) {
    this.chatroom.send(message, this, toMember);
  },

  receive: function (message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`);
  },

  announce: function (message) {
    this.chatroom.announce(message, this);
  },
};

function Chatroom() {
  this.members = {};
}

Chatroom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member;
    member.chatroom = this;
  },

  send: function (message, fromMember, toMember) {
    toMember.receive(message, fromMember);
  },

  announce: function (message, fromMember) {
    for (const member of Object.values(this.members)) {
      if (member !== fromMember.name) {
        this.send(message, fromMember, member);
      }
    }
  },
};

const chatroom = new Chatroom();
const josh = new Member("josh");
const john = new Member("john");
const georgia = new Member("georgia");
const eliza = new Member("eliza");

chatroom.addMember(josh);
chatroom.addMember(john);
chatroom.addMember(georgia);
chatroom.addMember(eliza);

josh.announce("Hi everyone!");
john.send("Hi josh!", josh);
