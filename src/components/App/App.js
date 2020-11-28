import React from 'react';
import styled from "styled-components";
import OldItems from '../OldItems/OldItems';
import Effects from '../Effects/Effects';

// Styled component named StyledButton
const StyledButton = styled.button`
  background-color: var(--button-back);
  font-size: var(--font-size-3);
  font-weight: 600;
  color: var(--main-font-color);
  border: 6px solid var(--main-border-color);
  padding: 0.5rem 2rem;
  transition: background-color 0.8s, color 0.8s;

  &:hover {
    background-color: var(--button-back-hov);
    color: var(--button-back);
  }
`;

// Styled component named StyledButton
const ResultContainer = styled.section`
  text-align: center;
  display: block;
  margin: 2rem auto 0;
  max-width: 70%;

  @media (min-width: 800px) {
    margin: 0 auto;
  }

  .found-container__type {
    text-transform: uppercase;
    font-weight: 600;
  }

  .found-container__description {
    font-weight: 300;
    font-style: italic;
    margin: 0 auto 1.5rem;
  }

  .found-container__effectdesc {
    text-align: left;
    max-width: 500px;
    margin: 0 auto 1rem;
  }
`;

const FoundItems = [
  {
    name: "Pencil",
    type: "mundane",
    description: "A pencil with a decent point"
  },
  {
    name: "A Number of Cigars in a Tin",
    type: "mundane",
    description: "These are pretty decent cigars."
  },
  {
    name: "A Box of Matches",
    type: "mundane",
    description: "It looks about 80% full."
  },
  {
    name: "An Old Hip Flask",
    type: "mundane",
    description: "Slightly scuffed, and looks to have been here a while. Full though."
  },
  {
    name: "A Full Set of Silverwear",
    type: "mundane",
    description: "Not sure why is this here, but it's a full dinner set."
  },
  {
    name: "A Large Hat, Folded Up.",
    type: "mundane",
    description: "This is a decent hat, would keep the rain off."
  },
  {
    name: "A Leather and Gold Bound Book",
    type: "mundane",
    description: "A biography of a merchant, not much of a read but it's made of a lot of gold."
  },
  {
    name: "A Simple Silver Necklace",
    type: "mundane",
    description: "Simple yet beautiful."
  },
  {
    name: "An Accurate Timepiece",
    type: "mundane",
    description: "Whatever it is powering this, it's still accurate."
  },
  {
    name: "A Golden Belt Buckle",
    type: "mundane",
    description: "Seems to depict a pastoral theme. Will hold your pants up, just needs the belt."
  },
  {
    name: "Red Leather Gloves",
    type: "mundane",
    description: "These are well made, but why did they choose red?"
  },
  {
    name: "A Heavy Black Smoking Jacket",
    type: "mundane",
    description: "A well tailored padded, black smoking jacket, it does seem to make you look like pimp though."
  },
  {
    name: "Small Notebook",
    type: "mundane",
    description: "A small notebook filled with personal notes, shopping lists and inspirational quotes."
  },
  {
    name: "Small Map",
    type: "mundane",
    description: "A small hand-drawn map. Some areas have small notes scrawled next to them describing gripes the author had with the area."
  },
  {
    name: "A Collection of Books on Weaving",
    type: "mundane",
    description: "More books that you'd need on weaving."
  },
  {
    name: "An Old Eye Patch",
    type: "mundane",
    description: "Looks well used. Can't be a good sign that it's out here."
  },
  {
    name: "A Set of Glass Knives",
    type: "mundane",
    description: "What possible use could these be?"
  },
  {
    name: "A Box of Tea",
    type: "mundane",
    description: "Tea, for civilized people."
  },
  {
    name: "Soap",
    type: "mundane",
    description: "Just soap."
  },
  {
    name: "A Set of Rune Stones",
    type: "mundane",
    description: "When cast, they just seems to spell rude words. Every time."
  },
  {
    name: "A Sculpture of A Nude Man",
    type: "mundane",
    description: "The nights are long."
  },
  {
    name: "A Shovel",
    type: "mundane",
    description: "Dig a hole."
  },
  {
    name: "A Garden Hoe",
    type: "mundane",
    description: "For preparing the ground. And visual jokes."
  },
  {
    name: "A Bucket",
    type: "mundane",
    description: "It's empty."
  },
  {
    name: "A Knife",
    type: "mundane",
    description: "Just a knife."
  },
  {
    name: "A Rake",
    type: "mundane",
    description: "I guess someone expected to find more leaves?"
  },
  {
    name: "Dice",
    type: "mundane",
    description: "Several dice."
  },
  {
    name: "A Diamond",
    type: "mundane",
    description: "A nice sized diamon wrapped in a tabbaco wrapper"
  },
  {
    name: "Rubies",
    type: "mundane",
    description: "1d4 Rubies stuffed in an old sock"
  },
  {
    name: "Pink Pearls",
    type: "mundane",
    description: "1d10 Pink pearls in an old tin."
  },
  {
    name: "Emeralds",
    type: "mundane",
    description: "1d20 Emeralds in an old brandy bottle."
  },
  {
    name: "A Golden Goblet",
    type: "mundane",
    description: "A finely made goblet encrusted with rubies."
  },
  {
    name: "A Charcoal Sketch of a Woman",
    type: "mundane",
    description: "I guess drawing clothes was too hard?"
  },
  {
    name: "A Rose Gold Scepter",
    type: "mundane",
    description: "This thing is gaudy, gold, jewels, pearls, all of them."
  },
  {
    name: "A Pink Childs Dress",
    type: "mundane",
    description: "This can't be a good sign."
  },
  {
    name: "Fur Lined Boots",
    type: "mundane",
    description: "Well made, nice pair of boots."
  },
  {
    name: "A Collection of Bones",
    type: "mundane",
    description: "A lot of bones that someone gathered, for reasons?"
  },
  {
    name: "Beard Comb",
    type: "mundane",
    description: "A white beard comb. The comb is white, you can use it on all colors of beards."
  },
  {
    name: "A Shiny Acorn",
    type: "mundane",
    description: "Why is it shiny?"
  },
  {
    name: "Cloak of Impervious Skin",
    type: "magical",
    description: "The cloak is fireproof, waterproof and windproof, keeping the user at a dry comfortable temperature."
  },
  {
    name: "Shirt of Steel Wool",
    type: "magical",
    description: "A loose shirt made from grey wool. This shirt is as light as cotton, but woven from a strange metal like substance providing armor like protection.",
    modifier: "+1 Armor"
  },
  {
    name: "Compass of lost items",
    type: "magical",
    description: "A compass set on a small box. When an object is placed in the box, the compass will point the next nearest object of the same type.",
  },
  {
    name: "Box of Bones of the undead horde",
    type: "magical",
    description: "A box containing the bones of an undead warrior. The box rattles when near fellow undead as the occupant tries to rejoin the horde.",
  },
  {
    name: "Highesters Monacle",
    type: "magical",
    description: "A monacle that when worn can detect magic.",
  },
  {
    name: "The Tailor's Shirt",
    type: "magical",
    description: "When worn this shirt conforms to the size of the wearer. The fabric fades to a color that flatters the wearer",
    modifier: "+1 Charisma"
  },
  {
    name: "Ring of Random Magic",
    type: "magical",
    description: "A small gold ring with a large colorless stone mounted on it",
    effectDesc: "The stone gathers background magical energy, once full it can be discharged on command and it will have one of the following random effects (d100):",
    effects: [
      {
        effect: "1-50 : The ring glows warmly. The user is healed 1d12 + 10"
      },
      {
        effect: "51-70 : A shield of orange light surrounds the user, absorbing half of all damage for remainder of combat encounter"
      },
      {
        effect: "71-95 : The ring lets off a concussive blast. Everyone withing 10ft takes 2d6 damage"
      },
      {
        effect: "96-99 : The ring glows brightly, the wearer is reduced to 1hp"
      },
      {
        effect: "100 : The ring explodes. Everyone within 20ft takes 10d6 damage"
      }
    ]
  },
  {
    name: "Ring of Druthwid's Defence",
    type: "magical",
    description: "A large iron band that when worn turns the wearers skin a little green.",
    effectDesc: "Once per day, the ring can be activated, providing an armor for the duration combat encounter. Roll 2d6:",
    effects: [
      {
        effect: "1-6: No effect"
      },
      {
        effect: "7-9: +1 Armor"
      },
      {
        effect: "10+: +2 Armor"
      }
    ]
  },
  {
    name: "RingBlade",
    type: "magical",
    description: "A simple ring of black metal, a small X carved on the inside.",
    effectDesc: "When worn, the ring grows into a knife or shortsword or longsword depending on the users preference. The user can not be disarmed when wearing it, unless they lose the finger the ring is on.",
    effects: [
      {
        effect: "Weapon does standard class damage, can not be lost or dropped"
      }
    ]
  },
  {
    name: "Ring of the Old Wizard",
    type: "magical",
    description: "An ornate silver ring etched with flowering vines.",
    effectDesc: "The ring contains the esence of a long dead wizard. On command, you can call on the wizard to indentify the magical properties of any item. Roll 2d6:",
    effects: [
      {
        effect: "1-6: The wizard is uncoperative."
      },
      {
        effect: "7-9: The wizard will tell you the general magical use of the item, but not any specifics including downsides"
      },
      {
        effect: "10+: The wizard will tell you how to best utilize the item, and any drawbacks."
      }
    ]
  },
  {
    name: "Burning Ring of Fire",
    type: "magical",
    description: "A copper ring, set with a red stone.",
    effectDesc: "The ring allows the wearer to add the firey tag to any weapon weilded. After use, the ring must be recharged but spending d6 hours in a fire. Roll 2d6:",
    effects: [
      {
        effect: "1-6: The ring fails to grant the firey tag, it must be recharged."
      },
      {
        effect: "7-9: The weapons gains the firey tag and dangerous tag"
      },
      {
        effect: "10+: The weapon gains the firey tag."
      }
    ]
  },
  {
    name: "Branar's Brass Knuckles",
    type: "magical",
    description: "A heavily dented set of brass knuckles.",
    effectDesc: "Branar the druid brawlers brass knuckles. Attacking with the brass knuckles recovers health. Roll 2d6 after a successful hack and slash:",
    effects: [
      {
        effect: "1-6: No effect."
      },
      {
        effect: "7-9: Roll standard class damage. Roll 2d4, 1 for the attacker, 1 for the defender. Each recovers the number of hit points rolled."
      },
      {
        effect: "10+: Roll standard class damage. Roll 1d8 and recover that many hit points."
      }
    ]
  },
  {
    name: "Ring of Death's Tally",
    type: "magical",
    description: "A skull shaped ring with dark red stones set in the eyes.",
    effectDesc: "With each kill gained wearing the ring, the wearer gets a bonus to the Last Breath roll. Once used for a Last Breath move, the ring is lost:",
    effects: [
      {
        effect: "1-10 kills: +1 to Last Breath roll."
      },
      {
        effect: "11-50: +2 to Last Breath roll."
      },
      {
        effect: "50+: +3 to Last Breath roll."
      }
    ]
  },
  {
    name: "Amulet of the Cautious Sailor",
    type: "magical",
    description: "A worn piece of sea glass on a simple chain.",
    effectDesc: "The wearer can place the glass in their mouth and breath underwater for 30mins. Roll 2d6:",
    effects: [
      {
        effect: "1-6: Can not be reused."
      },
      {
        effect: "7-9: 2d10 days before it can be reused."
      },
      {
        effect: "10+: Can be reused after 1hr of being in fresh air."
      }
    ]
  },
  {
    name: "Amulet of the Careful Miner",
    type: "magical",
    description: "A glass orb containing a small piece of moss.",
    effectDesc: "When in a cave, mine or dungeon the moss will glow when the wearer is moving toward the nearest exit. Roll 2d6:",
    effects: [
      {
        effect: "1-6: Can not be reused."
      },
      {
        effect: "7+: 2d10 days before it can be reused."
      }
    ],
  },
  {
    name: "The Ranger's Necklace",
    type: "magical",
    description: "A worn hollow canine tooth on a leather ligature.",
    effectDesc: "When the rangers necklace is whirled around the holders head, the hollow tooth emmits a highpitch sound. Roll 2d6:",
    effects: [
      {
        effect: "1-6: You draw the attention of all wild animals in close proximity."
      },
      {
        effect: "7-9: All wild animals, and any companion animals or mounts in close proximity are driven away. Companion or mounts will take 1d6 hours to return."
      },
      {
        effect: "10+: All wild animals are driven away."
      }
    ]
  },
  {
    name: "The Rat Hunter's Necklace",
    type: "magical",
    description: "A canine tooth on a leather strap.",
    effectDesc: "In the presence of feline, the user may roll to ask the cat for aid. Roll 2d6:",
    effects: [
      {
        effect: "1-6: They ignore you."
      },
      {
        effect: "7-9: Ask one: What happened here recently? What is about to happen? What should I be on the lookout for? What here is useful or valuable to me? Who’s really in control here? What here is not what it appears to be? And Take +1 when acting upon the information.",
      },
      {
        effect: "10+: You can ask 3 of the above."
      }
    ]
  },
  {
    name: "The Navigator's Necklace",
    type: "magical",
    description: "A broken piece of a sextant on a simple chain.",
    effectDesc: "The wearer may use a move to ask questions about their current location. Roll 2d6:",
    effects: [
      {
        effect: "1-6: You are lost. No effect."
      },
      {
        effect: "7-9: Ask one: What is the current time? What is the exact date? Which way is north? How far away from my last know location? Take +1 when acting upon the information.",
      },
      {
        effect: "10+: You can ask 3 of the above."
      }
    ]
  },
  {
    name: "The Hunters Bracelet",
    type: "magical",
    description: "Light leather leg greaves with a simple brass buckle.",
    effectDesc: "The wearer leaves behind no footfalls, finger prints, or other signs that can be used to track them. Roll 2d6:",
    effects: [
      {
        effect: "1-6: Effective tracking is hidden for 10 yards. This has bought you a short amount of time."
      },
      {
        effect: "7-9: Effective tracking is hidden for 50 yards. This has bought you an extra 20 minutes to escape."
      },
      {
        effect: "10+: You are a ghost, there is no evidence that you were ever there."
      }
    ]
  },
  {
    name: "The Occultist Bracelet",
    type: "magical",
    description: "A copper bracelent that has turned green with age, it bears an inscription of a long dead language.",
    effectDesc: "The bracelet allows the wearer to interact with ghostly and non substantial entities as if they had physical form. Roll 2d6:",
    effects: [
      {
        effect: "1-6: Effect last d6 minutes"
      },
      {
        effect: "7-9: Effect lasts for current encounter"
      },
      {
        effect: "10+: Effect lasts until daybreak"
      }
    ]
  },
  {
    name: "The Occultist Bracelet",
    type: "magical",
    description: "A copper bracelet that has turned green with age, it bears an inscription of a long dead language.",
    effectDesc: "The bracelet allows the wearer to interact with ghostly and non substantial entities as if they had physical form. Roll 2d6:",
    effects: [
      {
        effect: "1-6: Effect last d6 minutes"
      },
      {
        effect: "7-9: Effect lasts for current encounter"
      },
      {
        effect: "10+: Effect lasts until daybreak"
      }
    ]
  },
  {
    name: "The Defenders Bracelets",
    type: "magical",
    description: "Two iron bands with a sheild brand.",
    effectDesc: "These bracelets when worn on each arm allow the wearer to use the defend action at 10+. After each use Roll 2d6:",
    effects: [
      {
        effect: "1-6: Item will take 1d4 sessions to recharge."
      },
      {
        effect: "7-9: Item can not be used again this session."
      },
      {
        effect: "10+: Item recharges after this combat encounter."
      }
    ]
  },
  {
    name: "Wick's Armor",
    type: "magical",
    description: "A simple overshirt of charcoal cloth.",
    effectDesc: "When worn the shirt disguises the armor of the wearer, even helmets seem to disappear. The user still gets the armor benfit."
  },
  {
    name: "The Lone Wander's Belt",
    type: "magical",
    description: "A brown leather belt with a brass buckle edged with rubies.",
    effectDesc: "When the wearer is at full health, the belt can store up to 1hp per day up to the maximum of the wearer.  At any point the wearer can restore their hitpoints by subtracting them from those stored in the belt."
  },
  {
    name: "The Last Elf's Cloak",
    type: "magical",
    description: "A grayish cloak with a silver clasp.",
    effectDesc: "When the clasp is fastened, the cloth starts to blend into it's surroundings. Hold 3 cloak. When you make a noise roll 2d6:",
    effects: [
      {
        effect: "1-6: Reduce your Cloak by 1 in addition to whatever the GM says. When your Cloak is 0, the jig is up"
      },
      {
        effect: "7-9: Choose 1: *Reduce your Cloak by 1, *Reduce your Cloak by 1 * You are spotted, but you have the drop on them *There’s something here that you didn’t plan for"
      },
      {
        effect: "10+: You're good"
      }
    ]
  },
  {
    name: "Faraz's Battle Mace",
    type: "magical",
    description: "A simple one-handed black metal mace that once belonged to Faraz the Beserker.",
    effectDesc: "If a critical hit is rolled on a hack and slash, for the remainder of the encounter damage uses d10s, however no armor can be used and you must always seek out the most dangerous foe"
  },
  {
    name: "Beorn's Bathrobe",
    type: "magical",
    description: "A Bearskin Bathrobe.",
    effectDesc: "You may take on the physical form of a grizzly bear. You have any innate abilities and weaknesses of the form. You still use your normal stats but some moves may be harder to trigger. You also have acces to these moves: Forage, Rip something apart, Maul them. Spend 1 hold to make that move. Once you’re out of hold, you return to your natural form. At any time, you may spend all your hold and revert to your natural form. Roll 2d6:",
    effects: [
      {
        effect: "1-6: On a miss hold 1, you are stuck in bear form for 1d10 hours."
      },
      {
        effect: "7-9: On a 7–9 hold 2."
      },
      {
        effect: "10+: On a 10+ hold 3."
      }
    ]
  },
  {
    name: "The Sun God's Mercy",
    type: "magical",
    description: "A white cloak with a yellow sun embroidered on it.",
    effectDesc: "At noon everyday Roll 2d6:",
    effects: [
      {
        effect: "1-6: No effect"
      },
      {
        effect: "7-9: Recover 1d4 hitpoints."
      },
      {
        effect: "10+: Recover 1d8+2 hitpoints."
      }
    ]
  },
  {
    name: "The Forgotten Raven's Cloak",
    type: "magical",
    description: "A black cloak lined with raven feathers",
    effectDesc: "When a feather is removed, it hardens and can be used for a volley attack. Roll 2d6:",
    effects: [
      {
        effect: "1-6: Out of feathers. Cloak will regrow feathers overnight, until then it is just a cloak."
      },
      {
        effect: "7-9: Choose one (whichever you choose you deal your damage): You have to move to get the shot placing you in danger as described by the GM You have to take what you can get: -1d6 damage."
      },
      {
        effect: "10+: You have a clear shot—deal your damage."
      }
    ]
  }
];

class NewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsFound: [],
      latestItem:[]
    };
  }

  // Our click function.
  handleClick = () => {
    //Get an item from a random list
    let randomItem = FoundItems[Math.floor(Math.random() * FoundItems.length)];
    //Set the state to the random item, replacing what was there.
    this.setState(state => ({
      latestItem: randomItem
    }));
    // Add to the state array.
    this.state.itemsFound.push(randomItem)
  }


  render() {
    // If we have results.
    if (this.state.latestItem.name) {
      let { type, description, effectDesc, effects, name } = this.state.latestItem;
      return (
        <>
          <ResultContainer aria-live="polite" id="iteminfo">
            <div className="found-container">
              <p className={`found-container__type ${type}`}>{type}</p>
              <h2 className="found-container__name">{name}</h2>
              <p className ="found-container__description">{description }</p>
              <p className="found-container__effectdesc">{effectDesc}</p>
              {effects
                ? <Effects items= {effects} /> : null
              }
            </div>
            <StyledButton onClick={this.handleClick} aria-controls="iteminfo"> GET ITEM </StyledButton>
            <div className="all-found-container">
              {this.state.itemsFound.length > 1 ? (<OldItems items={this.state.itemsFound} />) : null}
            </div>
          </ResultContainer>
        </>
      );
    }
    else {
      return (
        <>
          <ResultContainer>
            <StyledButton onClick={this.handleClick} aria-controls="iteminfo"> GET ITEM </StyledButton>
          </ResultContainer>
        </>
      );
    }
  }
}

export default NewApp;