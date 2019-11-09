// MODELO AULA
import { DataTypes } from 'sequelize';

export let comentario_model = (sequelize: any) => {

  let comentario = sequelize.define('t_comentario', {
    comen_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    comen_desc: {
      type: DataTypes.TEXT(45),
      allowNull: true
    },
    comen_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comen_rating: {
      type: DataTypes.INT,
      allowNull: true
    },
   
  }, {
    tableName: 't_comentario',
    timestamps: true
  });

  return comentario;

}
