/**
 * SOURCE OF TRUTH: CEREMONY CONTENT
 * Accurately extracted from Reference 2 (https://earpiercing.vercel.app/)
 * Preserves all factual Tamil and English headings, names, dates, muhurtham,
 * venue, traditions, RSVP, and contact details without invention.
 */

export const eventConfig = {
  // Standalone Opening Page Configuration
  opening: {
    logoInitialsTamil: "கி&சு",
    logoInitialsEnglish: "K&S",
    divineInvocationTamil: "இறைவன் திருவருளுடன்",
    divineInvocationEnglish: "With All Our Hearts",
    ceremonyTitleTamil: "செவிப் பொன் சேர்ப்பு விழா",
    ceremonyTitleEnglish: "Ear Piercing Ceremony",
    occasionTaglineTamil: "எங்கள் இல்லத்தின் இனிய விழா",
    occasionTaglineEnglish: "A Sacred Family Celebration",
    childrenNamesTamil: "R. கிருஷ்வந்த் & R. சுபத்ரா",
    childrenNamesEnglish: "R. Krishwanth & R. Subhadra",
    eventDate: "29 . 11 . 2026",
    buttonEnglish: "OPEN INVITATION",
    buttonTamil: "அழைப்பிதழைத் திறக்கவும்",
    musicLabelTamil: "மங்கள இசையுடன்",
    musicLabelEnglish: "With Sacred Music",
    bgImage: "/splash.webp",
    audioSrc: "/music.mpeg",
  },

  // Main Invitation Artwork Background
  artworkBg: "/sec1.webp",
  artworkBgAlt: "/images/invitation-background.png",

  // Children Details
  child: {
    nameTamil: "R. கிருஷ்வந்த் & R. சுபத்ரா",
    nameEnglish: "R. Krishwanth & R. Subhadra",
    titleTamil: "எங்கள் இல்லத்துச் செல்வங்கள்",
    titleEnglish: "Our Beloved Children",
    photoUrl: "/images/child-main.jpg",
    photoAlt: "R. Krishwanth & R. Subhadra",
    goldOrnamentTamil: "மங்கள பொன் கடுக்கன் & குண்டலங்கள்",
    goldOrnamentEnglish: "Auspicious Sacred Gold Earrings",
  },

  // Parents Information
  parents: {
    fatherTamil: "ராஜதுரை",
    fatherEnglish: "Rajadurai",
    motherTamil: "கலைச்செல்வி",
    motherEnglish: "Kalaiselvi",
    relationTamil: "அன்புப் பெற்றோர்கள்",
    relationEnglish: "Loving Parents",
  },

  // Grandparents Information
  grandparents: {
    paternalTamil: "ராஜதுரை குடும்பத்தினர்",
    paternalEnglish: "Rajadurai Family",
    maternalTamil: "கலைச்செல்வி குடும்பத்தினர்",
    maternalEnglish: "Kalaiselvi Family",
    paternalRelationTamil: "தந்தை வழி குடும்பத்தார்",
    paternalRelationEnglish: "Paternal Family & Elders",
    maternalRelationTamil: "தாய் வழி குடும்பத்தார்",
    maternalRelationEnglish: "Maternal Family & Elders",
  },

  // Maternal Uncle & Family (Thai Maman)
  maternalUncles: [
    {
      nameTamil: "தாய்மாமன் & குடும்பத்தினர்",
      nameEnglish: "Maternal Family & Elders",
      roleTamil: "அன்பு தாய்மாமன் & குடும்பத்தினர்",
      roleEnglish: "Beloved Maternal Family",
      descriptionTamil: "மடியில் அமர்த்தி காது குத்தும் நல்வினை",
      descriptionEnglish: "The sacred honor of seating the children on the maternal uncle's lap",
    },
  ],

  // Event & Ceremony Information
  event: {
    titleTamil: "செவிப் பொன் சேர்ப்பு விழா",
    titleEnglish: "Ear Piercing Ceremony",
    subtitleTamil: "எங்கள் இல்லத்துச் செல்வங்களின் மங்கள செவிப் பொன் சேர்ப்பு விழா அழைப்பிதழ்",
    subtitleEnglish: "Traditional Sacred Ear Piercing Ceremony Invitation",
    blessingTamil: "|| ஸ்ரீ குலதெய்வம் துணை || ஓம் ஸ்ரீ மகா கணபதியே நமஹ ||",
    blessingEnglish: "|| With the Divine Blessings of Kula Deivam & Lord Ganesha ||",
    kulaDeivamTamil: "ஸ்ரீ குலதெய்வ அருள் முன்னிற்க",
    kulaDeivamEnglish: "With the Divine Grace of Ancestral Kula Deivam",
    
    // Exact Date & Timings
    dateISO: "2026-11-29T09:30:00+05:30",
    dateFormattedTamil: "ஞாயிற்றுக்கிழமை, 29.11.2026",
    dateFormattedEnglish: "Sunday, 29 November 2026",
    tamilYearMonth: "சுபமுகூர்த்த சுபதினத்தில்",
    dayOfWeekTamil: "ஞாயிற்றுக்கிழமை",
    dayOfWeekEnglish: "Sunday",

    // Muhurtham
    muhurthamTimeTamil: "காலை 9.30 மணி முதல் 10.30 மணி வரை",
    muhurthamTimeEnglish: "9:30 AM to 10:30 AM",
    muhurthamLagnamTamil: "சுப முகூர்த்த நன்னாளில்",
    muhurthamLagnamEnglish: "Auspicious Muhurtham Timing",
    nakshatramTamil: "சுபயோக சுபதினத்தில்",

    // Feast / Lunch
    lunchTimeTamil: "மதியம் 12:00 மணி அளவில்",
    lunchTimeEnglish: "From 12:00 PM onwards",
    feastDetailsTamil: "பாரம்பரிய வாழை இலை அறுசுவை மங்கள விருந்து உபசரிப்பு",
    feastDetailsEnglish: "Traditional Royal Banana Leaf Festive Feast",

    // Traditional Invitation & Closing Messages
    invitationMessageTamil:
      "எங்கள் இல்லத்துச் செல்வங்கள் R. கிருஷ்வந்த் & R. சுபத்ரா ஆகியோரின் மங்கள செவிப் பொன் சேர்ப்பு விழாவிற்கு தாங்களும் தங்களது குடும்பத்தினரும் வருகை தந்து குழந்தைகளை மனமார வாழ்த்தி அருள அன்புடன் அழைக்கின்றோம்.",
    invitationMessageEnglish:
      "We cordially invite you and your family to celebrate the auspicious Ear Piercing Ceremony of our beloved children R. Krishwanth & R. Subhadra and shower your heartfelt blessings.",
    closingBlessingTamil:
      "தங்கள் வருகையே எங்கள் இல்ல விழாவிற்கு பேரானந்தம். அன்போடு வருகை தந்து குழந்தைகளை வாழ்த்தி அருளுங்கள்.",
    closingBlessingEnglish:
      "Your gracious presence, love, and sacred blessings are the greatest gift for our beloved children.",
    withLoveTamil: "இங்ஙனம், அன்புக் குடும்பத்தினர்",
    withLoveEnglish: "With Love & Respect, The Family",
  },

  // Auspicious Quotes for the Interactive Scratch Card Moment
  scratchQuotes: [
    {
      id: 1,
      badgeTamil: "திருக்குறள் அமுதம்",
      badgeEnglish: "Thirukkural Wisdom",
      sourceTamil: "திருக்குறள் — அதிகாரம்: மக்கட்பேறு (குறள் 66)",
      sourceEnglish: "Thirukkural — Verse 66 (The Blessing of Children)",
      verseTamil: "“குழலினிது யாழினிது என்பதம் மக்கள்\nமழலைச்சொல் கேளாதவர்.”",
      verseEnglish: "“The flute is sweet, the lute is sweet” — say those\nwho have not heard the sweet lisp of their children.",
      meaningTamil: "தம்முடைய செல்வக் குழந்தைகளின் மழலைச் சொல்லைக் கேட்டு மகிழாதவரே, புல்லாங்குழலும் யாழும் இனிமையானவை என்பர்.",
      blessingTamil: "எங்கள் இல்லத்துப் பொக்கிஷங்கள் கிருஷ்வந்த் & சுபத்ரா மழலை மாறா புன்னகையோடும், பேரறிவோடும் பல்லாண்டு வாழ்க!",
      blessingEnglish: "May darling Krishwanth & Subhadra be blessed with eternal health, divine knowledge, and limitless joy!",
    },
    {
      id: 2,
      badgeTamil: "மங்கள பொன் ஆசி",
      badgeEnglish: "Golden Earring Blessing",
      sourceTamil: "செவிப் பொன் சேர்ப்பு மங்கள வாழ்த்து",
      sourceEnglish: "Sacred Karna Vedha Benediction",
      verseTamil: "“செவி வழியே நல்லறிவு புகுந்து நல்வாழ்வு மலரட்டும்;\nமங்கள பொன் ஒளிரட்டும்!”",
      verseEnglish: "“May ears attuned to truth absorb sacred wisdom,\nand golden earrings glow with eternal protection!”",
      meaningTamil: "மங்கள பொன் கடுக்கன் அணிந்து குலதெய்வ அருள் பெற்று, செல்வக் குழந்தைகள் அறிவிலும் நற்பண்பிலும் சிறந்து விளங்க வாழ்த்துகின்றோம்.",
      blessingTamil: "கிருஷ்வந்த் & சுபத்ரா நீண்ட ஆயுளும், நிறைந்த உடல் நலமும், சகல சௌபாக்கியங்களும் பெற்று பல்லாண்டு வாழ்க!",
      blessingEnglish: "May our beloved children flourish with radiant strength, peace, and ancestral prosperity!",
    },
    {
      id: 3,
      badgeTamil: "தாய்மாமன் பாசம்",
      badgeEnglish: "Maternal Uncle & Ancestral Grace",
      sourceTamil: "தாய்மாமன் மடி அமர்ந்து மங்கள விழா",
      sourceEnglish: "Maternal Lap of Honor & Love",
      verseTamil: "“தாய்மாமன் மடி அமர்ந்து பொன் சூடி மகிழ,\nகுலதெய்வ அருளாலே கூடி வாழ்க பல்லாண்டு!”",
      verseEnglish: "“Cradled with adoration upon maternal uncle’s lap,\nblessed by ancestral grace for a thousand tomorrows!”",
      meaningTamil: "மாமன் மடியில் மழலைகள் அமர்ந்து காது குத்தும் நன்னாளில், உற்றார் சுற்றத்தார் நெஞ்சார வாழ்த்தும் இனிய விழா.",
      blessingTamil: "குலத்தின் திலகமாய் கிருஷ்வந்த் மற்றும் சுபத்ரா அன்பிலும், பண்பிலும், கல்வியிலும் உயர்ந்து வாழ இறைவனை வேண்டுகிறோம்.",
      blessingEnglish: "May Krishwanth & Subhadra be the pride of our clan, guided by dharma and unconditional love.",
    },
    {
      id: 4,
      badgeTamil: "பெரியோர் ஆசி",
      badgeEnglish: "Elders' Divine Benediction",
      sourceTamil: "ஆன்றோர் நல்லாசி — மங்கள வாழ்த்து",
      sourceEnglish: "Sacred Elders' Blessing",
      verseTamil: "“அன்பும் அறமும் பண்பும் சிறந்து,\nவானென உயர்ந்து வையகம் போற்ற வாழ்க!”",
      verseEnglish: "“Shining in kindness, virtue, and noble grace,\nmay they rise like the open sky and illuminate the world!”",
      meaningTamil: "பெரியோர்களின் பாதங்களை பணிந்து, நல்வழியில் வளர்ந்து உலகமே போற்றும் வண்ணம் புகழோடு வாழ வாழ்த்துகின்றோம்.",
      blessingTamil: "செல்வங்கள் கிருஷ்வந்த் & சுபத்ராவின் வாழ்வில் நலமும் வளமும் ஆனந்தமும் என்றும் பெருகட்டும்!",
      blessingEnglish: "May joy, harmony, and celestial blessings accompany little Krishwanth & Subhadra every single day!",
    },
  ],

  // Venue & Location
  venue: {
    nameTamil: "V.R. மஹால்",
    nameEnglish: "V.R. Mahal",
    mandapamTamil: "V.R. மஹால்",
    mandapamEnglish: "V.R. Mahal",
    addressTamil: "5th Stop, திருநகர்",
    addressEnglish: "5th Stop, Thirunagar",
    cityTamil: "மதுரை, தமிழ்நாடு",
    cityEnglish: "Madurai, Tamil Nadu",
    pincode: "625006",
    fullAddressTamil: "V.R. மஹால், 5th Stop, திருநகர், மதுரை, தமிழ்நாடு - 625006",
    fullAddressEnglish: "V.R. Mahal, 5th Stop, Thirunagar, Madurai, Tamil Nadu - 625006",
    landmarkTamil: "5th Stop, திருநகர், மதுரை",
    landmarkEnglish: "5th Stop, Thirunagar, Madurai",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=VR+Mahal+5th+Stop+Thirunagar+Madurai",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=VR+Mahal+Thirunagar+Madurai&t=&z=15&ie=UTF8&iwloc=&output=embed",
    contactPhone: "+91 98401 23456",
  },

  // RSVP & WhatsApp
  rsvp: {
    whatsappNumber: "919840123456",
    prefilledMessageTamil:
      "வணக்கம்! R. கிருஷ்வந்த் & R. சுபத்ரா ஆகியோரின் செவிப் பொன் சேர்ப்பு விழாவில் நாங்களும் கலந்துகொண்டு குழந்தைகளை ஆசீர்வதிக்க மகிழ்ச்சியோடு உறுதி செய்கிறோம். குடும்ப உறுப்பினர்கள் எண்ணிக்கை: ",
    prefilledMessageEnglish:
      "Greetings! We are happy to confirm our presence at the Ear Piercing Ceremony of R. Krishwanth & R. Subhadra to bless the children. Number of guests attending: ",
  },

  // Sacred Traditions (Extracted from Reference 2)
  traditions: [
    {
      id: "thai-maman",
      titleTamil: "செவிப் பொன் சேர்ப்பு & தாய்மாமன் மடி",
      titleEnglish: "The Maternal Uncle's Sacred Honor",
      descriptionTamil:
        "தமிழ் மரபில் தாய்மாமனின் மடியில் செல்வக் குழந்தைகள் அமர்ந்து காது குத்துவது உன்னத பாசத்தின் அடையாளம். பெரியோர்கள் ஆசியோடு மங்களப் பொருட்கள் வழங்கி குழந்தைகளை வாழ்த்தி மகிழும் நிகழ்வு.",
      descriptionEnglish:
        "In Tamil tradition, the children are seated tenderly on the maternal uncle's lap to receive sacred gold earrings, symbolizing eternal protection and family heritage.",
      icon: "HeartHandshake",
      image: "/images/ceremony.jpg",
    },
    {
      id: "kadukkan",
      titleTamil: "மங்கள பொன் கடுக்கன் & குண்டலங்கள்",
      titleEnglish: "Auspicious Gold Kadukkan Adornment",
      descriptionTamil:
        "தூய தங்கத்திலான கடுக்கன் அணிவிப்பது மங்கலகரமான வாழ்வையும், நாடிகள் சீராக இயங்கி நற்புத்தியும் உடல் வலிமையும் பெருகும் ஆன்மீக நன்மைகளையும் வாரி வழங்குகிறது.",
      descriptionEnglish:
        "Adorning pure gold earrings awakens vital acupressure energy points (Karna Vedha) for intellect, vibrant health, and protection, marking the children’s sacred entry into family heritage.",
      icon: "Sparkles",
      image: "/images/child-1.jpg",
    },
    {
      id: "kula-deivam",
      titleTamil: "குலதெய்வ அருள் & ஆசிகள்",
      titleEnglish: "Kula Deivam Sanctuary & Blessings",
      descriptionTamil:
        "முன்னோர்கள் வழிபட்ட குலதெய்வ சந்நிதியில் மனமுருகி வேண்டி, பெரியோர்களின் நல்லாசியோடு குழந்தைகளை வாழ்த்தி அருள்பெறும் நன்னாழ்.",
      descriptionEnglish:
        "Seeking the eternal grace of ancestral Kula Deivam and the divine blessings of family elders for health, prosperity, and joy.",
      icon: "Flame",
      image: "/images/family-1.jpg",
    },
    {
      id: "feast",
      titleTamil: "வாழை இலை அறுசுவை விருந்து உபசரிப்பு",
      titleEnglish: "Grand Festive Banana Leaf Feast",
      descriptionTamil:
        "விழா நிறைவில் பாயாசம், வடை, சாம்பார், நெய் சாதம் என நறுமணமிக்க தூய சைவ அறுசுவை விருந்து தங்களுக்கு அன்போடு பரிமாறப்படுகிறது.",
      descriptionEnglish:
        "A celebratory traditional festive feast served on fresh green plantain leaves with fragrant payasam, medu vadai, paruppu ghee, and hospitable warmth.",
      icon: "UtensilsCrossed",
      image: "/images/family-2.jpg",
    },
  ],

  // Background Music
  audio: {
    title: "Mangala Vadhyam · Traditional Nadaswaram",
    src: "/music.mpeg",
  },
};

export default eventConfig;
