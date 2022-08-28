const DATA = [
  {
    spacerTop: true,
  },
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    subTitle: `Combat`,
  },
  {
    question: `How do I handle ties?`,
    answer: `Monsters win ties, unless at least one of the munchkins in the fight is a Warrior or you have some other card that says you do.`,
  },
  {
    question: `When you are faced with two or more monsters, can you kill one and flee the other?`,
    answer: `No. If you have cards that let you abolish one entirely (like Pollymorph Potion) then you may do that, and fight the other one(s). (You will have to win that fight before you can claim any treasure at all . . . you can't charm one monster, grab its treasure, and then try to fight its mate.) But you can't fight one and flee the other. They fight you together.`,
  },
  {
    question: `What happens when a Wandering Monster comes along that would ignore or befriend one player in a fight, but not the other? For instance, when the Wandering Monster is an Amazon and one player is female?`,
    answer: `When one player helps another, the monsters do not fight the players separately . . . so if one player is female, the wandering Amazon would donate a Treasure and leave without fighting. (Remember that Treasures always go to the main fighter to distribute according to whatever agreement was reached.)`,
  },
  {
    question: `If one monster is affected (positively or negatively) by fire/flame weapons, are all of them?`,
    answer: `A monster's immunity (or weakness) is given to all others in the fight. (This does not include straight combat bonuses or penalties; if one monster gets a -2, that doesn't mean EVERY monster has a cumulative -2 – it's -2 for the monsters taken as a group. And if a monster won't fight, that doesn't mean EVERY monster won't fight, just that one.) If it helps, think of the combat as a combined encounter, and the various immunities or weaknesses as conditions affecting the encounter.`,
  },
  {
    question: `Am I allowed to ask for help if I am currently winning the fight? The rules say I can ask for help if I'm losing, but nothing about if I'm winning.`,
    answer: `That's because if you're winning, you don't need help, and a true munchkin would never ask for help he doesn't need. Unless a card says otherwise (and a couple do, for their own weird reasons), you may not ask for help if you are winning a combat.`,
  },
  {
    question: `Do combat bonuses that monsters receive against Classes* stack? For example, if a monster gets +4 against Warriors and +4 against Wizards and I'm a Super Warrior/Wizard, does that monster get +8 in combat against me?`,
    answer: `Unless it says otherwise on the card itself, monster combat bonuses do stack. This means that the above monster would be a +8.`,
  },
  {
    question: `If somebody changes your Class* during combat (such as with a Curse), does that change your combat bonuses?`,
    answer: `Yes. If you quit being a Class*, you can no longer get a bonus from Class*-only items, and so on. You can never get the benefit of two Classes* in one combat unless you have a special card that allows it. Exception: Abilities driven by discards work even if the Class* with that ability is lost. If a Warrior had already discarded a card to get a +1 combat bonus, and then stopped being a Warrior, he would keep the bonus, but wouldn't be able to discard any more cards for the Warrior bonus. Yes, this rule can be used to the player's advantage. Hee hee. (However, you cannot discard a Class* and play another copy of that card to use its abilities twice.)`,
  },
  {
    question: `If you use a one-shot Item during combat and someone tries to make it disappear through Curse or Theft, do you get the bonus?`,
    answer: `Theft doesn't work while you are in combat. Use of a Curse could destroy an Item as you try to use it, but once you play the Item into the fight, it's not yours to be Cursed anymore.`,
  },
  {
    question: `Some cards say they automatically kill a certain type of Monster (like the Potion of Halitosis and the Floating Nose, or the Churninator and Level 1 monsters). Can anyone interfere with this? Can anyone play a Wandering Monster?`,
    answer: `As of July 2018, removing the final monster from a combat ends the combat immediately. There is a new FAQ specifically about the Churninator in the Munchkin Cthulhu section.`,
  },
  {
    question: `One of my opponents added a Wandering Monster that has a "before combat" effect (e.g., the Tongue Demon makes you discard an Item before combat). Since I'm already in combat, do I still have to do it?`,
    answer: `No. You lucked out this time. However, rules that say "When this monster enters combat" do take effect.`,
  },
  {
    question: `My friends start counting 2.6 seconds as soon as they turn over a monster and combat begins. That's not even enough time to read the card! Is this legal?`,
    answer: `The rule says you must get "a reasonable time" to respond when another player is winning a fight. What your friends are doing is not reasonable; you should be able to read the card to determine what, if anything, you want to do. On the other hand, you cannot take time during a fight to read every card on the table, contemplate your many (or few) options, or use a card to "discard dive," hoping to find something you can use in the fight. The "2.6 seconds" part of the rule is a joke; the intent is that you cannot hold up the game indefinitely just because someone else is winning, or, conversely, that you cannot immediately declare a win before your opponents can react.`,
  },
  {
    question: `Does the "reasonable time rule" apply to defeating a monster without killing it, or just to killing it?`,
    answer: `Any sort of defeat. If you defeat it without killing it, other players still have a reasonable time to play an applicable card to frustrate you. However, if you removed the only monster from the fight (with Magic Lamp, for instance), the fight is over. Your opponents cannot play monster enhancers or other similar cards that affect a specific monster, because there isn't one there to fight, and they can't use any special rules for bringing in monsters (such as the Shark rules from Munchkin Booty) that depend on having a monster in the fight.`,
  },
  {
    question: `If a card that affects "your next combat" is played on you during a combat, does it affect THAT combat, or the next one you're in?`,
    answer: `If the combat is still unresolved (and obviously it is, because people are still playing cards on you for it), then that combat is the "next" one. Most Munchkin games say this explicitly in the rules, but it's true even if we left it out by mistake.`,
  },
  {
    question: `I'm going to have to attempt to Run Away from a monster. Can I Curse other munchkins before I roll the die? What about after?`,
    answer: `Even though curses can be played at any time, you'll have to honor the die roll before doing anything else. So yes, you can Curse before rolling the die, but not between the die roll and the monster's Bad Stuff/your escape. After that, you can resume Cursing as normal.`,
  },
  {
    question: `I'm fighting a monster that says "Will not pursue anyone of Level X or below." I'm below that Level; can I still fight the monster?`,
    answer: `You certainly can fight the monster. If you do not win the combat and have to Run Away, you escape automatically (no roll required).`,
  },
  {
    question: `If a low-Level munchkin encounters a monster that won't chase him, does the munchkin get the treasure?`,
    answer: `Nonononono. The munchkin must still try to defeat the monster. But if he cannot defeat it, he automatically escapes without rolling to Run Away, suffering no Bad Stuff. He doesn't get any rewards for failing to defeat the monster!`,
  },
  {
    question: `I'm at Level 2 and I encounter a Level 9 monster. Another player (Level 5) joins the combat. A third player wanders in a new monster that will not pursue Level 3 or below. We are now losing and have to run away. Does the wandered-in monster go after both of us?`,
    answer: `In combat, monsters fight side by side. But when it comes to pursue the fleeing munchkins, they act individually and munchkins must attempt to escape from each as normal. So the wandered-in monster will not pursue you, but will pursue your helper.`,
  },
  {
    question: `I have a card that lets me Run Away from a combat automatically. But I'm facing a monster that says escape is impossible. Can I Run Away or not?`,
    answer: `You cannot use your automatic Run Away ability, because you never even get a chance to try. You can Run Away automatically from any other monsters, even in the same combat, that do not have that restriction. (We have not ruled this consistently in the past, but this is the official answer going forward.)`,
  },
  {
    question: `Can I play Go Up a Level cards on another player - for instance, to make him go up to a level so that a monster that would previously ignore him will now chase him?`,
    answer: `This is not the original intent of Go Up a Level cards (GUALs), but it is such a munchkinly and vile idea that we liked it too much to say no. But just as when playing a GUAL on yourself, the munchkin must legally be able to gain that level. You cannot play a GUAL card, even one with a secondary effect, on a munchkin at Level 9, and you cannot force another player to do something he doesn't want to do (e.g., discard an Item) by playing a GUAL on him.`,
  },
  {
    question: `Do I have to kill a monster? Even if I'm winning, can I just choose to Run Away?`,
    answer: `You can't Run Away if you are winning with what you have in play. However, you are not required to exert your full effort to beat a monster, even if you could win handily by playing one-shots or using other cards or abilities. So, in that sense, you would be able to choose to Run Away.`,
  },
  {
    question: `Do I have to Run Away? What if I WANT to die?`,
    answer: `Your character does not want to die. Your character will always TRY to Run Away. If you want to die, hope for a bad die roll.`,
  },
  {
    question: `Exactly when do you die, and how long do you stay dead?`,
    answer: `You die when you get Bad Stuff that says you're dead. (A very few other cards can cause Death as well.) If you still need to Run Away from other monsters, you are excused from their Bad Stuff, because you're dead. While you are dead, you cannot receive cards for any reason, and you cannot level up or win the game. You STAY dead only until the next person's turn starts. Your new character appears at that point and may join normally in the combat, though you will get no new cards until someone gives you Charity, you get cards as payment for helping in a combat, or your next turn starts.`,
  },
  {
    id: 6,
    subTitle: `Cheat!`,
  },
  {
    question: `I had Cheat! attached to a 2 Hands Big item, along with a second un-Cheated Big item. I tried to play another card that took Hands and my friend said that I couldn't because the Cheat! was already negating the Bigness of the first card. Is he right?`,
    answer: `No. Cheat! completely negates the requirements of an Item (but doesn't change its essential nature; if it's Big, it's still Big, so it can't be stolen by a Thief). The easiest way to think about Cheat! is to ignore the Item with Cheat! attached when you are figuring out whether your character is legal.`,
  },
  {
    question: `If you have the Cheat! card on one Item, can you move it to another one?`,
    answer: `No. Once you perform the initial cheat, the card cannot be moved to another Item. So if something happens to make the cheated Item legal for you . . . too bad.`,
  },
  {
    question: `Can I use the Cheat! card to take an Item from another player, or use it to search through the discard pile to take an Item from it?`,
    answer: `No and no . . . The Cheat! card allows you to equip an Item you normally couldn't due to Class/Race/slot/etc. restrictions. In other words, a second piece of Headgear, a second Big item (for non-Dwarves), an Item that requires a Hand or two when your other two are full, or the Bow With Ribbons for non-Elves. You have to have the Item already, and cannot use the Cheat! card to take it. (By a strict reading of the text on the Cheat! card, you can play it on an Item you can use, but why would you want to?)`,
  },
  {
    question: `If my only small Item has a Cheat! card on it, and I get Cursed to lose a small Item, can I say that the cheated Item doesn't count as "small" for the purposes of the Curse?`,
    answer: `Nice try, but no. Cheat! doesn't take away the Item's properties, it just makes the Item usable for you when it otherwise would not be.`,
  },
  {
    question: `If an item has been cursed (e.g., with Antimatter), can a Cheat! card overrule the curse?`,
    answer: `If the curse has added a negative effect to the item, a Cheat! card will not remove that effect.`,
  },
  {
    id: 7,
    subTitle: "Miscellaneous Questions"
  },
  {
    question: `What is the difference between Munchkin and Munchkin Deluxe (or Star Munchkin and Star Munchkin Deluxe, etc.)?`,
    answer: `The Deluxe versions each include a folding gameboard that tracks all the players' Levels and has spaces for Door and Treasure decks and discards. They also come with either plastic pawns (older sets) or cardboard standies (newer sets) for each player.`,
  },
  {
    question: `If I announce I'm going to do something, am I locked into that decision or can I change my mind? For instance, I was a Wizard and declared that I was going to fight a monster, but then the monster was enhanced further. Can I change my mind and Charm it?`,
    answer: `You're NEVER locked into a final decision unless a card or rule says so. (However, there are no "take-backs" once you have played a card or rolled a die.)`,
  },
  {
    question: `If I have two separate cards that both let me roll a die in the same situation (say both let me avoid a Curse) does one take precedence over the other?`,
    answer: `Pick the one that gives you the best outcome and roll a die. If you fail that roll, try with the next ability you have. You can keep trying as long as you have the abilities to do so.`,
  },
  {
    question: `The art on a card shows a weapon being wielded with two hands, but the card says it only takes one hand. Do I go by the art or the card?`,
    answer: `Go by the text. If the card says it is a 1 Hand item, it is a 1 Hand item, even if the card art shows it with two hands.`,
  },
  {
    question: `Is the initial sex of a character the same as the sex of the player, or can it be chosen?`,
    answer: `The rules say the player chooses their starting sex, and that it defaults to the same as the player's if not otherwise specified. We do recognize that these rules assume strict binary gender. If that makes the game less fun for you and your friends, feel free to ignore gender completely.`,
  },
  {
    question: `I was playing in a tournament and my opponent said she was female. She sure looked male to me! What is the rule in this situation?`,
    answer: `If your opponent said she was female, that's good enough for us. We recommend using either Deluxe sets or a Level Playing Field in all tournament games so there is no possible confusion.`,
  },
  {
    question: `I'm a male, but the only Class* cards I have in my hand are female. Can I still play them? If I do, does it change my sex?`,
    answer: `Munchkin Classes* have a variety of different representations on them to liven up game play. They have no effect on your in-game sex.`,
  },
  {
    question: `If I'm told to draw two cards and keep one but discard the other and one of the cards has an immediate effect does that effect go off?`,
    answer: `Only if that's the card you keep. When you are told to decide between cards to keep and discard, the effects of the kept card will go off immediately once you decide that that is the card you are keeping. Otherwise the card you discarded was never in play and never took effect.`,
  },
  {
    question: `When do we resolve cards? As they are played, or once everyone says they're done playing them?`,
    answer: `As they are played. Some games have a "stack" mechanic, where all cards are resolved at once. Munchkin is not one of them.`,
  },
  {
    question: `A card I played says to "roll a die." What die?`,
    answer: `If it doesn't specify a particular die or tell you that you can roll any die you want, roll the six-sided die that comes with the game (or any other standard six-sided die, if you have several of them within reach).`,
  },
  {
    id: 8,
    subTitle: "Munchkin",
  },
  {
    question: `If someone makes me help him with the Kneepads of Allure, can I backstab him, play cards against him, etc., so we both have to Run Away?`,
    answer: `You bet. You're required to join the combat, not to try to win.`,
  },
  {
    question: `Can I use Help Me Out Here to take the Kneepads of Allure and then make someone help me?`,
    answer: `As long as the person you force to help you can make the difference between winning and losing (per Help Me Out Here's requirements), you most definitely can. Don't expect anyone to like you afterward . . .`,
  },
  {
    question: `Can I use Help Me Out Here to take Pollymorph Potion (or Magic Lamp, or . . .) to take a monster out of the fight?`,
    answer: `For purposes of Help Me Out Here, "winning" means beating the monster's combat strength. The Item you take must raise your combat strength enough to beat the monster's (or, as with the Kneepads, immediately lead to that situation). You cannot use Help Me Out Here if you are already winning, you cannot use it to take an Item that isn't strong enough to put you over the monsters, and you cannot use it to take an Item that doesn't change your combat strength.`,
  },
  {
    question: `How often can a Thief steal?`,
    answer: `As long as he has cards to discard.`,
  },
  {
    question: `What happens to a Level 1 Thief who fails an attempt to steal? Does he die?`,
    answer: `Nothing happens to him. You can't go below Level 1. (Beware the Level 1 Thief – he literally has nothing to lose!)`,
  },
  {
    question: `Can a Thief steal something while he is in combat?`,
    answer: `No. He's preoccupied.`,
  },
  {
    question: `Can a Thief steal from someone else while THEY are in combat?`,
    answer: `No. They're preoccupied.`,
  },
  {
    question: `Can a Thief steal from someone while neither he nor his victim is in combat, but someone else is?`,
    answer: `Yes.`,
  },
  {
    question: `Can a Thief backstab himself?`,
    answer: `No. It would be very munchkinly, but the card specifically says "another player."`,
  },
  {
    question: `I have just drawn Divine Intervention face down. What happens now?`,
    answer: `As the card says, no matter how it is drawn, all Clerics go up a level immediately. Show the card, and, if you are a Cleric, play the card in glee. Otherwise, play the card with disgust to show your contempt for those lucky people who are . . .`,
  },
  {
    question: `What happens if a player gets Divine Intervention in his opening hand?`,
    answer: `The player should show the card immediately. All players who can become Clerics may choose to do so and go up a level.`,
  },
  {
    question: `If a cleric is facing more than one Undead monster, can he discard three cards per monster for a total of +9 against each one?`,
    answer: `Eeeeeeek! That's munchkinly thinking, but sorry, that's a max three cards per combat, not three cards per monster.`,
  },
  {
    question: `Hoard! says I have to play it immediately. Does this mean as soon as the card is drawn?`,
    answer: `Hoard! says it must be played as soon as it is drawn. If you draw a card, and it's Hoard!, play it immediately. If you are dealt Hoard!, play it as soon as you pick up your hand, and draw three face-down Treasures.`,
  },
  {
    question: `What if I get Hoard! when I'm drawing face-up Treasures?`,
    answer: `Draw three more face-up Treasures and discard Hoard! Distribute the now-larger Treasure pile according to the agreement you made with your helper.`,
  },
  {
    question: `What if I have to choose between cards and one of those is Hoard!?`,
    answer: `If a card makes you draw and choose between cards, and Hoard! is one of those you have to choose between, you do not play Hoard! until you choose it as the card to keep. Then play it immediately.`,
  },
  {
    question: `If I play a card such as Wand of Dowsing that lets me put Hoard! in my hand, what happens?`,
    answer: `It goes into your hand for a split second, then triggers the "play immediately" condition. Draw the three cards face down.`,
  },
  {
    question: `Can a cleric use Hoard! over and over by discarding it before he starts drawing his three cards, and drawing it again, and discarding it and drawing three more, and so on?`,
    answer: `No. Discard Hoard! AFTER the three cards are drawn. GREAT try, though!`,
  },
  {
    question: `Can a Wizard use his charm ability if he's not involved in the combat?`,
    answer: `No. The card says this is something he may do instead of fighting a monster. It's not for interfering with others' fights, so the Wizard in question must be the munchkin who opened the door or the helper.`,
  },
  {
    question: `If a Wizard is helping in a combat and charms a monster, does he get the Treasure from that monster?`,
    answer: `The Treasures gained from a charmed monster are no different from Treasures from a monster that is killed, so the Treasures (drawn after the combat is over and all remaining monsters, if any, are defeated) are distributed according to the final agreement that the Wizard negotiated for his help.`,
  },
  {
    question: `Faced with multiple monsters, can a Wizard discard his whole hand to charm one, take its treasure, discard that new hand to Charm the next one, and so on?`,
    answer: `No. Faced with multiple hostile monsters, one does not get any of their treasures until all are defeated.`,
  },
  {
    question: `Can I use Friendship Potion on a monster if I fail to Run Away?`,
    answer: `No! The combat ended when you failed to kill it.`,
  },
  {
    question: `What if a monster gets a Mate, or you get a Doppleganger, and then somebody backstabs you or plays potions on one side or the other?`,
    answer: `Mate duplicates monster enhancers, not other types of cards. A Doppleganger is an exact duplicate of the player – essentially, figure his combat strength and then double it. If the player's strength changes, so does the Doppleganger's.`,
  },
  {
    question: `Somehow, I ended up with two Dopplegangers and played them both. Is my combat strength tripled or quadrupled?`,
    answer: `Each Doppleganger duplicates you and you alone, so your combat strength is tripled. Otherwise, you end up with Dopplegangers duplicating each other, which leads in four short steps to a spacetime implosion that ruins everyone's day.`,
  },
  {
    question: `Is my Doppleganger a "helper" as defined in the rules?`,
    answer: `No. Only other munchkins can be "helpers" in that sense.`,
  },
  {
    question: `Some cards, like Magic Lamp, Illusion, and Pollymorph Potion, let you get rid of ONE monster. If you get rid of a monster, does its mate (or, in the expansions, its relatives) also leave? In other words, is Mate an enhancement card like Ancient or fully separate like Wandering Monster additions?`,
    answer: `A Mate is like a Wandering Monster. There are now two monsters, and you have to get rid of them individually. (We have found that it is easiest to get rid of the Mate card so the actual monster is still there for reference.) If you play the get-rid-of-it card before somebody tries to play Mate, though, there's no monster left for the Mate to join, so Mate can't be played.`,
  },
  {
    question: `What if the Gazebo appears as a Wandering Monster after the player already has a helper?`,
    answer: `The helper has to back off and let the player whose turn it is fight the Gazebo, and the other monster(s), alone.`,
  },
  {
    question: `If I'm not a Halfling, can I just ignore the Stoned Golem entirely?`,
    answer: `Yep. It's like it's not even there. The Stoned Golem makes a bad Wandering Monster because the victims can just ignore it, unless one of the combatants is a Halfling. But if you don't kill it, you don't get its level and Treasures, even if you do kill all remaining monsters! (And you can't go back for it after the main fight is through; it's Stoned, not stupid!)`,
  },
  {
    question: `Can I use Instant Wall to force someone to Run Away?`,
    answer: `No. Instant Wall allows one or two willing munchkins to Run Away automatically. Instant Wall should be used after the players have decided they need to Run Away but before they roll the die.`,
  },
  {
    question: `Are the Ghoulfiends supposed to be Undead?`,
    answer: `No, they're like that all the time.`,
  },
  {
    question: `The Ghoulfiends card says only your Level counts in the fight, not your Items. Can you still use an item to avoid fighting entirely - say, the Magic Lamp?`,
    answer: `Yes.`,
  },
  {
    question: `Can I use my Warrior Berserking ability against the Ghoulfiends?`,
    answer: `No. The Ghoulfiends text should say "No items or other bonuses help against them - fight with your Level only." (This is an official erratum.)`,
  },
  {
    question: `King Tut and the Wight Brothers say "Characters of higher Levels [than 3] lose two levels, even if they escape." Does that mean you lose two levels even if you defeat those monsters?`,
    answer: `No. But if you cannot defeat them, then you must try to run away, and you'll lose the two levels even if you do escape. If they catch you, of course, you do suffer the Bad Stuff from those Monsters. (But you don't lose the two levels twice!)`,
  },
  {
    question: `When does Magic Lamp let me keep the treasure?`,
    answer: `If you are fighting one monster, and use Magic Lamp on that single monster, you collect the treasures from that monster. If there are multiple monsters, and you use Magic Lamp to get rid of one of the monsters, you do not get any of the treasures from that monster even if you defeat the remaining ones (you would still get the treasure from those monsters, though).`,
  },
  {
    question: `If I use Transferral Potion to steal someone else's fight, can I then use cards or abilities, such as Magic Lamp, that are usable only on my turn?`,
    answer: `No. It's not your turn. The card says the original player "resumes his turn," but that doesn't mean it isn't his turn at that moment, just that you've interrupted the sequence of events on his turn.`,
  },
  {
    question: `The Wand of Dowsing doesn't say "Usable once only," but I have to discard it after I use it. Can I treat it like a one-shot (play it from my hand rather than the table, or play it during combat)?`,
    answer: `The clear intent is that this is a one-shot card, even though it lacks the magical "Usable once only" language, and so the rules of one-shot cards apply to this one as well. It can be played during combat, and it can be used from the hand. We've fixed this error in recent printings.`,
  },
  {
    question: `I was beating a monster and one of my opponents played Wand of Dowsing and said I couldn't claim victory until she had searched the entire discard pile. It took her 20 minutes to decide! Is that really what "reasonable time" means?`,
    answer: `Not even a little. "Discard diving" as a stalling tactic is not in the spirit of the rules. If your opponent knew there was a specific card she wanted to play against you, she should have told you as she went into the discards so you knew she wasn't just wasting time. You would have been perfectly correct to call reasonable time if it was clear she was just searching for something to play against you. In informal, friendly games, many groups allow a player to say, "I'm pulling the +10 monster enhancer to play on you," and count that as playing the card even if the dowsing player doesn't yet have it in hand, as long as the card is actually in the discards to be retrieved.`,
  },
  {
    question: `I'm a Cleric and I was fighting a monster. The opponent to my left played Wand of Dowsing and just said he was pulling out a GUAL, but didn't actually do it. I would have used Resurrection to take that GUAL card for myself if it had been there! Is this legal?`,
    answer: `By the strict letter of the card, no; you actually have to pull out the card you want. (You aren't required to play that card, however, so there's no guarantee your opponent would have put it in the discards immediately for you to grab.) However, in an informal game, especially where no one has a way to retrieve discards, it's perfectly fine to say "I'm going to grab and play a GUAL; anyone object if I just say I'm doing it to save some time?"`,
  },
  {
    question: `I played Wand of Dowsing. An opponent played a Curse on me while I was going through the discards. Is it legal for me to grab a Wishing Ring to use to cancel the Curse, even if it wasn't the card I intended to pull?`,
    answer: `Absolutely. Playing Wand of Dowsing and pulling the card from the discard pile counts as a single action, so the effect of the Curse has to wait until you are done. Even if you had said what card you were going for, you're allowed to change your mind until you actually complete the action. However, once you have pulled the card, the Curse happens - if you don't get a card that will let you cancel the Curse, you have to resolve the Curse's effects before playing the card you just pulled out of the discard pile.`,
  },
  {
    question: `I used an ability to automatically kill a monster. Another player used Wandering Monster to add a monster to the fight, and then played Transferral Potion to move the monster to himself. He beat it. Who gets the level and Treasures for the monster I killed?`,
    answer: `As of July 2018, if you automatically killed the only monster, combat ended and this whole sequence can't happen. If there were other monsters still fighting, however, this sequence is legal. You get the level and Treasures from the monster you killed after the transferred combat has been resolved. If the other player also wins, you draw Treasures first. (This has been ruled different ways at different times, but we got a ruling directly from Steve, so it is official.)`,
  },
  {
    question: `The Hireling confuses me. Other than the +1 Bonus, what is the point of the card?`,
    answer: `It's basically another Cheat! card that lets you swap out the attached Item. But it's vulnerable to the Kill the Hireling Go Up a Level card, and anything that makes you lose the Hireling takes the attached Item with it.`,
  },
  {
    id: 9,
    subTitle: `Unnatural Axe`,
  },
  {
    question: `Can an Orc use his power to remove a curse retroactively? What if he has a Chicken on his Head when he becomes an Orc - can he break the curse at that point?`,
    answer: `No. If an Orc does not use his power at the moment he is hit with the Curse, it takes full effect, and he can't use his Orc ability to remove it later.`,
  },
  {
    question: `Why doesn't an Orc get some kind of bonus for dealing with the 3,872 Orcs monster card?`,
    answer: `Rather than put a rule on a Race card that refers to a single monster card or rewrite a monster card to refer to a Race that isn't even in the same set, we decided that the monster orcs are just as hostile to a munchkin Orc as they are to any other munchkin.`,
  },
  {
    question: `What does "every other player" mean on the Generosity curse?`,
    answer: `It means every player who is not the victim. The intent is for the victim to give all of his stuff to all of the other players.`,
  },
  {
    question: `The Lust Monster says ". . . you must flee" if you cannot get help from a member of the opposite sex. Does this mean I cannot use cards on it like Out to Lunch?`,
    answer: `Even though it says you must Run Away, it does not say you have to do so immediately. So while you cannot fight the monster, you can use other cards on it, and if you can remove the monster from the fight entirely, the restriction is also removed.`,
  },
  {
    question: `If I'm using the Sword of Slaying Everything But Squid and encounter Squidzilla, can I use an illusion to switch out Squidzilla?`,
    answer: `No. As soon as Squidzilla appears, combat ends and you must try to Run Away immediately. (This is not 100% clear on the card, but it is the intent!)`,
  },
  {
    question: `Can you explain the Siege Engine to me?`,
    answer: `The Siege Engine is a 2-Handed Big item that doesn't count against your Big items, and you can choose whether to use it at the start of a combat, gaining a +4 bonus but accepting a -1 Run Away penalty.`,
  },
  {
    question: `Can I play Annihilation to cancel a monster I just drew when I kicked open the door? If so, what happens?`,
    answer: `Put the monster in the box and forget about it. However, because this was not a card played by an opponent, you do not get to cancel the monster or Kick Open another Door. And because the monster was in play, however briefly, you were in combat for that short time and therefore you cannot Look For Trouble or Loot The Room.`,
  },
  {
    question: `I just killed a monster to reach Level 10. My opponent played Trojan Horse and the Plutonium Dragon and said I couldn't level up (and therefore win the game) until I killed the Dragon. I say that I killed my monster, and even if I didn't get the Treasure, I win because I reached Level 10. Who's right?`,
    answer: `Congratulations on your victory! Trojan Horse cancels the Treasure but not the levels from one combat and immediately starts a new one. If the result of the first combat brought you to Level 10, the game is over and Trojan Horse can't be played.`,
  },
  {
    question: `My opponent added a Wandering Monster. What happens if I Annihilate the monster? What about the Wandering Monster card itself?`,
    answer: `In both cases, the card you Annihilate goes into the box and is forgotten, and the other card goes back into your opponent's hand.`,
  },
  {
    question: `I played Curse! Cursed Thingy on an Item and we aren't sure how it works. Can I unequip the Item? What special abilities (e.g., fire/flame, cannot be lost to Bad Stuff, can be used with other equipment of the same type, gives an extra hand) are affected?`,
    answer: `You cannot unequip the Item; it takes up a useful Item slot until you lift the Curse or contrive to get rid of it. Here are some specific examples of effects that Cursed Thingy can have (this is not a comprehensive list):

  - The cursed Item loses any combat bonus it might possess.

  - If it has some other bonus (a Run Away bonus, for instance), it loses that as well.

  - If it is a fire/flame Item, it does not count as one.

  - It cannot be lost to Bad Stuff, but that's a function of Cursed Thingy rather than the Item.

  - It can be lost to Curses, even if the Item says it can't.

  - If the Item itself says it can be used with other equipment of the same type, then you have to unequip the other Items of that type (for instance, a Cursed Thingy Raincoat cannot be worn over other Armor), but if it's the other Item that gives that ability, that's fine (a Raincoat can be worn over some other Cursed Thingy Armor).
    
  - A Cursed Thingy that gives you an extra Hand loses that ability.`,
  },
  {
    question: `Does Curse! Tiny Hands prevent me from carrying an Item that requires 2 Hands, or just from equipping it?`,
    answer: `It prevents you from carrying it, just like the card says. (It also prevents you from equipping it, of course, unless you Cheat!)`,
  },
  {
    id: 10,
    subTitle: `Clerical Errors`,
  },
  {
    question: `How does the Casting Couch work?`,
    answer: `Casting Couch gives you the option to have all the benefits and penalties to being a Wizard along with any other Class(es) you might be. It is, in effect, an optional extra Class card. If you decide to use it, you may use Wizard-only Items in combat, you may use the Wizard's flight spell and charm spell, you get any bonuses/penalties against Monsters that are sensitive to Wizards. No matter what, you must decide whether you are using the Casting Couch at the start of combat (i.e., right after you Open A Door and find a monster, or when you Look For Trouble). If you do choose to use it, you are -1 to Run Away.`,
  },
  {
    question: `What happens if I'm wearing the Fake Beard and the Fake Ears?`,
    answer: `Monsters will react to you as if you are a half-Elf/half-Dwarf.`,
  },
  {
    question: `How does the Stab-A-Matic work?`,
    answer: `The Stab-A-Matic allows a non-Thief to backstab like a Thief during combat. I.e., he may discard a card to give a player a -2 penalty during combat, once per combatant. A Thief using the Stab-A-Matic gets a "bonus" to his backstabbing efforts, so each is good for a -3 penalty instead of the normal -2.`,
  },
  {
    question: `Convenient Handles lets me turn a Big item into a small item. So could a Thief put convenient handles on someone else's Big item, and then try to steal it?`,
    answer: `No. You can't play enhancers on other people's Items unless the card specifically says so.`,
  },
  {
    id: 11,
    subTitle: `The Need for Steed`,
  },
  {
    question: `If I have two Steeds and Trick Riding Boots, what happens if I lose my footgear? Do I immediately discard the second Steed? Is it killed? And if so, if it was the Tiger Steed, would it come back to my hand?`,
    answer: `You'd have to lose a Steed because you're only allowed one. This would not be the kind of event that allows your Tiger Steed to be returned to your hand.`,
  },
  {
    question: `Is there anything special I have to do for Steed Enhancers?`,
    answer: `Nope. Steed Enhancers work and are played just like Item Enhancers, except they can only be played on Steeds.`,
  },
  {
    question: `If I have a Steed that breathes fire, does that count as having a fire/flame attack?`,
    answer: `Yes, it does.`,
  },
  {
    question: `Can I fight a Steed from my hand instead of Looking For Trouble?`,
    answer: `No. A Steed can only be fought when you Kick Open The Door and find a Steed.`,
  },
  {
    question: `Can I discard my Steed to automatically Run Away like I can with a Hireling?`,
    answer: `Not unless the card itself says you can.`,
  },
  {
    question: `If I decide not to use a Steed, can I unequip it by turning the card sideways?`,
    answer: `Steeds cannot be unequipped at all and certainly not to play another one. If you can't use your Steed for some reason, you must get rid of it as an extra Big item. (If, somehow, you find yourself with a Steed that you can't use but can't get rid of, it does count against your Big item total; you only get to ignore a Steed's Bigness when you're actually riding it.)`,
  },
  {
    question: `Can I play Duck of Earl if I am Level 1 and can't lose a level? What if I'm Level 9 and can't gain a level unless I kill a monster? And what if I'm using a special trick die so I'm guaranteed to roll a 6?`,
    answer: `You can still play the card in all these circumstances, but you don't lose/gain the level. Normally, using a trick die would be very much against the spirit of the rules, but the text on this card leaves that door wide open. Good . . . luck?`,
  },
  {
    id: 12,
    subTitle: `De-Ranged`,
  },
  {
    question: `Do I get Treasures or levels when I tame a monster?`,
    answer: `No, you munchkin. You didn't kill it.`,
  },
  {
    question: `If I'm fighting multiple monsters, when does the taming happen?`,
    answer: `It happens as soon as you discard to make it happen; your new Steed will help you against the other monsters.`,
  },
  {
    question: `If I tame a monster, what happens to my old Steed? What if I somehow have multiple Steeds?`,
    answer: `Discard the old one(s). The tamed Steed replaces all Steeds you might have had previously.`,
  },
  {
    question: `Does my tamed Steed count as a Big item?`,
    answer: `Because it does not have a Gold Piece value, it is not an Item and is not affected by any cards that specifically target Items. It follows all other rules for Steeds, however.`,
  },
  {
    question: `If I discard a tamed monster, what happens to the card?`,
    answer: `It goes to the Door discards. It's not a Steed any more. It's a monster again.`,
  },
  {
    question: `Do I keep my tamed Steed if I quit being a Ranger?`,
    answer: `Yes, until you play another Steed.`,
  },
  {
    question: `If potions, enhancers, etc., were played on a monster before I tamed it, what happens?`,
    answer: `Taming a Steed is similar to the Wizard's Charm Spell, so one-shot Items (if it was the only monster in the fight), monster enhancers, and so on get discarded. (Rulings on the forums have been inconsistent, but this is the official answer.)`,
  },
  {
    question: `If I am using Horse Shoes as a Steed and it has a Steed Enhancer on it, what happens if I declare that Horse Shoes is now Footgear?`,
    answer: `The Steed Enhancer remains on Horse Shoes, but they do not add to its bonus as long as you are using them as Footgear.`,
  },
  {
    spacerBottom: true,
  },
];

const template = {
  onj: {
    question: ``,
    answer: ``,
  },
};

export default DATA;
