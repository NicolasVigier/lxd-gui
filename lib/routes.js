FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/:host_id', {
  name: 'host',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/my-container', {
  name: 'my-container',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Containers'});
  }
});
