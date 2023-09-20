module.exports = (app) => {
    const controller = require('../controllers/controller.js')
    app.get('/get_applications', controller.getapplications)
    app.get('/get_teams', controller.getteams)
    app.get('/get_users', controller.get_users)
    app.get('/get_policies', controller.getpolicies)
    app.put('/update_rotation_details', controller.update_rotation_details)
    app.get('/search_applications/:s', controller.searchapplications)
    app.get('/get_user_events/:s', controller.get_user_events)
    app.post('/insert_leave', controller.insert_leave)
    app.post('/insert_event', controller.insert_event)
    app.get('/search_teams/:s', controller.searchteams)
    app.get('/get_one_rotation/:s', controller.get_one_rotation)
    app.get('/search_users/:s', controller.search_users)
    app.get('/validation/:s', controller.validation)
    app.get('/validation2/:s', controller.validation2)
    app.get('/validation3/:s', controller.validation3)
    app.get('/get_events/:s', controller.get_events)
    app.post('/save_rotation', controller.save_rotation)
    app.delete('/unsave_rotation/:i', controller.unsave_rotation)
}

