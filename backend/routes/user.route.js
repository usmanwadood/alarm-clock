import express from 'express';
import userSchema from '../models/User.js';

const router = express.Router();

router.route('/').get(

    async (req, res) => {
        try{
            const users = await userSchema.find({});
            console.log(users);
            res.json(users);


        } catch(error) {
            console.log("Failed to find alarms");
            res.send("Failed to find alarms");
        }
    }
);

router.route('/login').post(

    async (req, res) => {
        try{
            const users = await userSchema.find({
                email: req.body.email,
                password: req.body.password
            });
            
            if(users.length > 0) {
                console.log("Login Successful");
                res.status(200).send("Login Successful");
            } else {
                console.log("Login Unsuccessful");
                res.status(401).send("Login Unsuccessful");
            }

        } catch(error) {
            console.log("Login Unsuccessful");
            res.send("Login Unsuccessful");
        }
    }
);


router.route('/create-user').post(

    async (req, res) => {

        try{
            const {name, email, password} = req.body;

            const result = await userSchema.create({
                name,
                email,
                password
            });
            console.log("User created successfully");
            res.send("User created successfully");


        } catch(error) {
            console.log("Failed to create user");
            res.send("Failed to create user");
        }

    }

);

router.route('/view-user/:id').get(
    async (req, res) => {
        console.log("Data of the user with id: " + req.params.id);
        res.send(" Response: Data of the user with id: " + req.params.id);
    }
);

router.route('/update-user/:id').put(

    async (req, res) => {
        try{
            const users = await userSchema.findByIdAndUpdate(req.params.id, {$set : req.body});
         
            console.log("User updated successfully");
            res.send("User updated successfully");


        } catch(error) {
            console.log("Failed to update user");
            res.send("Failed to update user");
        }
        
    }

);

router.route('/search').get (
    async (req, res) => {

        try {
            const users = await userSchema.find(
                {
                    name: {$regex : req.query.name, $options : 'i'},
                    email: {$regex : req.query.email, $options : 'i'}

                }
            );

            res.json(users);

        } catch(error) {

            res.send("Failed to find users");
        }


    }


);

export default router;