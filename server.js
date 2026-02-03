//importacion de las librerias

const express = require('express'); //importamos express como contenedro web y poder visualizar la webapp
const axios = require('axios'); //importamos axios para peticiones HTTP
const path = require('path'); //importamos path para poder manejar las rutas de los archivos
require('dotenv').config(); //importamos dotenv para poder manejar las variables de entorno

const app = express(); //creamos la instancia de express
const PORT = process.env.PORT || 40145;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configurar vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Variables globales para APIs (en producción usar variables de entorno)
app.locals.googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyCuIPgNfPmDEb9i9a7YZsEHFHXqbKU5xPU';
app.locals.openStreetMapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

// Rutas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Comparación de APIs de Mapas',
        googleMapsApiKey: app.locals.googleMapsApiKey,
        initialLocation: {
            lat: 20.571044,
            lng: -97.971944,
            name: 'Universidad Tecnologica de Xicotepec de Juarez'
        }
    });
});

app.get('/geocode', async (req, res) => {
    const { address } = req.query;

    if (!address) {
        return res.status(400).json({ error: 'Dirección requerida' });
    }

    try {
        // Usar Nominatim (OpenStreetMap) para geocodificación gratuita
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
                q: address,
                format: 'json',
                limit: 1
            },
            headers: {
                'User-Agent': 'GeolocationComparisonApp/1.0'
            }
        });
        if (response.data && response.data.length > 0) {
            const result = response.data[0];
            res.json({
                lat: parseFloat(result.lat),
                lng: parseFloat(result.lon),
                name: result.display_name,
                success: true
            });
        } else {
            res.status(404).json({ error: 'Dirección no encontrada', success: false });
        }
    } catch (error) {
        console.error('Error en geocodificación:', error);
        res.status(500).json({ error: 'Error en el servidor', success: false });
    }
});

app.get('/reverse-geocode', async (req, res) => {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
        return res.status(400).json({ error: 'Coordenadas requeridas' });
    }
    try {
        const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
            params: {
                lat: lat,
                lon: lng,
                format: 'json'
            },
            headers: {
                'User-Agent': 'GeolocationComparisonApp/1.0'
            }
        });
        if (response.data) {
            res.json({
                address: response.data.display_name,
                success: true
            });
        } else {
            res.status(404).json({ error: 'Dirección no encontrada', success: false });
        }
    } catch (error) {
        console.error('Error en reverse geocoding:', error);
        res.status(500).json({ error: 'Error en el servidor', success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log('Google Maps API Key:', app.locals.googleMapsApiKey ? 'Configurada' : 'No configurada');
});