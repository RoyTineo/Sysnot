import { pool } from "../db.js";

// opteniendo personas
export const getPersonas = async (req, res) => {
  try {
    // throw new Error("My error");
    const [rows] = await pool.query("SELECT * FROM persona");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo esta fallando" });
  }
};

export const getPersonaID = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM persona WHERE id_persona =?",
      [req.params.id]
    );

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo esta fallando" });
  }
};

//agragando personas
export const postPersonas = async (req, res) => {
    const {
      nombre,
      apellido_paterno,
      apellido_materno,
      dni,
      direccion,
      ref_direccion,
      lugar_trabajo,
      ref_lugar_trabajo,
    } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO persona(nombre, apellido_paterno, apellido_materno,dni,direccion,ref_direccion,lugar_trabajo,ref_lugar_trabajo) VALUES (?,?,?,?,?,?,?,?)",
      [
        nombre,
        apellido_paterno,
        apellido_materno,
        dni,
        direccion,
        ref_direccion,
        lugar_trabajo,
        ref_lugar_trabajo,
      ]
    );

    res.send({
      id_persona: rows.insertId,
      nombre,
      apellido_paterno,
      apellido_materno,
      dni,
      direccion,
      ref_direccion,
      lugar_trabajo,
      ref_lugar_trabajo,
    });
  } catch (error) {
    return res.status(500).json({ message: "Algo esta fallando" });
  }
};
export const deletePersona = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM persona WHERE id_persona = ?",
      [req.params.id]
    );

    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Persona no encontrada" });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Algo esta fallando" });
  }
};

export const updatePersonas = async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    dni,
    direccion,
    ref_direccion,
    lugar_trabajo,
    ref_lugar_trabajo,
  } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE persona SET nombre = IFNULL(?,nombre),apellido_paterno =IFNULL(?,apellido_paterno), apellido_materno = IFNULL(?,apellido_materno), dni = IFNULL(?,dni), direccion = IFNULL(?,direccion),ref_direccion = IFNULL(?,ref_direccion),lugar_trabajo = IFNULL(?,lugar_trabajo),ref_lugar_trabajo = IFNULL(?,ref_lugar_trabajo) WHERE id_persona = ?",
      [
        nombre,
        apellido_paterno,
        apellido_materno,
        dni,
        direccion,
        ref_direccion,
        lugar_trabajo,
        ref_lugar_trabajo,
        id,
      ]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Persona no encontrada" });

    const [rows] = await pool.query(
      "SELECT * FROM persona WHERE id_persona=?",
      [id]
    );

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo esta fallando" });
  }
};
