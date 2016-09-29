Meteor.publish('containers', function () {
  return Containers.find({host: Session.get('host_view')});
});

Meteor.publish('hosts', function () {
  return Hosts.find({creator: this.userId});
});
