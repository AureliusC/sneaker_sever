module.exports = (sequlize, DataTypes) =>{
    const User = sequlize.define('user',{
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique: true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false,
        }
       
    })
    return User;
}