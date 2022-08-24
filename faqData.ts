const DATA = [
  {
    header: "FAQ",
  },
  {
    question: "The rules say one thing. This card says another. What do I do?",
    answer:
      "In most cases, follow the card. But there are a few rules that can't be broken unless a card explicitly says so.",
  },
  {
    question:
      "Can yadda-yadda be used to do yadda-yadda? It isn't in the rules or on the card, but it seems logical.",
    answer:
      "If it's not in the rules, it doesn't matter how logical it is, unless you can talk the other players into it. And if you can, go for it!",
  },
  {
    question: "Is yadda-yadda the same as yadda-yadda?",
    answer: "Usually, no.",
  },
  {
    question:
      "The rules say that the owner of the game has final say in disputes, and the guy who owns the game in our group screws up the rules and won't listen even when everyone else agrees he's wrong. It feels like he's cheating! What should I do?",
    answer: `The "owner of the game" rule is meant to give groups a way to end arguments about the rules when they've gone on too long. It is not a license for anyone who buys a Munchkin game to apply their own interpretation of the rules if everyone else disagrees. Ultimately, if your friend won't accept when he's wrong (or if he's deliberately cheating, which is worse), you may want to consider buying your own Munchkin game. Life's too short to play games with unpleasant people.`,
  },
  {
    question:
      "But don't the rules say it's OK to cheat if you don't get caught?",
    answer:
      "Not since 2010, and even when they did, it was a joke. If you want a game where cheating is in the spirit and the letter of the rules, try Illuminati.",
  },
  {
    question:
      "How long do I have to react to someone else's card before it takes effect?",
    answer:
      "Card effects happen as the cards are played, in the order they are played. Unless you have a card or an ability that says it can cancel another card or effect (for instance, a Wishing Ring can cancel a Curse before it takes effect), you have to resolve every card, in the order it was played, before doing anything else.",
  },
  {
    question:
      "If two players try to do things simultaneously, how do we determine which one happens first?",
    answer:
      "If they were truly simultaneous and you can't agree on anything else, each player who wanted to do something should roll the die; high roll decides what order the cards happen. If that makes later cards moot, well, that's the way the game goes. (But: abilities that require discards don't happen until the discards hit the table. This is a good reason not to announce your plays until you are ready to make them!)",
  },
  {
    subTitle: "Curses",
    disclaimer:
      "Reminder: Everything here also applies to Traps and Disasters.",
  },
  {
    question:
      "Is there a limit to the number of Curses I can play on a turn? What about on a single player on a turn?",
    answer:
      "You can play as many as you have in your hand. But so can everyone else . . .",
  },
  {
    question:
      "If a Curse could apply to more than one Item, who decides what it applies to?",
    answer: "The victim of the Curse decides, unless a card says otherwise.",
  },
  {
    question: `If I draw a Curse that says "Lose Your Armor," and I have an Armor card sideways, can I lose that one to satisfy the Curse?`,
    answer: `It depends on the exact wording of the Curse. If the Curse says "Lose the Armor You Are Wearing," it must be Armor that you are using (and therefore gaining the benefits of). If it is "Lose One Armor," you would lose any single Armor card you had in play. And if it is just "Lose Your Armor," discard everything you have in play that is Armor. (As mentioned below, Cheated Armor is still Armor!)`,
  },
  {
    question:
      "I just kicked down a door and was hit by a Curse that will force me to get rid of an Item. Can I sell the Item for a level instead?",
    answer:
      "Nope. You have to resolve the Curse before doing anything else, unless you have a way to cancel the Curse completely (e.g., a Wishing Ring).",
  },
  {
    question: "What happens when you die? Do Curses that persist go away?",
    answer: `Not unless the Curse itself says so. Sucks to be cursed, but, well, you knew that . . .`,
  },
  {
    subTitle: "Cards and items",
  },
  {
    question:
      "Some of my cards have weird symbols on the bottom. What do those mean?",
    answer: `Those are set icons, designed to let you separate your sets and to tell where a card comes from if you want to look at this FAQ or the errata page for that game.`,
  },
  {
    question:
      "If something tells me to draw a face-up card but the discard pile is empty, what should I do?",
    answer: `Never draw from the discards unless you are specifically told to do so. A face-up draw means take the top card from the appropriate deck and turn it over for everyone to see. A face-down draw means take the top card from the deck and put it in your hand, or play the card if it is legal to do so at that time.`,
  },
  {
    question:
      "This says to pick a random card from my opponent's hand, but I can tell his Doors from his Treasures. May I use that information?",
    answer: `If it's important to your group that choices be truly random, then either close your eyes when you pick a card, roll a die, or have the other player mix up the cards below the table and you tell him which number card you want.`,
  },
  {
    question: "What do you mean by cards in play? Do cards in my hand count?",
    answer: `Cards that are in your hand are not in play and don't count as anything but cards until you play them. (For instance, if you are told to lose your Armor and you have an Armor card in your hand, you can't lose that one.) Your cards on the table are cards in play and these represent what they say they are. For example, a Race card is a card and a Race.`,
  },
  {
    question:
      "Okay, gotcha. But if I have to discard a card, do I discard from my hand? Or in play?",
    answer:
      "If you have to discard and it doesn't specify from where, you can choose any of the cards you possess.",
  },
  {
    question: "Is an Item the same as a Treasure card?",
    answer: `No.`,
  },
  {
    question:
      "If you have to lose Items, do you lose the ones from your hand, or just those on the table?",
    answer: `Only those on the table. If you are meant to lose cards from your hand, this will be specified.`,
  },
  {
    question:
      "Is stealing an Item from another munchkin the same as if he was giving me the Item?",
    answer: `No, you munchkin. Giving is voluntary. The key difference is that the giver gets to choose what card to give you.`,
  },
  {
    question:
      "When does a card move from play to discard? For example, if I use a one-shot Item during combat, is it in play during the entire combat or does it immediately move to the discards?",
    answer: `The one-shot card does not move to the discards until the battle is over. However, you no longer "own" that card, unless someone plays something to reboot the combat and return all cards to their owners, in which case you resume ownership.`,
  },
  {
    question:
      "On my turn, we played a bunch of cards into a fight, and the player to my left is a Cleric. He started to put the cards on the discard pile in the order he wanted – is that legal?",
    answer:
      "The player whose turn it is discards everything. If the order is important, he sets that as well.",
  },
  {
    question: `Are cards like Yuppie Water, that don't say "Potion" on them but LOOK like Potions, considered potions for rules purposes?`,
    answer:
      "If it's a liquid in a container, it can be considered a potion. (But note that other types of one-shot Items, such as Grenades and Ichors, must include that specific word! Potions are special. Also note that Ichors aren't Potions and Potions aren't Ichors.)",
  },
  {
    question: `Must I put my "usable once only" Items on the table before using them?`,
    answer: `All one-shot Items (those which say "usable once only") may be played directly from the hand or from the table unless the card says otherwise.`,
  },
  {
    question: `Exactly what is a "weapon"?`,
    answer: `In a more rigorous game, we would have labeled all the swords, axes, etc. as "weapons." Try to use common sense, even if this IS Munchkin. As a general rule, any item that uses Hands and is not already labeled as something else can be considered a weapon, as can items like the Singing and Dancing Sword that are obviously weapons.`,
  },
  {
    question:
      "Can you sell Items that total less than 1,000 Gold Pieces, just to get them out of circulation?",
    answer:
      "No. If the Items aren't worth a total of at least 1,000 Gold Pieces, you can't sell them.",
  },
  {
    question:
      "Assuming I have at least 1,000 Gold Pieces in Items, can I throw in some Items with No Value as part of the sale?",
    answer: `Absolutely. "No Value" is exactly the same as "0 Gold Pieces," so you can sell these Items unless the card says otherwise. (But "No Value" must appear on the card! If a card has nothing at all listed for a value, it is not an Item and cannot be sold.)`,
  },
  {
    question:
      "The rules say that cards in play must be traded or discarded. When can I discard them?",
    answer: `This depends on the type of card. First, it must be in play in front of you (no discarding other people's cards, silly). Race and Class cards (including Half-Breed and Super Munchkin), and other similar cards (See Important Note #5.), can be discarded at any time, including to power a special ability, but not an ability for the discarded Race or Class (unless the ability requires discarding that particular Race or Class). Curses that remain on the table in front of you cannot be discarded. Item cards are the only cards that can be traded, and, as long as they aren't prevented from being discarded (say, by a Curse), can only be discarded in the following ways:

  - As part of a sale.

  - To power a special ability of a Class/Race or another card.

  - To fulfill the requirements of Bad Stuff or a Curse/Trap/Disaster.
    
  - The Item is Big and you MUST get rid of it (e.g., because your Hireling died or you are no longer a Dwarf), and there is no one who can take it.`,
  },
  {
    question: `When can I equip or unequip my Items?`,
    answer: `You may change the status of your Items at any time that you are not in combat or otherwise engaged (e.g., you cannot swap Items around prior to rolling to Run Away or before dealing with the effects of a Curse).`,
  },
  {
    question: `I heard some people talking about a "backpack," but I can't find that term in my rules. Are my rules out of date?`,
    answer: `No. Some experienced Munchkin players use the term "backpack" to talk about Items that you are carrying but not currently using, but that term is not found in any official rules and we discourage its use. (To add to the mess, there are a couple of Treasures that actually are Backpacks and mean something entirely different. Really, it's best not to use the term.)`,
  },
  {
    question: `The rules say I can only have one Steed (Vehicle, Ship) unless I have a card that says otherwise. Can I unequip one Steed to play another?`,
    answer: `Steeds (Vehicles, Ships) cannot be unequipped at all and certainly not to play another one. If you can't use your Steed for some reason, you must get rid of it as an extra Big item. (If, somehow, you find yourself with a Steed [etc.] that you can't use but can't get rid of, it does count against your Big item total; you only get to ignore a Steed's Bigness when you're actually riding it.)`,
  },
  {
    question: `I see cards with the same name, but different text, in different sets.`,
    answer: `There ARE cards with the same name but different text in different sets. This was sometimes on purpose, but not always. We don't think that it's a big problem, and we DO think that changing card names would cause more annoyance than it's worth. For your convenience, we offer a list of duplicate cards to keep them all straight.`,
  },
  {
    question: `I have a card that says it gives me an extra Hand, but it says "-1 Hand" at the bottom. What's the deal?`,
    answer: `"-1 Hand" means you get an extra Hand; all the cards that use Hands have positive numbers, such as "1 Hand," at the bottom. If you add up the numbers of Hands on your cards in use, you're OK as long as you get 2 Hands or fewer - that's why cards that give you extra Hands are negative.`,
  },
  {
    question: `If someone plays a "Reloaded Die" to cancel my "Loaded Die", can I use a "Reloaded Die" to counter-cancel their "Reloaded Die"? The card seems to say yes, but the other players said I couldn't play a "Reloaded Die" on my own roll.`,
    answer: `You can only play a "Loaded Die" on your own roll, not on someone else's roll. You can only play a "Reloaded Die" on someone else's roll, not your own. Your friends are right; to change your roll back, you would have to use a second "Loaded Die" card.`,
  },
  {
    subTitle: `Races, Classes, etc.`,
    disclaimer: `Reminder: Class* and Super Munchkin* refer to any Class-like or SM-like card.`,
  },
  {
    question: `If I have Half-Breed and one other Race card, is my other half human?`,
    answer: `Yes. You get the "all the advantages, none of the disadvantages" benefit of Half-Breed for your other Race, but you can't use Human-only items or claim bonuses against monsters that have trouble fighting Humans. (As a practical matter, there are very few of these, so this doesn't come up that often.) Note that this answer is specific to Race and Half-Breed.`,
  },
  {
    question: `Can I use two Super Munchkin* cards to be more than two Classes*?`,
    answer: `No. Unless you want to make it a house rule, of course. Munchkin 7 - Cheat With Both Hands has cards that allow you to have three or even more Classes or Races, among other crazy new overpowered cards you didn't realize you needed.`,
  },
  {
    question: `Can I Super Munchkin* to be the same Class* twice and get double benefits?`,
    answer: `Gaaah. No. Each player may have only one copy of a specific Class* in play. In other words: If you are a Super Warrior and have another Warrior card, you can not play it on yourself without discarding the Warrior card already in play. `,
  },
  {
    question: `When using Super Munchkin*, can you discard one of your Classes* and replace it with another, or just not replace it?`,
    answer: `You can turn from, e.g., a Super Cleric-Wizard into a Super Cleric, or, if you have the Thief card, Cleric-Thief. This doesn't make you lose Super Munchkin*. You cannot have a "naked" Super Munchkin* card in play, even briefly.
    By contrast, Extra Style and Extra Training may be played without a Style or Training.`,
  },
  {
    question: `Can I replace my current Class* with the same Class* to avoid Charity?`,
    answer: `You can discard a Class* at any time. You can play a Class* at any time on your turn. There's no requirement that the new Class* be different from the old one. So, yes.`,
  },
  {
    question: `If I only have one Class*, and am changing the Class*, do I lose any items that say "if you lose your Class*, discard this card"?`,
    answer: `As long as you play the new Class* immediately after discarding the old Class*, no. Think of switching a Class* as one action with two parts (discarding the old Class*, playing a new Class*) so that action has to complete before any other actions would start.`,
  },
  {
    question: `Can I keep a Class* out on the table sideways so I can use it later?`,
    answer: `No. The only sort of cards that can be played to the table but not used are Items.`,
  },
  {
    subTitle: `Combat`,
  },
  {
    spacer: true,
  },
];

const template = {
  onj: {
    question: ``,
    answer: ``,
  },
};

export default DATA;
