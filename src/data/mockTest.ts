export interface Question {
  id: string;
  section: 'Reading and Writing' | 'Math';
  passage?: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export const mockQuestions: Question[] = [
  {
    "id": "reading_0",
    "section": "Reading and Writing",
    "passage": "In the essay \"On Liberty,\" John Stuart Mill argues that \"the peculiar evil of silencing the expression of an opinion is, that it is robbing the human race; posterity as well as the existing generation; those who dissent from the opinion, still more than those who hold it.\"  What is Mill's main point in this passage?",
    "questionText": "What is Mill's main point in this passage from \"On Liberty\"?",
    "options": [
      "Suppressing opinions robs future generations of the chance to hear them, even if they disagree with them.",
      "It is harmful to silence opinions that are held by a majority of people.",
      "People who dissent from an opinion are more likely to be harmed by its suppression than those who hold it.",
      "It is important to respect all opinions, even if they are wrong."
    ],
    "correctAnswer": "Suppressing opinions robs future generations of the chance to hear them, even if they disagree with them."
  },
  {
    "id": "reading_1",
    "section": "Reading and Writing",
    "passage": "The researchers concluded that, in fact, as many as half of the hunters in the groups they studied were female. This finding was a direct challenge to the accepted view that female participation in hunting was negligible. ",
    "questionText": "Which choice best combines the sentences at the underlined portion to create a grammatically correct and stylistically effective sentence?",
    "options": [
      "This finding was a direct challenge to the accepted view, that female participation in hunting was negligible.",
      "This finding directly challenged the accepted view, that female participation in hunting was negligible.",
      "This finding directly challenged the accepted view that female participation in hunting was negligible.",
      "This finding, a direct challenge to the accepted view, that female participation in hunting was negligible."
    ],
    "correctAnswer": "This finding directly challenged the accepted view that female participation in hunting was negligible."
  },
  {
    "id": "reading_2",
    "section": "Reading and Writing",
    "passage": "The article argues that the way people use technology can be divided into two categories. One category is the use of technology for specific tasks, which the authors call \"instrumental\" use. The other category is the use of technology for pleasure or entertainment, which the authors call \"noninstrumental\" use. This distinction is important because it can help explain why people use technology in different ways, and how these different uses can affect people’s lives.  The authors claim that the distinction between instrumental and noninstrumental use is important for understanding how people use technology in the twenty-first century.",
    "questionText": "What is the main idea of this article?",
    "options": [
      "Instrumental use of technology is more important than noninstrumental use.",
      "The distinction between instrumental and noninstrumental use of technology is important for understanding how people use technology in the twenty-first century.",
      "Noninstrumental use of technology is more important than instrumental use.",
      "The use of technology has a significant impact on people’s lives in the twenty-first century."
    ],
    "correctAnswer": "The distinction between instrumental and noninstrumental use of technology is important for understanding how people use technology in the twenty-first century."
  },
  {
    "id": "reading_3",
    "section": "Reading and Writing",
    "passage": "The author is most interested in the impact of the internet on the way information is spread, focusing on the ways that individuals have become more powerful in shaping and distributing information. One of the key points the author makes is that information is no longer solely controlled by institutions and governments. This can be seen, for example, in the rise of citizen journalism, where individuals are able to share their own observations and perspectives on current events. Another major point is that the internet has made it easier for people to access and share information from around the world, making the world a smaller and more interconnected place. The author also notes the downsides of the internet, such as the spread of misinformation and the erosion of trust in traditional sources of information. However, the author’s primary focus is on the positive ways that the internet has changed the way information is shared and how it has empowered individuals. What is the main point of the passage?",
    "questionText": "Which statement best describes the author’s main point?",
    "options": [
      "The internet has revolutionized the way information is distributed, making it more accessible and empowering individuals.",
      "The internet has both positive and negative effects on the way information is shared.",
      "Traditional sources of information are no longer as trustworthy as they once were.",
      "The internet has made the world a smaller place, making it easier for people to connect with one another."
    ],
    "correctAnswer": "The internet has revolutionized the way information is distributed, making it more accessible and empowering individuals."
  },
  {
    "id": "reading_4",
    "section": "Reading and Writing",
    "passage": "",
    "questionText": "Which of the following sentences correctly uses a comma to separate a nonessential phrase? ",
    "options": [
      "The play, which was written by Shakespeare, is a comedy.",
      "The play which was written by Shakespeare, is a comedy.",
      "The play which was written by Shakespeare is a comedy.",
      "The play which was written by Shakespeare, is a comedy"
    ],
    "correctAnswer": "The play, which was written by Shakespeare, is a comedy."
  },
  {
    "id": "reading_5",
    "section": "Reading and Writing",
    "passage": "The text claims that the \"rise of the global middle class\" is a major factor in the increased demand for coffee. The text also mentions that in the past, coffee was \"associated with privilege,\" but today it is \"more widely consumed.\" What is the main idea of the passage?",
    "questionText": "The passage primarily suggests that",
    "options": [
      "the global middle class is now a major force in the coffee industry.",
      "coffee consumption has increased because it is now associated with privilege.",
      "coffee is no longer associated with privilege, but instead is more widely consumed.",
      "the global middle class has increased its demand for coffee because it is no longer associated with privilege."
    ],
    "correctAnswer": "the global middle class is now a major force in the coffee industry."
  },
  {
    "id": "reading_6",
    "section": "Reading and Writing",
    "passage": "The central theme of the passage is that the world is a complex and interconnected place, and that even seemingly simple events can have far-reaching consequences. The author uses a number of examples to illustrate this theme, including the story of a butterfly whose wings flutter and create a small gust of wind that eventually leads to a hurricane on the other side of the world. The author also discusses the ways in which human actions, such as the burning of fossil fuels, can have a significant impact on the environment. Finally, the author concludes by arguing that understanding the interconnectedness of the world is essential for solving the challenges facing humanity.",
    "questionText": "What is the main idea of the passage?",
    "options": [
      "The world is a complex and interconnected place.",
      "Human actions can have a significant impact on the environment.",
      "Understanding the interconnectedness of the world is essential for solving the challenges facing humanity.",
      "Butterflies play an important role in the global ecosystem."
    ],
    "correctAnswer": "The world is a complex and interconnected place."
  },
  {
    "id": "reading_7",
    "section": "Reading and Writing",
    "passage": "When the astronaut was asked about the experience, he spoke about how he felt an overwhelming sense of awe. This feeling was so profound that he could only articulate it by saying, \"It's impossible to describe.\"  The astronaut's experience, in essence, was too vast to be captured by language.",
    "questionText": "Which of the following choices best combines the two sentences at the underlined portion to maintain the meaning and structure of the passage?",
    "options": [
      "It's impossible to describe, the astronaut said.",
      "The astronaut said, \"It's impossible to describe.\"",
      "The astronaut said, \"It's impossible to describe;\"",
      "The astronaut said, It's impossible to describe."
    ],
    "correctAnswer": "The astronaut said, \"It's impossible to describe.\""
  },
  {
    "id": "reading_8",
    "section": "Reading and Writing",
    "passage": "The author’s primary goal in the passage is to explain how a particular idea can be applied to a specific situation. The author uses a series of examples and anecdotes to illustrate the idea, and the author ends the passage by offering a final thought or conclusion. What is the most likely reason why the author uses anecdotes in the passage?",
    "questionText": "In the passage, the author uses anecdotes to",
    "options": [
      "demonstrate the idea’s practical application.",
      "make the passage more engaging and entertaining.",
      "provide background information about the topic.",
      "support a specific point of view on the subject."
    ],
    "correctAnswer": "demonstrate the idea’s practical application."
  },
  {
    "id": "reading_9",
    "section": "Reading and Writing",
    "passage": "The novel \"Jane Eyre\" by Charlotte Bronte features scenes that use several literary devices, such as foreshadowing and imagery, to create a powerful and engaging reading experience.  The novel is narrated by Jane Eyre herself, and the reader only sees the world through Jane’s eyes.  This literary device is key in building empathy for Jane and her character. What is the most likely reason that the writer uses the first-person perspective?",
    "questionText": "In this passage, the use of the first-person perspective primarily serves to",
    "options": [
      "create suspense and intrigue for the reader.",
      "develop the reader’s understanding of the story’s setting.",
      "emphasize the importance of the speaker’s feelings and experiences.",
      "suggest that the speaker is addressing a large audience."
    ],
    "correctAnswer": "emphasize the importance of the speaker’s feelings and experiences."
  },
  {
    "id": "reading_10",
    "section": "Reading and Writing",
    "passage": "The author uses imagery in the first sentence to help the reader better understand the speaker’s feelings. He describes the speaker as “walking through a forest” to create a vivid image of the speaker’s surroundings and to emphasize that the speaker’s feelings are being influenced by the natural world. What is the most likely reason why the author uses imagery in the first sentence?",
    "questionText": "The author’s use of imagery in the first sentence helps the reader to",
    "options": [
      "establish the speaker’s motivation for walking in the forest.",
      "understand how the speaker is feeling.",
      "visualize the speaker’s journey through the forest.",
      "learn more about the speaker’s relationship with nature."
    ],
    "correctAnswer": "understand how the speaker is feeling."
  },
  {
    "id": "reading_11",
    "section": "Reading and Writing",
    "passage": "The process of photosynthesis begins when light energy is captured by chlorophyll, a green pigment found in plants.  Chlorophyll absorbs light, which is then used to convert carbon dioxide and water into glucose and oxygen.  This process is essential for life on Earth, as it provides the food and oxygen that all living things need.  What role does chlorophyll play in the process of photosynthesis?",
    "questionText": "Which choice provides the most logical and grammatically correct way to complete the sentence?",
    "options": [
      "Chlorophyll, a green pigment found in plants, absorbs light, which is then used to convert carbon dioxide and water into glucose and oxygen.",
      "Chlorophyll absorbing light, which is then used to convert carbon dioxide and water into glucose and oxygen.",
      "Chlorophyll, a green pigment found in plants, absorbing light, which is then used to convert carbon dioxide and water into glucose and oxygen.",
      "Chlorophyll—a green pigment found in plants—absorbs light, which is then used to convert carbon dioxide and water into glucose and oxygen."
    ],
    "correctAnswer": "Chlorophyll, a green pigment found in plants, absorbs light, which is then used to convert carbon dioxide and water into glucose and oxygen."
  },
  {
    "id": "reading_12",
    "section": "Reading and Writing",
    "passage": "The author argues that the current methods used to teach children about the environment are inadequate. These methods are often too abstract, lacking the specific details that help children understand the complexities of the natural world. As a result, children are left with a superficial understanding of the environment and a limited ability to appreciate its importance.  The author urges a more hands-on approach that encourages children to observe the natural world directly, using all of their senses. The author also suggests that teachers should involve children in activities that help them understand the impact of human actions on the environment, thereby fostering a deeper appreciation for the interconnectedness of all living things.",
    "questionText": "Which choice best states the main idea of this passage?",
    "options": [
      "The author argues that teaching children about the environment is difficult.",
      "The author urges teachers to adopt a more engaging approach to teaching about the environment.",
      "The author discusses the importance of teaching children about the complexities of the natural world.",
      "The author describes the inadequacy of traditional environmental education methods."
    ],
    "correctAnswer": "The author urges teachers to adopt a more engaging approach to teaching about the environment."
  },
  {
    "id": "reading_13",
    "section": "Reading and Writing",
    "passage": "The first two sentences of the passage describe the process of obtaining a passport.  The third sentence explains why obtaining a passport is a difficult process.  Which sentence should be revised to create a more coherent paragraph?  \n\nThe process of obtaining a passport is straightforward; you must complete an application, provide documentation, and submit your application.  However, the Department of State has recently warned that passport processing times may be much longer than usual.  Due to the high demand for passports, applications can take up to 14 weeks to process.",
    "questionText": "Which sentence should be revised to create a more coherent paragraph?",
    "options": [
      "The process of obtaining a passport is straightforward; you must complete an application, provide documentation, and submit your application.",
      "However, the Department of State has recently warned that passport processing times may be much longer than usual.",
      "Due to the high demand for passports, applications can take up to 14 weeks to process.",
      "The Department of State has recently warned that passport processing times may be much longer than usual.  Due to the high demand for passports, applications can take up to 14 weeks to process."
    ],
    "correctAnswer": "However, the Department of State has recently warned that passport processing times may be much longer than usual."
  },
  {
    "id": "reading_14",
    "section": "Reading and Writing",
    "passage": "The first time the young boy saw the large, white house, it felt more like an amusement park than a place to live. The house had a carousel that went all the way around, an enormous, colorful swing set, and a sandbox so big, it looked like it could hold a hundred children. The house even had a private ice cream parlor, complete with a giant ice cream cone fountain. He wondered what it would be like to live there. ",
    "questionText": "Which choice best corrects the punctuation error in the passage?",
    "options": [
      "The first time the young boy saw the large, white house, it felt more like an amusement park than a place to live. The house had a carousel that went all the way around, an enormous, colorful swing set, and a sandbox so big, it looked like it could hold a hundred children. The house even had a private ice cream parlor, complete with a giant ice cream cone fountain. He wondered what it would be like to live there.",
      "The first time the young boy saw the large, white house, it felt more like an amusement park than a place to live. The house had a carousel that went all the way around, an enormous, colorful swing set, and a sandbox so big; it looked like it could hold a hundred children. The house even had a private ice cream parlor, complete with a giant ice cream cone fountain. He wondered what it would be like to live there.",
      "The first time the young boy saw the large, white house, it felt more like an amusement park than a place to live. The house had a carousel that went all the way around an enormous, colorful swing set, and a sandbox so big, it looked like it could hold a hundred children. The house even had a private ice cream parlor, complete with a giant ice cream cone fountain. He wondered what it would be like to live there.",
      "The first time the young boy saw the large, white house, it felt more like an amusement park than a place to live. The house had a carousel that went all the way around, an enormous, colorful swing set, and a sandbox so big, it looked like it could hold a hundred children; the house even had a private ice cream parlor, complete with a giant ice cream cone fountain. He wondered what it would be like to live there."
    ],
    "correctAnswer": "The first time the young boy saw the large, white house, it felt more like an amusement park than a place to live. The house had a carousel that went all the way around, an enormous, colorful swing set, and a sandbox so big, it looked like it could hold a hundred children; the house even had a private ice cream parlor, complete with a giant ice cream cone fountain. He wondered what it would be like to live there."
  },
  {
    "id": "reading_15",
    "section": "Reading and Writing",
    "passage": "In the 1990s, the author Alice Walker published her most famous work, _The Color Purple_, a novel about a young Black woman's journey of self-discovery.",
    "questionText": "Which choice provides the most effective punctuation for the underlined portion of the sentence?",
    "options": [
      "Color Purple—",
      "Color Purple, ",
      "Color Purple;",
      "Color Purple"
    ],
    "correctAnswer": "Color Purple"
  },
  {
    "id": "reading_16",
    "section": "Reading and Writing",
    "passage": "One of the most common ways to create a sense of urgency or excitement is to use short, choppy sentences. Short sentences can make the writing more direct and forceful. What effect does the use of short, choppy sentences have on the passage?",
    "questionText": "The use of short, choppy sentences in this passage most likely helps to",
    "options": [
      "create a sense of urgency and excitement.",
      "establish the speaker’s credibility.",
      "provide detailed information about the topic.",
      "explain the speaker’s emotional state."
    ],
    "correctAnswer": "create a sense of urgency and excitement."
  },
  {
    "id": "reading_17",
    "section": "Reading and Writing",
    "passage": "A study, published in the journal Nature, found that the brains of people who speak more than one language are different from those who speak only one language.  The researchers concluded that bilingualism can protect against age-related cognitive decline and may even improve cognitive function.  In the journal, the authors of the study wrote that \"The brain’s ability to manage multiple languages appears to provide a cognitive reserve, which protects the brain from the damaging effects of age-related decline.\"",
    "questionText": "Which of the following is the most effective way to correct the underlined portion of this passage?",
    "options": [
      "The brains ability to manage multiple languages appears to provide a cognitive reserve, which protects the brain from the damaging effects of age-related decline.",
      "The brain’s ability to manage multiple languages, appears to provide a cognitive reserve, which protects the brain from the damaging effects of age-related decline.",
      "The brain’s ability to manage multiple languages appears, to provide a cognitive reserve, which protects the brain from the damaging effects of age-related decline.",
      "The brain’s ability to manage multiple languages appears to provide a cognitive reserve which protects the brain from the damaging effects of age-related decline."
    ],
    "correctAnswer": "The brain’s ability to manage multiple languages appears to provide a cognitive reserve which protects the brain from the damaging effects of age-related decline."
  },
  {
    "id": "reading_18",
    "section": "Reading and Writing",
    "passage": "The author explains that \"the most effective way to create a physically stimulating environment is to design disorienting spaces.\" This statement is supported by the fact that the filmmaker Nobu Yamaoka lived in the apartment building for four years, experiencing the disorienting design firsthand, and reported significant health benefits from his experience. However, the author acknowledges that the design is \"impractical.\" The author’s use of the word \"impractical\" is most likely intended to",
    "questionText": "Which choice best explains the author’s use of the word \"impractical\"?",
    "options": [
      "emphasize the idea that the building’s design is useful only for a limited time.",
      "suggest that the author is not fully convinced by Yamaoka’s claims.",
      "convey that the building’s design is not intended for everyday living.",
      "highlight that the building’s design is not a typical approach to architecture."
    ],
    "correctAnswer": "convey that the building’s design is not intended for everyday living."
  },
  {
    "id": "reading_19",
    "section": "Reading and Writing",
    "passage": "The recent discovery of a new species of dinosaur, which has been named *Dreadnoughtus* by paleontologists, is particularly exciting because it is one of the most complete skeletons of a dinosaur ever found. The skeleton, discovered in Patagonia, Argentina, includes much of the animal’s skull, neck, back, tail, and legs, and it is estimated to have been about 85 feet long and 65 tons in weight. Such a large dinosaur has never been discovered before. ",
    "questionText": "Which choice provides the best way to combine the sentences at the end of the passage into a single sentence?",
    "options": [
      "Such a large dinosaur has never been discovered before, which is particularly exciting.",
      "This is particularly exciting, because such a large dinosaur has never been discovered before.",
      "It is particularly exciting because such a large dinosaur has never been discovered before.",
      "Such a large dinosaur, which is particularly exciting, has never been discovered before."
    ],
    "correctAnswer": "It is particularly exciting because such a large dinosaur has never been discovered before."
  },
  {
    "id": "reading_20",
    "section": "Reading and Writing",
    "passage": "The author is trying to persuade the reader to accept a particular point of view. The author is using strong language to convince the reader that a particular idea is true,  What is the most likely reason why the author uses emotional language in the following passage?",
    "questionText": "The author’s use of emotional language in the passage is most likely intended to",
    "options": [
      "evoke a sense of nostalgia in the reader.",
      "create a sense of urgency or importance in the reader.",
      "provide a detailed explanation of the author’s argument.",
      "describe the author’s personal feelings about the topic."
    ],
    "correctAnswer": "create a sense of urgency or importance in the reader."
  },
  {
    "id": "reading_21",
    "section": "Reading and Writing",
    "passage": "The author begins the passage by setting the scene, describing the physical environment of the town and the time of day. The author then introduces the main character, explaining her background and motivations. The author then shifts to a more direct and personal style, as the character begins to recount her experiences. How does the author shift from setting the scene to describing the character’s thoughts and feelings?",
    "questionText": "The shift in the passage from setting the scene to describing the character’s thoughts and feelings is most likely achieved by",
    "options": [
      "using a series of vivid sensory details.",
      "introducing a new character into the story.",
      "shifting from an objective to a subjective point of view.",
      "repeating key words and phrases to emphasize certain ideas."
    ],
    "correctAnswer": "shifting from an objective to a subjective point of view."
  },
  {
    "id": "reading_22",
    "section": "Reading and Writing",
    "passage": "The recent discovery of a 1,000-year-old Viking ship in Norway has caused quite a stir among archaeologists. The ship, which is remarkably well-preserved, is providing new insights into the lives and culture of the Vikings. However, some scholars have raised concerns about the authenticity of the discovery, citing the lack of archaeological evidence to support the claims made about the ship’s age and origin. They argue that the ship may be a more recent replica, created to capitalize on the growing interest in Viking history.",
    "questionText": "Which choice best summarizes the main idea of the passage?",
    "options": [
      "The discovery of a Viking ship in Norway has sparked debate among archaeologists about the ship’s authenticity.",
      "The Viking ship, which is remarkably well-preserved, is providing new insights into Viking culture.",
      "The lack of archaeological evidence has led some scholars to question the authenticity of the Viking ship discovery.",
      "The growing interest in Viking history has led to a surge in the creation of replicas, making it difficult to determine the authenticity of discoveries."
    ],
    "correctAnswer": "The discovery of a Viking ship in Norway has sparked debate among archaeologists about the ship’s authenticity."
  },
  {
    "id": "reading_23",
    "section": "Reading and Writing",
    "passage": "The text describes the way that the artist used lines and colors to create a specific effect on the viewer. The artist's use of lines helps to suggest a sense of motion and direction, while the colors used in the piece evoke a sense of emotion and energy. The text also mentions that the artist's use of these elements is not accidental; it is a deliberate choice that is meant to convey a specific meaning to the viewer. What is the most likely reason why the writer included information about the artist’s choices in this passage?",
    "questionText": "In the text, the writer most likely included information about the artist's choices to",
    "options": [
      "contrast the artist's style with that of other artists.",
      "explain the artist’s process for creating the artwork.",
      "emphasize the importance of the artist’s artistic choices.",
      "suggest that the artist is a skilled and experienced craftsman."
    ],
    "correctAnswer": "emphasize the importance of the artist’s artistic choices."
  },
  {
    "id": "reading_24",
    "section": "Reading and Writing",
    "passage": "The team’s goal is to design a robot that can shake hands with a human, in order to improve human-robot interactions, and to make people feel more comfortable interacting with robots. But, the robot hand must also adjust its movements and pressure, to better imitate the feel of a human hand. What does this mean for the future of robotics?",
    "questionText": "Which choice provides the most effective way to combine the underlined sentences into a single sentence?",
    "options": [
      "The team’s goal is to design a robot that can shake hands with a human, in order to improve human-robot interactions, and to make people feel more comfortable interacting with robots, but the robot hand must also adjust its movements and pressure to better imitate the feel of a human hand.",
      "The team’s goal is to design a robot that can shake hands with a human, in order to improve human-robot interactions, and to make people feel more comfortable interacting with robots; the robot hand must also adjust its movements and pressure to better imitate the feel of a human hand.",
      "The team’s goal is to design a robot that can shake hands with a human, in order to improve human-robot interactions, and to make people feel more comfortable interacting with robots, so the robot hand must also adjust its movements and pressure to better imitate the feel of a human hand.",
      "The team’s goal is to design a robot that can shake hands with a human, in order to improve human-robot interactions, and to make people feel more comfortable interacting with robots, although the robot hand must also adjust its movements and pressure to better imitate the feel of a human hand."
    ],
    "correctAnswer": "The team’s goal is to design a robot that can shake hands with a human, in order to improve human-robot interactions, and to make people feel more comfortable interacting with robots, so the robot hand must also adjust its movements and pressure to better imitate the feel of a human hand."
  },
  {
    "id": "reading_25",
    "section": "Reading and Writing",
    "passage": "The text suggests that people often form an impression of a place based on what they have heard about it, rather than on what they have actually experienced for themselves. The writer states that people “sometimes…are so blinded by expectations” that they can’t “open [their] eyes” to the truth about a place. What is the most likely reason the author includes the phrase “open [their] eyes”?",
    "questionText": "In the passage, the phrase “open [their] eyes” is used to suggest that",
    "options": [
      "seeing a place for oneself can sometimes be a less pleasant experience than hearing about it.",
      "people who have preconceived notions about a place are often unable to see it objectively.",
      "a person’s first impression of a place is often the most accurate impression.",
      "people should avoid forming expectations about a place until they have visited it."
    ],
    "correctAnswer": "people who have preconceived notions about a place are often unable to see it objectively."
  },
  {
    "id": "reading_26",
    "section": "Reading and Writing",
    "passage": "The author of the essay, a scholar of ancient Greek poetry, argues that Sappho’s poetry is a form of \"direct address\" because she often writes as if she is speaking directly to a person, even though the reader is not present. This technique, she argues, is one way that Sappho conveys her powerful emotions. For example, in one particularly moving poem, Sappho writes, \"I wish I could say to you—that I could say—that what I wish, that what I desire, that what I’m longing for, that what I’m searching for, that what is in my soul, could all come to pass. You would never leave me, never forget me.\" However, in another poem, the poet uses a less personal, more introspective tone. \"My mind is at war, and my whole body is in a fever,\" she writes, \"because I long for you, but you, you are not here.\"  The author would most likely agree that this change in tone is intended to _____.",
    "questionText": "Which choice best completes the sentence?",
    "options": [
      "create a sense of mystery and intrigue.",
      "highlight the speaker’s complicated feelings.",
      "emphasize the speaker’s longing for the reader.",
      "reinforce the speaker’s desire to be understood."
    ],
    "correctAnswer": "highlight the speaker’s complicated feelings."
  },
  {
    "id": "reading_27",
    "section": "Reading and Writing",
    "passage": "The United States is a vast country, and its diverse population makes it a melting pot of cultures. However, the country’s vast size and diverse population can also make it difficult to understand the nuances of the various cultures that exist within its borders. The most important thing to remember when interacting with people from different cultures is to be respectful and open-minded. What is the most likely reason why the writer chooses to use the phrase \"melting pot\"?",
    "questionText": "The phrase \"melting pot\" is used to",
    "options": [
      "illustrate the diversity of cultures in the United States.",
      "describe the challenges of understanding different cultures.",
      "emphasize the importance of respecting other cultures.",
      "suggest that American culture is a blend of different cultures."
    ],
    "correctAnswer": "suggest that American culture is a blend of different cultures."
  },
  {
    "id": "reading_28",
    "section": "Reading and Writing",
    "passage": "The use of language is important in all forms of writing, but it is especially important in poetry.  A poet must carefully choose the words that will best convey the intended meaning and evoke the desired emotional response in the reader.  One way that a poet can achieve this goal is by using figurative language.  Figurative language is language that is not meant to be taken literally. It is often used to create vivid imagery and to make abstract concepts more concrete.  For example, the poet might use a metaphor to compare a person to something else.  This type of language can help the reader to understand the poet’s ideas and to experience the poem more deeply.  It’s a powerful tool.  What are the best ways for a writer to use figurative language?",
    "questionText": "Which of the following is the most effective way to complete the sentence?  For example, the poet might use a metaphor to compare a person to something else, ______",
    "options": [
      "but figurative language is often used to create vivid imagery and to make abstract concepts more concrete.",
      "and this type of language can help the reader to understand the poet’s ideas and to experience the poem more deeply.",
      "which is a powerful tool in all forms of writing.",
      "which is a more effective way to convey the poet’s intended meaning and to evoke the desired emotional response in the reader."
    ],
    "correctAnswer": "and this type of language can help the reader to understand the poet’s ideas and to experience the poem more deeply."
  },
  {
    "id": "reading_29",
    "section": "Reading and Writing",
    "passage": "",
    "questionText": "Which choice correctly combines the following sentences into a single sentence with a correctly placed semicolon? \n\nSentence 1: The first European settlers arrived in the area in the 1700s. \nSentence 2: They found it to be a rich agricultural region.  ",
    "options": [
      "The first European settlers arrived in the area in the 1700s; they found it to be a rich agricultural region.",
      "The first European settlers arrived in the area in the 1700s, they found it to be a rich agricultural region.",
      "The first European settlers arrived in the area in the 1700s they found it to be a rich agricultural region.",
      "The first European settlers arrived in the area in the 1700s; and they found it to be a rich agricultural region."
    ],
    "correctAnswer": "The first European settlers arrived in the area in the 1700s; they found it to be a rich agricultural region."
  },
  {
    "id": "reading_30",
    "section": "Reading and Writing",
    "passage": "As the author describes the setting of the story, he makes it clear that the main character, Mr. Jones, is a man of routine. The author writes, \"He always ate breakfast at 7:00 a.m., took his dog for a walk at 8:00 a.m., and started work at 9:00 a.m. sharp.\" This passage is meant to suggest that",
    "questionText": "Mr. Jones is a man who",
    "options": [
      "always seeks out new and exciting experiences.",
      "prefers to follow a consistent schedule.",
      "has a strong sense of purpose and determination.",
      "values spontaneity and flexibility above all else."
    ],
    "correctAnswer": "prefers to follow a consistent schedule."
  },
  {
    "id": "reading_31",
    "section": "Reading and Writing",
    "passage": "The author of the passage discusses the role of music in society, arguing that it can be used to convey emotions, create a sense of community, and inspire social change.  The author notes that music can be used to express both positive and negative emotions, and that it can be used to celebrate and mourn.  However, the author also suggests that music is not always used in a positive way.  What is the most likely purpose of the author using the phrase \"However\"?",
    "questionText": "The use of the word “However” in the passage is intended to",
    "options": [
      "signal the beginning of a new paragraph.",
      "introduce an opposing view of the topic.",
      "emphasize the importance of the previous statement.",
      "provide an example of the author’s main point."
    ],
    "correctAnswer": "introduce an opposing view of the topic."
  },
  {
    "id": "reading_32",
    "section": "Reading and Writing",
    "passage": "After years of research, a scientist announced the discovery of a new species of butterfly, one that was previously unknown to science.  The scientist, who had devoted years to the study of butterflies, was thrilled with the discovery, and the team of researchers that assisted her in the project were equally excited about the finding.  \"This butterfly is the most interesting one I've ever seen!\" the scientist exclaimed.  \"It has a unique wing pattern that I have never seen before. I believe it’s a new species, and I can’t wait to learn more about it.\"",
    "questionText": "Which choice best revises the sentence to make it conform to the conventions of Standard English?",
    "options": [
      "This butterfly is the most interesting one I've ever seen, and I can’t wait to learn more about it.",
      "This butterfly is the most interesting one I've ever seen. I can’t wait to learn more about it.",
      "This butterfly is the most interesting one I've ever seen; I can’t wait to learn more about it.",
      "This butterfly is the most interesting one I've ever seen, and I can’t wait to learn more about it."
    ],
    "correctAnswer": "This butterfly is the most interesting one I've ever seen. I can’t wait to learn more about it."
  },
  {
    "id": "reading_33",
    "section": "Reading and Writing",
    "passage": "The author of the passage is arguing that there is a relationship between the brain’s capacity for complex thought and the presence of LINE transposons in the genome. The author suggests that the finding of an active LINE transposon in the genomes of octopus species, which are known for their intelligence, could support this idea.  Which choice best describes the author’s main point? ",
    "questionText": "What is the author’s main point?",
    "options": [
      "The discovery of an active LINE transposon in the genomes of octopus species supports the theory that LINE transposons are a crucial part of complex cognition.",
      "Although LINE transposons are active in the genomes of many species, they are not typically found in the genomes of octopus species.",
      "The discovery of LINE transposons in the genomes of octopus species provides evidence that complex cognition is a relatively recent evolutionary development.",
      "The presence of LINE transposons in the genomes of octopus species is a sign that these animals are more closely related to humans than scientists previously believed."
    ],
    "correctAnswer": "The discovery of an active LINE transposon in the genomes of octopus species supports the theory that LINE transposons are a crucial part of complex cognition."
  },
  {
    "id": "reading_34",
    "section": "Reading and Writing",
    "passage": "The author uses the word \"however\" to introduce a contrast between the first sentence and the second sentence. What is the most likely reason why the writer used the word \"however\"?",
    "questionText": "In this passage, the word \"however\" is used to",
    "options": [
      "indicate a change in topic.",
      "introduce a new idea.",
      "emphasize the importance of the speaker’s message.",
      "show that the second sentence contradicts the first sentence."
    ],
    "correctAnswer": "show that the second sentence contradicts the first sentence."
  },
  {
    "id": "reading_35",
    "section": "Reading and Writing",
    "passage": "The author’s purpose in this passage is to illustrate the idea that the best way to understand and appreciate a work of art is to view it from multiple perspectives. The author accomplishes this goal by using the example of a painting, which can be interpreted differently depending on the viewer’s background and experiences. For example, the author suggests that a viewer who is familiar with the history of the painting will see it in a different light than a viewer who is not. Similarly, the author suggests that a viewer who is familiar with the symbolism of the painting will see it in a different light than a viewer who is not. The author’s use of the word \"you\" creates a sense of intimacy and connection with the reader, which can help the reader feel more engaged with the message.  The author’s use of a conversational tone also helps to make the speaker seem more immediate and personal. The author refers to events and places that are familiar to the reader, which can help the reader feel more engaged with the message. What is the main idea of the passage?",
    "questionText": "The main idea of the passage is that",
    "options": [
      "art can be interpreted differently depending on the viewer’s background and experiences.",
      "the history of a painting is important to understanding its symbolism.",
      "viewers who are familiar with the symbolism of a painting will see it in a different light than viewers who are not.",
      "the best way to understand and appreciate a work of art is to view it from multiple perspectives."
    ],
    "correctAnswer": "the best way to understand and appreciate a work of art is to view it from multiple perspectives."
  },
  {
    "id": "reading_36",
    "section": "Reading and Writing",
    "passage": "The author’s use of the word “savor” is significant because it suggests that the experience the narrator is having is a positive one. The author uses the word “savor” to suggest that the narrator is enjoying the experience and taking the time to appreciate it. What is the most likely reason why the writer uses the word \"savor\"?",
    "questionText": "In this passage, the word \"savor\" is used to",
    "options": [
      "create a sense of intimacy and connection with the reader.",
      "describe the speaker’s feelings and experiences.",
      "emphasize the importance of the speaker’s message.",
      "suggest that the speaker is addressing a large audience."
    ],
    "correctAnswer": "describe the speaker’s feelings and experiences."
  },
  {
    "id": "reading_37",
    "section": "Reading and Writing",
    "passage": "The author’s central argument, that children should be encouraged to think critically and creatively, is made throughout the passage. For example, the author argues that teachers should encourage students to ask questions and challenge assumptions. The author also highlights the importance of providing students with opportunities to explore their own ideas and express themselves freely. What is the main idea of the passage?",
    "questionText": "The author's argument for encouraging critical thinking and creativity in children is made throughout the passage, as evidenced by the author's",
    "options": [
      "description of a classroom activity that encourages students to question assumptions.",
      "emphasis on the importance of providing students with opportunities to express themselves freely.",
      "explanation of the benefits of critical thinking for students.",
      "focus on the role of the teacher in encouraging critical thinking."
    ],
    "correctAnswer": "emphasis on the importance of providing students with opportunities to express themselves freely."
  },
  {
    "id": "reading_38",
    "section": "Reading and Writing",
    "passage": "The team’s victory was due to a combination of factors. The team’s hard work, their coach’s strategic planning, and the team’s unwavering support from the fans.  However, their success can be attributed mostly to the team’s hard work and determination, which were evident throughout the season.",
    "questionText": "Which choice best combines the sentences at the underlined portion to create a grammatically correct and stylistically effective sentence?",
    "options": [
      "The team’s hard work, their coach’s strategic planning, and the team’s unwavering support from the fans, however, their success can be attributed mostly to the team’s hard work and determination, which were evident throughout the season.",
      "The team’s hard work, their coach’s strategic planning, and the team’s unwavering support from the fans; however, their success can be attributed mostly to the team’s hard work and determination, which were evident throughout the season.",
      "The team’s hard work, their coach’s strategic planning, and the team’s unwavering support from the fans; however, their success can be attributed mostly to the team’s hard work and determination, which were evident throughout the season.",
      "The team’s hard work, their coach’s strategic planning, and the team’s unwavering support from the fans, however, their success can be attributed mostly to the team’s hard work and determination, which were evident throughout the season."
    ],
    "correctAnswer": "The team’s hard work, their coach’s strategic planning, and the team’s unwavering support from the fans, however, their success can be attributed mostly to the team’s hard work and determination, which were evident throughout the season."
  },
  {
    "id": "reading_39",
    "section": "Reading and Writing",
    "passage": "The author states that \"the most obvious sign that the speaker is speaking directly to the reader is the use of the word \"you.\" There are other elements of the passage that may help to make the speaker seem more immediate and personal. The speaker refers to events and places that are familiar to the reader, and the speaker uses a conversational tone throughout the passage. What is the most likely reason why the writer uses the word \"you\"?",
    "questionText": "In this passage, the word \"you\" is used to",
    "options": [
      "create a sense of intimacy and connection with the reader.",
      "describe the speaker’s feelings and experiences.",
      "emphasize the importance of the speaker’s message.",
      "suggest that the speaker is addressing a large audience."
    ],
    "correctAnswer": "create a sense of intimacy and connection with the reader."
  },
  {
    "id": "reading_40",
    "section": "Reading and Writing",
    "passage": "The following sentence is adapted from a news article about the history of the game of football.  \"A team of 200,000 people have been involved in building a new stadium for the World Cup in Qatar.\"  Which choice corrects the error in the sentence?",
    "questionText": "Which choice corrects the error in the sentence?",
    "options": [
      "A team of 200,000 people has been involved in building a new stadium for the World Cup in Qatar.",
      "A team of 200,000 people are been involved in building a new stadium for the World Cup in Qatar.",
      "200,000 people have been involved in building a new stadium for the World Cup in Qatar.",
      "A team of 200,000 people is been involved in building a new stadium for the World Cup in Qatar."
    ],
    "correctAnswer": "A team of 200,000 people has been involved in building a new stadium for the World Cup in Qatar."
  },
  {
    "id": "reading_41",
    "section": "Reading and Writing",
    "passage": "The research team found that the type of exercise people prefer, whether it’s vigorous or more moderate, influences the amount of sleep they need.  For example, the group who prefers vigorous exercise needs an average of 7 hours of sleep, while those who prefer moderate exercise tend to need 8.  This finding suggests that, when designing sleep-tracking devices for athletes,  ______ taking into account the type of training regimen athletes are following.",
    "questionText": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "it would be most efficient for the devices to",
      "the devices should",
      "the devices are to",
      "the devices ought to"
    ],
    "correctAnswer": "the devices should"
  },
  {
    "id": "reading_42",
    "section": "Reading and Writing",
    "passage": "The first sentence in this passage makes a claim about \"the importance of music,\" and the second sentence provides an example of how music has been used to support that claim. The text then concludes that music is \"powerful.\" What is the most likely reason why the writer uses the word \"powerful\"?",
    "questionText": "The author uses the word \"powerful\" to",
    "options": [
      "explain the specific way that music affects people.",
      "suggest that the writer believes music has a strong impact on people.",
      "provide a detailed analysis of the effects of music on people.",
      "emphasize that the writer believes music is a common experience for most people."
    ],
    "correctAnswer": "suggest that the writer believes music has a strong impact on people."
  },
  {
    "id": "reading_43",
    "section": "Reading and Writing",
    "passage": "The band had played many concerts, but their biggest show was coming up soon. The singer was worried because of a new rule that restricted how many people can attend any given concert. All those who have tickets will be allowed to enter, but no one else will be allowed. The band, of course, were worried that they would not be able to fill the venue. What is the most likely reason why the writer used the word \"of course\"?",
    "questionText": "The phrase \"of course\" in this passage is most likely used to",
    "options": [
      "emphasize the speaker’s anxiety about the upcoming concert.",
      "show that the speaker is expressing a common opinion.",
      "suggest that the speaker feels confident about filling the venue.",
      "indicate that the speaker is making a general statement."
    ],
    "correctAnswer": "show that the speaker is expressing a common opinion."
  },
  {
    "id": "reading_44",
    "section": "Reading and Writing",
    "passage": "",
    "questionText": "Which choice correctly combines the two sentences into one grammatically correct sentence?  \n\n*The scientist discovered a new species of bacteria.*  *She named it after her hometown.*",
    "options": [
      "The scientist discovered a new species of bacteria, she named it after her hometown.",
      "The scientist discovered a new species of bacteria, and she named it after her hometown.",
      "The scientist discovered a new species of bacteria; she named it after her hometown.",
      "The scientist discovered a new species of bacteria, and named it after her hometown."
    ],
    "correctAnswer": "The scientist discovered a new species of bacteria, and she named it after her hometown."
  },
  {
    "id": "reading_45",
    "section": "Reading and Writing",
    "passage": "The following sentence contains an error in punctuation.  The sentence is:  \"As a young girl, Margaret was a precocious reader, voraciously devouring books on history, science, and literature— however, she preferred to read in secret, hiding away in quiet corners, so as to not be disturbed.\"  Which of the following is the best way to correct the error in the sentence?",
    "questionText": "Which of the following is the best way to correct the error in the sentence?",
    "options": [
      "As a young girl, Margaret was a precocious reader, voraciously devouring books on history, science, and literature; however, she preferred to read in secret, hiding away in quiet corners, so as to not be disturbed.",
      "As a young girl, Margaret was a precocious reader, voraciously devouring books on history, science, and literature, however, she preferred to read in secret, hiding away in quiet corners, so as to not be disturbed.",
      "As a young girl, Margaret was a precocious reader, voraciously devouring books on history, science, and literature, however, she preferred to read in secret, hiding away in quiet corners, so as to not be disturbed.",
      "As a young girl, Margaret was a precocious reader, voraciously devouring books on history, science, and literature—however, she preferred to read in secret, hiding away in quiet corners, so as to not be disturbed."
    ],
    "correctAnswer": "As a young girl, Margaret was a precocious reader, voraciously devouring books on history, science, and literature—however, she preferred to read in secret, hiding away in quiet corners, so as to not be disturbed."
  },
  {
    "id": "reading_46",
    "section": "Reading and Writing",
    "passage": "The two sentences below are combined incorrectly. Which choice best combines the two sentences into one grammatically correct sentence? \n\n1. The scientists worked to develop a new type of artificial muscle. \n2. This artificial muscle would be able to contract and expand with greater speed and strength than any natural muscle. ",
    "questionText": "Which choice best combines the two sentences into one grammatically correct sentence?",
    "options": [
      "The scientists worked to develop a new type of artificial muscle, which would be able to contract and expand with greater speed and strength than any natural muscle.",
      "The scientists worked to develop a new type of artificial muscle, and this artificial muscle would be able to contract and expand with greater speed and strength than any natural muscle.",
      "The scientists worked to develop a new type of artificial muscle; this artificial muscle would be able to contract and expand with greater speed and strength than any natural muscle.",
      "The scientists worked to develop a new type of artificial muscle, it would be able to contract and expand with greater speed and strength than any natural muscle."
    ],
    "correctAnswer": "The scientists worked to develop a new type of artificial muscle, which would be able to contract and expand with greater speed and strength than any natural muscle."
  },
  {
    "id": "reading_47",
    "section": "Reading and Writing",
    "passage": "The author’s main argument in this passage is that the internet has the potential to bring people closer together, creating a more interconnected world. They acknowledge that some people may be concerned about the negative impact of technology on relationships, but they argue that these concerns are ultimately unfounded. The author emphasizes the importance of face-to-face interaction, but they also argue that technology can help to facilitate and enhance those interactions. They conclude by suggesting that the internet is a powerful tool for building relationships and creating a more connected world. What is the central idea of this passage?",
    "questionText": "Which of the following statements best expresses the main idea of the passage?",
    "options": [
      "The internet can have a negative impact on relationships.",
      "The internet is a powerful tool for building relationships and creating a more connected world.",
      "The importance of face-to-face interaction is often overlooked in the digital age.",
      "Technology can facilitate and enhance face-to-face interactions."
    ],
    "correctAnswer": "The internet is a powerful tool for building relationships and creating a more connected world."
  },
  {
    "id": "reading_48",
    "section": "Reading and Writing",
    "passage": "The Great Wall of China, one of the most impressive feats of engineering in the world, was constructed over many centuries, and it’s a popular tourist destination, attracting millions of visitors each year. ",
    "questionText": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "options": [
      "And it is a popular tourist destination, attracting millions of visitors each year.",
      "As it is a popular tourist destination, attracting millions of visitors each year.",
      "It is a popular tourist destination, attracting millions of visitors each year.",
      "Because it is a popular tourist destination, attracting millions of visitors each year."
    ],
    "correctAnswer": "It is a popular tourist destination, attracting millions of visitors each year."
  },
  {
    "id": "reading_49",
    "section": "Reading and Writing",
    "passage": "The story of the Minotaur is a classic Greek myth, but like many stories, it has different versions.  In one version, the Minotaur was the son of King Minos and Pasiphae, and the result of a curse inflicted by Poseidon.  In another version, the Minotaur was the offspring of a bull that Minos had promised to sacrifice to Poseidon, but then decided to keep for himself.  King Minos was then punished by Poseidon when the bull impregnated Pasiphae, leading to the birth of the Minotaur.  The Minotaur was eventually killed by the hero Theseus. What is the main idea of the passage? ",
    "questionText": "What is the main idea of the passage? ",
    "options": [
      "The Minotaur was a fearsome creature that was eventually defeated by Theseus.",
      "There are different versions of the story of the Minotaur.",
      "King Minos was punished by Poseidon for his greed.",
      "The Minotaur was the result of a curse inflicted by Poseidon."
    ],
    "correctAnswer": "There are different versions of the story of the Minotaur."
  },
  {
    "id": "reading_50",
    "section": "Reading and Writing",
    "passage": "The passage details how the natural world is intricately connected and balanced. It describes how trees rely on fungi to survive and how fungi benefit from the trees. The passage suggests that the relationship between trees and fungi is a delicate one, and that disrupting it could have unforeseen consequences. What is the main idea of this passage?",
    "questionText": "The author of this passage is primarily concerned with",
    "options": [
      "the ways in which nature’s intricate balance is maintained.",
      "the symbiotic relationship between trees and fungi.",
      "the environmental impact of human activity on the forest ecosystem.",
      "the importance of preserving the forest for future generations."
    ],
    "correctAnswer": "the ways in which nature’s intricate balance is maintained."
  },
  {
    "id": "reading_51",
    "section": "Reading and Writing",
    "passage": "The 1930s saw a surge in interest in \"modern\" art, which was a break from the tradition of representing objects and scenes in a realistic way. This new style, ______ emphasized abstraction and nonrepresentational forms, appealing to viewers’ emotions rather than to their understanding of the world.",
    "questionText": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "however,",
      "moreover,",
      "instead,",
      "therefore,"
    ],
    "correctAnswer": "instead,"
  },
  {
    "id": "reading_52",
    "section": "Reading and Writing",
    "passage": "Many people believe that the use of social media can be detrimental to the development of a person's social skills. They cite that social media platforms are filled with \"performative\" interactions that encourage people to present an idealized version of themselves, which may cause anxiety and depression. However, studies have shown that some social media platforms can actually lead to increased levels of social interaction and deeper connection. This is likely because some platforms are designed to facilitate authentic self-expression and promote meaningful connections, while others focus on engaging with a wider audience. Ultimately, the effects of social media on social skills are complex and depend on individual choices and the platforms used.  Which sentence describes the most likely reason why the author uses the word “ultimately”?",
    "questionText": "In this passage, the word \"ultimately\" is used to",
    "options": [
      "emphasize the importance of personal choice in the development of social skills.",
      "suggest that the effects of social media on social skills are not well-understood.",
      "concede that there are some benefits to social media use despite the potential for harm.",
      "highlight the need for more research on the impact of social media on social skills."
    ],
    "correctAnswer": "emphasize the importance of personal choice in the development of social skills."
  },
  {
    "id": "reading_53",
    "section": "Reading and Writing",
    "passage": "The 19th century saw the rise of the novel, a genre that allowed writers to explore new forms of storytelling and character development.  Writers like Jane Austen and Charles Dickens used the novel to create vivid portraits of life in England, while American authors like Nathaniel Hawthorne and Herman Melville used it to explore themes of morality and the human condition.  However, the novel’s popularity was not without its critics, who argued that the genre was too sentimental and unrealistic.  Some critics even went so far as to say that the novel was nothing more than a form of escapism.  But despite the criticisms, the novel continued to thrive, and it has remained one of the most popular literary genres to this day.  Even today, writers are still using the novel to explore new ideas and to tell compelling stories.  Which of the following choices makes the most effective change to the third sentence of the passage?  ",
    "questionText": "Which choice makes the most effective change to the third sentence of the passage?",
    "options": [
      "However, the novel’s popularity was not without its critics; who argued that the genre was too sentimental and unrealistic.",
      "However, the novel’s popularity was not without its critics, who argued that the genre was too sentimental, and unrealistic.",
      "However, the novel’s popularity was not without its critics, who argued that the genre was too sentimental and unrealistic.",
      "However, the novel’s popularity was not without its critics, who argued that the genre was too sentimental and unrealistic."
    ],
    "correctAnswer": "However, the novel’s popularity was not without its critics, who argued that the genre was too sentimental and unrealistic."
  },
  {
    "id": "math_0",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 2x + 0 = 10. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_1",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 3x + 1 = 15. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_2",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 4x + 2 = 20. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_3",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 5x + 3 = 25. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_4",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 6x + 4 = 30. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_5",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 7x + 5 = 35. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_6",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 8x + 6 = 40. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_7",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 9x + 7 = 45. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_8",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 10x + 8 = 50. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_9",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 11x + 9 = 55. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_10",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 12x + 10 = 60. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_11",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 13x + 11 = 65. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_12",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 14x + 12 = 70. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_13",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 15x + 13 = 75. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_14",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 16x + 14 = 80. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_15",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 2x + 0 = 10. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_16",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 3x + 1 = 15. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_17",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 4x + 2 = 20. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_18",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 5x + 3 = 25. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_19",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 6x + 4 = 30. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_20",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 7x + 5 = 35. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_21",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 8x + 6 = 40. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_22",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 9x + 7 = 45. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_23",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 10x + 8 = 50. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_24",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 11x + 9 = 55. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_25",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 12x + 10 = 60. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_26",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 13x + 11 = 65. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_27",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 14x + 12 = 70. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_28",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 15x + 13 = 75. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_29",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 16x + 14 = 80. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_30",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 2x + 0 = 10. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_31",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 3x + 1 = 15. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_32",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 4x + 2 = 20. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_33",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 5x + 3 = 25. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_34",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 6x + 4 = 30. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_35",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 7x + 5 = 35. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_36",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 8x + 6 = 40. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_37",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 9x + 7 = 45. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_38",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 10x + 8 = 50. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_39",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 11x + 9 = 55. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_40",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 12x + 10 = 60. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_41",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 13x + 11 = 65. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_42",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 14x + 12 = 70. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "id": "math_43",
    "section": "Math",
    "passage": "",
    "questionText": "Solve the equation: 15x + 13 = 75. What is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2"
  }
];
