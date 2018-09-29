
class Convertor {
    CToF(unidad) {
        return ((9 * unidad) / 5) + 32;
    }
    FToC(unidad) {
        return (5 * (unidad - 32)) / 9;
    }
    KToF(unidad) {
        return ((9 * (unidad - 273.15)) / 5) + 32;
    }
    FToK(unidad) {
        return ((5 * (unidad - 32)) / 9) + 273.15;
    }
    KToC(unidad) {
        return unidad - 273.15;
    }
    CToK(Variable) {
        return unidad + 273.15;
    }
    MtoCm(unidad) {
        return Variable * 100;
    }
    CmtoM(unidad) {
        return unidad / 100;
    }
    KmToM(unidad) {
        return Variunidadable * 1000;
    }
    MToKm(unidad) {
        return unidad / 1000;
    }
    PToM(unidad) {
        return unidad * 0.3048;
    }
    MToP(unidad) {
        return unidad / 0.3048;
    }
    convertir(medida, medidaActual, unidadAConvertir, tipoMedida) {
        switch (tipoMedida) {
            case 'Temperatura':
                if (medidaActual == "c" && unidadAConvertir == "f") {
                    alert("Resultado: " + this.CToF(medida) + " fahrenheit");
                }
                else if (medidaActual == "f" && unidadAConvertir == "c") {
                    alert("Resultado: " + this.FToC(medida) + " celsius");
                }
                else if (medidaActual == "k" && unidadAConvertir == "f") {
                    alert("Resultado: " + this.KToF(medida) + " fahrenheit");
                }
                else if (medidaActual == "f" && unidadAConvertir == "k") {
                    alert("Resultado: " + this.FToK(medida) + " kelvin");
                }
                else if (medidaActual == "k" && unidadAConvertir == "c") {
                    alert("Resultado: " + this.KToC(medida) + " celsius");
                }
                else if (medidaActual == "c" && unidadAConvertir == "k") {
                    alert("Resultado: " + this.CToK(medida) + " kelvin");
                }
                break;
            case 'Longitud':
                if (medidaActual == "m" && unidadAConvertir == "cm") {
                    alert("Resultado: " + this.MtoCm(medida) + " centimetros");
                }
                else if (medidaActual == "cm" && unidadAConvertir == "m") {
                    alert("Resultado: " + this.CmtoM(medida) + " metros");
                }
                else if (medidaActual == "km" && unidadAConvertir == "m") {
                    alert("Resultado: " + this.KmToM(medida) + " metros");
                }
                else if (medidaActual == "m" && unidadAConvertir == "km") {
                    alert("Resultado: " + this.MToKm(medida) + " kilometros");
                }
                else if (medidaActual == "p" && unidadAConvertir == "m") {
                    alert("Resultado: " + this.PToM(medida) + " metros");
                }
                else if (medidaActual == "m" && unidadAConvertir == "p") {
                    alert("Resultado: " + this.MToP(medida) + " pies");
                }
                break;
            default:
                alert("Tipo invalido");
                break;
        }
    }
}