//lógica:
    // createDish
    // getDishes
    // getDishById
    // updateDish
    // deleteDish
    // getDishesByRestaurant

// en vez de validar en un middleware: 
    // if (!name || price <= 0) {
    //   return res.status(400).json({ message: "Invalid data" });
    // }

// manejo de errores mejor aquí que en errorMiddleware:
    // try {
    //   ...
    // } catch (error) {
    //   res.status(500).json({ message: "Server error" });
    // }