const {sequelize} = require ("../../connection");
const {ThemeModel} = require ("../../model/themes.model");
const ThemesService = require ("../../service/themes.service");

const listar = async function (req, res) {
    console.log ("Listar temas");
    try {
        const themes = await ThemesService.listar(req.query.filtro || '');
        if (themes) {
            // en users[0] se encuentra el listado de lo que se recupera desde el sql
            res.json({
                success: true,
                temas: themes
            });
        } else {
            res.json({
                success: true,
                temas: []
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        });
    }
};