const mongoose = require('mongoose');

const placesSchema = new mongoose.Schema({
    wkt_geom: {
        type: String,
        required: false,
    },
    id: {
        type: Number,
        require: false,
    },
    Nouveau_No: {
        type: String,
        require: false,
    },
    Type: {
        type: String,
        require: false,
    },
    wilaya: {
        type: String,
        require: false,
    },
    Ancien_Nom: {
        type: String,
        require: false,
    },
    Dispositio: {
        type: String,
        require: false,
    },
    Code_Wilay: {
        type: Number,
        require: false,
    },
    Code_Commu: {
        type: Number,
        require: false,
    },
    Commune: {
        type: String,
        require: false,
    },
    PositionKm: {
        type: String,
        require: false,
    },
    M_Oeuvre: {
        type: String,
        require: false,
    },
    LigneFerro: {
        type: String,
        require: false,
    },
    StyleArchi: {
        type: String,
        require: false,
    },
    Date_Const: {
        type: String,
        require: false,
    },
    Date_Recon: {
        type: String,
        require: false,
    },
    Cie_Ferrov: {
        type: String,
        require: false,
    },
    Etat_Actu: {
        type: String,
        require: false,
    },
    LattitudeY: {
        type: String,
        require: false,
    },
    LongitudeX: {
        type: String,
        require: false,
    }
},{timestamps: true});


const places = mongoose.model('places', placesSchema);

module.exports = places;