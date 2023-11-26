const express = require('express')
const ruta = express.Router()
const db = require('../db/models/index.js')

ruta.post('/reservar', async (req, res) => {
    let obj = req.body
    console.log(obj)
    let rpta = await db.reserva.create( obj )
    
    let libro = await db.libro.findByPk(obj.libro_id)
    await libro.increment('contador', { by: 1 })
    let persona = await db.persona.findByPk(obj.persona_id)
    await libro.update({ultimo_reservante : persona.nombres})

    res.status(200).json(rpta);
});

ruta.get('/persona', async (req, res) => {
    let obj = req.query
    let id = obj.id
    console.log(id)

    let page = obj.page 
    let pageSize = 4
    let start= (page -1)* pageSize 
    let end = start + pageSize

    let reservas = await db.reserva.findAll({
        order :[['id', 'DESC']],
        where : {
            persona_id : id
        },
        include : {
            model: db.libro,
            as: 'reservado',
        }
    })

    reservas.forEach(p=>{
        console.log(p.reservado.titulo)
    })

    const totalItems = reservas.length
    const totalPages = Math.ceil(totalItems/pageSize)
    let itemL = reservas
    let itemsAPaginar = itemL.slice(start,end)

    itemsAPaginar = JSON.stringify(itemsAPaginar)

    return res.status(200).json( {
        page,
        totalPages,
        pageSize,
        totalItems,
        items: JSON.parse(itemsAPaginar)
        }
    )

});
  
ruta.get('/leer', async (req, res) => {
    let id = req.query.id
    let rpta = await db.reserva.findByPk(id, {
        include : {
            model: db.libro,
            as: 'reservado'
        }, include: {
            model: db.persona,
            as: 'reservante'
        }
    })
    res.status(200).json(rpta);
});

ruta.get('/ultimas', async(req,res)=>{
    let obj = req.query
    let id = obj.id
    let page = obj.page
    let pageSize = 2
    let start= (page -1)* pageSize 
    let end = start + pageSize
    let reservas = await db.reserva.findAll({
        order :[['fecha_inicio', 'DESC']],
        where : {
          persona_id : id
        },
        include : {
          model: db.libro,
          as: 'reservado',
        }
    })
    const totalItems = reservas.length
    const totalPages = Math.ceil(totalItems/pageSize)
    let itemL = reservas
    let itemsAPaginar = itemL.slice(start,end)
    itemsAPaginar = JSON.stringify(itemsAPaginar)
  
    return res.status(200).json( {
          page,
          totalPages,
          pageSize,
          totalItems,
          items: JSON.parse(itemsAPaginar)
          }
    )
})

ruta.get('/ultimasAdmin', async(req,res)=>{
    let obj = req.query
    let page = obj.page
    let pageSize = 2
    let start= (page -1)* pageSize 
    let end = start + pageSize
    let reservas = await db.reserva.findAll({
        order :[['fecha_inicio', 'DESC']],
        include : {
          model: db.libro,
          as: 'reservado',
        }
    })
    const totalItems = reservas.length
    const totalPages = Math.ceil(totalItems/pageSize)
    let itemL = reservas
    let itemsAPaginar = itemL.slice(start,end)
    itemsAPaginar = JSON.stringify(itemsAPaginar)
  
    return res.status(200).json( {
          page,
          totalPages,
          pageSize,
          totalItems,
          items: JSON.parse(itemsAPaginar)
          }
    )
})

ruta.get('/proximos', async(req,res)=>{
    let obj = req.query
    let id = obj.id
    let page = obj.page
    let pageSize = 2
    let start= (page -1)* pageSize 
    let end = start + pageSize
    let reservas = await db.reserva.findAll({
        order :[['fecha_final', 'ASC']],
        where : {
          persona_id : id
        },
        include : {
          model: db.libro,
          as: 'reservado',
        }
    })

    let rpta = []
    let hoy = new Date(obtenerFechaActual())
    reservas.forEach(item => {
        let enFecha = true;
        if(item.fecha_final < hoy){
            enFecha = false;
        }
        if (enFecha){
            rpta.push(item)
        }
    })
    const totalItems = rpta.length
    const totalPages = Math.ceil(totalItems/pageSize)
    let itemL = rpta
    let itemsAPaginar = itemL.slice(start,end)
    itemsAPaginar = JSON.stringify(itemsAPaginar)
  
    return res.status(200).json( {
          page,
          totalPages,
          pageSize,
          totalItems,
          items: JSON.parse(itemsAPaginar)
          }
    )
})

function obtenerFechaActual() {
    const hoy = new Date();
    const year = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    return `${year}-${mes}-${dia}`;
}

module.exports = ruta