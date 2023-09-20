const mysql = require('mysql')

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mikyle123',
    database: 'sdda_course_trackerDB'//'sanlam_data_and_digital_academy'
})

database.connect((error) => {
    if (error) throw error
    console.log('Connected to Database')
})

exports.getapplications = (req, res) => {
    database.query("select * from policies",
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.getpolicies = (req, res) => {
    database.query("select * from approvedpolicies",
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.getteams = (req, res) => {
    database.query("select * from teams",
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.get_users = (req, res) => {
    database.query("select * from users where user_type = 'Graduate'",
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.get_events = (req, res) => {
    database.query("select * from events_table where user_id = ?",
        [req.params.s],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })
    

}

exports.get_user_events = (req, res) => {
    database.query("select * from events_table where user_id = ? or user_id = ?",
        [req.params.s, '11'],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })
    

}

exports.searchteams = (req, res) => {
    database.query("select * from teams where technologies like ? or name like ? or description like ? or expectations like ?",
        ['%'+req.params.s+'%', '%'+req.params.s+'%', '%'+req.params.s+'%', '%'+req.params.s+'%'],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })
    

}

exports.get_one_rotation = (req, res) => {
    database.query("select * from teams where manager = ?",
        [req.params.s],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })
    

}

exports.search_users = (req, res) => {
    database.query("select * from users where first_name like ? or last_name like ?",
        ['%'+req.params.s+'%', '%'+req.params.s+'%'],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })
}

exports.searchpolicies = (req, res) => {
    database.query("select * from approvedpolicies where policy_type = ? ",
        [req.params.s],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.searchapplications = (req, res) => {
    database.query("select * from policies where policy_type = ? ",
        [req.params.s],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.save_rotation = (req, res) => {
    jsondata = req.body;
    console.log(req.body)
    a = jsondata['graduate_name'];
    b = jsondata['user_id']
    c = jsondata['rotation_identifier'];
    d = jsondata['apply_date']
    database.query("insert into applications (graduate_name, user_id, rotation_identifier, apply_date) values (?, ?, ?, ?)",
        [a, b, c, d],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.validation = (req, res) => {
    console.log("hi")
    database.query("select user_id from users where email = ?",
        [req.params.s],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.validation2 = (req, res) => {
    database.query("select password from users where user_id = ?",
        [req.params.s],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.validation3 = (req, res) => {
    database.query("select user_type from users where user_id = ?",
        [req.params.s],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.insert_leave = (req, res) => {
    jsondata = req.body;
    a = jsondata['start_date'];
    b = jsondata['end_date']

    database.query("insert into events_table (title, start, end, event_color, user_id) values (?, ?, ?, ?, ?)",
        ['Your Leave Day', a, b, 'grey', 1],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.insert_event = (req, res) => {
    jsondata = req.body;
    a = jsondata['start_date'];
    b = jsondata['end_date']
    c = jsondata['event_title'];
    d = jsondata['event_color']

    database.query("insert into events_table (title, start, end, event_color, user_id) values (?, ?, ?, ?, ?)",
        [c, a, b, d, 11],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.update_rotation_details = (req, res) => {
    jsondata = req.body;
   
    console.log("hello")
     console.log(req.body)
    a = jsondata['name'];
    b = jsondata['technologies']
    c = jsondata['expectations'];
    d = jsondata['manager']
    e = jsondata['description']
    f = jsondata['rotation_identifier']
    database.query("update teams set name = ?, technologies = ?, expectations = ?, manager = ?, description = ? where rotation_identifier = ?",
        [a, b, c, d, e, f],
        function (err, result, fields) {
            if (err) {
                return err
            }
            return res.send(JSON.stringify(result))
        })

}

exports.unsave_rotation = (req, res) => {
    database.query("delete from policies where policy_identifier = ?",
        [req.params.i],
        function (error, result, fields) {
            if (error) throw error;
            return res.send(JSON.stringify(result))
        })
}