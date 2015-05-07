import Ember from 'ember';

let computed = Ember.computed;

export default Ember.Component.extend({
  width: window.innerWidth,
  height: window.innerHeight,
  children: computed(function() {
    let children = [];
    for (let i = 0; i < 10000; i++) {
      children.push(Ember.Object.create({
        id: i,
        color: '#000000',
        x: window.innerWidth * Math.random(),
        y: window.innerHeight * Math.random()
      }));
    }
    return children;
  }),
  didInsertElement() {
    function random255() {
      return Math.floor(Math.random() * 255);
    }
    function randomRGB() {
      return `rgb(${random255()}, ${random255()} , ${random255()})`;
    }
    setInterval(() => {
      this.get('children').map(child => {
        child.set('color', randomRGB());
      });
    }, 10);
  }
});
