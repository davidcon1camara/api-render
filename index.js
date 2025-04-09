const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json({
    "Ventas": [
        {
            "Fecha": "7/4/24",
            "Cliente": "Janet Restrepo",
            "Factura": "1",
            "Producto": "Stress Away",
            "Precio": "27",
            "Cantidad": "1",
            "Total": "27"
        },
        {
            "Fecha": "7/4/24",
            "Cliente": "Jose Bermeo",
            "Factura": "2",
            "Producto": "Stress Away",
            "Precio": "27",
            "Cantidad": "1",
            "Total": "27"
        },
        {
            "Fecha": "7/4/24",
            "Cliente": "Carlos Montece",
            "Factura": "3",
            "Producto": "Tangerine",
            "Precio": "26",
            "Cantidad": "1",
            "Total": "26"
        },
        {
            "Fecha": "7/5/24",
            "Cliente": "William Parra",
            "Factura": "4",
            "Producto": "Jazmin",
            "Precio": "22",
            "Cantidad": "1",
            "Total": "22"
        },
        {
            "Fecha": "8/4/24",
            "Cliente": "Jose Bermeo",
            "Factura": "5",
            "Producto": "Peace and Calm",
            "Precio": "25",
            "Cantidad": "1",
            "Total": "25"
        },
        {
            "Fecha": "7/5/24",
            "Cliente": "Efren Delgado",
            "Factura": "6",
            "Producto": "Tangerine",
            "Precio": "26",
            "Cantidad": "1",
            "Total": "26"
        },
        {
            "Fecha": "7/5/24",
            "Cliente": "William Parra",
            "Factura": "7",
            "Producto": "Menta",
            "Precio": "22",
            "Cantidad": "1",
            "Total": "22"
        },
        {
            "Fecha": "7/15/24",
            "Cliente": "Ana Alvia",
            "Factura": "8",
            "Producto": "Harmony",
            "Precio": "25",
            "Cantidad": "1",
            "Total": "25"
        },
        {
            "Fecha": "8/24/24",
            "Cliente": "Carlos Espin",
            "Factura": "9",
            "Producto": "Lima",
            "Precio": "27",
            "Cantidad": "2",
            "Total": "54"
        },
        {
            "Fecha": "7/8/24",
            "Cliente": "Janet Restrepo",
            "Factura": "10",
            "Producto": "Seed To seal",
            "Precio": "28",
            "Cantidad": "1",
            "Total": "28"
        },
        {
            "Fecha": "7/10/24",
            "Cliente": "Janet Restrepo",
            "Factura": "11",
            "Producto": "Seed To seal",
            "Precio": "28",
            "Cantidad": "2",
            "Total": "56"
        },
        {
            "Fecha": "7/21/24",
            "Cliente": "Xavier Murillo",
            "Factura": "12",
            "Producto": "Jazmin",
            "Precio": "22",
            "Cantidad": "1",
            "Total": "22"
        },
        {
            "Fecha": "9/2/24",
            "Cliente": "Carlos Espin",
            "Factura": "13",
            "Producto": "Jazmin",
            "Precio": "22",
            "Cantidad": "3",
            "Total": "66"
        },
        {
            "Fecha": "7/18/24",
            "Cliente": "Humberto Ramirez",
            "Factura": "14",
            "Producto": "Harmony",
            "Precio": "25",
            "Cantidad": "1",
            "Total": "25"
        },
        {
            "Fecha": "7/15/24",
            "Cliente": "Marcos Izquierdo",
            "Factura": "15",
            "Producto": "Lima",
            "Precio": "27",
            "Cantidad": "1",
            "Total": "27"
        },
        {
            "Fecha": "7/31/24",
            "Cliente": "Jose Bermeo",
            "Factura": "16",
            "Producto": "Peace and Calm",
            "Precio": "25",
            "Cantidad": "1",
            "Total": "25"
        },
        {
            "Fecha": "9/14/24",
            "Cliente": "Blas Troya",
            "Factura": "17",
            "Producto": "Peace and Calm",
            "Precio": "25",
            "Cantidad": "3",
            "Total": "75"
        },
        {
            "Fecha": "9/14/24",
            "Cliente": "Efren Delgado",
            "Factura": "18",
            "Producto": "Joy",
            "Precio": "21",
            "Cantidad": "2",
            "Total": "42"
        },
        {
            "Fecha": "9/16/24",
            "Cliente": "Blas Troya",
            "Factura": "19",
            "Producto": "Stress Away",
            "Precio": "27",
            "Cantidad": "1",
            "Total": "27"
        },
        {
            "Fecha": "9/16/24",
            "Cliente": "Jose Bermeo",
            "Factura": "20",
            "Producto": "Purification",
            "Precio": "27",
            "Cantidad": "1",
            "Total": "27"
        },
        {
            "Fecha": "9/18/24",
            "Cliente": "Efren Delgado",
            "Factura": "21",
            "Producto": "Stress Away",
            "Precio": "27",
            "Cantidad": "1",
            "Total": "27"
        },
        {
            "Fecha": "10/4/24",
            "Cliente": "Carlos Montece",
            "Factura": "22",
            "Producto": "Vainilla",
            "Precio": "28",
            "Cantidad": "1",
            "Total": "28"
        },
        {
            "Fecha": "10/4/24",
            "Cliente": "Carlos Espin",
            "Factura": "23",
            "Producto": "Vainilla",
            "Precio": "28",
            "Cantidad": "1",
            "Total": "28"
        },
        {
            "Fecha": "10/4/24",
            "Cliente": "Xavier Murillo",
            "Factura": "24",
            "Producto": "Deep Relief",
            "Precio": "24",
            "Cantidad": "2",
            "Total": "48"
        },
        {
            "Fecha": "10/4/24",
            "Cliente": "Jaime Zaid",
            "Factura": "25",
            "Producto": "Deep Relief",
            "Precio": "24",
            "Cantidad": "3",
            "Total": "72"
        },
        {
            "Fecha": "10/11/24",
            "Cliente": "Xavier Murillo",
            "Factura": "26",
            "Producto": "Menta",
            "Precio": "22",
            "Cantidad": "3",
            "Total": "66"
        },
        {
            "Fecha": "10/3/24",
            "Cliente": "Xavier Murillo",
            "Factura": "27",
            "Producto": "Lavanda",
            "Precio": "24",
            "Cantidad": "1",
            "Total": "24"
        },
        {
            "Fecha": "10/18/24",
            "Cliente": "Jose Bermeo",
            "Factura": "28",
            "Producto": "Jazmin",
            "Precio": "22",
            "Cantidad": "1",
            "Total": "22"
        },
        {
            "Fecha": "11/3/24",
            "Cliente": "Jorman Valdez",
            "Factura": "29",
            "Producto": "Stress Away",
            "Precio": "27",
            "Cantidad": "3",
            "Total": "81"
        },
        {
            "Fecha": "10/23/24",
            "Cliente": "Carlos Montece",
            "Factura": "30",
            "Producto": "Menta",
            "Precio": "22",
            "Cantidad": "3",
            "Total": "66"
        },
        {
            "Fecha": "11/6/24",
            "Cliente": "Leonardo Salazar",
            "Factura": "31",
            "Producto": "Tangerine",
            "Precio": "26",
            "Cantidad": "1",
            "Total": "26"
        },
        {
            "Fecha": "11/6/24",
            "Cliente": "Blas Troya",
            "Factura": "32",
            "Producto": "Lima",
            "Precio": "27",
            "Cantidad": "2",
            "Total": "54"
        },
        {
            "Fecha": "11/12/24",
            "Cliente": "Jose Bermeo",
            "Factura": "33",
            "Producto": "R.C.",
            "Precio": "28",
            "Cantidad": "2",
            "Total": "56"
        },
        {
            "Fecha": "11/15/24",
            "Cliente": "Patricia Galaeco",
            "Factura": "34",
            "Producto": "Stress Away",
            "Precio": "27",
            "Cantidad": "1",
            "Total": "27"
        },
        {
            "Fecha": "11/15/24",
            "Cliente": "Janet Restrepo",
            "Factura": "35",
            "Producto": "Lavanda",
            "Precio": "24",
            "Cantidad": "1",
            "Total": "24"
        },
        {
            "Fecha": "11/20/24",
            "Cliente": "Carlos Espin",
            "Factura": "36",
            "Producto": "Harmony",
            "Precio": "25",
            "Cantidad": "1",
            "Total": "25"
        },
        {
            "Fecha": "11/20/24",
            "Cliente": "Blas Troya",
            "Factura": "37",
            "Producto": "Tangerine",
            "Precio": "26",
            "Cantidad": "1",
            "Total": "26"
        },
        {
            "Fecha": "11/20/24",
            "Cliente": "Ana Alvia",
            "Factura": "38",
            "Producto": "Seed To seal",
            "Precio": "28",
            "Cantidad": "2",
            "Total": "56"
        },
        {
            "Fecha": "11/25/24",
            "Cliente": "William Parra",
            "Factura": "39",
            "Producto": "Joy",
            "Precio": "21",
            "Cantidad": "1",
            "Total": "21"
        },
        {
            "Fecha": "12/2/24",
            "Cliente": "Blas Troya",
            "Factura": "40",
            "Producto": "Seed To seal",
            "Precio": "28",
            "Cantidad": "1",
            "Total": "28"
        },
        {
            "Fecha": "12/10/24",
            "Cliente": "Humberto Ramirez",
            "Factura": "41",
            "Producto": "Purification",
            "Precio": "27",
            "Cantidad": "1",
            "Total": "27"
        },
        {
            "Fecha": "12/15/24",
            "Cliente": "Leonardo Salazar",
            "Factura": "42",
            "Producto": "Stress Away",
            "Precio": "27",
            "Cantidad": "3",
            "Total": "81"
        },
        {
            "Fecha": "12/22/24",
            "Cliente": "Jaime Espinel",
            "Factura": "43",
            "Producto": "Deep Relief",
            "Precio": "24",
            "Cantidad": "1",
            "Total": "24"
        },
        {
            "Fecha": "12/26/24",
            "Cliente": "Jaime Espinel",
            "Factura": "44",
            "Producto": "Harmony",
            "Precio": "25",
            "Cantidad": "1",
            "Total": "25"
        },
        {
            "Fecha": "12/30/24",
            "Cliente": "Patricia Galaeco",
            "Factura": "45",
            "Producto": "R.C.",
            "Precio": "28",
            "Cantidad": "1",
            "Total": "28"
        },
        {
            "Fecha": "1/5/25",
            "Cliente": "Carlos Espin",
            "Factura": "46",
            "Producto": "Purification",
            "Precio": "27",
            "Cantidad": "2",
            "Total": "54"
        },
        {
            "Fecha": "1/6/25",
            "Cliente": "William Parra",
            "Factura": "47",
            "Producto": "Joy",
            "Precio": "21",
            "Cantidad": "1",
            "Total": "21"
        },
        {
            "Fecha": "1/7/25",
            "Cliente": "Humberto Ramirez",
            "Factura": "48",
            "Producto": "Deep Relief",
            "Precio": "24",
            "Cantidad": "1",
            "Total": "24"
        },
        {
            "Fecha": "1/10/25",
            "Cliente": "Humberto Ramirez",
            "Factura": "49",
            "Producto": "Menta",
            "Precio": "22",
            "Cantidad": "1",
            "Total": "22"
        },
        {
            "Fecha": "1/12/25",
            "Cliente": "Ana Alvia",
            "Factura": "50",
            "Producto": "R.C.",
            "Precio": "28",
            "Cantidad": "2",
            "Total": "56"
        },
        {
            "Fecha": "1/16/25",
            "Cliente": "William Parra",
            "Factura": "51",
            "Producto": "Menta",
            "Precio": "22",
            "Cantidad": "6",
            "Total": "132"
        },
        {
            "Fecha": "1/15/25",
            "Cliente": "Humberto Ramirez",
            "Factura": "52",
            "Producto": "R.C.",
            "Precio": "28",
            "Cantidad": "2",
            "Total": "56"
        },
        {
            "Fecha": "1/21/25",
            "Cliente": "Marcos Izquierdo",
            "Factura": "53",
            "Producto": "R.C.",
            "Precio": "28",
            "Cantidad": "1",
            "Total": "28"
        },
        {
            "Fecha": "2/2/25",
            "Cliente": "Jorman Valdez",
            "Factura": "54",
            "Producto": "Lavanda",
            "Precio": "24",
            "Cantidad": "1",
            "Total": "24"
        },
        {
            "Fecha": "2/10/25",
            "Cliente": "Humberto Ramirez",
            "Factura": "55",
            "Producto": "Lavanda",
            "Precio": "24",
            "Cantidad": "1",
            "Total": "24"
        },
        {
            "Fecha": "2/12/25",
            "Cliente": "Carlos Espin",
            "Factura": "56",
            "Producto": "Joy",
            "Precio": "21",
            "Cantidad": "1",
            "Total": "21"
        },
        {
            "Fecha": "2/15/25",
            "Cliente": "Blas Troya",
            "Factura": "57",
            "Producto": "Lima",
            "Precio": "27",
            "Cantidad": "1",
            "Total": "27"
        },
        {
            "Fecha": "2/20/25",
            "Cliente": "Efren Delgado",
            "Factura": "58",
            "Producto": "Jazmin",
            "Precio": "22",
            "Cantidad": "1",
            "Total": "22"
        },
        {
            "Fecha": "2/22/25",
            "Cliente": "Jose Bermeo",
            "Factura": "59",
            "Producto": "Menta",
            "Precio": "22",
            "Cantidad": "4",
            "Total": "88"
        },
        {
            "Fecha": "2/26/25",
            "Cliente": "Xavier Murillo",
            "Factura": "60",
            "Producto": "Peace and Calm",
            "Precio": "25",
            "Cantidad": "1",
            "Total": "25"
        },
        {
            "Fecha": "3/1/25",
            "Cliente": "Patricia Galaeco",
            "Factura": "61",
            "Producto": "Harmony",
            "Precio": "25",
            "Cantidad": "1",
            "Total": "25"
        },
        {
            "Fecha": "3/2/25",
            "Cliente": "Leonardo Salazar",
            "Factura": "62",
            "Producto": "Harmony",
            "Precio": "25",
            "Cantidad": "2",
            "Total": "50"
        },
        {
            "Fecha": "3/10/25",
            "Cliente": "Patricia Galaeco",
            "Factura": "63",
            "Producto": "Stress Away",
            "Precio": "27",
            "Cantidad": "1",
            "Total": "27"
        },
        {
            "Fecha": "3/12/25",
            "Cliente": "Ana Alvia",
            "Factura": "64",
            "Producto": "Deep Relief",
            "Precio": "24",
            "Cantidad": "1",
            "Total": "24"
        },
        {
            "Fecha": "3/15/25",
            "Cliente": "Xavier Murillo",
            "Factura": "65",
            "Producto": "Harmony",
            "Precio": "25",
            "Cantidad": "1",
            "Total": "25"
        },
        {
            "Fecha": "3/16/25",
            "Cliente": "Jorman Valdez",
            "Factura": "66",
            "Producto": "Harmony",
            "Precio": "25",
            "Cantidad": "1",
            "Total": "25"
        },
        {
            "Fecha": "3/20/25",
            "Cliente": "Marcos Izquierdo",
            "Factura": "67",
            "Producto": "Lima",
            "Precio": "27",
            "Cantidad": "1",
            "Total": "27"
        },
        {
            "Fecha": "3/22/25",
            "Cliente": "Leonardo Salazar",
            "Factura": "68",
            "Producto": "Menta",
            "Precio": "22",
            "Cantidad": "4",
            "Total": "88"
        },
        {
            "Fecha": "3/26/25",
            "Cliente": "Jose Bermeo",
            "Factura": "69",
            "Producto": "Menta",
            "Precio": "22",
            "Cantidad": "6",
            "Total": "132"
        },
        {
            "Fecha": "3/30/25",
            "Cliente": "Jose Bermeo",
            "Factura": "70",
            "Producto": "Vainilla",
            "Precio": "28",
            "Cantidad": "1",
            "Total": "28"
        },
        {
            "Fecha": "4/1/25",
            "Cliente": "Jaime Zaid",
            "Factura": "71",
            "Producto": "Purification",
            "Precio": "27",
            "Cantidad": "2",
            "Total": "54"
        },
        {
            "Fecha": "4/2/25",
            "Cliente": "Jose Bermeo",
            "Factura": "72",
            "Producto": "Harmony",
            "Precio": "25",
            "Cantidad": "2",
            "Total": "50"
        },
        {
            "Fecha": "4/2/25",
            "Cliente": "William Parra",
            "Factura": "73",
            "Producto": "Vainilla",
            "Precio": "28",
            "Cantidad": "2",
            "Total": "56"
        },
        {
            "Fecha": "4/3/25",
            "Cliente": "William Parra",
            "Factura": "74",
            "Producto": "Stress Away",
            "Precio": "27",
            "Cantidad": "3",
            "Total": "81"
        },
        {
            "Fecha": "4/4/25",
            "Cliente": "Jaime Espinel",
            "Factura": "75",
            "Producto": "R.C.",
            "Precio": "28",
            "Cantidad": "2",
            "Total": "56"
        },
        {
            "Fecha": "4/4/25",
            "Cliente": "Jaime Espinel",
            "Factura": "75",
            "Producto": "Peace and Calm",
            "Precio": "25",
            "Cantidad": "1",
            "Total": "25"
        }
    ]});
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
