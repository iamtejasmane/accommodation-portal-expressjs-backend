module.exports = (sequelize , type)=>{
    return sequelize.define('states',{
        id:{
            type : type.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : type.STRING
    })
}