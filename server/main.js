import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
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
      var command="curl -s -k --cert client.crt --key client.key https://192.168.1.79:8443/1.0 | jq .metadata.auth";
      exec(command,function(error,stdout,stderr){
        if(error){
          console.log(error);
          throw new Meteor.Error(500,command+" failed");
        }
        future.return(stdout.toString());
      });
      return future.wait();
    }
  });
});
