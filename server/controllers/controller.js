const { SosialMedia } = require('../models')
const { Op } = require("sequelize");

class Controller {
    static async getSosialMedia(req, res, next) {
        try {
            let data
            if(req.query.pendiri){
                data = await SosialMedia.findAll({where: {pendiri: {[Op.iLike]: '%'+req.query.pendiri+'%'}}})
            }else{
                data = await SosialMedia.findAll()
            }
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getSosialMediaById(req, res, next) {
        try {
            let foundData = await SosialMedia.findOne({where: {id: req.params.id}})
            if(foundData){
                res.status(200).json(foundData)
            }else{
                next({name: 'NotFoundError', statusCode: 400, message: 'Data not found'})
            }
        } catch (error) {
            next(error)
        }
    }

    static async postSosialMedia(req, res, next) {
        try {
            const {nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan} = req.body
            const insertedData = await SosialMedia.create({nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan})
            res.status(201).json({data: insertedData, message: 'Data inserted successfully'})
        } catch (error) {
            next(error)
        }
    }

    static async putSosialMedia(req, res, next) {
        try {
            const id = req.params.id
            const {nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan} = req.body
            const updatedData = await SosialMedia.update({nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan}, {where: {id}})
            if(updatedData[0] === 1){
                res.status(200).json({message: 'Data updated successfully'})
            }else{
                next({name: 'NotFoundError', statusCode: 400, message: 'Data not found'})
            }
        } catch (error) {
            next(error)
        }
    }

    static async deleteSosialMedia(req, res, next) {
        try {
            const id = req.params.id
            const deletedData = await SosialMedia.destroy({where: {id}})
            console.log(deletedData);
            if(deletedData === 1){
                res.status(200).json({message: 'Data deleted successfully'})
            }else{
                next({name: 'NotFoundError', statusCode: 400, message: 'Data not found'})
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller