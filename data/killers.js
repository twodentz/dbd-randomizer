// List of Killers (Legendary skins are treated as separate characters)
const killers = [
  {
    id: "theTrapper",
    name: "The Trapper",
    image: "images/killers/theTrapper.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theKrampus",
    name: "The Krampus",
    image: "images/killers/theKrampus.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "naughtyBear",
    name: "Naughty Bear",
    image: "images/killers/naughtyBear.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theWraith",
    name: "The Wraith",
    image: "images/killers/theWraith.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theHillbilly",
    name: "The Hillbilly",
    image: "images/killers/theHillbilly.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theNurse",
    name: "The Nurse",
    image: "images/killers/theNurse.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theShape",
    name: "The Shape",
    image: "images/killers/theShape.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theHag",
    name: "The Hag",
    image: "images/killers/theHag.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theDoctor",
    name: "The Doctor",
    image: "images/killers/theDoctor.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theLookSee",
    name: "The Look-See",
    image: "images/killers/theLookSee.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "pharaohEddie",
    name: "Pharaoh Eddie",
    image: "images/killers/pharaohEddie.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theHuntress",
    name: "The Huntress",
    image: "images/killers/theHuntress.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theMordeo",
    name: "The Mordeo",
    image: "images/killers/theMordeo.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theBabaYaga",
    name: "The Baba Yaga",
    image: "images/killers/theBabaYaga.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theWereElk",
    name: "The Were-Elk",
    image: "images/killers/theWereElk.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theCannibal",
    name: "The Cannibal",
    image: "images/killers/theCannibal.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theNightmare",
    name: "The Nightmare",
    image: "images/killers/theNightmare.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "thePig",
    name: "The Pig",
    image: "images/killers/thePig.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theClown",
    name: "The Clown",
    image: "images/killers/theClown.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theSpirit",
    name: "The Spirit",
    image: "images/killers/theSpirit.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theWarHammerTitan",
    name: "The War Hammer Titan",
    image: "images/killers/theWarHammerTitan.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "tomieKawakami",
    name: "Tomie Kawakami",
    image: "images/killers/tomieKawakami.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theLegion",
    name: "The Legion",
    image: "images/killers/theLegion.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "hunk",
    name: "HUNK",
    image: "images/killers/hunk.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "thePlague",
    name: "The Plague",
    image: "images/killers/thePlague.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theGhostFace",
    name: "The Ghost Face",
    image: "images/killers/theGhostFace.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theDemogorgon",
    name: "The Demogorgon",
    image: "images/killers/theDemogorgon.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theOni",
    name: "The Oni",
    image: "images/killers/theOni.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theMinotaur",
    name: "The Minotaur",
    image: "images/killers/theMinotaur.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theArmouredTitan",
    name: "The Armoured Titan",
    image: "images/killers/theArmouredTitan.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "samuraiEddie",
    name: "Samurai Eddie",
    image: "images/killers/samuraiEddie.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "murderousGrizzly",
    name: "Murderous Grizzly",
    image: "images/killers/murderousGrizzly.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theDeathslinger",
    name: "The Deathslinger",
    image: "images/killers/theDeathslinger.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "strangerEddie",
    name: "Stranger Eddie",
    image: "images/killers/strangerEddie.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theExecutioner",
    name: "The Executioner",
    image: "images/killers/theExecutioner.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theBlight",
    name: "The Blight",
    image: "images/killers/theBlight.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theFerryman",
    name: "The Ferryman",
    image: "images/killers/theFerryman.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "williamBirkin",
    name: "William Birkin",
    image: "images/killers/williamBirkin.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theTwins",
    name: "The Twins",
    image: "images/killers/theTwins.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theTrickster",
    name: "The Trickster",
    image: "images/killers/theTrickster.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theNemesis",
    name: "The Nemesis",
    image: "images/killers/theNemesis.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theCenobite",
    name: "The Cenobite",
    image: "images/killers/theCenobite.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theChatterer",
    name: "The Chatterer",
    image: "images/killers/theChatterer.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theArtist",
    name: "The Artist",
    image: "images/killers/theArtist.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theJabberwock",
    name: "The Jabberwock",
    image: "images/killers/theJabberwock.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "missFuchi",
    name: "Miss Fuchi",
    image: "images/killers/missFuchi.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theLeshen",
    name: "The Leshen",
    image: "images/killers/theLeshen.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "bouletArtist",
    name: "Boulet Artist",
    image: "images/killers/bouletArtist.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theOnryo",
    name: "The Onryō",
    image: "images/killers/theOnryo.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theDredge",
    name: "The Dredge",
    image: "images/killers/theDredge.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "eddiesTribute",
    name: "Eddie's Tribute",
    image: "images/killers/eddiesTribute.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "halfSpiritsTorments",
    name: "Half Spirits' Torments",
    image: "images/killers/halfSpiritsTorments.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theMastermind",
    name: "The Mastermind",
    image: "images/killers/theMastermind.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theKnight",
    name: "The Knight",
    image: "images/killers/theKnight.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theDraugr",
    name: "The Draugr",
    image: "images/killers/theDraugr.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theSkullMerchant",
    name: "The Skull Merchant",
    image: "images/killers/theSkullMerchant.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theSingularity",
    name: "The Singularity",
    image: "images/killers/theSingularity.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theXenomorph",
    name: "The Xenomorph",
    image: "images/killers/theXenomorph.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theXenomorphQueen",
    name: "The Xenomorph Queen",
    image: "images/killers/theXenomorphQueen.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theGoodGuy",
    name: "The Good Guy",
    image: "images/killers/theGoodGuy.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theGoodGal",
    name: "The Good Gal",
    image: "images/killers/theGoodGal.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theUnknown",
    name: "The Unknown",
    image: "images/killers/theUnknown.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theLich",
    name: "The Lich",
    image: "images/killers/theLich.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theDarkLord",
    name: "The Dark Lord",
    image: "images/killers/theDarkLord.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "trueForm",
    name: "True Form",
    image: "images/killers/trueForm.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theHoundmaster",
    name: "The Houndmaster",
    image: "images/killers/theHoundmaster.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "theGhoul",
    name: "The Ghoul",
    image: "images/killers/theGhoul.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "rizeKamishiro",
    name: "Rize Kamishiro",
    image: "images/killers/rizeKamishiro.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theAnimatronic",
    name: "The Animatronic",
    image: "images/killers/theAnimatronic.png",
    chapter: "",
    bio: "",
    legendary: false
  },
  {
    id: "yellowRabbit",
    name: "Yellow Rabbit",
    image: "images/killers/yellowRabbit.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "glitchtrap",
    name: "Glitchtrap",
    image: "images/killers/glitchtrap.png",
    chapter: "",
    bio: "",
    legendary: true
  },
  {
    id: "theKrasue",
    name: "The Krasue",
    image: "images/killers/theKrasue.png",
    chapter: "",
    bio: "",
    legendary: false
  }
];
