// List of Survivor perks:
const survivorPerks = [
  { 
    id: "aceInTheHole", 
    name: "Ace in the Hole", 
    image: "images/perks/survivor/aceInTheHole.png", 
    owner: "Ace Visconti", 
    description: "Causes all regular Items you retrieve from a Chest to come equipped with 1 to 2 Add-ons:\n\n" + "• First Slot: 100 % chance to be equipped with an Add-on of Visceral Rarity or lower.\n\n" + "• Second Slot: 50/75/100 % chance to be equipped with an Add-on of Uncommon Rarity or lower.\n\n" + "Ace in the Hole prevents any attached Add-ons on your currently held Item to be consumed upon escaping the Trial." 
  },
  { 
    id: "adrenaline", 
    name: "Adrenaline", 
    image: "images/perks/survivor/adrenaline.png", 
    owner: "Meg Thomas", 
    description: "Once the Exit Gates are powered, Adrenaline activates and triggers the following effects:\n\n" + "• Heals you to the next Health State.\n\n" + "• Grants a +50 % Haste Status Effect for 3 seconds.\n\n" + "Adrenaline can be used while Exhausted and ignores an existing Status Effect. Adrenaline causes the Exhausted Status Effect for 60/50/40 seconds after use." 
  },
  { 
    id: "aftercare", 
    name: "Aftercare", 
    image: "images/perks/survivor/aftercare.png", 
    owner: "Jeff Johansen", 
    description: "" 
  },
  { 
    id: "alert", 
    name: "Alert", 
    image: "images/perks/survivor/alert.png", 
    owner: "Feng Min", 
    description: "" 
  },
  { 
    id: "anyMeansNecessary", 
    name: "Any Means Necessary", 
    image: "images/perks/survivor/anyMeansNecessary.png", 
    owner: "Yui Kimura", 
    description: "" 
  },
  { 
    id: "apocalypticIngenuity", 
    name: "Apocalyptic Ingenuity", 
    image: "images/perks/survivor/apocalypticIngenuity.png", 
    owner: "Rick Grimes", 
    description: "" 
  },
  { 
    id: "appraisal", 
    name: "Appraisal", 
    image: "images/perks/survivor/appraisal.png", 
    owner: "Élodie Rakoto", 
    description: "" 
  },
  { 
    id: "autodidact", 
    name: "Autodidact", 
    image: "images/perks/survivor/autodidact.png", 
    owner: "Adam Francis", 
    description: "" 
  },
  {
    id: "babysitter",
    name: "Babysitter",
    image: "images/perks/survivor/babysitter.png",
    owner: "Steve Harrington",
    description: ""
  },
  {
    id: "backgroundPlayer",
    name: "Background Player",
    image: "images/perks/survivor/backgroundPlayer.png",
    owner: "Renato Lyra",
    description: ""
  },
  {
    id: "balancedLanding",
    name: "Balanced Landing",
    image: "images/perks/survivor/balancedLanding.png",
    owner: "Nea Karlsson",
    description: ""
  },
  {
    id: "bardicInspiration",
    name: "Bardic Inspiration",
    image: "images/perks/survivor/bardicInspiration.png",
    owner: "Aestri Yazar & Baermar Uraz",
    description: ""
  },
  {
    id: "betterTogether",
    name: "Better Together",
    image: "images/perks/survivor/betterTogether.png",
    owner: "Nancy Wheeler",
    description: ""
  },
  {
    id: "betterThanNew",
    name: "Better than New",
    image: "images/perks/survivor/betterThanNew.png",
    owner: "Rebecca Chambers",
    description: ""
  },
  {
    id: "biteTheBullet",
    name: "Bite the Bullet",
    image: "images/perks/survivor/biteTheBullet.png",
    owner: "Leon S. Kennedy",
    description: ""
  },
  {
    id: "blastMine",
    name: "Blast Mine",
    image: "images/perks/survivor/blastMine.png",
    owner: "Jill Valentine",
    description: ""
  },
  {
    id: "bloodPact",
    name: "Blood Pact",
    image: "images/perks/survivor/bloodPact.png",
    owner: "Cheryl Mason",
    description: ""
  },
  {
    id: "bloodRush",
    name: "Blood Rush",
    image: "images/perks/survivor/bloodRush.png",
    owner: "Renato Lyra",
    description: ""
  },
  {
    id: "boilOver",
    name: "Boil Over",
    image: "images/perks/survivor/boilOver.png",
    owner: "Kate Denson",
    description: ""
  },
  {
    id: "bond",
    name: "Bond",
    image: "images/perks/survivor/bond.png",
    owner: "Dwight Fairfield",
    description: ""
  },
  {
    id: "boonCircleOfHealing",
    name: "Boon: Circle of Healing",
    image: "images/perks/survivor/boonCircleOfHealing.png",
    owner: "Mikaela Reid",
    description: ""
  },
  {
    id: "boonDarkTheory",
    name: "Boon: Dark Theory",
    image: "images/perks/survivor/boonDarkTheory.png",
    owner: "Yoichi Asakawa",
    description: ""
  },
  {
    id: "boonExponential",
    name: "Boon: Exponential",
    image: "images/perks/survivor/boonExponential.png",
    owner: "Jonah Vasquez",
    description: ""
  },
  {
    id: "boonIllumination",
    name: "Boon: Illumination",
    image: "images/perks/survivor/boonIllumination.png",
    owner: "Alan Wake",
    description: ""
  },
  {
    id: "boonShadowStep",
    name: "Boon: Shadow Step",
    image: "images/perks/survivor/boonShadowStep.png",
    owner: "Mikaela Reid",
    description: ""
  },
  {
    id: "borrowedTime",
    name: "Borrowed Time",
    image: "images/perks/survivor/borrowedTime.png",
    owner: 'William "Bill" Overbeck',
    description: ""
  },
  {
    id: "botanyKnowledge",
    name: "Botany Knowledge",
    image: "images/perks/survivor/botanyKnowledge.png",
    owner: "Claudette Morel",
    description: ""
  },
  {
    id: "breakdown",
    name: "Breakdown",
    image: "images/perks/survivor/breakdown.png",
    owner: "Jeff Johansen",
    description: ""
  },
  {
    id: "breakout",
    name: "Breakout",
    image: "images/perks/survivor/breakout.png",
    owner: "Yui Kimura",
    description: ""
  },
  {
    id: "buckleUp",
    name: "Buckle Up",
    image: "images/perks/survivor/buckleUp.png",
    owner: "Ashley J. Williams",
    description: ""
  },
  {
    id: "builtToLast",
    name: "Built to Last",
    image: "images/perks/survivor/builtToLast.png",
    owner: "Felix Richter",
    description: ""
  },
  {
    id: "calmSpirit",
    name: "Calm Spirit",
    image: "images/perks/survivor/calmSpirit.png",
    owner: "Jake Park",
    description: ""
  },
  {
    id: "camaraderie",
    name: "Camaraderie",
    image: "images/perks/survivor/camaraderie.png",
    owner: "Steve Harrington",
    description: ""
  },
  {
    id: "championOfLight",
    name: "Champion of Light",
    image: "images/perks/survivor/championOfLight.png",
    owner: "Alan Wake",
    description: ""
  },
  {
    id: "chemicalTrap",
    name: "Chemical Trap",
    image: "images/perks/survivor/chemicalTrap.png",
    owner: "Ellen Ripley",
    description: ""
  },
  {
    id: "clairvoyance",
    name: "Clairvoyance",
    image: "images/perks/survivor/clairvoyance.png",
    owner: "Mikaela Reid",
    description: ""
  },
  {
    id: "cleanBreak",
    name: "Clean Break",
    image: "images/perks/survivor/cleanBreak.png",
    owner: "Taurie Cain",
    description: ""
  },
  {
    id: "comeAndGetMe",
    name: "Come and Get Me!",
    image: "images/perks/survivor/comeAndGetMe.png",
    owner: "Rick Grimes",
    description: ""
  },
  {
    id: "conviction",
    name: "Conviction",
    image: "images/perks/survivor/conviction.png",
    owner: "Michonne Grimes",
    description: ""
  },
  {
    id: "correctiveAction",
    name: "Corrective Action",
    image: "images/perks/survivor/correctiveAction.png",
    owner: "Jonah Vasquez",
    description: ""
  },
  {
    id: "counterforce",
    name: "Counterforce",
    image: "images/perks/survivor/counterforce.png",
    owner: "Jill Valentine",
    description: ""
  },
  {
    id: "cutLoose",
    name: "Cut Loose",
    image: "images/perks/survivor/cutLoose.png",
    owner: "Thalita Lyra",
    description: ""
  },
  {
    id: "danceWithMe",
    name: "Dance With Me",
    image: "images/perks/survivor/danceWithMe.png",
    owner: "Kate Denson",
    description: ""
  },
  {
    id: "darkSense",
    name: "Dark Sense",
    image: "images/perks/survivor/darkSense.png",
    owner: "",
    description: ""
  },
  {
    id: "deadHard",
    name: "Dead Hard",
    image: "images/perks/survivor/deadHard.png",
    owner: "David King",
    description: ""
  },
  {
    id: "deadline",
    name: "Deadline",
    image: "images/perks/survivor/deadline.png",
    owner: "Alan Wake",
    description: ""
  },
  {
    id: "deception",
    name: "Deception",
    image: "images/perks/survivor/deception.png",
    owner: "Élodie Rakoto",
    description: ""
  },
  {
    id: "decisiveStrike",
    name: "Decisive Strike",
    image: "images/perks/survivor/decisiveStrike.png",
    owner: "Laurie Strode",
    description: ""
  },
  {
    id: "dejaVu",
    name: "Déjà Vu",
    image: "images/perks/survivor/dejaVu.png",
    owner: "",
    description: ""
  },
  {
    id: "deliverance",
    name: "Deliverance",
    image: "images/perks/survivor/deliverance.png",
    owner: "Adam Francis",
    description: ""
  },
  {
    id: "desperateMeasures",
    name: "Desperate Measures",
    image: "images/perks/survivor/desperateMeasures.png",
    owner: "Felix Richter",
    description: ""
  },
  {
    id: "detectivesHunch",
    name: "Detective's Hunch",
    image: "images/perks/survivor/detectivesHunch.png",
    owner: "Detective David Tapp",
    description: ""
  },
  {
    id: "distortion",
    name: "Distortion",
    image: "images/perks/survivor/distortion.png",
    owner: "Jeff Johansen",
    description: ""
  },
  {
    id: "diversion",
    name: "Diversion",
    image: "images/perks/survivor/diversion.png",
    owner: "Adam Francis",
    description: ""
  },
  {
    id: "doNoHarm",
    name: "Do No Harm",
    image: "images/perks/survivor/doNoHarm.png",
    owner: "Orela Rose",
    description: ""
  },
  {
    id: "dramaturgy",
    name: "Dramaturgy",
    image: "images/perks/survivor/dramaturgy.png",
    owner: "Nicolas Cage",
    description: ""
  },
  {
    id: "dutyOfCare",
    name: "Duty of Care",
    image: "images/perks/survivor/dutyOfCare.png",
    owner: "Orela Rose",
    description: ""
  },
  {
    id: "empathicConnection",
    name: "Empathic Connection",
    image: "images/perks/survivor/empathicConnection.png",
    owner: "Yoichi Asakawa",
    description: ""
  },
  {
    id: "empathy",
    name: "Empathy",
    image: "images/perks/survivor/empathy.png",
    owner: "Claudette Morel",
    description: ""
  },
  {
    id: "exultation",
    name: "Exultation",
    image: "images/perks/survivor/exultation.png",
    owner: "Trevor Belmont",
    description: ""
  },
  {
    id: "eyesOfBelmont",
    name: "Eyes of Belmont",
    image: "images/perks/survivor/eyesOfBelmont.png",
    owner: "Trevor Belmont",
    description: ""
  },
  {
    id: "fastTrack",
    name: "Fast Track",
    image: "images/perks/survivor/fastTrack.png",
    owner: "Yun-Jin Lee",
    description: ""
  },
  {
    id: "finesse",
    name: "Finesse",
    image: "images/perks/survivor/finesse.png",
    owner: "Lara Croft",
    description: ""
  },
  {
    id: "fixated",
    name: "Fixated",
    image: "images/perks/survivor/fixated.png",
    owner: "Nancy Wheeler",
    description: ""
  },
  {
    id: "flashbang",
    name: "Flashbang",
    image: "images/perks/survivor/flashbang.png",
    owner: "Leon S. Kennedy",
    description: ""
  },
  {
    id: "flipFlop",
    name: "Flip-Flop",
    image: "images/perks/survivor/flipFlop.png",
    owner: "Ashley J. Williams",
    description: ""
  },
  {
    id: "fogwise",
    name: "Fogwise",
    image: "images/perks/survivor/fogwise.png",
    owner: "Vittorio Toscano",
    description: ""
  },
  {
    id: "forThePeople",
    name: "For the People",
    image: "images/perks/survivor/forThePeople.png",
    owner: "Zarina Kassir",
    description: ""
  },
  {
    id: "friendlyCompetition",
    name: "Friendly Competition",
    image: "images/perks/survivor/friendlyCompetition.png",
    owner: "Thalita Lyra",
    description: ""
  },
  {
    id: "ghostNotes",
    name: "Ghost Notes",
    image: "images/perks/survivor/ghostNotes.png",
    owner: "Vee Boonyasak",
    description: ""
  },
  {
    id: "hardened",
    name: "Hardened",
    image: "images/perks/survivor/hardened.png",
    owner: "Lara Croft",
    description: ""
  },
  {
    id: "headOn",
    name: "Head On",
    image: "images/perks/survivor/headOn.png",
    owner: "Jane Romero",
    description: ""
  },
  {
    id: "hope",
    name: "Hope",
    image: "images/perks/survivor/hope.png",
    owner: "",
    description: ""
  },
  {
    id: "hyperfocus",
    name: "Hyperfocus",
    image: "images/perks/survivor/hyperfocus.png",
    owner: "Rebecca Chambers",
    description: ""
  },
  {
    id: "innerFocus",
    name: "Inner Focus",
    image: "images/perks/survivor/innerFocus.png",
    owner: "Haddie Kaur",
    description: ""
  },
  {
    id: "innerStrength",
    name: "Inner Strength",
    image: "images/perks/survivor/innerStrength.png",
    owner: "Nancy Wheeler",
    description: ""
  },
  {
    id: "invocationTreacherousCrows",
    name: "Invocation: Treacherous Crows",
    image: "images/perks/survivor/invocationTreacherousCrows.png",
    owner: "Taurie Cain",
    description: ""
  },
  {
    id: "invocationWeavingSpiders",
    name: "Invocation: Weaving Spiders",
    image: "images/perks/survivor/invocationWeavingSpiders.png",
    owner: "Sable Ward",
    description: ""
  },
  {
    id: "ironWill",
    name: "Iron Will",
    image: "images/perks/survivor/ironWill.png",
    owner: "Jake Park",
    description: ""
  },
  {
    id: "kindred",
    name: "Kindred",
    image: "images/perks/survivor/kindred.png",
    owner: "",
    description: ""
  },
  {
    id: "lastStand",
    name: "Last Stand",
    image: "images/perks/survivor/lastStand.png",
    owner: "Michonne Grimes",
    description: ""
  },
  {
    id: "leader",
    name: "Leader",
    image: "images/perks/survivor/leader.png",
    owner: "Dwight Fairfield",
    description: ""
  },
  {
    id: "leftBehind",
    name: "Left Behind",
    image: "images/perks/survivor/leftBehind.png",
    owner: 'William "Bill" Overbeck',
    description: ""
  },
  {
    id: "lightFooted",
    name: "Light-Footed",
    image: "images/perks/survivor/lightFooted.png",
    owner: "Ellen Ripley",
    description: ""
  },
  {
    id: "lightweight",
    name: "Lightweight",
    image: "images/perks/survivor/lightweight.png",
    owner: "",
    description: ""
  },
  {
    id: "lithe",
    name: "Lithe",
    image: "images/perks/survivor/lithe.png",
    owner: "Feng Min",
    description: ""
  },
  {
    id: "lowProfile",
    name: "Low Profile",
    image: "images/perks/survivor/lowProfile.png",
    owner: "Ada Wong",
    description: ""
  },
  {
    id: "luckyBreak",
    name: "Lucky Break",
    image: "images/perks/survivor/luckyBreak.png",
    owner: "Yui Kimura",
    description: ""
  },
  {
    id: "luckyStar",
    name: "Lucky Star",
    image: "images/perks/survivor/luckyStar.png",
    owner: "Ellen Ripley",
    description: ""
  },
  {
    id: "madeForThis",
    name: "Made for This",
    image: "images/perks/survivor/madeForThis.png",
    owner: "Gabriel Soma",
    description: ""
  },
  {
    id: "mettleOfMan",
    name: "Mettle of Man",
    image: "images/perks/survivor/mettleOfMan.png",
    owner: "Ashley J. Williams",
    description: ""
  },
  {
    id: "mirroredIllusion",
    name: "Mirrored Illusion",
    image: "images/perks/survivor/mirroredIllusion.png",
    owner: "Aestri Yazar & Baermar Uraz",
    description: ""
  },
  {
    id: "momentOfGlory",
    name: "Moment of Glory",
    image: "images/perks/survivor/momentOfGlory.png",
    owner: "Trevor Belmont",
    description: ""
  },
  {
    id: "noMither",
    name: "No Mither",
    image: "images/perks/survivor/noMither.png",
    owner: "David King",
    description: ""
  },
  {
    id: "noOneLeftBehind",
    name: "No One Left Behind",
    image: "images/perks/survivor/noOneLeftBehind.png",
    owner: "",
    description: ""
  },
  {
    id: "objectOfObsession",
    name: "Object of Obsession",
    image: "images/perks/survivor/objectOfObsession.png",
    owner: "Laurie Strode",
    description: ""
  },
  {
    id: "offTheRecord",
    name: "Off the Record",
    image: "images/perks/survivor/offTheRecord.png",
    owner: "Zarina Kassir",
    description: ""
  },
  {
    id: "oneTwoThreeFour",
    name: "One-Two-Three-Four!",
    image: "images/perks/survivor/oneTwoThreeFour.png",
    owner: "Vee Boonyasak",
    description: ""
  },
  {
    id: "openHanded",
    name: "Open-Handed",
    image: "images/perks/survivor/openHanded.png",
    owner: "Ace Visconti",
    description: ""
  },
  {
    id: "overcome",
    name: "Overcome",
    image: "images/perks/survivor/overcome.png",
    owner: "Jonah Vasquez",
    description: ""
  },
  {
    id: "overzealous",
    name: "Overzealous",
    image: "images/perks/survivor/overzealous.png",
    owner: "Haddie Kaur",
    description: ""
  },
  {
    id: "parentalGuidance",
    name: "Parental Guidance",
    image: "images/perks/survivor/parentalGuidance.png",
    owner: "Yoichi Asakawa",
    description: ""
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    image: "images/perks/survivor/pharmacy.png",
    owner: "Quentin Smith",
    description: ""
  },
  {
    id: "plotTwist",
    name: "Plot Twist",
    image: "images/perks/survivor/plotTwist.png",
    owner: "Nicolas Cage",
    description: ""
  },
  {
    id: "plunderersInstinct",
    name: "Plunderer's Instinct",
    image: "images/perks/survivor/plunderersInstinct.png",
    owner: "",
    description: ""
  },
  {
    id: "poised",
    name: "Poised",
    image: "images/perks/survivor/poised.png",
    owner: "Jane Romero",
    description: ""
  },
  {
    id: "potentialEnergy",
    name: "Potential Energy",
    image: "images/perks/survivor/potentialEnergy.png",
    owner: "Vittorio Toscano",
    description: ""
  },
  {
    id: "powerStruggle",
    name: "Power Struggle",
    image: "images/perks/survivor/powerStruggle.png",
    owner: "Élodie Rakoto",
    description: ""
  },
  {
    id: "premonition",
    name: "Premonition",
    image: "images/perks/survivor/premonition.png",
    owner: "",
    description: ""
  },
  {
    id: "proveThyself",
    name: "Prove Thyself",
    image: "images/perks/survivor/proveThyself.png",
    owner: "Dwight Fairfield",
    description: ""
  },
  {
    id: "quickAndQuiet",
    name: "Quick & Quiet",
    image: "images/perks/survivor/quickAndQuiet.png",
    owner: "Meg Thomas",
    description: ""
  },
  {
    id: "quickGambit",
    name: "Quick Gambit",
    image: "images/perks/survivor/quickGambit.png",
    owner: "Vittorio Toscano",
    description: ""
  },
  {
    id: "rapidResponse",
    name: "Rapid Response",
    image: "images/perks/survivor/rapidResponse.png",
    owner: "Orela Rose",
    description: ""
  },
  {
    id: "reactiveHealing",
    name: "Reactive Healing",
    image: "images/perks/survivor/reactiveHealing.png",
    owner: "Ada Wong",
    description: ""
  },
  {
    id: "reassurance",
    name: "Reassurance",
    image: "images/perks/survivor/reassurance.png",
    owner: "Rebecca Chambers",
    description: ""
  },
  {
    id: "redHerring",
    name: "Red Herring",
    image: "images/perks/survivor/redHerring.png",
    owner: "Zarina Kassir",
    description: ""
  },
  {
    id: "repressedAlliance",
    name: "Repressed Alliance",
    image: "images/perks/survivor/repressedAlliance.png",
    owner: "Cheryl Mason",
    description: ""
  },
  {
    id: "residualManifest",
    name: "Residual Manifest",
    image: "images/perks/survivor/residualManifest.png",
    owner: "Haddie Kaur",
    description: ""
  },
  {
    id: "resilience",
    name: "Resilience",
    image: "images/perks/survivor/resilience.png",
    owner: "",
    description: ""
  },
  {
    id: "resurgence",
    name: "Resurgence",
    image: "images/perks/survivor/resurgence.png",
    owner: "Jill Valentine",
    description: ""
  },
  {
    id: "roadLife",
    name: "Road Life",
    image: "images/perks/survivor/roadLife.png",
    owner: "Vee Boonyasak",
    description: ""
  },
  {
    id: "rookieSpirit",
    name: "Rookie Spirit",
    image: "images/perks/survivor/rookieSpirit.png",
    owner: "Leon S. Kennedy",
    description: ""
  },
  {
    id: "saboteur",
    name: "Saboteur",
    image: "images/perks/survivor/saboteur.png",
    owner: "Jake Park",
    description: ""
  },
  {
    id: "scavenger",
    name: "Scavenger",
    image: "images/perks/survivor/scavenger.png",
    owner: "Gabriel Soma",
    description: ""
  },
  {
    id: "scenePartner",
    name: "Scene Partner",
    image: "images/perks/survivor/scenePartner.png",
    owner: "Nicolas Cage",
    description: ""
  },
  {
    id: "secondWind",
    name: "Second Wind",
    image: "images/perks/survivor/secondWind.png",
    owner: "Steve Harrington",
    description: ""
  },
  {
    id: "selfCare",
    name: "Self-Care",
    image: "images/perks/survivor/selfCare.png",
    owner: "Claudette Morel",
    description: ""
  },
  {
    id: "selfPreservation",
    name: "Self-Preservation",
    image: "images/perks/survivor/selfPreservation.png",
    owner: "Yun-Jin Lee",
    description: ""
  },
  {
    id: "shoulderTheBurden",
    name: "Shoulder the Burden",
    image: "images/perks/survivor/shoulderTheBurden.png",
    owner: "Taurie Cain",
    description: ""
  },
  {
    id: "slipperyMeat",
    name: "Slippery Meat",
    image: "images/perks/survivor/slipperyMeat.png",
    owner: "",
    description: ""
  },
  {
    id: "smallGame",
    name: "Small Game",
    image: "images/perks/survivor/smallGame.png",
    owner: "",
    description: ""
  },
  {
    id: "smashHit",
    name: "Smash Hit",
    image: "images/perks/survivor/smashHit.png",
    owner: "Yun-Jin Lee",
    description: ""
  },
  {
    id: "soleSurvivor",
    name: "Sole Survivor",
    image: "images/perks/survivor/soleSurvivor.png",
    owner: "Laurie Strode",
    description: ""
  },
  {
    id: "solidarity",
    name: "Solidarity",
    image: "images/perks/survivor/solidarity.png",
    owner: "Jane Romero",
    description: ""
  },
  {
    id: "soulGuard",
    name: "Soul Guard",
    image: "images/perks/survivor/soulGuard.png",
    owner: "Cheryl Mason",
    description: ""
  },
  {
    id: "specialist",
    name: "Specialist",
    image: "images/perks/survivor/specialist.png",
    owner: "Lara Croft",
    description: ""
  },
  {
    id: "spineChill",
    name: "Spine Chill",
    image: "images/perks/survivor/spineChill.png",
    owner: "",
    description: ""
  },
  {
    id: "sprintBurst",
    name: "Sprint Burst",
    image: "images/perks/survivor/sprintBurst.png",
    owner: "Meg Thomas",
    description: ""
  },
  {
    id: "stakeOut",
    name: "Stake Out",
    image: "images/perks/survivor/stakeOut.png",
    owner: "Detective David Tapp",
    description: ""
  },
  {
    id: "stillSight",
    name: "Still Sight",
    image: "images/perks/survivor/stillSight.png",
    owner: "Aestri Yazar & Baermar Uraz",
    description: ""
  },
  {
    id: "streetwise",
    name: "Streetwise",
    image: "images/perks/survivor/streetwise.png",
    owner: "Nea Karlsson",
    description: ""
  },
  {
    id: "strengthInShadows",
    name: "Strength in Shadows",
    image: "images/perks/survivor/strengthInShadows.png",
    owner: "Sable Ward",
    description: ""
  },
  {
    id: "teamworkCollectiveStealth",
    name: "Teamwork: Collective Stealth",
    image: "images/perks/survivor/teamworkCollectiveStealth.png",
    owner: "Renato Lyra",
    description: ""
  },
  {
    id: "teamworkPowerOfTwo",
    name: "Teamwork: Power of Two",
    image: "images/perks/survivor/teamworkPowerOfTwo.png",
    owner: "Thalita Lyra",
    description: ""
  },
  {
    id: "teamworkThrowDown",
    name: "Teamwork: Throw Down",
    image: "images/perks/survivor/teamworkThrowDown.png",
    owner: "Michonne Grimes",
    description: ""
  },
  {
    id: "teamworkToughenUp",
    name: "Teamwork: Toughen Up",
    image: "images/perks/survivor/teamworkToughenUp.png",
    owner: "Rick Grimes",
    description: ""
  },
  {
    id: "technician",
    name: "Technician",
    image: "images/perks/survivor/technician.png",
    owner: "Feng Min",
    description: ""
  },
  {
    id: "tenacity",
    name: "Tenacity",
    image: "images/perks/survivor/tenacity.png",
    owner: "Detective David Tapp",
    description: ""
  },
  {
    id: "thisIsNotHappening",
    name: "This Is Not Happening",
    image: "images/perks/survivor/thisIsNotHappening.png",
    owner: "",
    description: ""
  },
  {
    id: "troubleshooter",
    name: "Troubleshooter",
    image: "images/perks/survivor/troubleshooter.png",
    owner: "Gabriel Soma",
    description: ""
  },
  {
    id: "unbreakable",
    name: "Unbreakable",
    image: "images/perks/survivor/unbreakable.png",
    owner: 'William "Bill" Overbeck',
    description: ""
  },
  {
    id: "upTheAnte",
    name: "Up the Ante",
    image: "images/perks/survivor/upTheAnte.png",
    owner: "Ace Visconti",
    description: ""
  },
  {
    id: "urbanEvasion",
    name: "Urban Evasion",
    image: "images/perks/survivor/urbanEvasion.png",
    owner: "Nea Karlsson",
    description: ""
  },
  {
    id: "vigil",
    name: "Vigil",
    image: "images/perks/survivor/vigil.png",
    owner: "Quentin Smith",
    description: ""
  },
  {
    id: "visionary",
    name: "Visionary",
    image: "images/perks/survivor/visionary.png",
    owner: "Felix Richter",
    description: ""
  },
  {
    id: "wakeUp",
    name: "Wake Up!",
    image: "images/perks/survivor/wakeUp.png",
    owner: "Quentin Smith",
    description: ""
  },
  {
    id: "wellMakeIt",
    name: "We'll Make It",
    image: "images/perks/survivor/wellMakeIt.png",
    owner: "",
    description: ""
  },
  {
    id: "wereGonnaLiveForever",
    name: "We're Gonna Live Forever",
    image: "images/perks/survivor/wereGonnaLiveForever.png",
    owner: "David King",
    description: ""
  },
  {
    id: "wicked",
    name: "Wicked",
    image: "images/perks/survivor/wicked.png",
    owner: "Sable Ward",
    description: ""
  },
  {
    id: "windowsOfOpportunity",
    name: "Windows of Opportunity",
    image: "images/perks/survivor/windowsOfOpportunity.png",
    owner: "Kate Denson",
    description: ""
  },
  {
    id: "wiretap",
    name: "Wiretap",
    image: "images/perks/survivor/wiretap.png",
    owner: "Ada Wong",
    description: ""
  }
];