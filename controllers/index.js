const User=require('../models/user')
const {sensorData}=require('../models/sensorData')

const fetch = require('node-fetch');

exports.getUsersList = async (req, res, next) => {
    try {
        const filter = {};
        const all = await User.find(filter,{weight:0,height:0,gender:0});
        console.log(all);
        res.send(all)
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting Users  list: ${error.message}`
        })
    }
}

exports.getUserDetails = async(req,res,next) => {
    try {
    
        const obj_id=req.params.id;
        const data=await User.findById(obj_id);
        console.log(data);
        res.send(data)
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting User Details: ${error.message}`
        })
    }
}


exports.setUserDetails= async(req,res) =>{
    try {
        console.log("****")
        const obj_id=req.params.id;
        const user_data=await User.findById(obj_id);
        console.log(user_data);

        const data_new=await (await fetch('http://localhost:5000/')).json()
        const model_data=new sensorData(data_new)
        console.log(data_new)
        user_data.data[0]=model_data
        user_data.save()
        res.send(data_new)

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting User Details: ${error.message}`
        })
    }
}