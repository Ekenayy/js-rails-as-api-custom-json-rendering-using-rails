// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);

// const formObject = {
//   name: 'Gerald',
//   species: 'Speckled Gator'
// }

// let configObject =  { 
//       method: 'POST', 
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(formObject)
//   }

//   fetch('http://localhost:3000/birds', configObject)
//     .then(response => response.json())
//     .then(bird => console.log(bird))