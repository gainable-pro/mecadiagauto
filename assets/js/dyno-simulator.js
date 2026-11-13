/**
 * MECADIAG AUTO - CONFIGURATEUR PERFORMANCE HAUTE PRÉCISION (STYLE SHIFTECH / OG PERFORMANCE)
 * Base de données exhaustive : Supercars, Berlines, Sportives ET Fourgons / Utilitaires Pro
 * Courbes dyno réalistes, calculs de couple/puissance et avertissement technique
 */

const PERFORMANCE_DATABASE = {
  "audi": {
    "brand": "Audi",
    "category": "sport",
    "badge": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
    "models": {
      "rs3_8v": {
        "name": "RS3 2.5 TFSI (8V / 8Y)",
        "image": "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1000&q=80",
        "engine": "5-Cylindres 2.5L Turbo",
        "type": "Berline Sportive",
        "origHp": 400,
        "origNm": 480,
        "orig0100": "3.8s",
        "st1Hp": 470,
        "st1Nm": 600,
        "st1_0100": "3.3s",
        "st1Price": "690 €",
        "st2Hp": 520,
        "st2Nm": 660,
        "st2_0100": "3.0s",
        "st2Price": "Sur devis",
        "e85Hp": 495,
        "e85Nm": 630,
        "e85_0100": "3.2s",
        "e85Price": "890 €",
        "vmaxOrig": "250 km/h (bridée)",
        "vmaxReprog": "305 km/h (débridée)"
      },
      "s3_8v": {
        "name": "S3 2.0 TFSI 310ch",
        "image": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L Turbo EA888",
        "type": "Compacte Sportive",
        "origHp": 310,
        "origNm": 400,
        "orig0100": "4.8s",
        "st1Hp": 375,
        "st1Nm": 500,
        "st1_0100": "4.1s",
        "st1Price": "590 €",
        "st2Hp": 410,
        "st2Nm": 540,
        "st2_0100": "3.8s",
        "st2Price": "Sur devis",
        "e85Hp": 395,
        "e85Nm": 520,
        "e85_0100": "4.0s",
        "e85Price": "790 €",
        "vmaxOrig": "250 km/h",
        "vmaxReprog": "285 km/h"
      },
      "rs6_c8": {
        "name": "RS6 Avant 4.0 V8 BiTurbo (C8)",
        "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
        "engine": "V8 4.0L BiTurbo Mild-Hybrid",
        "type": "Break Supercar",
        "origHp": 600,
        "origNm": 800,
        "orig0100": "3.6s",
        "st1Hp": 700,
        "st1Nm": 950,
        "st1_0100": "3.1s",
        "st1Price": "890 €",
        "st2Hp": 760,
        "st2Nm": 1020,
        "st2_0100": "2.8s",
        "st2Price": "Sur devis",
        "e85Hp": 730,
        "e85Nm": 980,
        "e85_0100": "3.0s",
        "e85Price": "1 090 €",
        "vmaxOrig": "250 km/h",
        "vmaxReprog": "320 km/h"
      },
      "a3_20tdi": {
        "name": "A3 / A4 2.0 TDI 150ch",
        "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L Turbo Diesel",
        "type": "Berline Routière",
        "origHp": 150,
        "origNm": 340,
        "orig0100": "8.4s",
        "st1Hp": 190,
        "st1Nm": 420,
        "st1_0100": "7.4s",
        "st1Price": "490 €",
        "st2Hp": 210,
        "st2Nm": 450,
        "st2_0100": "7.0s",
        "st2Price": "Sur devis",
        "e85Hp": 190,
        "e85Nm": 420,
        "e85_0100": "7.4s",
        "e85Price": "Non éligible (Diesel)",
        "vmaxOrig": "218 km/h",
        "vmaxReprog": "235 km/h"
      },
      "a6_30tdi": {
        "name": "A6 3.0 V6 TDI 272ch",
        "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
        "engine": "V6 3.0L Turbo Diesel",
        "type": "Grande Routière",
        "origHp": 272,
        "origNm": 580,
        "orig0100": "5.5s",
        "st1Hp": 325,
        "st1Nm": 680,
        "st1_0100": "4.9s",
        "st1Price": "590 €",
        "st2Hp": 350,
        "st2Nm": 720,
        "st2_0100": "4.6s",
        "st2Price": "Sur devis",
        "e85Hp": 325,
        "e85Nm": 680,
        "e85_0100": "4.9s",
        "e85Price": "Non éligible (Diesel)",
        "vmaxOrig": "250 km/h",
        "vmaxReprog": "275 km/h"
      }
    }
  },
  "bmw": {
    "brand": "BMW",
    "category": "sport",
    "badge": "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=800&q=80",
    "models": {
      "m4_g82": {
        "name": "M3 / M4 Competition (G80/G82)",
        "image": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
        "engine": "6-Cylindres en ligne 3.0L BiTurbo S58",
        "type": "Coupé Motorsport",
        "origHp": 510,
        "origNm": 650,
        "orig0100": "3.9s",
        "st1Hp": 620,
        "st1Nm": 760,
        "st1_0100": "3.3s",
        "st1Price": "790 €",
        "st2Hp": 700,
        "st2Nm": 840,
        "st2_0100": "3.0s",
        "st2Price": "Sur devis",
        "e85Hp": 650,
        "e85Nm": 800,
        "e85_0100": "3.2s",
        "e85Price": "990 €",
        "vmaxOrig": "250 km/h (bridée)",
        "vmaxReprog": "315 km/h (débridée)"
      },
      "m2_f87": {
        "name": "M2 Competition (F87) S55",
        "image": "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1000&q=80",
        "engine": "6-Cylindres en ligne 3.0L BiTurbo S55",
        "type": "Coupé Sportif",
        "origHp": 410,
        "origNm": 550,
        "orig0100": "4.2s",
        "st1Hp": 510,
        "st1Nm": 680,
        "st1_0100": "3.7s",
        "st1Price": "690 €",
        "st2Hp": 550,
        "st2Nm": 720,
        "st2_0100": "3.5s",
        "st2Price": "Sur devis",
        "e85Hp": 530,
        "e85Nm": 700,
        "e85_0100": "3.6s",
        "e85Price": "890 €",
        "vmaxOrig": "250 km/h",
        "vmaxReprog": "300 km/h"
      },
      "b58_140i": {
        "name": "M140i / M240i / 340i (B58)",
        "image": "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1000&q=80",
        "engine": "6-Cylindres 3.0L Turbo B58",
        "type": "Berline / Coupé",
        "origHp": 340,
        "origNm": 500,
        "orig0100": "4.6s",
        "st1Hp": 420,
        "st1Nm": 580,
        "st1_0100": "4.0s",
        "st1Price": "590 €",
        "st2Hp": 460,
        "st2Nm": 630,
        "st2_0100": "3.7s",
        "st2Price": "Sur devis",
        "e85Hp": 440,
        "e85Nm": 610,
        "e85_0100": "3.9s",
        "e85Price": "790 €",
        "vmaxOrig": "250 km/h",
        "vmaxReprog": "290 km/h"
      },
      "320d_g20": {
        "name": "120d / 320d / 420d 190ch",
        "image": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L Turbo Diesel B47",
        "type": "Berline Routière",
        "origHp": 190,
        "origNm": 400,
        "orig0100": "6.8s",
        "st1Hp": 225,
        "st1Nm": 470,
        "st1_0100": "6.1s",
        "st1Price": "490 €",
        "st2Hp": 240,
        "st2Nm": 500,
        "st2_0100": "5.8s",
        "st2Price": "Sur devis",
        "e85Hp": 225,
        "e85Nm": 470,
        "e85_0100": "6.1s",
        "e85Price": "Non éligible (Diesel)",
        "vmaxOrig": "240 km/h",
        "vmaxReprog": "255 km/h"
      },
      "330d_g20": {
        "name": "330d / 430d / 530d 265ch",
        "image": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
        "engine": "6-Cylindres 3.0L Turbo Diesel B57",
        "type": "Grande Routière",
        "origHp": 265,
        "origNm": 620,
        "orig0100": "5.5s",
        "st1Hp": 320,
        "st1Nm": 700,
        "st1_0100": "4.8s",
        "st1Price": "590 €",
        "st2Hp": 350,
        "st2Nm": 750,
        "st2_0100": "4.5s",
        "st2Price": "Sur devis",
        "e85Hp": 320,
        "e85Nm": 700,
        "e85_0100": "4.8s",
        "e85Price": "Non éligible (Diesel)",
        "vmaxOrig": "250 km/h",
        "vmaxReprog": "275 km/h"
      }
    }
  },
  "mercedes": {
    "brand": "Mercedes-Benz & AMG",
    "category": "sport",
    "badge": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    "models": {
      "a45s_amg": {
        "name": "Classe A45 S AMG (W177)",
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L Turbo M139",
        "type": "Hyper-Hatchback",
        "origHp": 421,
        "origNm": 500,
        "orig0100": "3.9s",
        "st1Hp": 475,
        "st1Nm": 600,
        "st1_0100": "3.5s",
        "st1Price": "690 €",
        "st2Hp": 510,
        "st2Nm": 650,
        "st2_0100": "3.2s",
        "st2Price": "Sur devis",
        "e85Hp": 490,
        "e85Nm": 620,
        "e85_0100": "3.4s",
        "e85Price": "890 €",
        "vmaxOrig": "270 km/h",
        "vmaxReprog": "300 km/h"
      },
      "c63s_amg": {
        "name": "C63 S AMG V8 4.0L BiTurbo",
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
        "engine": "V8 4.0L BiTurbo M177",
        "type": "Berline V8 Sport",
        "origHp": 510,
        "origNm": 700,
        "orig0100": "4.0s",
        "st1Hp": 590,
        "st1Nm": 850,
        "st1_0100": "3.4s",
        "st1Price": "790 €",
        "st2Hp": 650,
        "st2Nm": 920,
        "st2_0100": "3.1s",
        "st2Price": "Sur devis",
        "e85Hp": 620,
        "e85Nm": 880,
        "e85_0100": "3.3s",
        "e85Price": "990 €",
        "vmaxOrig": "290 km/h",
        "vmaxReprog": "320 km/h"
      },
      "a200d": {
        "name": "Classe A 200d / 220d 150ch",
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L Diesel OM654",
        "type": "Berline Compacte",
        "origHp": 150,
        "origNm": 320,
        "orig0100": "8.1s",
        "st1Hp": 190,
        "st1Nm": 420,
        "st1_0100": "7.2s",
        "st1Price": "490 €",
        "st2Hp": 210,
        "st2Nm": 450,
        "st2_0100": "6.8s",
        "st2Price": "Sur devis",
        "e85Hp": 190,
        "e85Nm": 420,
        "e85_0100": "7.2s",
        "e85Price": "Non éligible (Diesel)",
        "vmaxOrig": "220 km/h",
        "vmaxReprog": "238 km/h"
      },
      "sprinter_cdi": {
        "name": "[UTILITAIRE] Sprinter 314 / 316 / 317 CDI",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L / 2.2L CDI Turbo",
        "type": "Fourgon Utilitaire Pro",
        "origHp": 143,
        "origNm": 330,
        "orig0100": "13.2s",
        "st1Hp": 190,
        "st1Nm": 440,
        "st1_0100": "10.4s",
        "st1Price": "550 €",
        "st2Hp": 205,
        "st2Nm": 470,
        "st2_0100": "9.9s",
        "st2Price": "Sur devis",
        "e85Hp": 190,
        "e85Nm": 440,
        "e85_0100": "10.4s",
        "e85Price": "Éco-Torque Diesel Pro (-1.8L/100km)",
        "vmaxOrig": "155 km/h",
        "vmaxReprog": "175 km/h (Sécurité charge)"
      },
      "vito_cdi": {
        "name": "[UTILITAIRE] Vito 114 / 116 / 119 CDI",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L CDI OM654",
        "type": "Van / Fourgon Professionnel",
        "origHp": 136,
        "origNm": 330,
        "orig0100": "11.8s",
        "st1Hp": 190,
        "st1Nm": 440,
        "st1_0100": "9.2s",
        "st1Price": "520 €",
        "st2Hp": 210,
        "st2Nm": 480,
        "st2_0100": "8.7s",
        "st2Price": "Sur devis",
        "e85Hp": 190,
        "e85Nm": 440,
        "e85_0100": "9.2s",
        "e85Price": "Éco-Torque Diesel Pro",
        "vmaxOrig": "180 km/h",
        "vmaxReprog": "205 km/h"
      }
    }
  },
  "volkswagen": {
    "brand": "Volkswagen & Pros",
    "category": "sport",
    "badge": "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=800&q=80",
    "models": {
      "golf8_r": {
        "name": "Golf 8 R 2.0 TSI 320ch",
        "image": "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L TSI EA888 Gen4",
        "type": "Sportive 4Motion",
        "origHp": 320,
        "origNm": 420,
        "orig0100": "4.7s",
        "st1Hp": 380,
        "st1Nm": 500,
        "st1_0100": "3.9s",
        "st1Price": "590 €",
        "st2Hp": 420,
        "st2Nm": 550,
        "st2_0100": "3.6s",
        "st2Price": "Sur devis",
        "e85Hp": 400,
        "e85Nm": 530,
        "e85_0100": "3.8s",
        "e85Price": "790 €",
        "vmaxOrig": "250 km/h",
        "vmaxReprog": "290 km/h"
      },
      "golf7_gti": {
        "name": "Golf 7 GTI Performance 245ch",
        "image": "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L TSI EA888 Gen3",
        "type": "Traction Sportive",
        "origHp": 245,
        "origNm": 370,
        "orig0100": "6.2s",
        "st1Hp": 310,
        "st1Nm": 460,
        "st1_0100": "5.3s",
        "st1Price": "490 €",
        "st2Hp": 340,
        "st2Nm": 500,
        "st2_0100": "4.9s",
        "st2Price": "Sur devis",
        "e85Hp": 325,
        "e85Nm": 480,
        "e85_0100": "5.1s",
        "e85Price": "690 €",
        "vmaxOrig": "250 km/h",
        "vmaxReprog": "270 km/h"
      },
      "transporter_t6": {
        "name": "[UTILITAIRE] Transporter T6 / T6.1 2.0 TDI 150ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L TDI Turbo",
        "type": "Fourgon / Combi Pro",
        "origHp": 150,
        "origNm": 340,
        "orig0100": "11.1s",
        "st1Hp": 195,
        "st1Nm": 440,
        "st1_0100": "9.1s",
        "st1Price": "520 €",
        "st2Hp": 215,
        "st2Nm": 470,
        "st2_0100": "8.6s",
        "st2Price": "Sur devis",
        "e85Hp": 195,
        "e85Nm": 440,
        "e85_0100": "9.1s",
        "e85Price": "Éco-Torque Diesel (-1.6L/100km)",
        "vmaxOrig": "182 km/h",
        "vmaxReprog": "205 km/h"
      },
      "crafter_tdi": {
        "name": "[UTILITAIRE] Crafter 2.0 TDI 140ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L TDI Bi-Turbo / Turbo",
        "type": "Grand Fourgon Professionnel",
        "origHp": 140,
        "origNm": 340,
        "orig0100": "14.5s",
        "st1Hp": 185,
        "st1Nm": 430,
        "st1_0100": "11.2s",
        "st1Price": "550 €",
        "st2Hp": 200,
        "st2Nm": 460,
        "st2_0100": "10.5s",
        "st2Price": "Sur devis",
        "e85Hp": 185,
        "e85Nm": 430,
        "e85_0100": "11.2s",
        "e85Price": "Éco-Torque Diesel Pro (-2.0L/100km)",
        "vmaxOrig": "158 km/h",
        "vmaxReprog": "178 km/h"
      },
      "caddy_tdi": {
        "name": "[UTILITAIRE] Caddy 2.0 TDI 102ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L TDI",
        "type": "Fourgonnette Légère",
        "origHp": 102,
        "origNm": 280,
        "orig0100": "12.0s",
        "st1Hp": 150,
        "st1Nm": 360,
        "st1_0100": "9.8s",
        "st1Price": "490 €",
        "st2Hp": 170,
        "st2Nm": 390,
        "st2_0100": "9.2s",
        "st2Price": "Sur devis",
        "e85Hp": 150,
        "e85Nm": 360,
        "e85_0100": "9.8s",
        "e85Price": "Éco-Torque Diesel",
        "vmaxOrig": "175 km/h",
        "vmaxReprog": "195 km/h"
      }
    }
  },
  "renault": {
    "brand": "Renault & Utilitaires Pro",
    "category": "utilitaire",
    "badge": "https://images.unsplash.com/photo-1621370216654-783353e16447?auto=format&fit=crop&w=800&q=80",
    "models": {
      "master_dci": {
        "name": "[UTILITAIRE] Master 2.3 dCi 135ch / 150ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.3L dCi Twin-Turbo",
        "type": "Grand Fourgon Charge Lourde",
        "origHp": 135,
        "origNm": 360,
        "orig0100": "14.2s",
        "st1Hp": 175,
        "st1Nm": 430,
        "st1_0100": "11.0s",
        "st1Price": "520 €",
        "st2Hp": 190,
        "st2Nm": 460,
        "st2_0100": "10.4s",
        "st2Price": "Sur devis",
        "e85Hp": 175,
        "e85Nm": 430,
        "e85_0100": "11.0s",
        "e85Price": "Pack Éco-Torque Pro (-2.2L/100km)",
        "vmaxOrig": "152 km/h",
        "vmaxReprog": "172 km/h (Sécurisée)"
      },
      "trafic_dci": {
        "name": "[UTILITAIRE] Trafic 2.0 dCi 120ch / 145ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L dCi Turbo",
        "type": "Fourgon Moyen & Navette",
        "origHp": 120,
        "origNm": 320,
        "orig0100": "12.8s",
        "st1Hp": 165,
        "st1Nm": 400,
        "st1_0100": "9.9s",
        "st1Price": "490 €",
        "st2Hp": 185,
        "st2Nm": 430,
        "st2_0100": "9.3s",
        "st2Price": "Sur devis",
        "e85Hp": 165,
        "e85Nm": 400,
        "e85_0100": "9.9s",
        "e85Price": "Pack Éco-Torque Pro (-1.8L/100km)",
        "vmaxOrig": "165 km/h",
        "vmaxReprog": "188 km/h"
      },
      "kangoo_dci": {
        "name": "[UTILITAIRE] Kangoo 1.5 dCi / Blue dCi 95ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 1.5L dCi Turbo K9K",
        "type": "Fourgonnette Artisanale",
        "origHp": 95,
        "origNm": 260,
        "orig0100": "13.6s",
        "st1Hp": 125,
        "st1Nm": 310,
        "st1_0100": "10.8s",
        "st1Price": "450 €",
        "st2Hp": 135,
        "st2Nm": 330,
        "st2_0100": "10.2s",
        "st2Price": "Sur devis",
        "e85Hp": 125,
        "e85Nm": 310,
        "e85_0100": "10.8s",
        "e85Price": "Éco-Torque Diesel",
        "vmaxOrig": "164 km/h",
        "vmaxReprog": "180 km/h"
      },
      "megane4_rs": {
        "name": "Mégane 4 R.S. Trophy 300ch",
        "image": "https://images.unsplash.com/photo-1621370216654-783353e16447?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 1.8L Turbo Alpine/RS",
        "type": "Compacte Sportive",
        "origHp": 300,
        "origNm": 420,
        "orig0100": "5.7s",
        "st1Hp": 340,
        "st1Nm": 480,
        "st1_0100": "5.0s",
        "st1Price": "590 €",
        "st2Hp": 370,
        "st2Nm": 520,
        "st2_0100": "4.6s",
        "st2Price": "Sur devis",
        "e85Hp": 355,
        "e85Nm": 500,
        "e85_0100": "4.8s",
        "e85Price": "790 €",
        "vmaxOrig": "260 km/h",
        "vmaxReprog": "280 km/h"
      },
      "clio5_tce": {
        "name": "Clio 5 1.0 TCe 100ch / 1.3 TCe 130ch",
        "image": "https://images.unsplash.com/photo-1621370216654-783353e16447?auto=format&fit=crop&w=1000&q=80",
        "engine": "3/4-Cylindres Turbo Essence",
        "type": "Citadine Polyvalente",
        "origHp": 100,
        "origNm": 160,
        "orig0100": "11.8s",
        "st1Hp": 125,
        "st1Nm": 210,
        "st1_0100": "9.9s",
        "st1Price": "450 €",
        "st2Hp": 140,
        "st2Nm": 230,
        "st2_0100": "9.2s",
        "st2Price": "Sur devis",
        "e85Hp": 125,
        "e85Nm": 210,
        "e85_0100": "9.9s",
        "e85Price": "590 € (Plein à 35€)",
        "vmaxOrig": "187 km/h",
        "vmaxReprog": "202 km/h"
      }
    }
  },
  "peugeot": {
    "brand": "Peugeot & Utilitaires Pro",
    "category": "utilitaire",
    "badge": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
    "models": {
      "boxer_bluehdi": {
        "name": "[UTILITAIRE] Boxer 2.2 BlueHDi 140ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.2L BlueHDi Turbo",
        "type": "Grand Fourgon Professionnel",
        "origHp": 140,
        "origNm": 340,
        "orig0100": "14.0s",
        "st1Hp": 180,
        "st1Nm": 430,
        "st1_0100": "10.8s",
        "st1Price": "520 €",
        "st2Hp": 195,
        "st2Nm": 460,
        "st2_0100": "10.2s",
        "st2Price": "Sur devis",
        "e85Hp": 180,
        "e85Nm": 430,
        "e85_0100": "10.8s",
        "e85Price": "Éco-Torque Diesel Pro (-2.0L/100km)",
        "vmaxOrig": "155 km/h",
        "vmaxReprog": "175 km/h"
      },
      "expert_bluehdi": {
        "name": "[UTILITAIRE] Expert 2.0 BlueHDi 150ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L BlueHDi DW10",
        "type": "Fourgon Moyen / Cabine",
        "origHp": 150,
        "origNm": 370,
        "orig0100": "11.0s",
        "st1Hp": 195,
        "st1Nm": 440,
        "st1_0100": "8.9s",
        "st1Price": "490 €",
        "st2Hp": 210,
        "st2Nm": 470,
        "st2_0100": "8.4s",
        "st2Price": "Sur devis",
        "e85Hp": 195,
        "e85Nm": 440,
        "e85_0100": "8.9s",
        "e85Price": "Éco-Torque Diesel Pro (-1.8L/100km)",
        "vmaxOrig": "170 km/h",
        "vmaxReprog": "195 km/h"
      },
      "partner_bluehdi": {
        "name": "[UTILITAIRE] Partner / Rifter 1.5 BlueHDi 100ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 1.5L BlueHDi DV5",
        "type": "Fourgonnette Légère",
        "origHp": 100,
        "origNm": 250,
        "orig0100": "12.5s",
        "st1Hp": 130,
        "st1Nm": 320,
        "st1_0100": "10.0s",
        "st1Price": "450 €",
        "st2Hp": 140,
        "st2Nm": 340,
        "st2_0100": "9.5s",
        "st2Price": "Sur devis",
        "e85Hp": 130,
        "e85Nm": 320,
        "e85_0100": "10.0s",
        "e85Price": "Éco-Torque Diesel",
        "vmaxOrig": "170 km/h",
        "vmaxReprog": "188 km/h"
      },
      "308_gti": {
        "name": "308 GTi 1.6 THP 270ch",
        "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 1.6L THP EP6",
        "type": "Traction Sportive",
        "origHp": 270,
        "origNm": 330,
        "orig0100": "6.0s",
        "st1Hp": 300,
        "st1Nm": 400,
        "st1_0100": "5.4s",
        "st1Price": "550 €",
        "st2Hp": 320,
        "st2Nm": 430,
        "st2_0100": "5.0s",
        "st2Price": "Sur devis",
        "e85Hp": 310,
        "e85Nm": 415,
        "e85_0100": "5.2s",
        "e85Price": "750 €",
        "vmaxOrig": "250 km/h",
        "vmaxReprog": "268 km/h"
      },
      "208_puretech": {
        "name": "208 / 2008 / 308 1.2 PureTech 100ch / 130ch",
        "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
        "engine": "3-Cylindres 1.2L Turbo PureTech",
        "type": "Citadine / Compacte",
        "origHp": 100,
        "origNm": 205,
        "orig0100": "10.1s",
        "st1Hp": 135,
        "st1Nm": 260,
        "st1_0100": "8.8s",
        "st1Price": "450 €",
        "st2Hp": 150,
        "st2Nm": 280,
        "st2_0100": "8.2s",
        "st2Price": "Sur devis",
        "e85Hp": 135,
        "e85Nm": 260,
        "e85_0100": "8.8s",
        "e85Price": "590 € (FlexFuel E85)",
        "vmaxOrig": "188 km/h",
        "vmaxReprog": "205 km/h"
      }
    }
  },
  "citroen": {
    "brand": "Citroën & Utilitaires Pro",
    "category": "utilitaire",
    "badge": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
    "models": {
      "jumper_bluehdi": {
        "name": "[UTILITAIRE] Jumper 2.2 BlueHDi 140ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.2L BlueHDi",
        "type": "Grand Fourgon Professionnel",
        "origHp": 140,
        "origNm": 350,
        "orig0100": "14.1s",
        "st1Hp": 180,
        "st1Nm": 430,
        "st1_0100": "10.9s",
        "st1Price": "520 €",
        "st2Hp": 195,
        "st2Nm": 460,
        "st2_0100": "10.3s",
        "st2Price": "Sur devis",
        "e85Hp": 180,
        "e85Nm": 430,
        "e85_0100": "10.9s",
        "e85Price": "Éco-Torque Diesel Pro (-2.0L/100km)",
        "vmaxOrig": "155 km/h",
        "vmaxReprog": "175 km/h"
      },
      "jumpy_bluehdi": {
        "name": "[UTILITAIRE] Jumpy 2.0 BlueHDi 145ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L BlueHDi DW10",
        "type": "Fourgon Intermédiaire Pro",
        "origHp": 145,
        "origNm": 370,
        "orig0100": "11.2s",
        "st1Hp": 190,
        "st1Nm": 440,
        "st1_0100": "9.1s",
        "st1Price": "490 €",
        "st2Hp": 210,
        "st2Nm": 470,
        "st2_0100": "8.5s",
        "st2Price": "Sur devis",
        "e85Hp": 190,
        "e85Nm": 440,
        "e85_0100": "9.1s",
        "e85Price": "Éco-Torque Diesel Pro (-1.8L/100km)",
        "vmaxOrig": "170 km/h",
        "vmaxReprog": "195 km/h"
      },
      "berlingo_bluehdi": {
        "name": "[UTILITAIRE] Berlingo 1.5 BlueHDi 100ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 1.5L BlueHDi DV5",
        "type": "Fourgonnette Urbaine",
        "origHp": 100,
        "origNm": 250,
        "orig0100": "12.7s",
        "st1Hp": 130,
        "st1Nm": 320,
        "st1_0100": "10.1s",
        "st1Price": "450 €",
        "st2Hp": 140,
        "st2Nm": 340,
        "st2_0100": "9.6s",
        "st2Price": "Sur devis",
        "e85Hp": 130,
        "e85Nm": 320,
        "e85_0100": "10.1s",
        "e85Price": "Éco-Torque Diesel",
        "vmaxOrig": "170 km/h",
        "vmaxReprog": "188 km/h"
      },
      "c3_puretech": {
        "name": "C3 / C4 1.2 PureTech 110ch",
        "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
        "engine": "3-Cylindres 1.2L Turbo PureTech",
        "type": "Citadine Polyvalente",
        "origHp": 110,
        "origNm": 205,
        "orig0100": "9.9s",
        "st1Hp": 140,
        "st1Nm": 260,
        "st1_0100": "8.7s",
        "st1Price": "450 €",
        "st2Hp": 150,
        "st2Nm": 280,
        "st2_0100": "8.2s",
        "st2Price": "Sur devis",
        "e85Hp": 140,
        "e85Nm": 260,
        "e85_0100": "8.7s",
        "e85Price": "590 € (FlexFuel E85)",
        "vmaxOrig": "193 km/h",
        "vmaxReprog": "208 km/h"
      }
    }
  },
  "ford": {
    "brand": "Ford & Utilitaires Pro",
    "category": "utilitaire",
    "badge": "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80",
    "models": {
      "transit_custom": {
        "name": "[UTILITAIRE] Transit Custom 2.0 EcoBlue 130ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L EcoBlue Turbo",
        "type": "Fourgon Référence N°1",
        "origHp": 130,
        "origNm": 360,
        "orig0100": "12.6s",
        "st1Hp": 185,
        "st1Nm": 430,
        "st1_0100": "9.8s",
        "st1Price": "520 €",
        "st2Hp": 205,
        "st2Nm": 460,
        "st2_0100": "9.2s",
        "st2Price": "Sur devis",
        "e85Hp": 185,
        "e85Nm": 430,
        "e85_0100": "9.8s",
        "e85Price": "Éco-Torque Diesel Pro (-1.8L/100km)",
        "vmaxOrig": "165 km/h",
        "vmaxReprog": "188 km/h"
      },
      "ranger_bi_turbo": {
        "name": "[UTILITAIRE] Ranger 2.0 Bi-Turbo / 3.2 TDCi 200ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "2.0 Bi-Turbo / 3.2 5-Cylindres Diesel",
        "type": "Pick-up / Chantier & Remorque",
        "origHp": 200,
        "origNm": 470,
        "orig0100": "10.5s",
        "st1Hp": 240,
        "st1Nm": 550,
        "st1_0100": "8.8s",
        "st1Price": "590 €",
        "st2Hp": 260,
        "st2Nm": 580,
        "st2_0100": "8.3s",
        "st2Price": "Sur devis",
        "e85Hp": 240,
        "e85Nm": 550,
        "e85_0100": "8.8s",
        "e85Price": "Traction Remorque & Franchissement",
        "vmaxOrig": "180 km/h",
        "vmaxReprog": "205 km/h"
      },
      "mustang_gt": {
        "name": "Mustang GT 5.0 V8 450ch",
        "image": "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1000&q=80",
        "engine": "V8 5.0L Coyote Atmosphérique",
        "type": "Muscle Car Américaine",
        "origHp": 450,
        "origNm": 529,
        "orig0100": "4.3s",
        "st1Hp": 480,
        "st1Nm": 590,
        "st1_0100": "4.0s",
        "st1Price": "690 €",
        "st2Hp": 510,
        "st2Nm": 630,
        "st2_0100": "3.7s",
        "st2Price": "Sur devis",
        "e85Hp": 490,
        "e85Nm": 605,
        "e85_0100": "3.9s",
        "e85Price": "890 € (FlexFuel E85 V8)",
        "vmaxOrig": "250 km/h",
        "vmaxReprog": "295 km/h"
      },
      "focus_st": {
        "name": "Focus ST 2.3 EcoBoost 280ch",
        "image": "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.3L Turbo EcoBoost",
        "type": "Compacte Sportive",
        "origHp": 280,
        "origNm": 420,
        "orig0100": "5.7s",
        "st1Hp": 325,
        "st1Nm": 510,
        "st1_0100": "5.1s",
        "st1Price": "550 €",
        "st2Hp": 350,
        "st2Nm": 540,
        "st2_0100": "4.8s",
        "st2Price": "Sur devis",
        "e85Hp": 335,
        "e85Nm": 520,
        "e85_0100": "5.0s",
        "e85Price": "750 €",
        "vmaxOrig": "250 km/h",
        "vmaxReprog": "270 km/h"
      }
    }
  },
  "iveco": {
    "brand": "Iveco Utilitaires Lourds",
    "category": "utilitaire",
    "badge": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=800&q=80",
    "models": {
      "daily_23_hpi": {
        "name": "[UTILITAIRE] Daily 35S14 / 35S16 2.3 HPI",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.3L F1A Turbo Diesel",
        "type": "Fourgon Châssis Pro",
        "origHp": 136,
        "origNm": 350,
        "orig0100": "14.8s",
        "st1Hp": 175,
        "st1Nm": 430,
        "st1_0100": "11.2s",
        "st1Price": "550 €",
        "st2Hp": 190,
        "st2Nm": 460,
        "st2_0100": "10.5s",
        "st2Price": "Sur devis",
        "e85Hp": 175,
        "e85Nm": 430,
        "e85_0100": "11.2s",
        "e85Price": "Éco-Torque Flotte Pro (-2.2L/100km)",
        "vmaxOrig": "150 km/h",
        "vmaxReprog": "170 km/h"
      },
      "daily_30_hpi": {
        "name": "[UTILITAIRE] Daily 35S18 / 35S21 / 50C 3.0 HPI",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 3.0L F1C Turbo Diesel",
        "type": "Poids-Lourd Léger & Dépanneuse",
        "origHp": 180,
        "origNm": 430,
        "orig0100": "13.0s",
        "st1Hp": 225,
        "st1Nm": 520,
        "st1_0100": "10.1s",
        "st1Price": "590 €",
        "st2Hp": 245,
        "st2Nm": 560,
        "st2_0100": "9.5s",
        "st2Price": "Sur devis",
        "e85Hp": 225,
        "e85Nm": 520,
        "e85_0100": "10.1s",
        "e85Price": "Couple Remorquage Lourd 3T5",
        "vmaxOrig": "160 km/h",
        "vmaxReprog": "180 km/h"
      }
    }
  },
  "fiat": {
    "brand": "Fiat & Fiat Professional",
    "category": "utilitaire",
    "badge": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=800&q=80",
    "models": {
      "ducato_multijet": {
        "name": "[UTILITAIRE] Ducato 2.3 / 2.2 Multijet 140ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.2/2.3L Multijet Turbo",
        "type": "Fourgon & Camping-Car Pro",
        "origHp": 140,
        "origNm": 350,
        "orig0100": "14.2s",
        "st1Hp": 180,
        "st1Nm": 430,
        "st1_0100": "11.0s",
        "st1Price": "520 €",
        "st2Hp": 195,
        "st2Nm": 460,
        "st2_0100": "10.4s",
        "st2Price": "Sur devis",
        "e85Hp": 180,
        "e85Nm": 430,
        "e85_0100": "11.0s",
        "e85Price": "Pack Camping-Car & Éco-Torque",
        "vmaxOrig": "155 km/h",
        "vmaxReprog": "175 km/h"
      },
      "doblo_multijet": {
        "name": "[UTILITAIRE] Doblò 1.5 / 1.6 Multijet 105ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 1.6L Multijet",
        "type": "Fourgonnette Urbaine",
        "origHp": 105,
        "origNm": 290,
        "orig0100": "12.4s",
        "st1Hp": 135,
        "st1Nm": 350,
        "st1_0100": "10.2s",
        "st1Price": "450 €",
        "st2Hp": 145,
        "st2Nm": 370,
        "st2_0100": "9.7s",
        "st2Price": "Sur devis",
        "e85Hp": 135,
        "e85Nm": 350,
        "e85_0100": "10.2s",
        "e85Price": "Éco-Torque Diesel",
        "vmaxOrig": "165 km/h",
        "vmaxReprog": "182 km/h"
      },
      "abarth_595": {
        "name": "Abarth 595 / 695 1.4 T-Jet 165ch",
        "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 1.4L Turbo T-Jet",
        "type": "Petite Bombinette Sport",
        "origHp": 165,
        "origNm": 230,
        "orig0100": "7.3s",
        "st1Hp": 200,
        "st1Nm": 310,
        "st1_0100": "6.3s",
        "st1Price": "490 €",
        "st2Hp": 225,
        "st2Nm": 340,
        "st2_0100": "5.8s",
        "st2Price": "Sur devis",
        "e85Hp": 210,
        "e85Nm": 325,
        "e85_0100": "6.1s",
        "e85Price": "690 € (FlexFuel E85)",
        "vmaxOrig": "218 km/h",
        "vmaxReprog": "235 km/h"
      }
    }
  },
  "porsche": {
    "brand": "Porsche",
    "category": "sport",
    "badge": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    "models": {
      "911_gt3_992": {
        "name": "911 GT3 (992) 4.0L Flat-6",
        "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
        "engine": "Flat-6 4.0L Atmosphérique 9000 tr/min",
        "type": "Supercar Piste & Route",
        "origHp": 510,
        "origNm": 470,
        "orig0100": "3.4s",
        "st1Hp": 535,
        "st1Nm": 495,
        "st1_0100": "3.2s",
        "st1Price": "990 €",
        "st2Hp": 555,
        "st2Nm": 515,
        "st2_0100": "3.0s",
        "st2Price": "Sur devis",
        "e85Hp": 545,
        "e85Nm": 505,
        "e85_0100": "3.1s",
        "e85Price": "1 190 €",
        "vmaxOrig": "318 km/h",
        "vmaxReprog": "328 km/h"
      },
      "911_carrera_s": {
        "name": "911 Carrera S (992) 3.0 BiTurbo",
        "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
        "engine": "Flat-6 3.0L BiTurbo",
        "type": "Coupé GT Légendaire",
        "origHp": 450,
        "origNm": 530,
        "orig0100": "3.7s",
        "st1Hp": 520,
        "st1Nm": 650,
        "st1_0100": "3.2s",
        "st1Price": "890 €",
        "st2Hp": 570,
        "st2Nm": 710,
        "st2_0100": "2.9s",
        "st2Price": "Sur devis",
        "e85Hp": 540,
        "e85Nm": 680,
        "e85_0100": "3.1s",
        "e85Price": "1 090 €",
        "vmaxOrig": "308 km/h",
        "vmaxReprog": "325 km/h"
      },
      "macan_gts": {
        "name": "Macan GTS 2.9 V6 BiTurbo",
        "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
        "engine": "V6 2.9L BiTurbo",
        "type": "SUV Sport Haute Performance",
        "origHp": 380,
        "origNm": 520,
        "orig0100": "4.9s",
        "st1Hp": 460,
        "st1Nm": 650,
        "st1_0100": "4.2s",
        "st1Price": "790 €",
        "st2Hp": 500,
        "st2Nm": 700,
        "st2_0100": "3.9s",
        "st2Price": "Sur devis",
        "e85Hp": 480,
        "e85Nm": 670,
        "e85_0100": "4.0s",
        "e85Price": "990 €",
        "vmaxOrig": "261 km/h",
        "vmaxReprog": "285 km/h"
      }
    }
  },
  "toyota": {
    "brand": "Toyota & Proace Utilitaires",
    "category": "utilitaire",
    "badge": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
    "models": {
      "hilux_d4d": {
        "name": "[UTILITAIRE] Hilux 2.8 D-4D 204ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.8L Turbo Diesel 1GD-FTV",
        "type": "Pick-up Baroudeur & Remorquage",
        "origHp": 204,
        "origNm": 500,
        "orig0100": "10.1s",
        "st1Hp": 245,
        "st1Nm": 600,
        "st1_0100": "8.5s",
        "st1Price": "590 €",
        "st2Hp": 265,
        "st2Nm": 640,
        "st2_0100": "8.0s",
        "st2Price": "Sur devis",
        "e85Hp": 245,
        "e85Nm": 600,
        "e85_0100": "8.5s",
        "e85Price": "Traction Remorque & Travaux Lourds",
        "vmaxOrig": "175 km/h",
        "vmaxReprog": "195 km/h"
      },
      "proace_d4d": {
        "name": "[UTILITAIRE] Proace 2.0 D-4D 145ch",
        "image": "https://images.unsplash.com/photo-1586191582056-a60d02b5e28a?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L Turbo Diesel",
        "type": "Fourgon Moyen & Navette",
        "origHp": 145,
        "origNm": 370,
        "orig0100": "11.1s",
        "st1Hp": 190,
        "st1Nm": 440,
        "st1_0100": "9.0s",
        "st1Price": "490 €",
        "st2Hp": 210,
        "st2Nm": 470,
        "st2_0100": "8.5s",
        "st2Price": "Sur devis",
        "e85Hp": 190,
        "e85Nm": 440,
        "e85_0100": "9.0s",
        "e85Price": "Éco-Torque Diesel Pro (-1.8L/100km)",
        "vmaxOrig": "170 km/h",
        "vmaxReprog": "195 km/h"
      },
      "gr_yaris": {
        "name": "GR Yaris 1.6 Turbo 261ch (GR-FOUR)",
        "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
        "engine": "3-Cylindres 1.6L Turbo G16E-GTS",
        "type": "Rallye Homologuée Route",
        "origHp": 261,
        "origNm": 360,
        "orig0100": "5.5s",
        "st1Hp": 310,
        "st1Nm": 420,
        "st1_0100": "4.7s",
        "st1Price": "590 €",
        "st2Hp": 340,
        "st2Nm": 460,
        "st2_0100": "4.3s",
        "st2Price": "Sur devis",
        "e85Hp": 325,
        "e85Nm": 440,
        "e85_0100": "4.5s",
        "e85Price": "790 €",
        "vmaxOrig": "230 km/h (bridée)",
        "vmaxReprog": "260 km/h"
      }
    }
  },
  "seat_cupra": {
    "brand": "Cupra & Seat",
    "category": "sport",
    "badge": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
    "models": {
      "formentor_vz": {
        "name": "Cupra Formentor VZ 2.0 TSI 310ch",
        "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L TSI EA888",
        "type": "Crossover Sportif 4Drive",
        "origHp": 310,
        "origNm": 400,
        "orig0100": "4.9s",
        "st1Hp": 375,
        "st1Nm": 500,
        "st1_0100": "4.2s",
        "st1Price": "590 €",
        "st2Hp": 410,
        "st2Nm": 540,
        "st2_0100": "3.8s",
        "st2Price": "Sur devis",
        "e85Hp": 395,
        "e85Nm": 520,
        "e85_0100": "4.0s",
        "e85Price": "790 €",
        "vmaxOrig": "250 km/h",
        "vmaxReprog": "280 km/h"
      },
      "leon_cupra": {
        "name": "Leon Cupra 2.0 TSI 300ch",
        "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
        "engine": "4-Cylindres 2.0L TSI EA888",
        "type": "Compacte Sportive",
        "origHp": 300,
        "origNm": 380,
        "orig0100": "5.7s",
        "st1Hp": 370,
        "st1Nm": 490,
        "st1_0100": "4.9s",
        "st1Price": "550 €",
        "st2Hp": 400,
        "st2Nm": 530,
        "st2_0100": "4.5s",
        "st2Price": "Sur devis",
        "e85Hp": 385,
        "e85Nm": 510,
        "e85_0100": "4.7s",
        "e85Price": "750 €",
        "vmaxOrig": "250 km/h",
        "vmaxReprog": "275 km/h"
      }
    }
  }
};

class ShiftechDynoConfigurator {
  constructor() {
    this.currentBrand = 'audi';
    this.currentModelKey = 'rs3_8v';
    this.currentStage = 'stage1';
    this.activeCategory = 'all';

    this.brandButtons = document.querySelectorAll('.shiftech-brand-btn');
    this.catButtons = document.querySelectorAll('.cfg-cat-btn');
    this.modelSelect = document.getElementById('cfg-model-select');
    this.stageTabs = document.querySelectorAll('.cfg-stage-tab');
    this.canvas = document.getElementById('dyno-chart-pro');

    this.init();
  }

  init() {
    this.setupCategoryFilters();
    this.setupBrandButtons();
    this.populateModels(this.currentBrand);
    this.setupStageTabs();
    this.updateVehicleCard();
    this.drawRealisticDynoCurve();

    window.addEventListener('resize', () => {
      this.drawRealisticDynoCurve();
    });
  }

  setupCategoryFilters() {
    if (!this.catButtons) return;
    this.catButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.catButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeCategory = btn.dataset.category;
        this.filterBrandsByCategory(this.activeCategory);
      });
    });
  }

  filterBrandsByCategory(cat) {
    let firstVisibleBrand = null;
    this.brandButtons.forEach(btn => {
      const bKey = btn.dataset.brand;
      const bData = PERFORMANCE_DATABASE[bKey];
      if (!bData) return;

      const isMatch = (cat === 'all') || 
                      (cat === 'utilitaire' && (bData.category === 'utilitaire' || Object.values(bData.models).some(m => m.name.includes('[UTILITAIRE]')))) ||
                      (cat === 'sport' && bData.category === 'sport');

      if (isMatch) {
        btn.style.display = 'inline-flex';
        if (!firstVisibleBrand) firstVisibleBrand = bKey;
      } else {
        btn.style.display = 'none';
      }
    });

    // If current brand is hidden, switch to the first visible brand
    const curBtn = document.querySelector(`.shiftech-brand-btn[data-brand="${this.currentBrand}"]`);
    if (curBtn && curBtn.style.display === 'none' && firstVisibleBrand) {
      this.selectBrand(firstVisibleBrand);
    }
  }

  selectBrand(brandKey) {
    this.brandButtons.forEach(b => {
      b.classList.toggle('active', b.dataset.brand === brandKey);
    });
    this.currentBrand = brandKey;
    this.populateModels(this.currentBrand);
    this.updateVehicleCard();
    this.drawRealisticDynoCurve();
  }

  setupBrandButtons() {
    this.brandButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectBrand(btn.dataset.brand);
      });
    });

    if (this.modelSelect) {
      this.modelSelect.addEventListener('change', (e) => {
        this.currentModelKey = e.target.value;
        this.updateVehicleCard();
        this.drawRealisticDynoCurve();
      });
    }
  }

  populateModels(brandKey) {
    if (!this.modelSelect) return;
    this.modelSelect.innerHTML = '';
    const brandData = PERFORMANCE_DATABASE[brandKey];
    if (!brandData) return;

    const models = brandData.models;
    let first = true;
    Object.keys(models).forEach(key => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = models[key].name;
      if (first) {
        opt.selected = true;
        this.currentModelKey = key;
        first = false;
      }
      this.modelSelect.appendChild(opt);
    });
  }

  setupStageTabs() {
    this.stageTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.stageTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentStage = tab.dataset.stage;
        this.updateVehicleCard();
        this.drawRealisticDynoCurve();
      });
    });
  }

  getCurrentModel() {
    const brand = PERFORMANCE_DATABASE[this.currentBrand];
    if (!brand) return null;
    return brand.models[this.currentModelKey] || Object.values(brand.models)[0];
  }

  updateVehicleCard() {
    const data = this.getCurrentModel();
    if (!data) return;

    let targetHp = data.st1Hp;
    let targetNm = data.st1Nm;
    let target0100 = data.st1_0100;
    let targetPrice = data.st1Price;
    let stageBadge = "STAGE 1 ÉLECTRONIQUE SUR MESURE";

    if (this.currentStage === 'stage2') {
      targetHp = data.st2Hp;
      targetNm = data.st2Nm;
      target0100 = data.st2_0100;
      targetPrice = data.st2Price;
      stageBadge = "STAGE 2 + ADMISSION / DESCENTE";
    } else if (this.currentStage === 'flexfuel') {
      targetHp = data.e85Hp;
      targetNm = data.e85Nm;
      target0100 = data.e85_0100;
      targetPrice = data.e85Price;
      stageBadge = data.name.includes('BlueHDi') || data.name.includes('dCi') || data.name.includes('TDI') || data.name.includes('CDI') || data.name.includes('HPI')
        ? "OPTIMISATION ÉCO-TORQUE PRO (DIESEL)"
        : "CONVERSION BIO-ÉTHANOL E85 FLEXFUEL";
    }

    const hpDiff = targetHp - data.origHp;
    const nmDiff = targetNm - data.origNm;

    const imgEl = document.getElementById('cfg-car-image');
    const titleEl = document.getElementById('cfg-car-title');
    const engineEl = document.getElementById('cfg-car-engine');
    const stageBadgeEl = document.getElementById('cfg-stage-badge');

    if (imgEl) imgEl.src = data.image;
    if (titleEl) titleEl.textContent = data.name;
    if (engineEl) engineEl.textContent = `${data.engine} • ${data.type || 'Optimisation banc'}`;
    if (stageBadgeEl) stageBadgeEl.textContent = stageBadge;

    const origHpEl = document.getElementById('table-orig-hp');
    const reprogHpEl = document.getElementById('table-reprog-hp');
    const diffHpEl = document.getElementById('table-diff-hp');

    const origNmEl = document.getElementById('table-orig-nm');
    const reprogNmEl = document.getElementById('table-reprog-nm');
    const diffNmEl = document.getElementById('table-diff-nm');

    const orig0100El = document.getElementById('table-orig-0100');
    const reprog0100El = document.getElementById('table-reprog-0100');

    const vmaxEl = document.getElementById('table-vmax-reprog');
    const priceEl = document.getElementById('cfg-price-display');

    if (origHpEl) origHpEl.textContent = `${data.origHp} Ch`;
    if (reprogHpEl) reprogHpEl.textContent = `${targetHp} Ch`;
    if (diffHpEl) diffHpEl.textContent = hpDiff > 0 ? `+${hpDiff} Ch` : `${hpDiff} Ch`;

    if (origNmEl) origNmEl.textContent = `${data.origNm} Nm`;
    if (reprogNmEl) reprogNmEl.textContent = `${targetNm} Nm`;
    if (diffNmEl) diffNmEl.textContent = nmDiff > 0 ? `+${nmDiff} Nm` : `${nmDiff} Nm`;

    if (orig0100El) orig0100El.textContent = data.orig0100;
    if (reprog0100El) reprog0100El.textContent = target0100;

    if (vmaxEl) vmaxEl.textContent = data.vmaxReprog;
    if (priceEl) priceEl.textContent = targetPrice;

    const bookBtn = document.getElementById('btn-cfg-book');
    if (bookBtn) {
      const msg = encodeURIComponent(
        `Bonjour MECADIAG AUTO (Miramas), je souhaite réserver pour mon véhicule :\n` +
        `• Véhicule : ${PERFORMANCE_DATABASE[this.currentBrand].brand} ${data.name}\n` +
        `• Motorisation : ${data.engine}\n` +
        `• Configuration choisie : ${stageBadge} (${targetHp} Ch / ${targetNm} Nm)\n` +
        `• Tarif indicatif : ${targetPrice}\n` +
        `Merci de me recontacter pour un passage sur votre banc de puissance 4x4.`
      );
      bookBtn.href = `https://wa.me/33650624972?text=${msg}`;
    }
  }

  drawRealisticDynoCurve() {
    if (!this.canvas) return;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;

    const data = this.getCurrentModel();
    if (!data) return;

    let targetHp = data.st1Hp;
    let targetNm = data.st1Nm;
    if (this.currentStage === 'stage2') {
      targetHp = data.st2Hp;
      targetNm = data.st2Nm;
    } else if (this.currentStage === 'flexfuel') {
      targetHp = data.e85Hp;
      targetNm = data.e85Nm;
    }

    const width = this.canvas.parentElement.clientWidth;
    const height = 280;
    this.canvas.width = width * window.devicePixelRatio;
    this.canvas.height = height * window.devicePixelRatio;
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';

    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.clearRect(0, 0, width, height);

    const padL = 50;
    const padR = 20;
    const padT = 30;
    const padB = 30;
    const graphW = width - padL - padR;
    const graphH = height - padT - padB;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;

    const ySteps = 5;
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px "Rajdhani", sans-serif';
    ctx.textAlign = 'right';

    const maxScale = Math.max(targetHp, targetNm) * 1.15;

    for (let i = 0; i <= ySteps; i++) {
      const y = padT + (graphH / ySteps) * i;
      const val = Math.round(maxScale - (maxScale / ySteps) * i);
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + graphW, y);
      ctx.stroke();
      ctx.fillText(val + ' ', padL - 8, y + 4);
    }

    const isDiesel = data.engine.toLowerCase().includes('diesel') || data.engine.toLowerCase().includes('dci') || data.engine.toLowerCase().includes('bluehdi') || data.engine.toLowerCase().includes('tdi') || data.engine.toLowerCase().includes('cdi') || data.engine.toLowerCase().includes('hpi');
    const rpmLabels = isDiesel 
      ? ['1000', '1600', '2200', '2800', '3400', '4000', '4600']
      : ['1500', '2500', '3500', '4500', '5500', '6500', '7200'];

    ctx.textAlign = 'center';

    for (let j = 0; j < rpmLabels.length; j++) {
      const x = padL + (graphW / (rpmLabels.length - 1)) * j;
      ctx.beginPath();
      ctx.moveTo(x, padT);
      ctx.lineTo(x, padT + graphH);
      ctx.stroke();
      ctx.fillText(rpmLabels[j] + ' tr/min', x, height - 10);
    }

    const getY = (val) => padT + graphH - (val / maxScale) * graphH;
    const getX = (idx, total) => padL + (graphW / (total - 1)) * idx;

    // Strict Shiftech Palette: Red Racing (#e11d48) for Power, Silver Titanium (#cbd5e1) for Torque, Muted Slate (#64748b) for Stock
    const origHpPoints = [0.30, 0.52, 0.73, 0.88, 0.98, 0.88, 0.70].map(p => p * data.origHp);
    this.plotCurve(ctx, origHpPoints, getX, getY, '#64748b', true, 2);

    const reprogHpPoints = [0.38, 0.65, 0.88, 1.0, 0.99, 0.93, 0.80].map(p => p * targetHp);
    this.plotCurve(ctx, reprogHpPoints, getX, getY, '#e11d48', false, 3.5, true);

    const reprogNmPoints = isDiesel
      ? [0.65, 1.0, 0.95, 0.82, 0.65, 0.48, 0.35].map(p => p * targetNm)
      : [0.60, 0.95, 1.0, 0.90, 0.78, 0.62, 0.48].map(p => p * targetNm);
    this.plotCurve(ctx, reprogNmPoints, getX, getY, '#cbd5e1', false, 3.0);
  }

  plotCurve(ctx, points, getX, getY, color, isDashed = false, lineWidth = 3, fill = false) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    if (isDashed) {
      ctx.setLineDash([4, 4]);
    } else {
      ctx.setLineDash([]);
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;
    }

    ctx.beginPath();
    const len = points.length;

    for (let i = 0; i < len; i++) {
      const x = getX(i, len);
      const y = getY(points[i]);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        const prevX = getX(i - 1, len);
        const prevY = getY(points[i - 1]);
        const cpX1 = prevX + (x - prevX) / 2;
        const cpX2 = prevX + (x - prevX) / 2;
        ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y);
      }
    }
    ctx.stroke();

    if (fill) {
      ctx.lineTo(getX(len - 1, len), getY(0));
      ctx.lineTo(getX(0, len), getY(0));
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, 0, 0, 280);
      grad.addColorStop(0, 'rgba(225, 29, 72, 0.35)');
      grad.addColorStop(1, 'rgba(225, 29, 72, 0.0)');
      ctx.fillStyle = grad;
      ctx.fill();
    }

    ctx.restore();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ShiftechDynoConfigurator();
});
