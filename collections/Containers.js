Containers = new Meteor.Collection('containers');

ContainerSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
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
  }
});

Hosts.attachSchema(ContainerSchema);
