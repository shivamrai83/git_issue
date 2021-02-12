const {Sequelize, DataTypes} = require('sequelize');

const dbs = new Sequelize({
    dialect:"postgres",
    host:"localhost",
    username:"visitor",
    port:5432,
    password:"thinksys@123",
    database:"DummyDB",
})

const dummyTable = dbs.define(
    "Dummy",
    {
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER,
        },
        name:{
            type:DataTypes.STRING(100),
        },
        age:{
            type:DataTypes.STRING(100),
        },
        gender:{
            type:DataTypes.STRING(100),
        },
        salary:{
            type:DataTypes.STRING(100),
        },
        occupation:{
            type:DataTypes.STRING(100),
        },
        email:{
            type:DataTypes.STRING(100),
        }
       
    }
)

const initalise = async function(){
    try{
        await dbs.authenticate();
        await dbs.sync({alter:true});
    }
    catch (e){
        console.log("here is the Error =>",error);
    }
}

module.exports ={
    initalise,
    dummyTable,
    dbs,
}