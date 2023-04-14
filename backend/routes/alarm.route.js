import express from 'express';
import alarmSchema from '../models/Alarm.js';

const router = express.Router();

router.route('/').get(

    async (req, res) => {
        try{
            const alarms = await alarmSchema.find({});
            console.log(alarms);
            res.json(alarms);


        } catch(error) {
            console.log("Failed to find alarms");
            res.send("Failed to find alarms");
        }
    }
);

router.route('/create-alarm').post(

    async (req, res) => {

        try{

            const result = await alarmSchema.create(req.body);
            console.log("Alarm created successfully");
            res.send("Alarm created successfully");


        } catch(error) {
            console.log("Failed to create Alarm");
            res.send("Failed to create Alarm");
        }

    }

);

router.route('/delete-alarm/:id').delete(

    async (req, res) => {

        try{

            const result = await alarmSchema.findByIdAndDelete(req.params.id);
            console.log("User deleted successfully");
            res.send("User deleted successfully");

        } catch(error) {
            console.log("Failed to delete alarm");
            res.send("Failed to delete alarm");
        }

    }


)

router.route('/view-user/:id').get(
    async (req, res) => {
        console.log("Data of the user with id: " + req.params.id);
        res.send(" Response: Data of the user with id: " + req.params.id);
    }
);

router.route('/update-user/:id').put(

    async (req, res) => {
        try{
            const users = await alarmSchema.findByIdAndUpdate(req.params.id, {$set : req.body});
         
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
            const users = await alarmSchema.find(
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