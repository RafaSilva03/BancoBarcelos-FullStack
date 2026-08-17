import * as Model from "../models/"

const initModels = (sequelize: any) => {
    Model.pronoun.initModel(sequelize);
    Model.sex_type.initModel(sequelize);
    Model.postal_code.initModel(sequelize);
    Model.status.initModel(sequelize);
    Model.user.initModel(sequelize);
}

export {initModels}