FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/dash', {
  name: 'dashboard',
  action() {
    BlazeLayout.render('MainLayout', {main: 'HomeLayout'});
  }
});

FlowRouter.route('/my-container', {
  name: 'my-container',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Containers'});
  }
});
