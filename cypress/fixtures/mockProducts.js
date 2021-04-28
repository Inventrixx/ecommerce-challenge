export const getProductsList200 = {
  author: {
    name: "Barbara",
    lastname: "Del Vitto",
  },
  categories: ["Celulares y Teléfonos", "Celulares y Smartphones"],
  items: [
    {
      id: "MLA885091466",
      title: "Motorola One Fusion 128 Gb Azul Océano 4 Gb Ram",
      picture: "http://http2.mlstatic.com/D_939063-MLA43751372595_102020-I.jpg",
      condition: "new",
      free_shipping: true,
    },
    {
      id: "MLA883014060",
      title: "Samsung Galaxy A31 128 Gb Prism Crush Black 4 Gb Ram",
      picture: "http://http2.mlstatic.com/D_629073-MLA45229549853_032021-I.jpg",
      condition: "new",
      free_shipping: true,
    },
    {
      id: "MLA904396343",
      title: "Nokia 23 M 32 Gb Verde Claro 2 Gb Ram",
      picture: "http://http2.mlstatic.com/D_857252-MLA44280741132_122020-I.jpg",
      condition: "new",
      free_shipping: true,
    },
    {
      id: "MLA885844347",
      title: "Samsung Galaxy A01 Core 16 Gb Negro 1 Gb Ram",
      picture: "http://http2.mlstatic.com/D_814600-MLA43772081185_102020-I.jpg",
      condition: "new",
      free_shipping: true,
    },
  ],
};

export const getProductDetailt200 = {
  author: {
    name: "Barbara",
    lastname: "Del Vitto",
  },
  item: {
    id: "MLA885091466",
    title: "Motorola One Fusion 128 Gb Azul Océano 4 Gb Ram",
    price: {
      currency: "ARS",
      amount: 32999,
      decimals: 0,
    },
    category: "MLA1055",
    picture: "http://http2.mlstatic.com/D_939063-MLA43751372595_102020-O.jpg",
    condition: "new",
    free_shipping: true,
    sold_quantity: 5000,
    description:
      'Enfocate en lo importante\nEl novedoso sistema operativo Android 10 incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Además, incluye la función de Bienestar Digital y el Tema Oscuro, para que evites distracciones y logres una mayor concentración.\n\nMayor rendimiento\nSu memoria RAM de 4 GB te permitirá ejecutar varias aplicaciones al mismo tiempo, jugar y navegar con gran rapidez y sin inconvenientes.\n\nMás para ver\nCon su pantalla IPS de 6.5", disfrutá de colores intensos y mayor nitidez en todos tus contenidos.\n\nGran capacidad de almacenamiento\nCon su memoria interna de 128 GB podrás almacenar archivos y aplicaciones de gran tamaño sin necesidad de subirlos a la nube. Disfrutá de tus contenidos favoritos en todo momento.\n\nBatería superior\n¡Desenchufate! Con la súper batería de 5000 mAh, tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de recargar tu teléfono.\n\nFotografía profesional en tu bolsillo\nDescubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Gracias a la cámara teleobjetivo capturarás detalles casi imperceptibles, con la de ángulo amplio sacarás fotos nítidas y la ultra gran angular te permitirá obtener imágenes panorámicas excepcionales. ¿Amás los fondos difuminados? Vas a conseguirlos con el famoso modo retrato de la cuarta cámara.\n\n Además, el dispositivo cuenta con cámara frontal de 8 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.\n\nMáxima seguridad\nGracias al sensor de huella dactilar, tendrás acceso a tu teléfono de manera segura y podrás desbloquearlo automáticamente con solo un toque.',
  },
};

export const getErrorProduct = {
  type: "error",
  message: "Ha ocurrido un error",
};
