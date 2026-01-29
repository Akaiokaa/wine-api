//place controller functions here...
import * as wineService from './../services/wine.service.js'
// res.render("default", {
//     title: "MVC Starter App",
//     subtitle: "Express + EJS + Static Assets"
// });

export const getAllWines = (req, res) => {
    const wines = wineService.getAll();

    res.status(200).json({
        message: "Wines retrieved successfully.",
        data: wines
    })
}
// export const wineInfo = (req, res) => {
    
// }