Sign.destroy_all
aries = Sign.create({
    name: "Aries",
    traits: "seductive, passionate, independent",
    element: "Water",
    gems: "Topaz & Opal",
    description: "Passionate, independent, and unafraid to blaze their own trail no matter what others think, Scorpios make a statement wherever they go. They love debates, aren't afraid of controversey
    and won't back down from a debate. They also hate peopl who aren't genuine, and are all about being authentic-even if authentic isn't pretty.",
    startDate: "2019-03-21",
    endDate: "2019-04-19"
})
taurus = Sign.create({
    name: "Taurus",
    traits: "Dependable, Musical, Practical",
    element: "Earth",
    gems: "Emerald",
    description: "Smart, ambitious, and trustworthy, Taurus is the anchor of the Zodiac. Amazing friends, colleagues, and partners, Taureans value honesty above all else and are proud that their personal relationships tend to be drama free. Bulls get the reputation of being stubborn, but they're not always stuck in their ways. This searching sign is willing to see another point of view, 
    but they won't flip-flop on an opinion just to make someone else happy. They will shift their thinking only if they truly have a change of heart.", 
    startDate: "2019-04-20",
    endDate: "2019-05-20"
})
gemini = Sign.create({
    name: "Gemini",
    traits: "Curious, Affectionate, Kind",
    element:"Air",
    gems: "Tiger's Key & Emerald",
    description: "Smart, passionate, and dynamic, Gemini is characterized by the Twins, Castor and Pollux, and is known for having two different sides they can display to the world. Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending into different groups based on the vibe and energy they perceive. While they're also amazing at showcasing surface traits, 
    the Gemini well runs deep, which is why the Twins are one of the Zodiac's most emotionally intelligent signs.", 
    startDate: "2019-05-21",
    endDate: "2019-06-20"
})
cancer = Sign.create({
    name: "Cancer",
    traits: "Intuitive, Emotional, Intelligent, Passionate",
    element: "Water",
    gems: "Ruby, Pearl",
    description: "Emotional, intuitive, and practically psychic; ruled by the moon and characterized by the crab, Cancer has so much going on in its watery depths. Cancers may seem prickly and standoffish at first meeting, 
    once they make the decision to become friends with someone, that person has a friend for life.", 
    startDate: "2019-06-21",
    endDate: "2019-07-22"
})
leo = Sign.create({
    name: "Leo",
    traits: "Proud, Bold, Ambitious",
    element: "Fire",
    gems:"Carnelian",
    description: "Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac, ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. Blessed with high self-esteem, Lions know that they possess enviable traits—and they're proud of them. They don't believe in false modesty and will be the first to praise themselves for a job well done. But Leo isn't self-aggrandizing or unwilling to roll up those sleeves and do the work: 
    this sign knows that in order to be respected and admired, he or she needs to put in the effort worthy of a leader.", 
    startDate: "2019-07-23",
    endDate: "2019-08-22"
})
virgo = Sign.create({
    name: "Virgo",
    traits: "Graceful, Organized, Kind",
    element: "Earth",
    gems:"Peridot",
    description: "Smart, sophisticated, and kind, Virgo gets the job done without complaining. Virgos are amazing friends, always there to lend a hand and also lend advice. Practical Virgos are incredibly adept at big picture thinking, 
    and planning out their life, their vacations, and what they're going to do today isn't a drag it makes them feel in control and secure.", 
    startDate: "2019-08-23",
    endDate: "2019-09-22"
})
libra = Sign.create({
    name: "Libra",
    traits: "Diplomatic, Artistic, Intelligent",
    element: "Air",
    gems: "Sapphire",
    description: "Intelligent, kind, and always willing to put others before themselves, Libras value harmony in all forms. Ruled by Venus, the planet of beauty, Libra adores a life that looks good. As the master of compromise and diplomacy, 
    Libra is adept at seeing all points of view, and excels at crafting compromises and effecting mediation between others. This sign has a rich inner life yet loves other people, and they're always happiest with a large group of friends, family, and coworkers on whom they can count.", 
    startDate: "2019-09-23",
    endDate: "2019-10-22"
})
scorpio= Sign.create({
    name: "Scorpio",
    traits: "Seductive, Passionate, Independent",
    element: "Water",
    gems: "Topaz & opal",
    description: "Passionate, independent, and unafraid to blaze their own trail no matter what others think, Scorpios make a statement wherever they go. They love debates, aren't afraid of controversy, and won't back down from a debate. 
    They also hate people who aren't genuine, and are all about being authentic—even if authentic isn't pretty.", 
    startDate: "2019-10-23",
    endDate: "2019-11-21"
})
sagittarius = Sign.create({
    name: "Sagittarius",
    traits: "Adventurous",
    element: "Fire",
    gems: "Topaz",
    description: "Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. 
    Sagittarius also loves exploring the inner workings of their minds, and love stretching their horizons through a good book or movie.", 
    startDate: "2019-11-22",
    endDate: "2019-12-21"
})
capricorn = Sign.create({
    name: "Capricorn",
    traits: "Detail-Oriented, Intelligent, Hardworking",
    element: "Earth",
    gems: "Lapis lazuli",
    description: "Smart, hardworking, and fully in control of their destiny, a Capricorn will always get what they set their mind to, in both
    personal and professional life--no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish
    other people would behave.", 
    startDate: "2019-12-22",
    endDate: "2020-01-19"
})
aquarius = Sign.create({
    name: "Aquarius",
    traits: "Imaginative, Idealistic, Intuitive",
    element: "Air",
    gems: "Amethyst",
    description: "Independent and enigmatical, Aquarians are unique. There is no one quite like an Aquarius, and because each is so incredibly individual, it can be tough to describe them as a group. Aquarians don't like labels, and may shy away from any adjective—even the good ones you might bestow upon them. Aquarians believe in the nature of change and evolution, 
    and even though they're a fixed sign, they may not necessarily believe they are the 'same' people they were when they were born.", 
    startDate: "2019-01-20",
    endDate: "2019-02-18"
})
pisces = Sign.create({
    name: "Pisces",
    traits: "Creative, Sensitive, Artistic",
    element: "Water",
    gems: "Moonstone",
    description: "Smart, creative, and deeply intuitive, Pisces can be close to psychic. Pisces feel things deeply, and have incredibly strong gut reactions.
    A Pisces 'knows' things from deep within, and can often judge whether a person or situation is good or bad. That doesn't mean a Pisces ignores the logical part
    of their brain, though. Deeply intelligent, Pisces have a profound respect for the power of the human mind. Is it a suprise that Albert Einstein was a Pisces?", 
    startDate: "2019-02-19",
    endDate: "2019-03-20"
})

