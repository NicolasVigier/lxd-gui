Containers = new Mongo.Collection('containers');

Containers.allow({
  insert: function (userId, doc) {
    return !!userId;
  }
});

Host = new SimpleSchema({
  hostname: {
    type: String,
    label: "Hostname"
  },
  ip_address: {
    type: String,
    label: "Adresse IP"
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

ContainerSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Nom"
  },
  desc: {
    type: String,
    label: "Description"
  },
  protocol: {
    type: String,
    label: "Protocol image"
  },
  img_server: {
    type: String,
    label: "Serveur d'images"
  },
  img_alias: {
    type: String,
    label: "Alias image"
  },
  host: {
    type: String,
    label: "Hote LXD"
  }
});

Containers.attachSchema(ContainerSchema);
