// lógica:
    // addFavorite
    // removeFavorite
    // getFavorites

    // en vez de validar en un middleware: 
    // if (!name || price <= 0) {
    //   return res.status(400).json({ message: "Invalid data" });
    // } NO SEGURA DE QUE SEA ASI

// manejo de errores:
    // try {
    //   ...
    // } catch (error) {
    //   res.status(500).json({ message: "Server error" });
    // }