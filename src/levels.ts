interface LevelType {
  [key: string]: {
    map: string;
    screenWidth?: number;
    screenHeight?: number;
  }
}

/**
 * Le nommage provient de :
 * https://fr.wikipedia.org/wiki/Liste_des_com%C3%A8tes_p%C3%A9riodiques_num%C3%A9rot%C3%A9es
 *
 * Avoir un nom à chaque niveau, plutôt qu'un numéro, permet d'intégrer des
 * nouveaux niveaux n'importe où.
 */
export const levels: LevelType = {
  // Premier niveau : prise en main des déplacements, de la récupération des
  // pièces et de la balise de fin de niveau
  'Halley': {
    map: `
      # # # # # # # # #
      # # # . E . # # #
      # # . . . . . # #
      # $ . . . . . $ #
      # $ . . . . . $ #
      # $ . . . . . $ #
      # # . . S . . # #
      # # # . . . # # #
      # # # # # # # # #
    `,
  },

  // Caméra
  'Encke': {
    map: `
      # # # # # # # # # # #
      # $ . . . . . . . $ #
      # . . . . . . . . . #
      # . . # # . # # . . #
      # . . # $ . $ # . . #
      # . . . . E . . . . #
      # . . # $ . $ # . . #
      # . . # # . # # . . #
      # . . . . S . . . . #
      # $ . . . . . . . $ #
      # # # # # # # # # # #
    `,
  },

  // Tapis roulants
  'Biela': {
    map: `
      # # # # # # # # #
      # # . . E . . # #
      # # . . . . . # #
      # $ > . . . < $ #
      # $ # . # . # $ #
      # $ < . . . > $ #
      # # . . S . . # #
      # # . . . . . # #
      # # # # # # # # #
    `,
  },

  'Faye': {
    map: `
      # # # # # # # # #
      # # # # E # # # #
      # # # # . # # # #
      # . . > . > . . #
      # $ . # # # . $ #
      # # ^ # $ # v # #
      # # ^ . . . v # #
      # . . . S . . . #
      # # # # # # # # #
    `,
  },

  // Glace
  'Brorsen': {
    map: `
      # # # # # # # # #
      # S . ! ! ! ! . #
      # # # # # # ! . #
      # $ $ $ $ $ # . #
      # # # # ! ! # . #
      # ! ! ! # ! # . #
      # ! $ ! . ! # . #
      # ! ! ! . . . E #
      # # # # # # # # #
    `,
  },

  'Tuttle': {
    map: `
      # # # # # # # # #
      # S # . . . . . #
      # . ! # . . . $ #
      # # ! $ # $ . . #
      # . ! ! ! ! # . #
      # . # . # # . . #
      # . . . # . . . #
      # . $ . # . . E #
      # # # # # # # # #
    `,
  },

  // Tourniquets
  'Tempel': {
    map: `
      # # # # # # # # #
      # . . . S . . . #
      # . . # . # . . #
      # # # # $ # # # #
      # . . $ H $ . . #
      # . # # $ # # . #
      # . . # . # . . #
      # . . . E . . . #
      # # # # # # # # #
    `,
  },

  'Olbers': {
    map: `
      # # # # # # # # #
      # . . . . . . . #
      # . . # # # . . #
      # . # # $ # # . #
      # S . $ J $ # . #
      # . # # $ # # . #
      # . . # # # . . #
      # . . . E . . . #
      # # # # # # # # #
    `,
  },

  // Boutons
  'Wolf': {
    map: `
      # # # # # # # # #
      # $ . . # . . $ #
      # . . # # # . . #
      # . . . # . . . #
      # S . . B . . E #
      # . . . # . . . #
      # . . # # # . . #
      # $ . . # . . $ #
      # # # # # # # # #
    `,
  },

  'Finlay': {
    map: `
      # # # # # # # # #
      # S . B . . . $ #
      # . . # . # . . #
      # . # . . . # . #
      # . B . $ . # . #
      # B # . . . # . #
      # . . # # # # # #
      # $ . . . . . E #
      # # # # # # # # #
    `,
  },

  /*

  // Mottes de terre
  'Brooks': {
    map: `
      # # # # # # # # #
      # . . . S . . . #
      # . . . . . . . #
      # U U U U U U U #
      # $ U $ U $ U $ #
      # . . . E . . . #
      # . . U . U . . #
      # . . $ . $ . . #
      # # # # # # # # #
    `,
  },

  'Holmes': {
    map: `
      # # # # # # # # #
      # S # $ $ $ $ $ #
      # . # . . . . . #
      # U # U U . U U #
      # . . . . . . . #
      # # # U # U # # #
      # . . . # . . . #
      # . . . # $ . E #
      # # # # # # # # #
    `,
  },

  */

  // Premiers « vrais » niveaux
  'Borrelly': {
    map: `
      # # # # # # # # #
      # S . . # . . . #
      # . . . # # . $ #
      # # # L = # . . #
      # . # L T $ . . #
      # . # # # # . . #
      # . . . . . $ . #
      # . . . E . . . #
      # # # # # # # # #
    `,
  },

  'Westphal': {
    map: `
      # # # # # # # # #
      # S # # # . ! # #
      # . . ! ! $ ! $ #
      # # # ! ! . ! . #
      # . . ! ! ! ! ! #
      # . . . ! # . # #
      # # # # ! # . . #
      # . $ . $ # . E #
      # # # # # # # # #
    `,
  },

  'Kopff': {
    map: `
      # # # # # # # # # # # #
      # $ . = . . . . . . . #
      # . . # . . $ . . . . #
      # # H # . # # # . . . #
      # . . . = S E . J . $ #
      # # H # . # # # . . . #
      # . . # . . $ . . . . #
      # $ . = . . . . . . . #
      # # # # # # # # # # # #
    `,
  },

  'Schaumasse': {
    map: `
      # # # # # # # # # # # # # # # # # # # #
      # S . . . . . . . . . . . . # . . . $ #
      # . # # # # # # # # # . # . # . # . . #
      # . . . . # . . . . . . # . # # # . # #
      # # # # . # . # # # # # # . # . . . . #
      # . . . . # . # . # . . . . # . # # . #
      # . # # . # . # . # . # # # # . # . . #
      # . . # . . . . . # . . . . . . # . # #
      # # . # # # # # . # # # # . # . # . . #
      # . . # . . . # . # . . . . # . # # # #
      # . # # . # . # . # # # # . # . . . . #
      # . . . . # . # . # . . . . # # # # . #
      # # # # # # . # . # . # # # # . # . . #
      # . # . . . . # . # . . # . . . # . # #
      # . . . # . # # . # # . # . # # # . . #
      # . # # # . # . . . . . # . # . # # . #
      # . # . . . # # # # # # # . # . . . . #
      # . # # # # # . # . . . # . # . # # # #
      # $ . . . . . . . . # . . . # . . . E #
      # # # # # # # # # # # # # # # # # # # #
    `,
  },

  'Crommelin': {
    map: `
      # # # # # # # # #
      # . . . . . . . #
      # . S . . $ $ # #
      # . . . # . . . #
      # . . = ! ! ! ! #
      # . . # . # # # #
      # $ . # . . . . #
      # . . # $ . . E #
      # # # # # # # # #
    `,
  },

  'Reinmuth': {
    map: `
      # # # # # # # # #
      # S . . ! . . . #
      # . $ # ! . $ . #
      # # # # ! # # # #
      # ! ! ! L ! ! ! #
      # B # # ! # # . #
      # . $ # ! . $ . #
      # . . B ! # . E #
      # # # # # # # # #
    `,
  },

  // Par Aur36
  'Daniel': {
    map: `
      # # # # # # # # #
      # $ . . E . . $ #
      # $ $ . . . $ $ #
      # # # # ^ # # # #
      # $ B B $ B B $ #
      # B # # ^ # # B #
      # B # # ^ # # B #
      # $ B B $ B B $ #
      # B # # B # # ^ #
      # B # # B # # ^ #
      # $ B B $ B B $ #
      # B # # ^ # # B #
      # B # # ^ # # B #
      # $ B B S B B $ #
      # # # # # # # # #
    `,
  },

  // Par Aur36
  'Gale': {
    screenWidth: 13,
    screenHeight: 13,
    map: `
      # # # # # # # # # # # # # # # # #
      # . . . . . . . . # . . . . . . #
      # . $ $ . . . . . B . . . $ $ . #
      # . . . . . . . . # . . . . . . #
      # # # ^ # # # # # # B # # # # # #
      # . . . . . . . . . . # . . . . #
      # . $ $ . . . T = T . # . . . . #
      # . $ $ . . . H $ H . # . $ $ . #
      # . $ $ . . . F = T . # . $ $ . #
      # . . . . . . . . . . # . . . . #
      # # # ^ # B # # # # # # . . . . #
      # . . . . . . . . . . # . . . . #
      # . . . S . . $ $ . . > . E . . #
      # . . . . . . . . . . # . . . . #
      # # # # # # # # # # # # # # # # #
    `,
  },

  'Whipple': {
    map: `
      #  #  #  #  #  #  #  #  #
      #  S  #  .  .  .  .  .  #
      #  .  #  #  .  .  $  .  #
      #  .  .  #  #  .  .  .  #
      #  .  $  .  #  #  B2 #  #
      #  .  $  $  .  .  .  .  #
      #  #  .  $  .  .  .  .  #
      #  #  #  .  .  .  .  E  #
      #  #  #  #  #  #  #  #  #
    `,
  },

  'Forbes': {
    map: `
      #  #  #  #  #  #  #  #  #
      #  S  .  .  #  .  .  .  #
      #  .  $  .  #  .  $  .  #
      #  .  .  #  .  .  .  .  #
      #  v  v  #  B2 #  ^  ^  #
      #  .  .  .  .  #  .  .  #
      #  .  $  .  #  .  $  .  #
      #  .  .  .  B  .  .  E  #
      #  #  #  #  #  #  #  #  #
    `,
  },

  'Oterma': {
    map: `
      # # # # # # # # #
      # # S . E . . # #
      # . . . $ . . . #
      # . # # # # 2 # #
      # . # $ $ $ $ . #
      # $ # . # . # . #
      # . 6 B B B B B #
      # . # $ $ $ $ # #
      # # # # # # # # #
    `,
  },

  'Wirtanen': {
    map: `
      # # # # # # # # #
      # # # # E # # # #
      # B . . . . . B #
      # $ # # . # # $ #
      # B . $ B $ . B #
      # # # $ B $ # # #
      # # # # . # # # #
      # . . . S . . . #
      # # # # # # # # #
    `,
  },

  'Johnson': {
    map: `
      # # # # # # # # #
      # S . . # . # # #
      # . . . B . . # #
      # . . # # # . . #
      # . $ T $ F $ . #
      # . . . # . . . #
      # # . . B . . . #
      # # # . # . . E #
      # # # # # # # # #
    `,
  },

  'Arend': {
    map: `
      # # # # # # # # #
      # S # . # . . . #
      # . # . # . # . #
      # . 6 . 8 . $ . #
      # B # # # . # . #
      # $ < . < . $ . #
      # . # . # . # . #
      # . # . # . . E #
      # # # # # # # # #
    `,
  },

  'Clark': {
    screenWidth: 11,
    screenHeight: 9,
    map: `
      # # # # # # # # # # #
      # $ . B . $ . B . $ #
      # . . # . . . # . . #
      # B # # # B # # # B #
      # $ . B . S . B . $ #
      # B # # # B # # # B #
      # . . # . . . # . . #
      # $ . B . E . B . $ #
      # # # # # # # # # # #
    `,
  },

  'Wild': {
    map: `
      # # # # . # # # #
      # S # # . . . . #
      # . # # # # # . #
      # . # . . # # . #
      . . # # $ # # . .
      # # # # . # # # #
      . . . . . # . . .
      # . . # . # . E #
      # # # # . # # # #
    `,
  },

  'Gunn': {
    map: `
      #  #  #  #  #  #  #  #  #
      #  $  B  $  #  .  .  #  #
      #  B  2  B2 $  T  .  .  #
      #  S  #  B  #  B  #  .  #
      #  B  2  B2 $  J  .  .  #
      #  .  #  $  #  $  #  .  #
      #  .  #  B  #  #  #  .  #
      #  .  .  .  .  .  .  E  #
      #  #  #  #  #  #  #  #  #
    `,
  },

  'Klemola': {
    map: `
      # # # # # # # # #
      # $ . # S # $ . #
      # . . ! ! ! . . #
      # ! ! ! ! ! ! ! #
      # ! $ ! B ! $ ! #
      # ! ! ! ! ! ! ! #
      # # # . . . # # #
      # . . . . . . E #
      # # # # # # # # #
    `,
  },

  'Taylor': {
    map: `
      # # # # # # # # #
      # . . . . < . $ #
      # # . # v # # ^ #
      # . . > $ B . . #
      # S # # F B B E #
      # . . > $ B . . #
      # # . # ^ # # v #
      # . . . . < . $ #
      # # # # # # # # #
    `,
  },

  'Kojima': {
    screenWidth: 10,
    screenHeight: 10,
    map: `
      # # # # # # # # # #
      # # # . . . . # # #
      # # . . . . . . # #
      # . . J J L L . . #
      # S . H J $ H . . #
      # . . H $ F H . E #
      # . . T T F F . . #
      # # . . . . . . # #
      # # # . . . . # # #
      # # # # # # # # # #
    `,
  },

  'Tsuchinshan': {
    map: `
      #  #  #  #  #  #  #  #  #
      #  S  #  $  #  $  #  $  #
      #  $  #  $  B  T  B  $  #
      #  $  #  $  #  $  #  $  #
      #  $  B  F  B2 $  #  $  #
      #  $  #  $  #  $  #  $  #
      #  $  #  $  B  J  B  $  #
      #  $  B  $  #  $  #  E  #
      #  #  #  #  #  #  #  #  #
    `,
  },

  'Kohoutek': {
    screenWidth: 13,
    screenHeight: 13,
    map: `
      # # . # # # # # # # . # #
      # . . . # . . . # . . . #
      . . $ . # . $ . B . $ . .
      # . . . # . . . # . . . #
      # # B # # # B # # # B # #
      # . . . # . . . # . . . #
      # . $ . # . S . B . $ . #
      # . . . # . . . # . . . #
      # # B # # # B # # # B # #
      # . . . # . . . # . . . #
      # . $ . # . E . # . $ . #
      # . . . # . . . # . . . #
      # # . # # # # # # # . # #
    `,
  },

  'Larsen': {
    map: `
      #  #  #  #  #  #  #  #  #
      #  $  L  $  8  =  8  .  #
      #  .  F  B2 #  .  6  .  #
      #  H  #  4  #  4  #  #  #
      #  .  .  .  .  .  .  .  #
      #  .  .  .  S  .  .  .  #
      #  #  .  .  E  .  .  #  #
      #  #  #  .  .  .  #  #  #
      #  #  #  #  #  #  #  #  #
    `,
  },

  'Vorobjov': {
    map: `
      # # # # # # # # #
      # ! . . # . . ! #
      # ! $ . # . $ ! #
      # ! . J B L . ! #
      # ^ # H # H # ^ #
      # ! $ L ! J $ ! #
      # ! . ! ! ! . ! #
      # ! S # E # . ! #
      # # # # # # # # #
    `,
  },

  'Spahr': {
    map: `
      # # # # # # # # # # # # #
      # . . . . . # . . . . . #
      # . $ . . . # . . . $ . #
      # . . . # F > . # . . . #
      # . . # F J . L T # . . #
      # . . . J . . . L T . . #
      # # # ^ . . S . . v # # #
      # . . L T . E . F . . . #
      # . . # L T . F J # . . #
      # . . . # . < J # . . . #
      # . $ . . . # . . . $ . #
      # . . . . . # . . . . . #
      # # # # # # # # # # # # #
    `,
  },

  'Yeung': {
    map: `
      # # # # # # # # #
      # S # . $ = $ . #
      # . # . . # . . #
      # $ = . B # B T #
      # . F . J . T . #
      # F B # # . B $ #
      # . . # . . # . #
      # . $ = $ . # E #
      # # # # # # # # #
    `,
  },

  'Mrkos': {
    screenWidth: 13,
    screenHeight: 13,
    map: `
      # # # # # # # # # # # # #
      # $ . . . # $ . ! ! . $ #
      # . . . . # . . ! ! . . #
      # # # ! ! T ! ! ! ! # # #
      # $ . ! ! ! B ! ! ! . $ #
      # # v ! ! . # # ! ! # # #
      # . . ! ! . $ . ! ! . $ #
      # # # ! ! # B . ! ! # # #
      # S . ! ! # ! ! ! ! . $ #
      # # ! ! ! ! ! ! # ! # # #
      # . . ! ! . . . # . . . #
      # $ . ! ! . $ . # . . E #
      # # # # # # # # # # # # #
    `,
  },

  'Helin': {
    map: `
      # # # # # # # # #
      # S . B . # . $ #
      # . $ J $ 6 . . #
      # . B # . # # 4 #
      # B $ . J v . . #
      # 4 # # . < v # #
      # . . B ^ < . $ #
      # $ . < . $ < E #
      # # # # # # # # #
    `,
  },

  'Spacewatch': {
    screenWidth: 11,
    screenHeight: 11,
    map: `
      # # # . # # # . # # #
      # . . . $ S $ . . . #
      # # # # # # # # # . #
      B . $ . # . . $ # . .
      # . # # # B # . 6 B #
      # L . # $ . # # # . #
      # . # # # B # . # . #
      . . . . = . # . $ . .
      # . # . # . # # # # #
      # $ # . # . . . . E #
      # # # . # # # . # # #
    `,
  },

  'Kushida': {
    map: `
      # # . # . # . # #
      # $ . # $ # . $ #
      . # B # . # B # .
      T . . F H T . . F
      4 = = = S = = = 6
      J . . L H J . . L
      . # B # . # B # .
      # $ . # $ # . $ #
      # # . # E # . # #
    `,
  },

  'Brewington': {
    screenWidth: 13,
    screenHeight: 13,
    map: `
      # # # # # # # # # # # # #
      # . . . . . # . . . . . #
      # # . $ . . # . . $ . # #
      # . # . . F = T . . # . #
      # . . # . H . H . # . . #
      # . $ . F J . L T . $ . #
      # . . . H . E . H . . . #
      # # # F J . . . L T # # #
      # . . H . . . . . H . . #
      # . . L = = 8 = = J . . #
      # $ . B . = 2 = . B . $ #
      # . . # . . S . . # . . #
      # # # # # # # # # # # # #
    `,
  },

  'Tritton': {
    screenWidth: 13,
    screenHeight: 9,
    map: `
      # # # # # # # # # # # # #
      # $ . B . . $ . . B . $ #
      # . F = T # H # F = T . #
      # . H $ H $ H $ H $ . . #
      # # 4 = J # H # 4 = = # #
      # . H . . . H . H . . . #
      # . H . S . H . H . E . #
      # . . . . . . . . . . . #
      # # # # # # # # # # # # #
    `,
  },

  'Christensen': {
    screenWidth: 13,
    screenHeight: 10,
    map: `
      # # # # # # # # # # # # #
      # . . B . $ # $ . B . . #
      # . $ . # . # . # . $ . #
      # . . # # F B T # # . . #
      # . B 4 $ . . . $ 6 B . #
      # # # . # . . . # . # # #
      # # . L B # B # B J . # #
      # # . B . . S . . B . # #
      # . $ . # # E # # . $ . #
      # # # # # # # # # # # # #
    `,
  },

  'Barnard': {
    map: `
      # # # # # # # # #
      # $ . . # . . $ #
      # . F = 8 = T . #
      # . H B S B H . #
      # # 4 ! ! ! 6 # #
      # . H B E B H . #
      # . L = 2 = J . #
      # $ . . # . . $ #
      # # # # # # # # #
    `,
  },

  'Mueller': {
    map: `
      # # # # # # # # #
      # $ . . F . . . #
      # # # B H B S . #
      # . B . H . B . #
      # L = = B = = J #
      # . B . H . B $ #
      # $ # B H B # # #
      # E # . L . $ . #
      # # # # # # # # #
    `,
  },

  'Harrington': {
    map: `
      # # # # # # # # #
      # S # . B . # . #
      # . B $ # $ B # #
      # . J . B . J . #
      # . B # . # # . #
      # . J $ J $ # . #
      # E # # $ # # . #
      # . < . B . . $ #
      # # # # # # # # #
    `,
  },

  'Hergenrother': {
    screenWidth: 13,
    screenHeight: 13,
    map: `
      # # # # # # # # # # # # #
      # ! ! ! ! # ! ! ! ! ! # #
      # ! $ ! ! ! ! ! ! ! T . #
      # ! ! ! ! ! ! ! ! # . . #
      # ! ! ! ! # B # # . $ . #
      # ! ! ! # . . . # . . . #
      # 6 # # # . S . # # # 6 #
      # . . . # . E . # . . . #
      # . $ . # # B # # . $ . #
      # . . # . . H . . # . . #
      # . L = = T 6 F = = J . #
      # # . . . L 2 J . . . . #
      # # # # # # # # # # # # #
    `,
  },

  'Gehrels': {
    screenWidth: 11,
    screenHeight: 11,
    map: `
      # # # # # # # # # # # # #
      # E . . . B . $ . $ . . #
      # . . . . # # # # # # . #
      # # # # B T $ $ $ $ . . #
      # $ . . . H $ $ $ $ # . #
      # # # $ . L = F = = T # #
      # # # F = = = H = = J # #
      # . . H . $ . H . $ . # #
      # . . H # # # H # # # . #
      # . . H . $ . ! . $ $ . #
      # . . . . $ . ! . $ $ . #
      # . . . S . . B . . . . #
      # # # # # # # # # # # # #
    `,
  },

  'Hermann': {
    screenWidth: 13,
    screenHeight: 13,
    map: `
      # # # # # # # # # # # # #
      # . . . # . . . # . . . #
      # . $ . # . E . # . $ . #
      # . . . F T . F T . . . #
      # . . F J L = J L T . . #
      # # # H $ . # . $ H # # #
      # . . L T . # . F J . . #
      # . . . L T # F J . . . #
      # . . . . L F J . . . . #
      # # . . . . H . . . . # #
      # # # . . . . . . . # # #
      # # # # . . S . . # # # #
      # # # # # # # # # # # # #
    `,
  },

  'Longmore': {
    screenWidth: 13,
    screenHeight: 13,
    map: `
      # # # # # # # # # # # # #
      # . . . # . . . # . . . #
      # . $ . 4 . $ . 6 . $ . #
      # . . . # . . . # . . . #
      # # # 8 B F # T B 8 # # #
      # . . . # . . . # . . . #
      # . $ . 6 . S . 4 . $ . #
      # . . . # . . . # . . . #
      # # # 2 B L # J B 2 # # #
      # . . . # . . . # . . . #
      # . $ . 4 . E . 6 . $ . #
      # . . . # . . . # . . . #
      # # # # # # # # # # # # #
    `,
  },

  /*

  'Namcap': {
    map: `
      # # # # # # # # # # # # # # # # #
      # $ $ $ $ $ $ $ # $ $ $ $ $ $ $ #
      # $ # # $ # # $ # $ # # $ # # $ #
      # $ # # $ # # $ # $ # # $ # # $ #
      # $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ #
      # $ # # $ # $ # # # $ # $ # # $ #
      # $ $ $ $ # $ $ # $ $ # $ $ $ $ #
      # # # # $ # # . # . # # $ # # # #
      # # # # $ # . . . . . # $ # # # #
      # # # # $ # . # . # . # $ # # # #
      . . . . $ # . # E # . # $ . . . .
      # # # # $ # . # # # . # $ # # # #
      # # # # $ # . . . . . # $ # # # #
      # # # # $ # . # # # . # $ # # # #
      # $ $ $ $ $ $ $ # $ $ $ $ $ $ $ #
      # $ # # $ # # $ # $ # # $ # # $ #
      # $ $ # $ $ $ $ S $ $ $ $ # $ $ #
      # # $ # $ # $ # # # $ # $ # $ # #
      # $ $ $ $ # $ $ # $ $ # $ $ $ $ #
      # $ # # # # # $ # $ # # # # # $ #
      # $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ #
      # # # # # # # # # # # # # # # # #
    `,

    screenHeight: 22,
    screenWidth: 17,
  },

  */

  /*

  'empty': {
    map: `
      # # # # # # # # #
      # S . . . . . . #
      # . . . . . . . #
      # . . . . . . . #
      # . . . . . . . #
      # . . . . . . . #
      # . . . . . . . #
      # . . . . . . E #
      # # # # # # # # #
    `,
  },

  */
}
