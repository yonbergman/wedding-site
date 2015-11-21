//= require_tree .

Parse.initialize("UrmSpI5j3HCLJQiqj131OSC96VP00o8SfT5tk5R0", "ldeBH2RbgBYP2x2vLTZG5XxvcqJ3HtEiMxV7dTEq");


var RSVP = Parse.Object.extend("RSVP");
var myRSVP = new RSVP();
// testRSVP.save({name: "foo"}).then(function(object) {
//   alert("yay! it worked");
// });

var RsvpData = {
  name: null,
  status: null,
  email: null,
  attendees: null,
  loading: false,
  done: false,
  errorMsg: null,
};

new Vue({
  el: '#app',
  data: RsvpData,
  computed: {
    rsvpd: function() {
      return this.status !== null;
    },
    coming: function() {
      return this.status === "yes";
    },
    maybe: function() {
      return this.status === "maybe";
    },
    notComing: function() {
      return this.status === "no";
    },
  },
  methods: {
    save: function () {
      this.errorMsg = null;
      if (!this.name){
        this.errorMsg = "Please enter your name";
        return;
      }
      if (!this.status){
        this.errorMsg = "Please RSVP";
        return;
      }
      if (this.status === "yes" && !this.attendees){
        this.errorMsg = "Please enter number of expected attendees";
        return;
      }
      var that = this;
      this.loading = true;
      this.done = false;

      myRSVP.save({
        name: this.name,
        status: this.status,
        email: this.email,
        attendees: this.attendees
      }).then(function() {
        that.loading = false;
        that.done = true;
      });
    }
}

});
