class SessionController {
  async create(request, response) {
    const { email, password } = request.body;

    return response.json({ email, passwords });
  }
}

module.exports = SessionController;