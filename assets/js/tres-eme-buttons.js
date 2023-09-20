
// Funcion del botón agregar al carrito de Shoppy

// Botón de Chorizo Rojo
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'chorizos-loseme.myshopify.com',
      storefrontAccessToken: 'e3420eaa29d2249767175fc966ea13e6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6652015018173',
        node: document.getElementById('product-component-1618804030296'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Agregar"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#1d1d1d"
      },
      "footer": {
        "background-color": "#1d1d1d"
      }
    },
    "text": {
      "title": "Carrito",
      "total": "Subtotal",
      "empty": "Su carrito está vacío",
      "notice": "IVA ya incluido en el precio total. Al continuar con tu compra, estás aceptando los Términos y Condiciones.",
      "button": "Pagar"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#a5242c",
        ":hover": {
          "background-color": "#952028"
        },
        ":focus": {
          "background-color": "#952028"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();

// Botón de Chorizo Verde
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'chorizos-loseme.myshopify.com',
      storefrontAccessToken: 'e3420eaa29d2249767175fc966ea13e6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6663260045501',
        node: document.getElementById('product-component-1618804760493'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Agregar"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#1d1d1d"
      },
      "footer": {
        "background-color": "#1d1d1d"
      }
    },
    "text": {
      "title": "Carrito",
      "total": "Subtotal",
      "empty": "Su carrito está vacío",
      "notice": "IVA ya incluido en el precio total. Al continuar con tu compra, estás aceptando los Términos y Condiciones.",
      "button": "Pagar"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#a5242c",
        ":hover": {
          "background-color": "#952028"
        },
        ":focus": {
          "background-color": "#952028"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();

// Botón de Chorizo estilo Argentino
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'chorizos-loseme.myshopify.com',
      storefrontAccessToken: 'e3420eaa29d2249767175fc966ea13e6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6663260569789',
        node: document.getElementById('product-component-1618804880727'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Agregar"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#1d1d1d"
      },
      "footer": {
        "background-color": "#1d1d1d"
      }
    },
    "text": {
      "title": "Carrito",
      "total": "Subtotal",
      "empty": "Su carrito está vacío",
      "notice": "IVA ya incluido en el precio total. Al continuar con tu compra, estás aceptando los Términos y Condiciones.",
      "button": "Pagar"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#a5242c",
        ":hover": {
          "background-color": "#952028"
        },
        ":focus": {
          "background-color": "#952028"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();

// Botón de Chorizo Morita
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'chorizos-loseme.myshopify.com',
      storefrontAccessToken: 'e3420eaa29d2249767175fc966ea13e6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6663262011581',
        node: document.getElementById('product-component-1618804943861'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Agregar"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#1d1d1d"
      },
      "footer": {
        "background-color": "#1d1d1d"
      }
    },
    "text": {
      "title": "Carrito",
      "total": "Subtotal",
      "empty": "Su carrito está vacío",
      "notice": "IVA ya incluido en el precio total. Al continuar con tu compra, estás aceptando los Términos y Condiciones.",
      "button": "Pagar"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#a5242c",
        ":hover": {
          "background-color": "#952028"
        },
        ":focus": {
          "background-color": "#952028"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();

// Chorizo Habanero
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'chorizos-loseme.myshopify.com',
      storefrontAccessToken: 'e3420eaa29d2249767175fc966ea13e6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6663262503101',
        node: document.getElementById('product-component-1618805018643'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Agregar"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#1d1d1d"
      },
      "footer": {
        "background-color": "#1d1d1d"
      }
    },
    "text": {
      "title": "Carrito",
      "total": "Subtotal",
      "empty": "Su carrito está vacío",
      "notice": "IVA ya incluido en el precio total. Al continuar con tu compra, estás aceptando los Términos y Condiciones.",
      "button": "Pagar"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#a5242c",
        ":hover": {
          "background-color": "#952028"
        },
        ":focus": {
          "background-color": "#952028"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();

// Chorizo BBQ and Whisky
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'chorizos-loseme.myshopify.com',
      storefrontAccessToken: 'e3420eaa29d2249767175fc966ea13e6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6745825476797',
        node: document.getElementById('product-component-1622605143792'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Agregar"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#1d1d1d"
      },
      "footer": {
        "background-color": "#1d1d1d"
      }
    },
    "text": {
      "title": "Carrito",
      "total": "Subtotal",
      "empty": "Su carrito está vacío",
      "notice": "IVA ya incluido en el precio total. Al continuar con tu compra, estás aceptando los Términos y Condiciones.",
      "button": "Pagar"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#a5242c",
        ":hover": {
          "background-color": "#952028"
        },
        ":focus": {
          "background-color": "#952028"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();

// Chorizo Mustard
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'chorizos-loseme.myshopify.com',
      storefrontAccessToken: 'e3420eaa29d2249767175fc966ea13e6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6752399098045',
        node: document.getElementById('product-component-1622761223745'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Agregar"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#1d1d1d"
      },
      "footer": {
        "background-color": "#1d1d1d"
      }
    },
    "text": {
      "title": "Carrito",
      "total": "Subtotal",
      "empty": "Su carrito está vacío",
      "notice": "IVA ya incluido en el precio total. Al continuar con tu compra, estás aceptando los Términos y Condiciones.",
      "button": "Pagar"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#a5242c",
        ":hover": {
          "background-color": "#952028"
        },
        ":focus": {
          "background-color": "#952028"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();

// Chorizo Mezcal
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'chorizos-loseme.myshopify.com',
      storefrontAccessToken: 'e3420eaa29d2249767175fc966ea13e6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6752401424573',
        node: document.getElementById('product-component-1622761143306'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Agregar"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#1d1d1d"
      },
      "footer": {
        "background-color": "#1d1d1d"
      }
    },
    "text": {
      "title": "Carrito",
      "total": "Subtotal",
      "empty": "Su carrito está vacío",
      "notice": "IVA ya incluido en el precio total. Al continuar con tu compra, estás aceptando los Términos y Condiciones.",
      "button": "Pagar"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#a5242c",
        ":hover": {
          "background-color": "#952028"
        },
        ":focus": {
          "background-color": "#952028"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();

// Chorizo Navideño
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'chorizos-loseme.myshopify.com',
      storefrontAccessToken: 'e3420eaa29d2249767175fc966ea13e6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6752400736445',
        node: document.getElementById('product-component-1622761303395'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Agregar"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#1d1d1d"
      },
      "footer": {
        "background-color": "#1d1d1d"
      }
    },
    "text": {
      "title": "Carrito",
      "total": "Subtotal",
      "empty": "Su carrito está vacío",
      "notice": "IVA ya incluido en el precio total. Al continuar con tu compra, estás aceptando los Términos y Condiciones.",
      "button": "Pagar"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#a5242c",
        ":hover": {
          "background-color": "#952028"
        },
        ":focus": {
          "background-color": "#952028"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();

// Chorizo Tamarindo
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'chorizos-loseme.myshopify.com',
      storefrontAccessToken: 'e3420eaa29d2249767175fc966ea13e6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6752401981629',
        node: document.getElementById('product-component-1622761415098'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Agregar"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#1d1d1d"
      },
      "footer": {
        "background-color": "#1d1d1d"
      }
    },
    "text": {
      "title": "Carrito",
      "total": "Subtotal",
      "empty": "Su carrito está vacío",
      "notice": "IVA ya incluido en el precio total. Al continuar con tu compra, estás aceptando los Términos y Condiciones.",
      "button": "Pagar"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#a5242c",
        ":hover": {
          "background-color": "#952028"
        },
        ":focus": {
          "background-color": "#952028"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();

// Chorizombie
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'chorizos-loseme.myshopify.com',
      storefrontAccessToken: 'e3420eaa29d2249767175fc966ea13e6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6752400277693',
        node: document.getElementById('product-component-1622761477538'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Agregar"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#1d1d1d"
      },
      "footer": {
        "background-color": "#1d1d1d"
      }
    },
    "text": {
      "title": "Carrito",
      "total": "Subtotal",
      "empty": "Su carrito está vacío",
      "notice": "IVA ya incluido en el precio total. Al continuar con tu compra, estás aceptando los Términos y Condiciones.",
      "button": "Pagar"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#a5242c",
        ":hover": {
          "background-color": "#952028"
        },
        ":focus": {
          "background-color": "#952028"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();

// Paquete Chorizo
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'chorizos-loseme.myshopify.com',
      storefrontAccessToken: 'e3420eaa29d2249767175fc966ea13e6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6902341435581',
        node: document.getElementById('product-component-1629247355545'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Agregar"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px",
        "padding-left": "70px",
        "padding-right": "70px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#952028"
        },
        "background-color": "#a5242c",
        ":focus": {
          "background-color": "#952028"
        },
        "border-radius": "5px"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "header": {
        "color": "#f4f4f4"
      },
      "lineItems": {
        "color": "#f4f4f4"
      },
      "subtotalText": {
        "color": "#f4f4f4"
      },
      "subtotal": {
        "color": "#f4f4f4"
      },
      "notice": {
        "color": "#f4f4f4"
      },
      "currency": {
        "color": "#f4f4f4"
      },
      "close": {
        "color": "#f4f4f4",
        ":hover": {
          "color": "#f4f4f4"
        }
      },
      "empty": {
        "color": "#f4f4f4"
      },
      "noteDescription": {
        "color": "#f4f4f4"
      },
      "discountText": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "discountAmount": {
        "color": "#f4f4f4"
      },
      "cart": {
        "background-color": "#1d1d1d"
      },
      "footer": {
        "background-color": "#1d1d1d"
      }
    },
    "text": {
      "title": "Carrito",
      "total": "Subtotal",
      "empty": "Su carrito está vacío",
      "notice": "IVA ya incluido en el precio total. Al continuar con tu compra, estás aceptando los Términos y Condiciones.",
      "button": "Pagar"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#a5242c",
        ":hover": {
          "background-color": "#952028"
        },
        ":focus": {
          "background-color": "#952028"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#f4f4f4"
      },
      "title": {
        "color": "#f4f4f4"
      },
      "price": {
        "color": "#f4f4f4"
      },
      "fullPrice": {
        "color": "#f4f4f4"
      },
      "discount": {
        "color": "#f4f4f4"
      },
      "discountIcon": {
        "fill": "#f4f4f4"
      },
      "quantity": {
        "color": "#f4f4f4"
      },
      "quantityIncrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityDecrement": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      },
      "quantityInput": {
        "color": "#f4f4f4",
        "border-color": "#f4f4f4"
      }
    }
  }
},
      });
    });
  }
})();

//Chorizo Pastor
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'chorizos-loseme.myshopify.com',
      storefrontAccessToken: 'e3420eaa29d2249767175fc966ea13e6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7188865810621',
        node: document.getElementById('product-component-1646844758820'),
        moneyFormat: '%24%20%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#952028"
                },
                "background-color": "#a5242c",
                ":focus": {
                  "background-color": "#952028"
                },
                "border-radius": "5px",
                "padding-left": "70px",
                "padding-right": "70px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Agregar"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#952028"
                },
                "background-color": "#a5242c",
                ":focus": {
                  "background-color": "#952028"
                },
                "border-radius": "5px",
                "padding-left": "70px",
                "padding-right": "70px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#952028"
                },
                "background-color": "#a5242c",
                ":focus": {
                  "background-color": "#952028"
                },
                "border-radius": "5px"
              },
              "title": {
                "color": "#f4f4f4"
              },
              "header": {
                "color": "#f4f4f4"
              },
              "lineItems": {
                "color": "#f4f4f4"
              },
              "subtotalText": {
                "color": "#f4f4f4"
              },
              "subtotal": {
                "color": "#f4f4f4"
              },
              "notice": {
                "color": "#f4f4f4"
              },
              "currency": {
                "color": "#f4f4f4"
              },
              "close": {
                "color": "#f4f4f4",
                ":hover": {
                  "color": "#f4f4f4"
                }
              },
              "empty": {
                "color": "#f4f4f4"
              },
              "noteDescription": {
                "color": "#f4f4f4"
              },
              "discountText": {
                "color": "#f4f4f4"
              },
              "discountIcon": {
                "fill": "#f4f4f4"
              },
              "discountAmount": {
                "color": "#f4f4f4"
              },
              "cart": {
                "background-color": "#1d1d1d"
              },
              "footer": {
                "background-color": "#1d1d1d"
              }
            },
            "text": {
              "title": "Carrito",
              "total": "Subtotal",
              "empty": "Su carrito está vacío",
              "notice": "IVA ya incluido en el precio total. Al continuar con tu compra, estás aceptando los Términos y Condiciones.",
              "button": "Pagar"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#a5242c",
                ":hover": {
                  "background-color": "#952028"
                },
                ":focus": {
                  "background-color": "#952028"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          },
          "lineItem": {
            "styles": {
              "variantTitle": {
                "color": "#f4f4f4"
              },
              "title": {
                "color": "#f4f4f4"
              },
              "price": {
                "color": "#f4f4f4"
              },
              "fullPrice": {
                "color": "#f4f4f4"
              },
              "discount": {
                "color": "#f4f4f4"
              },
              "discountIcon": {
                "fill": "#f4f4f4"
              },
              "quantity": {
                "color": "#f4f4f4"
              },
              "quantityIncrement": {
                "color": "#f4f4f4",
                "border-color": "#f4f4f4"
              },
              "quantityDecrement": {
                "color": "#f4f4f4",
                "border-color": "#f4f4f4"
              },
              "quantityInput": {
                "color": "#f4f4f4",
                "border-color": "#f4f4f4"
              }
            }
          }
},
      });
    });
  }
})();