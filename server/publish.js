Meteor.publish('containers', function () {
  //return Containers.find({host: Session.get('host_view')});
  return Containers.find({});
});

Meteor.publish('hosts', function () {
  return Hosts.find({creator: this.userId});
});
