import { Injectable } from '@angular/core';

export interface Mtim {
  codigo: String,
  descripcion: String,
  modulo: String,
  identificador: String,
  estado: String
}

const mtim: Mtim[] = [
  {
    "codigo": "1026",
    "descripcion": "PRUEBAS WILBER",
    "modulo": "CB",
    "identificador": " ",
    "estado": "ac"
  },
  {
    "codigo": "130",
    "descripcion": "DOCUMENTO DE CONSIGNACION",
    "modulo": "CB",
    "identificador": " ",
    "estado": "ac"
  },
  {
    "codigo": "54",
    "descripcion": "ADICION PAC PTO. PPTO INGRESOS",
    "modulo": "PR",
    "identificador": "11",
    "estado": "ac"
  },
  {
    "codigo": "55",
    "descripcion": "ADIC.PAC PTO. PPTO.GASTO FUNC.",
    "modulo": "PR",
    "identificador": "09",
    "estado": "ac"
  },
  {
    "codigo": "56",
    "descripcion": "ADIC. PPTO Y PAC PPTO INGRESOS",
    "modulo": "PR",
    "identificador": "11",
    "estado": "ac"
  },
  {
    "codigo": "57",
    "descripcion": "ADIC. PPTO Y PAC PPTO. FUNCION",
    "modulo": "PR",
    "identificador": "09",
    "estado": "ac"
  },
  {
    "codigo": "58",
    "descripcion": "DISMIN.PPTO Y PAC PPTO INGRESO",
    "modulo": "PR",
    "identificador": "11",
    "estado": "ac"
  },
  {
    "codigo": "59",
    "descripcion": "DISMIN.PPTO Y PAC PPTO.FUNCION",
    "modulo": "PR",
    "identificador": "09",
    "estado": "ac"
  },
  {
    "codigo": "61",
    "descripcion": "EJEC. MENOR VALOR GTO. FUNCION",
    "modulo": "PR",
    "identificador": "16",
    "estado": "ac"
  },
  {
    "codigo": "62",
    "descripcion": "EJECUCION INGRESOS MENOR VALOR",
    "modulo": "PR",
    "identificador": "15",
    "estado": "ac"
  },
  {
    "codigo": "63",
    "descripcion": "DCTO. EJECUCION DE INGRESOS",
    "modulo": "PR",
    "identificador": "11",
    "estado": "ac"
  },
  {
    "codigo": "209",
    "descripcion": "REGISTRO CERTIFICADO INVERSION",
    "modulo": "PR",
    "identificador": "10",
    "estado": "ac"
  },
  {
    "codigo": "210",
    "descripcion": "EJE. MENOR VALOR GTO.INVERSION",
    "modulo": "PR",
    "identificador": "17",
    "estado": "ac"
  },
  {
    "codigo": "211",
    "descripcion": "REGISTRO EJECUCION INVERSION",
    "modulo": "PR",
    "identificador": "10",
    "estado": "ac"
  }
]

@Injectable({
  providedIn: 'root'
})
export class MtimService {
  getMtim(): Mtim[]{
    return mtim
  }
}
