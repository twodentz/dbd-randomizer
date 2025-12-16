// List of Survivor perks:
const survivorPerks = [
  { 
    id: "aceInTheHole", 
    name: "Ace in the Hole", 
    image: "images/perks/survivor/aceInTheHole.png", 
    owner: "Ace Visconti", 
    description: `Causes all regular Items you retrieve from a Chest to come equipped with 1 to 2 Add-ons:

    • First Slot: 100 % chance to be equipped with an Add-on of Visceral Rarity or lower.
    • Second Slot: 50/75/100 % chance to be equipped with an Add-on of Uncommon Rarity or lower.
    
    Ace in the Hole prevents any attached Add-ons on your currently held Item to be consumed upon escaping the Trial.`
  },
  { 
    id: "adrenaline", 
    name: "Adrenaline", 
    image: "images/perks/survivor/adrenaline.png", 
    owner: "Meg Thomas", 
    description: `Once the Exit Gates are powered, Adrenaline activates and triggers the following effects:

    • Heals you to the next Health State.
    • Grants a +50 % Haste Status Effect for 3 seconds.
    
    Adrenaline can be used while Exhausted and ignores an existing Status Effect. Adrenaline causes the Exhausted Status Effect for 60/50/40 seconds after use.` 
  },
  { 
    id: "aftercare", 
    name: "Aftercare", 
    image: "images/perks/survivor/aftercare.png", 
    owner: "Jeff Johansen", 
    description: `Unlocks potential in your Aura-reading ability:

    • You see the Auras of the 1/2/3 most recent Survivor(s) that helped you or vice versa:
        Rescued from a Hook.
        Completed a Healing action on.
    • They also see your Aura.
    
    Aftercare resets its effects when you are hooked by the Killer.`
  },
  { 
    id: "alert", 
    name: "Alert", 
    image: "images/perks/survivor/alert.png", 
    owner: "Feng Min", 
    description: `Whenever the Killer performs the Break or Damage Action, Alert triggers:
    • Their Aura is revealed to you for 3/4/5 seconds.`
  },
  { 
    id: "anyMeansNecessary", 
    name: "Any Means Necessary", 
    image: "images/perks/survivor/anyMeansNecessary.png", 
    owner: "Yui Kimura", 
    description: `Unlocks potential in your Aura-reading ability:
    • The Auras of dropped Pallets in the environment are revealed to you.
    
    While standing next to a dropped Pallet, press and hold the Active Ability button to trigger the following effect:
    • Resets the Pallet to its upright position over 5/4/3 seconds.`
  },
  { 
    id: "apocalypticIngenuity", 
    name: "Apocalyptic Ingenuity", 
    image: "images/perks/survivor/apocalypticIngenuity.png", 
    owner: "Rick Grimes", 
    description: `Unlocks potential in your Aura-reading ability:
    • The Auras of broken Pallets are revealed to you within 24/28/32 metres.
    
    After unlocking or rummaging through 2 Chests, Apocalyptic Ingenuity gains a special ability.

    While standing next to the location of a broken Pallet, press and hold the Active Ability button for 4 seconds to use it:
    • Rebuilds it as a Fragile Pallet. 
    • Fragile Pallets instantly break when dropped.`,
    licensed: true,
    license: "The Walking Dead"
  },
  { 
    id: "appraisal", 
    name: "Appraisal", 
    image: "images/perks/survivor/appraisal.png", 
    owner: "Élodie Rakoto", 
    description: `Start the Trial with 4 Tokens.

    While standing next to an unlocked and empty Chest, press and hold the Interaction button to perform the Rummage action:
    • Grants the ability to retrieve an extra Item from that Chest.
    • This consumes -1 Token and is limited to twice per Chest.

    Increases the Rummaging speed by 40/60/80 %.` 
  },
  { 
    id: "autodidact", 
    name: "Autodidact", 
    image: "images/perks/survivor/autodidact.png", 
    owner: "Adam Francis", 
    description: `Succeeding a Skill Check while healing another Survivor grants +1 Token, up to a maximum of 3/4/5 Tokens:

    • Suppresses Great Healing Skill Checks.
    • Causes Good Healing Skill Checks to grant Healing progress based on the number of accumulated Tokens:
        0 Tokens: -15 %.
        1 Token: +0 %.
        2 Tokens: +15 %.
        3 Tokens: +30 % (limit of Tier I).
        4 Tokens: +45 % (limit of Tier II).
        5 Tokens: +60 % (limit of Tier III).
    
    Autodidact is inactive when healing using a Med-Kit.` 
  },
  {
    id: "babysitter",
    name: "Babysitter",
    image: "images/perks/survivor/babysitter.png",
    owner: "Steve Harrington",
    description: `Whenever you unhook another Survivor, you benefit from the following effect:
    • The Aura of the Killer is revealed to you for 8 seconds.
    
    The unhooked Survivor benefits from the following effects instead for 20/25/30 seconds:
    • Suppresses the creation of their Scratch Marks and Pools of Blood
    • Increases the strength of their Haste Status Effect by +10 %.`,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "backgroundPlayer",
    name: "Background Player",
    image: "images/perks/survivor/backgroundPlayer.png",
    owner: "Renato Lyra",
    description: `Whenever the Killer picks up any other Survivor in the Dying State, Background Player activates for 10 seconds.
    
    While active, starting to run triggers the following effect:
    • Grants a +50 % Haste Status Effect for 5 seconds.
    
    Background Player cannot be used while Exhausted.
    Background Player causes the Exhausted Status Effect for 30/25/20 seconds after use.`
  },
  {
    id: "balancedLanding",
    name: "Balanced Landing",
    image: "images/perks/survivor/balancedLanding.png",
    owner: "Nea Karlsson",
    description: `While falling from height, you benefit from the following effects:

    • Suppresses all noises related to falling and landing.
    • Reduces the duration of the Stagger upon landing by -75 %.
    • Grants a +50 % Haste Status Effect for 3 seconds.
    
    Balanced Landing cannot be used while Exhausted.
    Balanced Landing causes the Exhausted Status Effect for 60/50/40 seconds after use.`
  },
  {
    id: "bardicInspiration",
    name: "Bardic Inspiration",
    image: "images/perks/survivor/bardicInspiration.png",
    owner: "Aestri Yazar & Baermar Uraz",
    description: `It's time to give your audience a show.
    Will you bring the house down or will you choke?
    Press the Active Ability button while standing and motionless to enter the Performance interaction that lasts up to 15 seconds and empowers other Survivors within 16 metres of your location.
    
    The empowering effect depends on the result of you rolling a d20 and lasts for 90 seconds after completing the Performance:

    • 1: You scream, but without notifying the Killer.
    • 2 - 10: Skill Checks grant +1 % Progression.
    • 11 - 19: Skill Checks grant +2 % Progression.
    • 20: Skill Checks grant +3 % Progression.
    
    Bardic Inspiration has a cool-down of 110/100/90 seconds after completing the Performance or cancelling it.`,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "betterTogether",
    name: "Better Together",
    image: "images/perks/survivor/betterTogether.png",
    owner: "Nancy Wheeler",
    description: `While repairing any Generator, you and the other Survivors benefit from the following primary effect:
    • The Aura of that Generator is revealed to all Survivors and highlighted in yellow.
    
    Whenever the Killer downs another Survivor while you are repairing, you benefit from the following secondary effect:
    • The Auras of all Survivors are revealed to you for 20/25/30 seconds.`,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "betterThanNew",
    name: "Better than New",
    image: "images/perks/survivor/betterThanNew.png",
    owner: "Rebecca Chambers",
    description: `Completing a Healing action on another Survivor grants them the following benefits until they receive damage again:
    • Increases their Action speeds for Blessing, Cleansing, Healing, and Unlocking by 12/14/16 %.`,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "biteTheBullet",
    name: "Bite the Bullet",
    image: "images/perks/survivor/biteTheBullet.png",
    owner: "Leon S. Kennedy",
    description: `Pain hurts you as much as anyone, but you would prefer others do not know that.
    When healing yourself or another Survivor, you benefit from the following effects:

    • Suppresses all noises related to Healing and Grunts of Pain.
    • Failed Healing Skill Checks do not trigger a Loud Noise Notification.
        Reduces the Penalty to 3/2/1 % of the total Progression.`,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "blastMine",
    name: "Blast Mine",
    image: "images/perks/survivor/blastMine.png",
    owner: "Jill Valentine",
    description: `After repairing Generators for the equivalent of 40 % of Progression, Blast Mine activates.
    
    While active, press the Active Ability button while standing next to a Generator to install a trap to it with a countdown of 100/110/120 seconds:
    • Trips half-way through the Killer attempting to damage the Trapped Generator:
        Stuns the Killer for 4 seconds.
        Blinds all Players within 12.5 metres of the Trapped Generator.
    
    The trap is deactivated after its countdown has elapsed or it is tripped.
    
    The Auras of Trapped Generators are revealed to all Survivors in yellow. `,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "bloodPact",
    name: "Blood Pact",
    image: "images/perks/survivor/bloodPact.png",
    owner: "Cheryl Mason",
    description: `It is as if a latent part of yourself has awakened.
    You feel like you can reach out beyond yourself for assistance.
    
    When either you or the Obsession become injured by any means, Blood Pact activates:

    • Your Auras are constantly revealed to one another.
    • Completing a Healing Action on the Obsession or having them complete one on yourself, grants both of you a 5/6/7 % Haste Status Effect.
        This effect lasts for as long as you both remain within 16 metres of one another.
    
    Blood Pact is temporarily disabled if you yourself are the Obsession.
    
    Reduces your chance of becoming the initial Obsession by reducing the default value by -100 %.
    The Killer can only be obsessed with one Survivor at a time.`,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "bloodRush",
    name: "Blood Rush",
    image: "images/perks/survivor/bloodRush.png",
    owner: "Renato Lyra",
    description: `After being unhooked by any means, Blood Rush activates for 40/50/60 seconds.
    While active, press the Active Ability button to trigger the following effect:

    • Instantly recover from an existing Exhausted Status Effect.
    
    Blood Rush does not cause the Exhausted Status Effect.
    Blood Rush is deactivated prematurely when performing a Conspicuous Action.
    Blood Rush deactivates after use and is disabled for the remainder of the Trial once the Exit Gates are powered.`
  },
  {
    id: "boilOver",
    name: "Boil Over",
    image: "images/perks/survivor/boilOver.png",
    owner: "Kate Denson",
    description: `You are a battler and do everything to escape a foe's grasp.
    
    While being carried by the Killer, the following effects apply:

    • Increases the strength of the Struggle Effects on the Killer from your Wiggling by 60/70/80 %.
    • Suppresses the ability of the Killer to read the Auras of all Hooks within 16 metres.
    • Grants +33 % of your current Wiggle progression upon landing, if the Killer drops from height.`
  },
  {
    id: "bond",
    name: "Bond",
    image: "images/perks/survivor/bond.png",
    owner: "Dwight Fairfield",
    description: `Unlocks potential in your Aura-reading ability:
    • The Auras of all other Survivors are revealed to you within 20/28/36 metres.`
  },
  {
    id: "boonCircleOfHealing",
    name: "Boon: Circle of Healing",
    image: "images/perks/survivor/boonCircleOfHealing.png",
    owner: "Mikaela Reid",
    description: `A Boon that offers comfort amidst the terror.
    
    Press and hold the Active Ability button on a Dull or Hex Totem to bless it and create a Boon Totem.
    All Survivors within 24 metres hear soft chimes ringing out and benefit from its Boon Effects:

    • Increases the Altruistic Healing speeds by 50/75/100 % when not using a Med-Kit.
    • If a Survivor is injured, their Aura is revealed to all other Survivors.
    
    Survivors can only be affected by one instance of Boon: Circle of Healing at a time.
    
    Only one Totem can be blessed by your Boon Perks at a time and all of their effects are active on the same Boon Totem.`
  },
  {
    id: "boonDarkTheory",
    name: "Boon: Dark Theory",
    image: "images/perks/survivor/boonDarkTheory.png",
    owner: "Yoichi Asakawa",
    description: `Press and hold the Active Ability button on a Dull or Hex Totem to bless it and create a Boon Totem.
    All Survivors within 24 metres hear soft chimes ringing out and benefit from its Boon Effects:

    • Grants a +3 % Haste Status Effect.
        This effect lingers for 2/3/4 seconds after leaving the Boon Totem's range.
    
    Only one Totem can be blessed by your Boon Perks at a time and all of their effects are active on the same Boon Totem.`,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "boonExponential",
    name: "Boon: Exponential",
    image: "images/perks/survivor/boonExponential.png",
    owner: "Jonah Vasquez",
    description: `Press and hold the Active Ability button on a Dull or Hex Totem to bless it and create a Boon Totem.
    All Survivors within 24 metres hear soft chimes ringing out and benefit from its Boon Effects:

    • Increases the Recovery speed while in the Dying State by 90/95/100 %.
    • Unlocks the Self-Recovery ability, allowing them to fully recover from the Dying State.
    
    Only one Totem can be blessed by your Boon Perks at a time and all of their effects are active on the same Boon Totem. `
  },
  {
    id: "boonIllumination",
    name: "Boon: Illumination",
    image: "images/perks/survivor/boonIllumination.png",
    owner: "Alan Wake",
    description: `Press and hold the Active Ability button on a Dull or Hex Totem to bless it and create a Boon Totem. 
    All Survivors within 24 metres hear soft chimes ringing out and benefit from its Boon Effects:

    • The Auras of all Chests and Generators are highlighted to you in blue.
    
    Increases your Action speeds for Blessing and Cleansing by 6/8/10 % while you have a lit Boon Totem.
    Survivors can only be affected by one instance of Boon: Illumination at a time.
    
    Only one Totem can be blessed by your Boon Perks at a time and all of their effects are active on the same Boon Totem. `,
    licensed: true,
    license: "Alan Wake"
  },
  {
    id: "boonShadowStep",
    name: "Boon: Shadow Step",
    image: "images/perks/survivor/boonShadowStep.png",
    owner: "Mikaela Reid",
    description: `A Boon that conceals the truth.
    
    Press and hold the Active Ability button on a Dull or Hex Totem to bless it and create a Boon Totem.
    All Survivors within 24 metres hear soft chimes ringing out and benefit from its Boon Effects:

    • Scratch Marks are suppressed.
    • Auras are hidden from The Killer.
        Both effects linger for 2/3/4 seconds after leaving the Boon Totem's range.
  
    Only one Totem can be blessed by your Boon Perks at a time and all of their effects are active on the same Boon Totem.`
  },
  {
    id: "borrowedTime",
    name: "Borrowed Time",
    image: "images/perks/survivor/borrowedTime.png",
    owner: 'William "Bill" Overbeck',
    description: `Whenever you unhook another Survivor, they benefit from the following effects:

    • Extends the duration of the Endurance Status Effect by 6/8/10 seconds to 16/18/20 seconds.
        Endurance is cancelled prematurely when performing a Conspicuous Action of any kind.
    • Extends the duration of the Haste Status Effect by +10 seconds to 20 seconds.`,
    licensed: true,
    license: "Left 4 Dead"
  },
  {
    id: "botanyKnowledge",
    name: "Botany Knowledge",
    image: "images/perks/survivor/botanyKnowledge.png",
    owner: "Claudette Morel",
    description: `You benefit from the following permanent effect:
    • Increases your Healing speed by 30/40/50 %.`
  },
  {
    id: "breakdown",
    name: "Breakdown",
    image: "images/perks/survivor/breakdown.png",
    owner: "Jeff Johansen",
    description: `After you are unhooked by any means, Breakdown triggers its effects:
    
    • Instantly breaks that Hook.
        Increases its Auto-Repair timer to 180 seconds.
    • The Aura of the Killer is revealed to you for 4/5/6 seconds.`
  },
  {
    id: "breakout",
    name: "Breakout",
    image: "images/perks/survivor/breakout.png",
    owner: "Yui Kimura",
    description: `While within 5 metres of the Killer carrying another Survivor, the following effects apply:

    • Grants you a 6/8/10 % Haste Status Effect.
    • Increases the Wiggling speed of the carried Survivor by +25 %.
    
    Survivors can only be affected by one instance of Breakout at a time.`
  },
  {
    id: "buckleUp",
    name: "Buckle Up",
    image: "images/perks/survivor/buckleUp.png",
    owner: "Ashley J. Williams",
    description: `Whenever you are healing a dying Survivor, Buckle Up activates:
    During the Healing action, you and the dying Survivor benefit from the following primary effect:
    • The Aura of the Killer is revealed to you both.
    
    After completing the Healing action, the other Survivor benefits from the following secondary effects for 3/4/5 seconds:
    • Suppresses the creation of their Scratch Marks.
    • Grants them a +50 % Haste Status Effect.
    
    Buckle Up does not cause the Exhausted Status Effect.`,
    licensed: true,
    license: "Ash vs. Evil Dead"
  },
  {
    id: "builtToLast",
    name: "Built to Last",
    image: "images/perks/survivor/builtToLast.png",
    owner: "Felix Richter",
    description: `While hiding inside a Locker with a depleted Item equipped, Built to Last triggers the following effect after 12/10/8 seconds:

    • Recharges the Item to one of the following percentages:
        First time: 99 %.
        Second time: 66 %.
        Third time: 33 %.
        
    Built to Last is disabled for the remainder of the Trial after triggering its effect for the third time.`
  },
  {
    id: "calmSpirit",
    name: "Calm Spirit",
    image: "images/perks/survivor/calmSpirit.png",
    owner: "Jake Park",
    description: ``
  },
  {
    id: "camaraderie",
    name: "Camaraderie",
    image: "images/perks/survivor/camaraderie.png",
    owner: "Steve Harrington",
    description: ``,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "championOfLight",
    name: "Champion of Light",
    image: "images/perks/survivor/championOfLight.png",
    owner: "Alan Wake",
    description: ``,
    licensed: true,
    license: "Alan Wake"
  },
  {
    id: "chemicalTrap",
    name: "Chemical Trap",
    image: "images/perks/survivor/chemicalTrap.png",
    owner: "Ellen Ripley",
    description: ``,
    licensed: true,
    license: "Alien"
  },
  {
    id: "clairvoyance",
    name: "Clairvoyance",
    image: "images/perks/survivor/clairvoyance.png",
    owner: "Mikaela Reid",
    description: ``
  },
  {
    id: "cleanBreak",
    name: "Clean Break",
    image: "images/perks/survivor/cleanBreak.png",
    owner: "Taurie Cain",
    description: ``
  },
  {
    id: "comeAndGetMe",
    name: "Come and Get Me!",
    image: "images/perks/survivor/comeAndGetMe.png",
    owner: "Rick Grimes",
    description: ``,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "conviction",
    name: "Conviction",
    image: "images/perks/survivor/conviction.png",
    owner: "Michonne Grimes",
    description: ``,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "correctiveAction",
    name: "Corrective Action",
    image: "images/perks/survivor/correctiveAction.png",
    owner: "Jonah Vasquez",
    description: ``
  },
  {
    id: "counterforce",
    name: "Counterforce",
    image: "images/perks/survivor/counterforce.png",
    owner: "Jill Valentine",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "cutLoose",
    name: "Cut Loose",
    image: "images/perks/survivor/cutLoose.png",
    owner: "Thalita Lyra",
    description: ``
  },
  {
    id: "danceWithMe",
    name: "Dance With Me",
    image: "images/perks/survivor/danceWithMe.png",
    owner: "Kate Denson",
    description: ``
  },
  {
    id: "darkSense",
    name: "Dark Sense",
    image: "images/perks/survivor/darkSense.png",
    owner: "",
    description: ``
  },
  {
    id: "deadHard",
    name: "Dead Hard",
    image: "images/perks/survivor/deadHard.png",
    owner: "David King",
    description: ``
  },
  {
    id: "deadline",
    name: "Deadline",
    image: "images/perks/survivor/deadline.png",
    owner: "Alan Wake",
    description: ``,
    licensed: true,
    license: "Alan Wake"
  },
  {
    id: "deception",
    name: "Deception",
    image: "images/perks/survivor/deception.png",
    owner: "Élodie Rakoto",
    description: ``
  },
  {
    id: "decisiveStrike",
    name: "Decisive Strike",
    image: "images/perks/survivor/decisiveStrike.png",
    owner: "Laurie Strode",
    description: ``,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "dejaVu",
    name: "Déjà Vu",
    image: "images/perks/survivor/dejaVu.png",
    owner: "",
    description: ``
  },
  {
    id: "deliverance",
    name: "Deliverance",
    image: "images/perks/survivor/deliverance.png",
    owner: "Adam Francis",
    description: ``
  },
  {
    id: "desperateMeasures",
    name: "Desperate Measures",
    image: "images/perks/survivor/desperateMeasures.png",
    owner: "Felix Richter",
    description: ``
  },
  {
    id: "detectivesHunch",
    name: "Detective's Hunch",
    image: "images/perks/survivor/detectivesHunch.png",
    owner: "Detective David Tapp",
    description: ``,
    licensed: true,
    license: "SAW"
  },
  {
    id: "distortion",
    name: "Distortion",
    image: "images/perks/survivor/distortion.png",
    owner: "Jeff Johansen",
    description: ``
  },
  {
    id: "diversion",
    name: "Diversion",
    image: "images/perks/survivor/diversion.png",
    owner: "Adam Francis",
    description: ``
  },
  {
    id: "doNoHarm",
    name: "Do No Harm",
    image: "images/perks/survivor/doNoHarm.png",
    owner: "Orela Rose",
    description: ``
  },
  {
    id: "dramaturgy",
    name: "Dramaturgy",
    image: "images/perks/survivor/dramaturgy.png",
    owner: "Nicolas Cage",
    description: ``,
    licensed: true,
    license: "Nicolas Cage"
  },
  {
    id: "dutyOfCare",
    name: "Duty of Care",
    image: "images/perks/survivor/dutyOfCare.png",
    owner: "Orela Rose",
    description: ``
  },
  {
    id: "empathicConnection",
    name: "Empathic Connection",
    image: "images/perks/survivor/empathicConnection.png",
    owner: "Yoichi Asakawa",
    description: ``,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "empathy",
    name: "Empathy",
    image: "images/perks/survivor/empathy.png",
    owner: "Claudette Morel",
    description: ``
  },
  {
    id: "exultation",
    name: "Exultation",
    image: "images/perks/survivor/exultation.png",
    owner: "Trevor Belmont",
    description: ``,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "eyesOfBelmont",
    name: "Eyes of Belmont",
    image: "images/perks/survivor/eyesOfBelmont.png",
    owner: "Trevor Belmont",
    description: ``,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "fastTrack",
    name: "Fast Track",
    image: "images/perks/survivor/fastTrack.png",
    owner: "Yun-Jin Lee",
    description: ``
  },
  {
    id: "finesse",
    name: "Finesse",
    image: "images/perks/survivor/finesse.png",
    owner: "Lara Croft",
    description: ``,
    licensed: true,
    license: "Tomb Raider"
  },
  {
    id: "fixated",
    name: "Fixated",
    image: "images/perks/survivor/fixated.png",
    owner: "Nancy Wheeler",
    description: ``,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "flashbang",
    name: "Flashbang",
    image: "images/perks/survivor/flashbang.png",
    owner: "Leon S. Kennedy",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "flipFlop",
    name: "Flip-Flop",
    image: "images/perks/survivor/flipFlop.png",
    owner: "Ashley J. Williams",
    description: ``,
    licensed: true,
    license: "Ash vs. Evil Dead"
  },
  {
    id: "fogwise",
    name: "Fogwise",
    image: "images/perks/survivor/fogwise.png",
    owner: "Vittorio Toscano",
    description: ``
  },
  {
    id: "forThePeople",
    name: "For the People",
    image: "images/perks/survivor/forThePeople.png",
    owner: "Zarina Kassir",
    description: ``
  },
  {
    id: "friendlyCompetition",
    name: "Friendly Competition",
    image: "images/perks/survivor/friendlyCompetition.png",
    owner: "Thalita Lyra",
    description: ``
  },
  {
    id: "ghostNotes",
    name: "Ghost Notes",
    image: "images/perks/survivor/ghostNotes.png",
    owner: "Vee Boonyasak",
    description: ``
  },
  {
    id: "hardened",
    name: "Hardened",
    image: "images/perks/survivor/hardened.png",
    owner: "Lara Croft",
    description: ``,
    licensed: true,
    license: "Tomb Raider"
  },
  {
    id: "headOn",
    name: "Head On",
    image: "images/perks/survivor/headOn.png",
    owner: "Jane Romero",
    description: ``
  },
  {
    id: "hope",
    name: "Hope",
    image: "images/perks/survivor/hope.png",
    owner: "",
    description: ``
  },
  {
    id: "hyperfocus",
    name: "Hyperfocus",
    image: "images/perks/survivor/hyperfocus.png",
    owner: "Rebecca Chambers",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "innerFocus",
    name: "Inner Focus",
    image: "images/perks/survivor/innerFocus.png",
    owner: "Haddie Kaur",
    description: ``
  },
  {
    id: "innerStrength",
    name: "Inner Strength",
    image: "images/perks/survivor/innerStrength.png",
    owner: "Nancy Wheeler",
    description: ``,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "invocationTreacherousCrows",
    name: "Invocation: Treacherous Crows",
    image: "images/perks/survivor/invocationTreacherousCrows.png",
    owner: "Taurie Cain",
    description: ``
  },
  {
    id: "invocationWeavingSpiders",
    name: "Invocation: Weaving Spiders",
    image: "images/perks/survivor/invocationWeavingSpiders.png",
    owner: "Sable Ward",
    description: ``
  },
  {
    id: "ironWill",
    name: "Iron Will",
    image: "images/perks/survivor/ironWill.png",
    owner: "Jake Park",
    description: ``
  },
  {
    id: "kindred",
    name: "Kindred",
    image: "images/perks/survivor/kindred.png",
    owner: "",
    description: ``
  },
  {
    id: "lastStand",
    name: "Last Stand",
    image: "images/perks/survivor/lastStand.png",
    owner: "Michonne Grimes",
    description: ``,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "leader",
    name: "Leader",
    image: "images/perks/survivor/leader.png",
    owner: "Dwight Fairfield",
    description: ``
  },
  {
    id: "leftBehind",
    name: "Left Behind",
    image: "images/perks/survivor/leftBehind.png",
    owner: 'William "Bill" Overbeck',
    description: ``,
    licensed: true,
    license: "Left 4 Dead"
  },
  {
    id: "lightFooted",
    name: "Light-Footed",
    image: "images/perks/survivor/lightFooted.png",
    owner: "Ellen Ripley",
    description: ``,
    licensed: true,
    license: "Alien"
  },
  {
    id: "lightweight",
    name: "Lightweight",
    image: "images/perks/survivor/lightweight.png",
    owner: "",
    description: ``
  },
  {
    id: "lithe",
    name: "Lithe",
    image: "images/perks/survivor/lithe.png",
    owner: "Feng Min",
    description: ``
  },
  {
    id: "lowProfile",
    name: "Low Profile",
    image: "images/perks/survivor/lowProfile.png",
    owner: "Ada Wong",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "luckyBreak",
    name: "Lucky Break",
    image: "images/perks/survivor/luckyBreak.png",
    owner: "Yui Kimura",
    description: ``
  },
  {
    id: "luckyStar",
    name: "Lucky Star",
    image: "images/perks/survivor/luckyStar.png",
    owner: "Ellen Ripley",
    description: ``,
    licensed: true,
    license: "Alien"
  },
  {
    id: "madeForThis",
    name: "Made for This",
    image: "images/perks/survivor/madeForThis.png",
    owner: "Gabriel Soma",
    description: ``
  },
  {
    id: "mettleOfMan",
    name: "Mettle of Man",
    image: "images/perks/survivor/mettleOfMan.png",
    owner: "Ashley J. Williams",
    description: ``,
    licensed: true,
    license: "Ash vs. Evil Dead"
  },
  {
    id: "mirroredIllusion",
    name: "Mirrored Illusion",
    image: "images/perks/survivor/mirroredIllusion.png",
    owner: "Aestri Yazar & Baermar Uraz",
    description: ``,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "momentOfGlory",
    name: "Moment of Glory",
    image: "images/perks/survivor/momentOfGlory.png",
    owner: "Trevor Belmont",
    description: ``,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "noMither",
    name: "No Mither",
    image: "images/perks/survivor/noMither.png",
    owner: "David King",
    description: ``
  },
  {
    id: "noOneLeftBehind",
    name: "No One Left Behind",
    image: "images/perks/survivor/noOneLeftBehind.png",
    owner: "",
    description: ``
  },
  {
    id: "objectOfObsession",
    name: "Object of Obsession",
    image: "images/perks/survivor/objectOfObsession.png",
    owner: "Laurie Strode",
    description: ``,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "offTheRecord",
    name: "Off the Record",
    image: "images/perks/survivor/offTheRecord.png",
    owner: "Zarina Kassir",
    description: ``
  },
  {
    id: "oneTwoThreeFour",
    name: "One-Two-Three-Four!",
    image: "images/perks/survivor/oneTwoThreeFour.png",
    owner: "Vee Boonyasak",
    description: ``
  },
  {
    id: "openHanded",
    name: "Open-Handed",
    image: "images/perks/survivor/openHanded.png",
    owner: "Ace Visconti",
    description: ``
  },
  {
    id: "overcome",
    name: "Overcome",
    image: "images/perks/survivor/overcome.png",
    owner: "Jonah Vasquez",
    description: ``
  },
  {
    id: "overzealous",
    name: "Overzealous",
    image: "images/perks/survivor/overzealous.png",
    owner: "Haddie Kaur",
    description: ``
  },
  {
    id: "parentalGuidance",
    name: "Parental Guidance",
    image: "images/perks/survivor/parentalGuidance.png",
    owner: "Yoichi Asakawa",
    description: ``,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    image: "images/perks/survivor/pharmacy.png",
    owner: "Quentin Smith",
    description: ``,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "plotTwist",
    name: "Plot Twist",
    image: "images/perks/survivor/plotTwist.png",
    owner: "Nicolas Cage",
    description: ``,
    licensed: true,
    license: "Nicolas Cage"
  },
  {
    id: "plunderersInstinct",
    name: "Plunderer's Instinct",
    image: "images/perks/survivor/plunderersInstinct.png",
    owner: "",
    description: ``
  },
  {
    id: "poised",
    name: "Poised",
    image: "images/perks/survivor/poised.png",
    owner: "Jane Romero",
    description: ``
  },
  {
    id: "potentialEnergy",
    name: "Potential Energy",
    image: "images/perks/survivor/potentialEnergy.png",
    owner: "Vittorio Toscano",
    description: ``
  },
  {
    id: "powerStruggle",
    name: "Power Struggle",
    image: "images/perks/survivor/powerStruggle.png",
    owner: "Élodie Rakoto",
    description: ``
  },
  {
    id: "premonition",
    name: "Premonition",
    image: "images/perks/survivor/premonition.png",
    owner: "",
    description: ``
  },
  {
    id: "proveThyself",
    name: "Prove Thyself",
    image: "images/perks/survivor/proveThyself.png",
    owner: "Dwight Fairfield",
    description: ``
  },
  {
    id: "quickAndQuiet",
    name: "Quick & Quiet",
    image: "images/perks/survivor/quickAndQuiet.png",
    owner: "Meg Thomas",
    description: ``
  },
  {
    id: "quickGambit",
    name: "Quick Gambit",
    image: "images/perks/survivor/quickGambit.png",
    owner: "Vittorio Toscano",
    description: ``
  },
  {
    id: "rapidResponse",
    name: "Rapid Response",
    image: "images/perks/survivor/rapidResponse.png",
    owner: "Orela Rose",
    description: ``
  },
  {
    id: "reactiveHealing",
    name: "Reactive Healing",
    image: "images/perks/survivor/reactiveHealing.png",
    owner: "Ada Wong",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "reassurance",
    name: "Reassurance",
    image: "images/perks/survivor/reassurance.png",
    owner: "Rebecca Chambers",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "redHerring",
    name: "Red Herring",
    image: "images/perks/survivor/redHerring.png",
    owner: "Zarina Kassir",
    description: ``
  },
  {
    id: "repressedAlliance",
    name: "Repressed Alliance",
    image: "images/perks/survivor/repressedAlliance.png",
    owner: "Cheryl Mason",
    description: ``,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "residualManifest",
    name: "Residual Manifest",
    image: "images/perks/survivor/residualManifest.png",
    owner: "Haddie Kaur",
    description: ``
  },
  {
    id: "resilience",
    name: "Resilience",
    image: "images/perks/survivor/resilience.png",
    owner: "",
    description: ``
  },
  {
    id: "resurgence",
    name: "Resurgence",
    image: "images/perks/survivor/resurgence.png",
    owner: "Jill Valentine",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "roadLife",
    name: "Road Life",
    image: "images/perks/survivor/roadLife.png",
    owner: "Vee Boonyasak",
    description: ``
  },
  {
    id: "rookieSpirit",
    name: "Rookie Spirit",
    image: "images/perks/survivor/rookieSpirit.png",
    owner: "Leon S. Kennedy",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "saboteur",
    name: "Saboteur",
    image: "images/perks/survivor/saboteur.png",
    owner: "Jake Park",
    description: ``
  },
  {
    id: "scavenger",
    name: "Scavenger",
    image: "images/perks/survivor/scavenger.png",
    owner: "Gabriel Soma",
    description: ``
  },
  {
    id: "scenePartner",
    name: "Scene Partner",
    image: "images/perks/survivor/scenePartner.png",
    owner: "Nicolas Cage",
    description: ``,
    licensed: true,
    license: "Nicolas Cage"
  },
  {
    id: "secondWind",
    name: "Second Wind",
    image: "images/perks/survivor/secondWind.png",
    owner: "Steve Harrington",
    description: ``,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "selfCare",
    name: "Self-Care",
    image: "images/perks/survivor/selfCare.png",
    owner: "Claudette Morel",
    description: ``
  },
  {
    id: "selfPreservation",
    name: "Self-Preservation",
    image: "images/perks/survivor/selfPreservation.png",
    owner: "Yun-Jin Lee",
    description: ``
  },
  {
    id: "shoulderTheBurden",
    name: "Shoulder the Burden",
    image: "images/perks/survivor/shoulderTheBurden.png",
    owner: "Taurie Cain",
    description: ``
  },
  {
    id: "slipperyMeat",
    name: "Slippery Meat",
    image: "images/perks/survivor/slipperyMeat.png",
    owner: "",
    description: ``
  },
  {
    id: "smallGame",
    name: "Small Game",
    image: "images/perks/survivor/smallGame.png",
    owner: "",
    description: ``
  },
  {
    id: "smashHit",
    name: "Smash Hit",
    image: "images/perks/survivor/smashHit.png",
    owner: "Yun-Jin Lee",
    description: ``
  },
  {
    id: "soleSurvivor",
    name: "Sole Survivor",
    image: "images/perks/survivor/soleSurvivor.png",
    owner: "Laurie Strode",
    description: ``,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "solidarity",
    name: "Solidarity",
    image: "images/perks/survivor/solidarity.png",
    owner: "Jane Romero",
    description: ``
  },
  {
    id: "soulGuard",
    name: "Soul Guard",
    image: "images/perks/survivor/soulGuard.png",
    owner: "Cheryl Mason",
    description: ``,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "specialist",
    name: "Specialist",
    image: "images/perks/survivor/specialist.png",
    owner: "Lara Croft",
    description: ``,
    licensed: true,
    license: "Tomb Raider"
  },
  {
    id: "spineChill",
    name: "Spine Chill",
    image: "images/perks/survivor/spineChill.png",
    owner: "",
    description: ``
  },
  {
    id: "sprintBurst",
    name: "Sprint Burst",
    image: "images/perks/survivor/sprintBurst.png",
    owner: "Meg Thomas",
    description: ``
  },
  {
    id: "stakeOut",
    name: "Stake Out",
    image: "images/perks/survivor/stakeOut.png",
    owner: "Detective David Tapp",
    description: ``,
    licensed: true,
    license: "SAW"
  },
  {
    id: "stillSight",
    name: "Still Sight",
    image: "images/perks/survivor/stillSight.png",
    owner: "Aestri Yazar & Baermar Uraz",
    description: ``,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "streetwise",
    name: "Streetwise",
    image: "images/perks/survivor/streetwise.png",
    owner: "Nea Karlsson",
    description: ``
  },
  {
    id: "strengthInShadows",
    name: "Strength in Shadows",
    image: "images/perks/survivor/strengthInShadows.png",
    owner: "Sable Ward",
    description: ``
  },
  {
    id: "teamworkCollectiveStealth",
    name: "Teamwork: Collective Stealth",
    image: "images/perks/survivor/teamworkCollectiveStealth.png",
    owner: "Renato Lyra",
    description: ``
  },
  {
    id: "teamworkPowerOfTwo",
    name: "Teamwork: Power of Two",
    image: "images/perks/survivor/teamworkPowerOfTwo.png",
    owner: "Thalita Lyra",
    description: ``
  },
  {
    id: "teamworkThrowDown",
    name: "Teamwork: Throw Down",
    image: "images/perks/survivor/teamworkThrowDown.png",
    owner: "Michonne Grimes",
    description: ``,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "teamworkToughenUp",
    name: "Teamwork: Toughen Up",
    image: "images/perks/survivor/teamworkToughenUp.png",
    owner: "Rick Grimes",
    description: ``,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "technician",
    name: "Technician",
    image: "images/perks/survivor/technician.png",
    owner: "Feng Min",
    description: ``
  },
  {
    id: "tenacity",
    name: "Tenacity",
    image: "images/perks/survivor/tenacity.png",
    owner: "Detective David Tapp",
    description: ``,
    licensed: true,
    license: "SAW"
  },
  {
    id: "thisIsNotHappening",
    name: "This Is Not Happening",
    image: "images/perks/survivor/thisIsNotHappening.png",
    owner: "",
    description: ``
  },
  {
    id: "troubleshooter",
    name: "Troubleshooter",
    image: "images/perks/survivor/troubleshooter.png",
    owner: "Gabriel Soma",
    description: ``
  },
  {
    id: "unbreakable",
    name: "Unbreakable",
    image: "images/perks/survivor/unbreakable.png",
    owner: 'William "Bill" Overbeck',
    description: ``,
    licensed: true,
    license: "Left 4 Dead"
  },
  {
    id: "upTheAnte",
    name: "Up the Ante",
    image: "images/perks/survivor/upTheAnte.png",
    owner: "Ace Visconti",
    description: ``
  },
  {
    id: "urbanEvasion",
    name: "Urban Evasion",
    image: "images/perks/survivor/urbanEvasion.png",
    owner: "Nea Karlsson",
    description: ``
  },
  {
    id: "vigil",
    name: "Vigil",
    image: "images/perks/survivor/vigil.png",
    owner: "Quentin Smith",
    description: ``,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "visionary",
    name: "Visionary",
    image: "images/perks/survivor/visionary.png",
    owner: "Felix Richter",
    description: ``
  },
  {
    id: "wakeUp",
    name: "Wake Up!",
    image: "images/perks/survivor/wakeUp.png",
    owner: "Quentin Smith",
    description: ``,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "wellMakeIt",
    name: "We'll Make It",
    image: "images/perks/survivor/wellMakeIt.png",
    owner: "",
    description: ``
  },
  {
    id: "wereGonnaLiveForever",
    name: "We're Gonna Live Forever",
    image: "images/perks/survivor/wereGonnaLiveForever.png",
    owner: "David King",
    description: ``
  },
  {
    id: "wicked",
    name: "Wicked",
    image: "images/perks/survivor/wicked.png",
    owner: "Sable Ward",
    description: ``
  },
  {
    id: "windowsOfOpportunity",
    name: "Windows of Opportunity",
    image: "images/perks/survivor/windowsOfOpportunity.png",
    owner: "Kate Denson",
    description: ``
  },
  {
    id: "wiretap",
    name: "Wiretap",
    image: "images/perks/survivor/wiretap.png",
    owner: "Ada Wong",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  }
];