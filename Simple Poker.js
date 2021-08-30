/* 'Simple Poker' by Brian Awotwi 

-Shuffles and then cuts a deck of cards, and deals 5 cards to two players (you and the computer)
-Evaluates each hand and awards a winner based on the winning combination of cards
-Programmed to evaluate until all ties can no longer be resolved
-Contains a debugging function to test specific hands; not to be used with the dealing function

*/

// establish the deck of cards

const deck = {
        _cards: [
            {
                name: '2 Of Clubs',
                shortHand: '2C',
                suit: 'clubs',
                value: 2
        },
        {
                name: '3 Of Clubs',
                shortHand: '3C',
                suit: 'clubs',
                value: 3
        },
        {
                name: '4 Of Clubs',
                shortHand: '4C',
                suit: 'clubs',
                value: 4
        },
        {
                name: '5 Of Clubs',
                shortHand: '5C',
                suit: 'clubs',
                value: 5
        },
        {
                name: '6 Of Clubs',
                shortHand: '6C',
                suit: 'clubs',
                value: 6
        },
        {
                name: '7 Of Clubs',
                shortHand: '7C',
                suit: 'clubs',
                value: 7
        },
        {
                name: '8 Of Clubs',
                shortHand: '8C',
                suit: 'clubs',
                value: 8
        },
        {
                name: '9 Of Clubs',
                shortHand: '9C',
                suit: 'clubs',
                value: 9
        },
        {
                name: '10 Of Clubs',
                shortHand: '10C',
                suit: 'clubs',
                value: 10
        },
        {
                name: 'Jack Of Clubs',
                shortHand: 'JC',
                suit: 'clubs',
                value: 11
        },
        {
                name: 'Queen Of Clubs',
                shortHand: 'QC',
                suit: 'clubs',
                value: 12
        },
        {
                name: 'King Of Clubs',
                shortHand: 'KC',
                suit: 'clubs',
                value: 13
        },
        {
                name: 'Ace Of Clubs',
                shortHand: 'AC',
                suit: 'clubs',
                value: 14
        },
        {
                name: '2 Of Diamonds',
                shortHand: '2D',
                suit: 'diamonds',
                value: 2
        },
        {
                name: '3 Of Diamonds',
                shortHand: '3D',
                suit: 'diamonds',
                value: 3
        },
        {
                name: '4 Of Diamonds',
                shortHand: '4D',
                suit: 'diamonds',
                value: 4
        },
        {
                name: '5 Of Diamonds',
                shortHand: '5D',
                suit: 'diamonds',
                value: 5
        },
        {
                name: '6 Of Diamonds',
                shortHand: '6D',
                suit: 'diamonds',
                value: 6
        },
        {
                name: '7 Of Diamonds',
                shortHand: '7D',
                suit: 'diamonds',
                value: 7
        },
        {
                name: '8 Of Diamonds',
                shortHand: '8D',
                suit: 'diamonds',
                value: 8
        },
        {
                name: '9 Of Diamonds',
                shortHand: '9D',
                suit: 'diamonds',
                value: 9
        },
        {
                name: '10 Of Diamonds',
                shortHand: '10D',
                suit: 'diamonds',
                value: 10
        },
        {
                name: 'Jack Of Diamonds',
                shortHand: 'JD',
                suit: 'diamonds',
                value: 11
        },
        {
                name: 'Queen Of Diamonds',
                shortHand: 'QD',
                suit: 'diamonds',
                value: 12
        },
        {
                name: 'King Of Diamonds',
                shortHand: 'KD',
                suit: 'diamonds',
                value: 13
        },
        {
                name: 'Ace Of Diamonds',
                shortHand: 'AD',
                suit: 'diamonds',
                value: 14
        },
        {
                name: '2 Of Spades',
                shortHand: '2S',
                suit: 'spades',
                value: 2
        },
        {
                name: '3 Of Spades',
                shortHand: '3S',
                suit: 'spades',
                value: 3
        },
        {
                name: '4 Of Spades',
                shortHand: '4S',
                suit: 'spades',
                value: 4
        },
        {
                name: '5 Of Spades',
                shortHand: '5S',
                suit: 'spades',
                value: 5
        },
        {
                name: '6 Of Spades',
                shortHand: '6S',
                suit: 'spades',
                value: 6
        },
        {
                name: '7 Of Spades',
                shortHand: '7S',
                suit: 'spades',
                value: 7
        },
        {
                name: '8 Of Spades',
                shortHand: '8S',
                suit: 'spades',
                value: 8
        },
        {
                name: '9 Of Spades',
                shortHand: '9S',
                suit: 'spades',
                value: 9
        },
        {
                name: '10 Of Spades',
                shortHand: '10S',
                suit: 'spades',
                value: 10
        },
        {
                name: 'Jack Of Spades',
                shortHand: 'JS',
                suit: 'spades',
                value: 11
        },
        {
                name: 'Queen Of Spades',
                shortHand: 'QS',
                suit: 'spades',
                value: 12
        },
        {
                name: 'King Of Spades',
                shortHand: 'KS',
                suit: 'spades',
                value: 13
        },
        {
                name: 'Ace Of Spades',
                shortHand: 'AS',
                suit: 'spades',
                value: 14
        },
        {
                name: '2 Of Hearts',
                shortHand: '2H',
                suit: 'hearts',
                value: 2
        },
        {
                name: '3 Of Hearts',
                shortHand: '3H',
                suit: 'hearts',
                value: 3
        },
        {
                name: '4 Of Hearts',
                shortHand: '4H',
                suit: 'hearts',
                value: 4
        },
        {
                name: '5 Of Hearts',
                shortHand: '5H',
                suit: 'hearts',
                value: 5
        },
        {
                name: '6 Of Hearts',
                shortHand: '6H',
                suit: 'hearts',
                value: 6
        },
        {
                name: '7 Of Hearts',
                shortHand: '7H',
                suit: 'hearts',
                value: 7
        },
        {
                name: '8 Of Hearts',
                shortHand: '8H',
                suit: 'hearts',
                value: 8
        },
        {
                name: '9 Of Hearts',
                shortHand: '9H',
                suit: 'hearts',
                value: 9
        },
        {
                name: '10 Of Hearts',
                shortHand: '10H',
                suit: 'hearts',
                value: 10
        },
        {
                name: 'Jack Of Hearts',
                shortHand: 'JH',
                suit: 'hearts',
                value: 11
        },
        {
                name: 'Queen Of Hearts',
                shortHand: 'QH',
                suit: 'hearts',
                value: 12
        },
        {
                name: 'King Of Hearts',
                shortHand: 'KH',
                suit: 'hearts',
                value: 13
        },
        {
                name: 'Ace Of Hearts',
                shortHand: 'AH',
                suit: 'hearts',
                value: 14
        }
        ],
        
    // establish the arrays that will represent the player's and computers's hands
        _hand: {
            player: [],
            com: []
        },
        
    // make getters and setters for the hands
    
        get playerHand () {
          return this._hand.player;
        },
        
        set playerHand (player) {
            this._hand.player = player;
        },
        
        get comHand () {
            return this._hand.com;
        },
        
        set comHand (com) {
            this._hand.com = com;
        },
        
    // use the getter methods
    
        get handOfCards () {
            return {
                playerHand: this.playerHand,
                comHand: this.comHand
            }
        },

      // deck randomizer

     shuffleDeck()  {
      let m = this._cards.length, t, i;
      
      while (m) {
        i = Math.floor(Math.random() * m--);
    
        t = this._cards[m];
        this._cards[m] = this._cards[i];
        this._cards[i] = t;
      }
      return this._cards
    },

    // takes at least 10 cards from the top and place it at the bottom; the remaining cards go on top

      cutDeck () {
        const topAmount = Math.floor((Math.random() * this._cards.length) + 10)
        const bottomAmount = this._cards.length - topAmount
    
      return this._cards = (this._cards.slice(-bottomAmount)).concat(this._cards.slice(0, topAmount))
      },

      // deals 1 card at a time starting with the player; up to 5 cards each

      deal () {
        this.shuffleDeck()
        this.cutDeck()
    
        let i = 0
        do {
          this.playerHand.push(this._cards[i])
          i++
          this.comHand.push(this._cards[i])
          i++
        } while (this.playerHand.length < 5 && this.comHand.length < 5)
        
      for (j = 0; j < 5; j++) {
        return this._hand
      }
      },

      debugHands () {

        /* push the cards into the arrays manually and use to test specific hands; 
        remember that this code assumes there are only 52 unique cards;
        duplicating cards might produce undesirable results */
        this.playerHand.push(this._cards[7], this._cards[11], this._cards[10], this._cards[9], this._cards[12])
        this.comHand.push(this._cards[46], this._cards[51], this._cards[50], this._cards[48], this._cards[49])

      }
};

// use to test hands; do not use with 'deck.deal()'
//deck.debugHands() 

// shuffles and cuts deck and deals cards; do not use with 'deck.debugHands()'
deck.deal() 

const playerAttr = {
        cards: [],
        suits: [],
        values: [],
        set: '',
        score: 0
}

const comAttr = {
        cards: [],
        suits: [],
        values: [],
        set: '',
        score: 0
}

const showPlayerHand = () => {
        for (const card of deck.playerHand) {
                playerAttr.cards.push(card.shortHand)
        }
        return playerAttr.cards
}

const showComHand = () => {
   for (const card of deck.comHand) {
        comAttr.cards.push(card.shortHand)
}
   return comAttr.cards
}

const parsePlayerSuits = () => {
        for (const card of deck.playerHand) {
                playerAttr.suits.push(card.suit)
        }
        return playerAttr.suits
}

const parseComSuits = () => {
        for (const card of deck.comHand) {
                comAttr.suits.push(card.suit)
        }
        return comAttr.suits
}

const parsePlayerValues = () => {
        for (const card of deck.playerHand) {
                playerAttr.values.push(card.value)
        }
        return playerAttr.values
}

const parseComValues = () => {
        for (const card of deck.comHand) {
                comAttr.values.push(card.value)
        }
        return comAttr.values
}


const evaluateHands = (hand) => {

        /* sorts the values pertaining to the hand from smallest to largest*/
        hand.values.sort(function(a, b) {
                return a - b;
        })

        const inOrder = []

        /* determines if the sorted values are in increments of 1; needed to determine if a hand is a 
        Straight or a Flush type */
        for (i=0; i < 4; i++) {
                (hand.values[i + 1] === hand.values[i] + 1) ? inOrder.push(true) : inOrder.push(false)
             }

        const counts = {};

        /* tallies the number of times cards with the same value occur in the hands; lists them
        in 'key:value' notation; stores in an object called 'counts' */
        hand.values.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

        /* takes only the values of all items in 'counts'; needed to determine whether or not
        a hand contains multiple cards with the same value */
        const occurences = Object.values(counts)

        if (hand.values[0] === 10 && !inOrder.includes(false) && hand.suits.every(suit => suit === hand.suits[0])) {
                hand.score += 100
                hand.set = 'Royal Flush'
                return 'Royal Flush'
             }
        if (hand.values[0] !== 10 && !inOrder.includes(false) && hand.suits.every(suit => suit === hand.suits[0])) {
                hand.score += 90
                hand.set = 'Straight Flush'
                return 'Straight Flush'
             }
        if (occurences.length === 2 && occurences.includes(4)) {
                hand.score += 80
                hand.set = '4 Of A Kind'
                return '4 Of A Kind'
        }
        if (occurences.length === 2 && occurences.includes(3)) {
                hand.score += 70
                hand.set = 'Full House'
                return 'Full House'
        }
        if (inOrder.includes(false) && hand.suits.every(suit => suit === hand.suits[0])) {
                hand.score += 60
                hand.set = 'Flush'
                return 'Flush'
             }
        if (!inOrder.includes(false) && !hand.suits.every(suit => suit === hand.suits[0])) {
                hand.score += 50
                hand.set = 'Straight'
                return 'Straight'
             }
        if (occurences.length === 3 && occurences.includes(3)) {
                hand.score += 40
                hand.set = '3 Of A Kind'
                return '3 Of A Kind'
        }
        if (occurences.length === 3 && occurences.includes(2)) {
                hand.score += 30
                hand.set = '2 Pair'
                return '2 Pair'
        }
        if (occurences.length === 4 && occurences.includes(2)) {
                hand.score += 20
                hand.set = 'Pair'
                return 'Pair'
        }
        if (occurences.length === 5 && occurences.includes(1) && !hand.suits.every(suit => suit === hand.suits[0]) && inOrder.includes(false)) {
                hand.score += 10
                hand.set = 'High Card'
                return 'High Card'
             }
}

const scoring = () => {
        if (playerAttr.score > comAttr.score) {
                return 'You win'
        } else if (playerAttr.score < comAttr.score) {
                return 'The computer wins'
        }
        if (playerAttr.score === comAttr.score) {

                let playerTieBreaker1 = []
                let playerTieBreaker2 = []
                let comTieBreaker1 = []
                let comTieBreaker2 = []

                // Royal Flush
                if (playerAttr.set === 'Royal Flush' && comAttr.set === 'Royal Flush') {
                        return `Tie`
                }

                // 4 Of A Kind
                if (playerAttr.set === '4 Of A Kind' && comAttr.set === '4 Of A Kind') {
                        for (i = 0; i < playerAttr.values.length; i++) {
                                for (j= i + 1; j < playerAttr.values.length; j++) {
                                        for (k= j +1; k < playerAttr.values.length; k++) {
                                                for (l= k + 1; l < playerAttr.values.length; l++) {
                                                        if ((playerAttr.values[i] === playerAttr.values[j]) && (playerAttr.values[j] === playerAttr.values[k]) && (playerAttr.values[k] === playerAttr.values[l])) {
                                                        playerTieBreaker1.push(playerAttr.values[i])
                                                }
                                        }
                                   }
                                }
                        }

                        for (i = 0; i < comAttr.values.length; i++) {
                                for (j= i + 1; j < comAttr.values.length; j++) {
                                        for (k= j +1; k < comAttr.values.length; k++) {
                                                for (l = k +1; l < comAttr.values.length; l++) {
                                                        if ((comAttr.values[i] === comAttr.values[j]) && (comAttr.values[j] === comAttr.values[k]) && (comAttr.values[k] === comAttr.values[l])) {
                                                        comTieBreaker1.push(comAttr.values[i])
                                                }
                                        }
                                   }
                                }
                        }

                        playerAttr.score += Math.max(...playerTieBreaker1)
                        comAttr.score += Math.max(...comTieBreaker1)

                        const playerCard = deck.playerHand.filter(element => element.value === playerTieBreaker1[0])
                        const comCard = deck.comHand.filter(element => element.value === comTieBreaker1[0])

                        if (playerAttr.score > comAttr.score) {
                                return `You win with the ${playerCard[0].name}, the ${playerCard[1].name}, the ${playerCard[2].name}, and the ${playerCard[3].name}`
                        } else if (playerAttr.score < comAttr.score) {
                                return `The computer wins the ${comCard[0].name}, the ${comCard[1].name}, the ${comCard[2].name}, and the ${comCard[3].name}`
                        }

                }

                // Flush and High Card
                if ((playerAttr.set === 'Flush' && comAttr.set === 'Flush') || (playerAttr.set === 'High Card' && comAttr.set === 'High Card')) {
                        while (playerAttr.score === comAttr.score) {
                                if (playerAttr.score > comAttr.score || playerAttr.score < comAttr.score || playerAttr.values.length === 0 || comAttr.values.length === 0) {
                                        break
                                }
                                playerAttr.score += Math.max(...playerAttr.values)
                                comAttr.score += Math.max(...comAttr.values)
                                playerTieBreaker1.push(playerAttr.values.pop())
                                comTieBreaker1.push(comAttr.values.pop())
                        }

                        const playerCard = deck.playerHand.filter(element => element.value === playerTieBreaker1[playerTieBreaker1.length - 1])
                        const comCard = deck.comHand.filter(element => element.value === comTieBreaker1[comTieBreaker1.length - 1])

                        if (playerAttr.score > comAttr.score) {
                                return `You win with the ${playerCard[0].name}`
                        } else if (playerAttr.score < comAttr.score) {
                                return `The computer wins the ${comCard[0].name}`
                        } else {
                                return 'Tie'
                        }
                }

                //Straight and Straight Flush
                if ((playerAttr.set === 'Straight' && comAttr.set === 'Straight') || (playerAttr.set === 'Straight Flush' && comAttr.set === 'Straight Flush')) {
                        playerAttr.score += Math.max(...playerAttr.values)
                        comAttr.score += Math.max(...comAttr.values)

                        if (playerAttr.score > comAttr.score) {
                                return `You win with a higher hand`
                     } else if (playerAttr.score < comAttr.score) {
                                return `The computer wins with a higher hand`
                     } else if (playerAttr.score = comAttr.score) {
                             return `Tie`
                     }
                }

                // Full House and 3 Of A Kind
                if ((playerAttr.set === 'Full House' && comAttr.set === 'Full House') || (playerAttr.set === '3 Of A Kind' && comAttr.set === '3 Of A Kind')) {
                        for (i = 0; i < playerAttr.values.length; i++) {
                                for (j= i + 1; j < playerAttr.values.length; j++) {
                                        for (k= j +1; k < playerAttr.values.length; k++) {
                                                if ((playerAttr.values[i] === playerAttr.values[j]) && (playerAttr.values[j] === playerAttr.values[k])) {
                                                playerTieBreaker1.push(playerAttr.values[i])
                                        }
                                   }
                                }
                        }

                        for (i = 0; i < comAttr.values.length; i++) {
                                for (j= i + 1; j < comAttr.values.length; j++) {
                                        for (k= j +1; k < comAttr.values.length; k++) {
                                                if ((comAttr.values[i] === comAttr.values[j]) && (comAttr.values[j] === comAttr.values[k])) {
                                                comTieBreaker1.push(comAttr.values[i])
                                        }
                                   }
                                }
                        }

                        playerAttr.score += Math.max(...playerTieBreaker1)
                        comAttr.score += Math.max(...comTieBreaker1)

                        const playerCard = deck.playerHand.filter(element => element.value === playerTieBreaker1[0])
                        const comCard = deck.comHand.filter(element => element.value === comTieBreaker1[0])

                        if (playerAttr.score > comAttr.score) {
                                return `You win with the ${playerCard[0].name}, the ${playerCard[1].name}, and the ${playerCard[2].name}`
                        } else if (playerAttr.score < comAttr.score) {
                                return `The computer wins with the ${comCard[0].name}, the ${comCard[1].name}, and the ${comCard[2].name}`
                        } 
                }

                // 2 Pair
                if (playerAttr.set === '2 Pair' && comAttr.set === '2 Pair') {
                        for (i = 0; i < playerAttr.values.length; i++) {
                                for (j= i + 1; j < playerAttr.values.length; j++) {
                                   if (playerAttr.values[i] === playerAttr.values[j]) {
                                      playerTieBreaker1.push(playerAttr.values[j])
                                   }
                                }
                        }

                        for (i = 0; i < comAttr.values.length; i++) {
                                for (j= i + 1; j < comAttr.values.length; j++) {
                                   if (comAttr.values[i] === comAttr.values[j]) {
                                      comTieBreaker1.push(comAttr.values[j])
                                   }
                                }
                        }

                        let k = 1

                        while (playerAttr.score === comAttr.score) {
                                if (playerAttr.score > comAttr.score || playerAttr.score < comAttr.score || k < 0) {
                                        break
                                }
                                playerAttr.score += playerTieBreaker1[k]
                                comAttr.score += comTieBreaker1[k]
                                k--
                        }
                        
                        const playerCard = deck.playerHand.filter(element => element.value === playerTieBreaker1[k + 1])
                        const comCard = deck.comHand.filter(element => element.value === comTieBreaker1[k + 1])

                        if (playerAttr.score > comAttr.score) {
                                return `You win with the ${playerCard[0].name} and the ${playerCard[1].name}`
                        } else if (playerAttr.score < comAttr.score) {
                                return `The computer wins with the ${comCard[0].name} and the ${comCard[1].name}`
                        } else if (playerAttr.score === comAttr.score) {

                                const removePlayerPair1 = (element) => element === playerTieBreaker1[1]
                                const removePlayerPair2 = (element) => element === playerTieBreaker1[0]
                                const removeComPair1 = (element) => element === comTieBreaker1[1]
                                const removeComPair2 = (element) => element === comTieBreaker1[0]

                                playerAttr.values.splice(playerAttr.values.findIndex(removePlayerPair1), 2)
                                playerAttr.values.splice(playerAttr.values.findIndex(removePlayerPair2), 2)
                                comAttr.values.splice(comAttr.values.findIndex(removeComPair1), 2)
                                comAttr.values.splice(comAttr.values.findIndex(removeComPair2), 2)

                                playerAttr.score += Math.max(...playerAttr.values)
                                comAttr.score += Math.max(...comAttr.values)

                                const playerCard2 = deck.playerHand.filter(element => element.value === Math.max(...playerAttr.values))
                                const comCard2 = deck.comHand.filter(element => element.value === Math.max(...comAttr.values))
        
                                if (playerAttr.score > comAttr.score) {
                                        return `You win with the ${playerCard2[0].name}`
                                } else if (playerAttr.score < comAttr.score) {
                                        return `The computer wins the ${comCard2[0].name}`
                                } else {
                                        return 'Tie'
                                }
                        }

                }

                // Pair
                if (playerAttr.set === 'Pair' && comAttr.set === 'Pair') {
                        for (i = 0; i < playerAttr.values.length; i++) {
                                for (j= i + 1; j < playerAttr.values.length; j++) {
                                   if (playerAttr.values[i] === playerAttr.values[j]) {
                                      playerTieBreaker1.push(playerAttr.values[j])
                                   }
                                }
                        }

                             for (i = 0; i < comAttr.values.length; i++) {
                                for (j= i + 1; j < comAttr.values.length; j++) {
                                   if (comAttr.values[i] === comAttr.values[j]) {
                                      comTieBreaker1.push(comAttr.values[j])
                                   }
                                }
                             }
                             
                             playerAttr.score += Math.max(...playerTieBreaker1)
                             comAttr.score += Math.max(...comTieBreaker1)

                             const playerCard = deck.playerHand.filter(element => element.value === playerTieBreaker1[0])
                             const comCard = deck.comHand.filter(element => element.value === comTieBreaker1[0])

                             if (playerAttr.score > comAttr.score) {
                                        return `You win with the ${playerCard[0].name} and the ${playerCard[1].name}`
                             } else if (playerAttr.score < comAttr.score) {
                                        return `The computer wins with the ${comCard[0].name} and the ${comCard[1].name}`
                             } else if (playerAttr.score === comAttr.score) {

                                const removePlayerPair1 = (element) => element === playerTieBreaker1[0]
                                const removeComPair1 = (element) => element === comTieBreaker1[0]

                                playerAttr.values.splice(playerAttr.values.findIndex(removePlayerPair1), 2)
                                comAttr.values.splice(comAttr.values.findIndex(removeComPair1), 2)

                                while (playerAttr.score === comAttr.score) {
                                        if (playerAttr.score > comAttr.score || playerAttr.score < comAttr.score || playerAttr.values.length === 0 || comAttr.values.length === 0) {
                                                break
                                        }
                                        playerAttr.score += Math.max(...playerAttr.values)
                                        comAttr.score += Math.max(...comAttr.values)
                                        playerTieBreaker2.push(playerAttr.values.pop())
                                        comTieBreaker2.push(comAttr.values.pop())
                                }
        
                                const playerCard2 = deck.playerHand.filter(element => element.value === playerTieBreaker2[playerTieBreaker2.length - 1])
                                const comCard2 = deck.comHand.filter(element => element.value === comTieBreaker2[comTieBreaker2.length - 1])
        
                                if (playerAttr.score > comAttr.score) {
                                        return `You win with the ${playerCard2[0].name}`
                                } else if (playerAttr.score < comAttr.score) {
                                        return `The computer wins the ${comCard2[0].name}`
                                } else {
                                        return 'Tie'
                                }
                             }            
                }
        } 
}

parsePlayerSuits()
parsePlayerValues()
parseComSuits()
parseComValues()

console.log(`Your cards are: `, showPlayerHand())
console.log(evaluateHands(playerAttr))
console.log('')
console.log(`The computer's cards are: `, showComHand())
console.log(evaluateHands(comAttr))
console.log('')
console.log(scoring())