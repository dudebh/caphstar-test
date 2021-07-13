'use strict';
const {
  Model
} = require('sequelize');
const now = new Date().toISOString().substring(0, 10);
module.exports = (sequelize, DataTypes) => {
  class SosialMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SosialMedia.init({
    nama_aplikasi: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: 'Nama Aplikasi tidak boleh null'},
        notEmpty: {msg: 'Nama Aplikasi harus diisi'}
      }
    },
    keterangan: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: 'Keterangan tidak boleh null'},
        notEmpty: {msg: 'Keterangan harus diisi'}
      }
    },
    jumlah_pengguna: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: 'Jumlah Pengguna tidak boleh null'},
        notEmpty: {msg: 'Jumlah Pengguna harus diisi'},
        isInt: {msg: 'Jumlah Pengguna harus dalam format angka'},
        min: {args: [0], msg: 'Minimal jumlah pengguna 0'}
      }
    },
    pendiri: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: 'Pendiri tidak boleh null'},
        notEmpty: {msg: 'Pendiri harus diisi'}
      }
    },
    tanggal_didirikan: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: 'Tanggal Didirikan tidak boleh null'},
        notEmpty: {msg: 'Tanggal Didirikan harus diisi'},
        isBefore: {args: [now], msg: 'Tanggal didirikan harus sebelum tanggal hari ini'}
      }
    }
  }, {
    sequelize,
    modelName: 'SosialMedia',
  });
  return SosialMedia;
};