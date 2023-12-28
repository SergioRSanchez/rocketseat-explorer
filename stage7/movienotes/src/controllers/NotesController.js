const knex = require("../database/knex");

class NotesController {
  async create(req, res) {
    const { title, description, rating, tags } = req.body
    const { user_id } = req.params

    const [note_id] = await knex("notes").insert({
      title,
      description,
      rating,
      user_id
    })

    const tagInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    })

    await knex("tags").insert(tagInsert)

    res.json()
  }
}