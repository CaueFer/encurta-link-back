const shortid = require("shortid");
const URL = require("../models/url.model");

async function generateNewShortUrl(req, res) {
  const { redirectUrl } = req.body;

  if (!redirectUrl) return res.status(400).json({ message: "Url inválida." });

  try {
    const shortId = shortid.generate();

    await URL.create({
      shortId: shortId,
      redirectUrl,
      visitHistory: [],
    });

    return res
      .status(201)
      .json({ message: "URL encurtada criada com sucesso!", url: shortId });
  } catch (error) {
    if (error)
      return res
        .status(400)
        .json({ message: "Erro, tenta novamente mais tarde!" });
  }
}

async function getUrlShorted(req, res) {
  const { shortId } = req.params;

  if (!shortId) return res.status(400).json({ message: "ShortId inválido." });

  try {
    const urlItem = await URL.findOneAndUpdate({
      shortId
    }, {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      }
    });

    res.redirect(urlItem.redirectUrl)
  } catch (error) {
    if (error)
      return res
        .status(400)
        .json({ message: "Erro, tenta novamente mais tarde!" });
  }
}

module.exports = {
  generateNewShortUrl,
  getUrlShorted,
};
