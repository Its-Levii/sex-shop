export const cupones = [
  {
    id: 1,
    codigo: "BIENVENIDA10",
    descuento: 10,
    descripcion: "10% de descuento en tu primera compra",
    activo: true,
    usoUnico: true
  },
  {
    id: 2,
    codigo: "PROMO20",
    descuento: 20,
    descripcion: "20% de descuento en compras mayores a $200.000",
    activo: true,
    usoUnico: false,
    minimoCompra: 200000
  },
  {
    id: 3,
    codigo: "ENVIOGRATIS",
    descuento: 0,
    descripcion: "Envío gratis (descuento de $15.000)",
    activo: true,
    usoUnico: false,
    descuentoFijo: 15000
  },
  {
    id: 4,
    codigo: "VIP30",
    descuento: 30,
    descripcion: "30% para clientes VIP",
    activo: true,
    usoUnico: false
  }
];
