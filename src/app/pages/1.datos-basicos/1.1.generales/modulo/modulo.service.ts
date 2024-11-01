import { Injectable } from '@angular/core';

export interface Mmod {
  codigo: String;
  descripcion: String;
  estado: String;
}

const mmod: Mmod[] = [
  { codigo: 'CO', descripcion: 'CONTABILIDAD', estado: 'ac' },
  { codigo: 'PR', descripcion: 'PRESUPUESTO', estado: 'ac' },
  {
    codigo: 'CC',
    descripcion: 'CUENTAS POR COBRAR',
    estado: 'ac',
  },
  { codigo: 'BA', descripcion: 'BANCOS', estado: 'ac' },
  { codigo: 'CP', descripcion: 'CUENTAS POR PAGAR', estado: 'ac' },
  { codigo: 'IN', descripcion: 'INVERSIONES', estado: 'ac' },
  { codigo: 'CB', descripcion: 'CAJA BANCOS', estado: 'ac' },
  {
    codigo: 'SO',
    descripcion: 'SOLICITUDES PRESUPUESTO',
    estado: 'ac',
  },
  {
    codigo: 'OF',
    descripcion: 'OBLIGACIONES FINANCIERAS',
    estado: 'ac',
  },
  { codigo: 'TE', descripcion: 'TESORERIA', estado: 'ac' },
  { codigo: 'DB', descripcion: 'DATOS BASICOS', estado: 'ac' },
  { codigo: 'AU', descripcion: 'AUDITORIA', estado: 'ac' },
  { codigo: 'UT', descripcion: 'UTILIDADES', estado: 'ac' },
  { codigo: 'FC', descripcion: 'FUNCIONES A COSTO', estado: 'ac' },
  { codigo: 'AC', descripcion: 'COSTOS ABC', estado: 'ac' },
  { codigo: 'CS', descripcion: 'costos', estado: 'ac' },
  { codigo: '01', descripcion: 'prue hola', estado: 'ce' },
  { codigo: 'MM', descripcion: 'MEDIOS MAGNETICOS', estado: 'ac' },
  { codigo: 'A1', descripcion: 'NULO', estado: 'ac' },
  {
    codigo: 'CG',
    descripcion: 'CATEGORIA PRESUPUESTAL',
    estado: 'ac',
  },
  {
    codigo: 'EE',
    descripcion: 'EJECUCION DE EGRESOS',
    estado: 'ac',
  },
  {
    codigo: 'EF',
    descripcion: 'ESTADOS FINANCIEROS',
    estado: 'ac',
  },
  {
    codigo: 'EI',
    descripcion: 'EJECUCION DE INGRESOS',
    estado: 'ac',
  },
  {
    codigo: 'FT',
    descripcion: 'FORMATO UNICO TERRITORIAL',
    estado: 'ac',
  },
  {
    codigo: 'LP',
    descripcion: 'LIBROS PRESUPUESTALES',
    estado: 'ac',
  },
];

@Injectable({
  providedIn: 'root',
})
export class MmodService {
  getMmod(): Mmod[] {
    return mmod;
  }
}
