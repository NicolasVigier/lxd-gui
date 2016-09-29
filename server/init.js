import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

Meteor.startup(() => {

  Session.setDefault("container", "my-container");

  // code to run on server at startup
  var Future = Npm.require("fibers/future");
  var exec = Npm.require("child_process").exec;

  Meteor.methods({
    runCode: function () {
      // This method call won't return immediately, it will wait for the
      // asynchronous code to finish, so we call unblock to allow this client
      // to queue other method calls (see Meteor docs)
      this.unblock();
      var future=new Future();
// https://insights.ubuntu.com/2016/04/19/directly-interacting-with-the-lxd-api/
	var target="/1.0";
	console.log(target);
      var command="curl -s -k --cert client.crt --key client.key https://192.168.1.79:8443"+ target + " | jq .";
      exec(command,function(error,stdout,stderr){
        if(error){
          console.log(error);
          throw new Meteor.Error(500,command+" failed");
        }
        future.return(stdout.toString());
	console.log(stdout.toString());
      });
      return future.wait();
    }
  });
});
