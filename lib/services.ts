export type Service = {
  slug: string
  title: string
  price: string
  shortDescription: string
  longDescription: string
  benefits: string[]
  faqs: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    slug: "bodywork",
    title: "Bodywork",
    price: "$300/session",
    shortDescription: "Deep healing through therapeutic touch and energy alignment.",
    longDescription:
      "Hands-on therapeutic touch to release tension, unwind the nervous system, and restore balanced energy flow. Sessions combine intuitive bodywork with grounding breath and gentle mobilization to help you feel safe, present, and deeply relaxed.",
    benefits: [
      "Relieves anxiety and panic",
      "Calms the nervous system",
      "Improves circulation and flexibility",
      "Promotes restorative sleep",
    ],
    faqs: [
      {
        question: "What should I wear?",
        answer:
          "Wear comfortable clothing you can move in. You may remain clothed; draping is used for comfort and privacy as needed.",
      },
      {
        question: "How quickly will I feel results?",
        answer:
          "Many clients feel immediate relaxation and relief. Deeper, lasting changes typically build over several sessions.",
      },
    ],
  },
  {
    slug: "emotion-code",
    title: "Emotion Code",
    price: "$80/session",
    shortDescription: "Release trapped emotions and energetic blockages.",
    longDescription:
      "A gentle modality that helps identify and release trapped emotions stored in the body. By clearing energetic blockages, you can experience emotional relief, mental clarity, and renewed vitality.",
    benefits: [
      "Releases emotional baggage",
      "Supports anxiety relief",
      "Improves mental clarity",
      "Restores energetic balance",
    ],
    faqs: [
      {
        question: "Is Emotion Code remote?",
        answer:
          "Yes. Sessions can be done in person or remotely with similar effectiveness.",
      },
      {
        question: "How many sessions do I need?",
        answer:
          "It varies. Some clients feel lighter after one session; complex patterns may take several.",
      },
    ],
  },
  {
    slug: "health-coaching",
    title: "Holistic Health Coaching",
    price: "Plans Available",
    shortDescription: "Personalized guidance for your wellness journey.",
    longDescription:
      "One-on-one coaching to build sustainable lifestyle habits, refine nutrition, and support detox. We co-create a grounded plan tailored to your energy, stress, sleep, and goals.",
    benefits: [
      "Clarifies your healing roadmap",
      "Improves energy and mood",
      "Supports digestion and detox",
      "Builds sustainable habits",
    ],
    faqs: [
      {
        question: "Do you provide meal plans?",
        answer:
          "We create simple, realistic nutrition frameworks and recipes aligned to your needs and preferences.",
      },
      {
        question: "How often do we meet?",
        answer: "Most clients meet bi-weekly for momentum and accountability.",
      },
    ],
  },
  {
    slug: "weight-loss-coaching",
    title: "Weight Loss Coaching",
    price: "Plans Available",
    shortDescription: "Natural approach to healthy weight transformation.",
    longDescription:
      "A gentle, root-cause approach to sustainable weight change. We address stress, sleep, hormones, and nutrition so your body can naturally rebalance and let go.",
    benefits: [
      "Supports metabolic health",
      "Builds sustainable routines",
      "Reduces cravings and stress eating",
      "Improves sleep and energy",
    ],
    faqs: [
      {
        question: "Will I need to count calories?",
        answer:
          "We focus on food quality, satiety, and rhythm rather than strict calorie counting.",
      },
      {
        question: "Is exercise required?",
        answer:
          "We match movement to your current capacity—no punishing workouts required.",
      },
    ],
  },
  {
    slug: "raw-uncooking-classes",
    title: "Raw Un-Cooking Classes",
    price: "$500 (Groups 5-12)",
    shortDescription: "Learn to prepare living foods that nourish your soul.",
    longDescription:
      "Hands-on classes that make raw, living foods easy and delicious. Learn knife skills, flavor pairing, and batch-friendly recipes to simplify daily nourishment.",
    benefits: [
      "Boosts micronutrient intake",
      "Supports detox pathways",
      "Improves digestion and energy",
      "Builds kitchen confidence",
    ],
    faqs: [
      {
        question: "Do you offer private classes?",
        answer:
          "Yes. Private and small-group options are available upon request.",
      },
      {
        question: "Are recipes kid-friendly?",
        answer:
          "We can tailor menus to families and picky eaters.",
      },
    ],
  },
  {
    slug: "karate-jiu-jitsu",
    title: "Karate & Jiu Jitsu",
    price: "$100/hour",
    shortDescription: "Physical discipline for mind-body-spirit connection.",
    longDescription:
      "Martial arts training that builds strength, flexibility, and presence. Sessions emphasize breath, alignment, and respectful practice.",
    benefits: [
      "Improves strength and mobility",
      "Sharpens focus and confidence",
      "Builds resilience",
      "Increases body awareness",
    ],
    faqs: [
      {
        question: "Do I need experience?",
        answer:
          "All levels are welcome—from beginners to advanced practitioners.",
      },
      {
        question: "What should I bring?",
        answer: "Comfortable clothing and water; uniforms optional for beginners.",
      },
    ],
  },
  {
    slug: "acro-yoga-for-couples",
    title: "Acro Yoga for Couples",
    price: "$100/hour",
    shortDescription: "Deepen your connection through partner yoga flow.",
    longDescription:
      "Partner-based movement that cultivates trust, communication, and play. Sessions are accessible, supportive, and joyfully embodied.",
    benefits: [
      "Enhances connection and trust",
      "Builds playful movement",
      "Develops coordination",
      "Relieves stress together",
    ],
    faqs: [
      {
        question: "Is this safe for beginners?",
        answer:
          "Yes. We teach progressive spotting and alignment so you feel safe.",
      },
      {
        question: "Do we need mats?",
        answer: "Mats are recommended but not required.",
      },
    ],
  },
  {
    slug: "crystal-healing-therapy",
    title: "Crystal Healing Therapy",
    price: "$150/session",
    shortDescription: "Restore energetic balance with crystal frequencies.",
    longDescription:
      "Crystals are placed on and around the body to support energy alignment, emotional release, and deep relaxation. A soothing, non-invasive experience.",
    benefits: [
      "Cleanses and balances energy",
      "Supports emotional processing",
      "Promotes deep relaxation",
      "Enhances meditation and clarity",
    ],
    faqs: [
      {
        question: "Can this be combined with bodywork?",
        answer:
          "Yes. We often combine modalities based on your goals and sensitivity.",
      },
      {
        question: "What will I feel?",
        answer:
          "Most clients feel calm and grounded; some notice gentle energetic shifts.",
      },
    ],
  },
  {
    slug: "chakra-balancing-sessions",
    title: "Chakra Balancing Sessions",
    price: "$120/session",
    shortDescription: "Align and activate your seven energy centers.",
    longDescription:
      "A focused session to harmonize the chakra system using breath, visualization, gentle touch, and sound. Helps you feel centered and clear.",
    benefits: [
      "Aligns energy centers",
      "Improves clarity and mood",
      "Supports stress resilience",
      "Deepens mind-body connection",
    ],
    faqs: [
      {
        question: "How is this different from energy healing?",
        answer:
          "Chakra sessions specifically target each center with tailored techniques; energy healing is broader and may include chakras among other approaches.",
      },
      {
        question: "How long is a session?",
        answer: "Typically 60–75 minutes.",
      },
    ],
  },
]
