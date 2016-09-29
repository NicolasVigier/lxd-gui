Hosts = new Mongo.Collection('hosts');

Hosts.allow({
  insert: function (userId, doc) {
    return !!userId;
  }
});

Host = new SimpleSchema({
  hostname: {
    type: String,
    label: "Hostname"
  },
  desc: {
    type: String,
    label: "Description"
  },
  creator: {
    type: String,
    label: "Createur",
    autoValue: function() {
      return this.userId
    }
  },
  certificate: {
    type: String,
    label: "Certificat"
  }
});

Hosts.attachSchema(Host);
