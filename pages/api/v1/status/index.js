function status(request, response) {
    return response.status(200).send({ chave: "Deu boa!" })
}

export default status