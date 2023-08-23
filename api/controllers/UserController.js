const database = require('../models/index');

class UserController {
   static async readBInfos(req, res){
      try{
         const dbInfo = await database.Usuarios.findAll();
         
         console.log(`📖 READ. Horário: ${new Date()}`);
         return res.status(200).json(dbInfo);
      } catch(error){
         console.log('❌ SERVER RESPONSE ERROR')
         return res.status(500).send('ERRO DE RESPOSTA DE SERVIDOR: ',error.message);
      };
   }

   static async createDBInfo(req, res){
      const info = req.body;

      try{
         const newInfo = await database.Usuarios.create(info);
         
         console.log(`📝 CREATE. Horário: ${new Date()}`);
         return res.status(200).json(newInfo);
   
      } catch(error){
         console.log('❌ SERVER RESPONSE ERROR')
         return res.status(500).send('ERRO DE RESPOSTA DE SERVIDOR: ',error.message);
      };
   };

   static async putDBInfo(req, res){
      const info = req.body;
      const { id } = req.params;

      try{  
         const putInfo = await database.Usuarios.update(info, {
            where: {
               id: id
            }
         });

         putInfo;
         console.log(`🖋 PUT. Horário: ${new Date()}`);
         return res.status(200).send('Dados alterados com sucesso!');

      } catch(error){
         console.log('❌ SERVER RESPONSE ERROR')
         return res.status(500).send('ERRO DE RESPOSTA DE SERVIDOR: ',error.message);
      };
   };

   static async deleteDBInfo(req, res){
      const { id } = req.params;

      try{
         const removeInfo = await database.Usuarios.destroy({
            where: {
               id: id
            }
         });

         removeInfo;
         console.log(`📂 REMOVE. Horário: ${new Date()}`);
         return res.status(200).send('Dados removidos com sucesso!');

      } catch(error){
         console.log('❌ SERVER RESPONSE ERROR')
         return res.status(500).send('ERRO DE RESPOSTA DE SERVIDOR: ',error.message);
      };
   };
};

module.exports = UserController;