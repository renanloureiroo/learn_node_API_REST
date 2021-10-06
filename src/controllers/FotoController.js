/* eslint-disable camelcase */
import multer from 'multer';
import multerConfig from '../config/multer';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('avatar');

class AvatarController {
  create(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      const { aluno_id } = req.body;

      if (!aluno_id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      try {
        const { originalname, filename } = req.file;

        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }
    });
  }
}

export default new AvatarController();
