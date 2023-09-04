
// const { wait } = require('@testing-library/user-event/dist/utils');
const mongoose   = require('mongoose');


const mongo_URL = "mongodb://127.0.0.1:27017/GofoodMERN";


const db = mongoose.connection;

const mongoDB = async  (err,result)=>{
    await mongoose.connect(mongo_URL);
    if(err){
        console.log(err);

       }else{
        console.log("connected database");
        const fetched_data =  await db.collection("food_items");
       const data = await    fetched_data.find({}).toArray();
            const foodCategory  = await db.collection("food_ategory");
          const CatData  = await foodCategory.find({}).toArray()
                if (err){
                    console.error(err);
                }else{
                    global.food_items = data;
                    global.foodCategory = CatData;
                }
                

            }
         }
       
       
        // if(err){
        //     console.log(err)
        // }else{
        //     global.food_items = data;
            
            
        // }
    

        

module.exports = mongoDB;
