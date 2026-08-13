export interface Question {
  id: string;
  section: 'Reading and Writing' | 'Math';
  passage?: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export const mockQuestions: Question[] = [
  // --- READING AND WRITING (HARD) ---
  {
    id: "rw_1",
    section: "Reading and Writing",
    passage: "In 1910, sociologist W.E.B. Du Bois posited that the \"problem of the twentieth century is the problem of the color-line.\" Writing decades later, legal scholar Derrick Bell argued that despite the legislative victories of the civil rights movement, racial hierarchy in the United States remains fundamentally intractable, morphing in form but retaining its underlying structural significance. Bell’s theory of \"interest convergence\" contends that progress for marginalized groups only occurs when it aligns with the geopolitical and economic interests of the majority.",
    questionText: "Based on the text, how would Derrick Bell most likely respond to a claim that the legislative victories of the 1960s represented a permanent eradication of the \"color-line\" described by Du Bois?",
    options: [
      "He would disagree, asserting that such victories were merely temporary realignments of interests rather than a fundamental dismantling of structural hierarchy.",
      "He would agree, noting that the legislative successes fundamentally altered the economic interests of the majority.",
      "He would disagree, arguing that Du Bois's initial premise regarding the color-line was fundamentally flawed.",
      "He would partially agree, suggesting that while the color-line was eradicated, economic disparities remained intractable."
    ],
    correctAnswer: "He would disagree, asserting that such victories were merely temporary realignments of interests rather than a fundamental dismantling of structural hierarchy."
  },
  {
    id: "rw_2",
    section: "Reading and Writing",
    passage: "Ecologist Suzanne Simard’s research on the \"wood wide web\" has demonstrated that trees in a forest are not merely solitary individuals competing for resources, but are interconnected via a vast underground mycorrhizal network. Through this fungal network, older \"hub trees\" can identify their own kin, transfer carbon and nutrients to shaded understory saplings, and even send chemical warning signals when under attack by pathogens.",
    questionText: "Which finding, if true, would most directly support Simard’s conclusions regarding the function of \"hub trees\"?",
    options: [
      "Isotopes of carbon injected into a mature Douglas fir are later found in higher concentrations in neighboring saplings of the same species than in neighboring saplings of different species.",
      "Fungal networks in forests are largely composed of species that are parasitic, draining nutrients from mature trees to sustain themselves.",
      "Trees grown in isolated, sterile soil in a greenhouse exhibit faster initial growth rates than those grown in soil containing complex mycorrhizal networks.",
      "Pathogen warning signals transmitted through the air via volatile organic compounds are detected by both kin and non-kin trees equally."
    ],
    correctAnswer: "Isotopes of carbon injected into a mature Douglas fir are later found in higher concentrations in neighboring saplings of the same species than in neighboring saplings of different species."
  },
  {
    id: "rw_3",
    section: "Reading and Writing",
    passage: "While historians often characterize the Renaissance as a sudden intellectual awakening following the \"Dark Ages,\" medievalist scholars point out that this narrative obscures the profound intellectual continuity of the period. Monastic translation centers in the 12th century, for example, had already reintroduced Aristotle and Ptolemy to Western Europe long before Petrarch and his contemporaries popularized humanism.",
    questionText: "The passage primarily serves to:",
    options: [
      "Challenge a prevailing historical periodization by highlighting an earlier era of intellectual activity.",
      "Argue that the intellectual achievements of the Renaissance have been significantly overstated.",
      "Demonstrate that monastic institutions were the sole custodians of classical literature during the Middle Ages.",
      "Compare the philosophical differences between 12th-century scholars and Renaissance humanists."
    ],
    correctAnswer: "Challenge a prevailing historical periodization by highlighting an earlier era of intellectual activity."
  },
  {
    id: "rw_4",
    section: "Reading and Writing",
    passage: "Quantum entanglement—a phenomenon where particles remain interconnected such that the state of one instantaneously influences the state of another, regardless of distance—deeply troubled Albert Einstein, who referred to it as \"spooky action at a distance.\" Einstein believed that quantum mechanics must be an incomplete theory, arguing that hidden variables yet to be discovered would eventually explain the phenomenon without violating the principle of local realism.",
    questionText: "As used in the text, what does the phrase \"principle of local realism\" most nearly mean?",
    options: [
      "The concept that physical processes occurring at one location cannot instantaneously affect events at a distant location.",
      "The idea that particles possess definite properties only when they are actively being observed.",
      "The theory that the universe is governed by deterministic laws rather than probabilistic outcomes.",
      "The assumption that all physical phenomena can be explained through classical Newtonian mechanics."
    ],
    correctAnswer: "The concept that physical processes occurring at one location cannot instantaneously affect events at a distant location."
  },
  {
    id: "rw_5",
    section: "Reading and Writing",
    passage: "The proliferation of \"fast fashion\"—the rapid mass production of cheap, trend-driven clothing—has severe environmental consequences. Textile dyeing is the second largest polluter of water globally, and the synthetic fibers commonly used, such as polyester, shed microplastics into the oceans with every wash. ______ consumers are increasingly turning to sustainable fashion brands that prioritize ethical sourcing and circular production models.",
    questionText: "Which choice completes the text with the most logical transition?",
    options: [
      "Consequently,",
      "Furthermore,",
      "Nevertheless,",
      "In contrast,"
    ],
    correctAnswer: "Consequently,"
  },
  {
    id: "rw_6",
    section: "Reading and Writing",
    passage: "Architectural Brutalism, characterized by massive, monolithic forms and raw concrete surfaces, emerged in the mid-20th century as a functionalist response to the ornate styles of the past. While critics often decry Brutalist structures as cold and imposing, proponents argue that the style’s unpretentious use of materials embodies a democratic ethos, prioritizing spatial utility and civic purpose over superficial aesthetics.",
    questionText: "According to the text, how do proponents of Brutalism view the style's \"unpretentious use of materials\"?",
    options: [
      "As a reflection of a commitment to egalitarian and functional civic design.",
      "As an intentional effort to alienate the public from modern architectural spaces.",
      "As a necessary cost-saving measure in post-war urban reconstruction.",
      "As a rejection of the structural integrity prioritized by earlier architectural movements."
    ],
    correctAnswer: "As a reflection of a commitment to egalitarian and functional civic design."
  },
  {
    id: "rw_7",
    section: "Reading and Writing",
    passage: "To investigate the aerodynamic properties of pterosaur flight, paleobiologists have increasingly relied on computational fluid dynamics (CFD) modeling. By inputting 3D scans of well-preserved fossilized wing bones into CFD software, researchers can simulate airflow over the wings at various angles of attack. These simulations have revealed that the *Quetzalcoatlus*, despite its massive size, possessed a highly efficient glide ratio.",
    questionText: "Which choice best summarizes the main idea of the text?",
    options: [
      "Computer simulations of fossilized bones indicate that a massive extinct flying reptile was an efficient glider.",
      "The *Quetzalcoatlus* is the largest known flying reptile, making its aerodynamic properties difficult to study.",
      "Computational fluid dynamics is the only reliable method for studying the flight capabilities of extinct species.",
      "Researchers have discovered that pterosaurs possessed a glide ratio superior to that of modern birds."
    ],
    correctAnswer: "Computer simulations of fossilized bones indicate that a massive extinct flying reptile was an efficient glider."
  },
  {
    id: "rw_8",
    section: "Reading and Writing",
    passage: "The concept of \"neuroplasticity\" refers to the brain's ability to reorganize itself by forming new neural connections throughout life. This adaptability allows the neurons in the brain to compensate for injury and disease and to adjust their activities in response to new situations or to changes in their environment. Previously, scientists believed that the brain's structure was fixed after early childhood; ______, modern imaging techniques have conclusively shown that neurogenesis can occur even in older adults.",
    questionText: "Which choice completes the text with the most logical transition?",
    options: [
      "however",
      "therefore",
      "similarly",
      "for instance"
    ],
    correctAnswer: "however"
  },
  {
    id: "rw_9",
    section: "Reading and Writing",
    passage: "When analyzing the economic impact of automation, policymakers must distinguish between labor-substituting technologies, which displace workers, and labor-augmenting technologies, which enhance worker productivity. While the former can lead to short-term unemployment, the latter generally increases wages and demand for skilled labor. The historical transition from agrarian to industrial economies suggests that, over the long term, technological advancement predominantly generates labor-augmenting effects.",
    questionText: "Which conclusion is best supported by the passage?",
    options: [
      "Automation historically creates more highly paid jobs than it eliminates over a long period.",
      "Labor-substituting technologies have no lasting negative economic impacts on the workforce.",
      "The distinction between labor-substituting and labor-augmenting technologies is largely theoretical and difficult to apply in practice.",
      "Policymakers should actively restrict the development of labor-substituting technologies to prevent unemployment."
    ],
    correctAnswer: "Automation historically creates more highly paid jobs than it eliminates over a long period."
  },
  {
    id: "rw_10",
    section: "Reading and Writing",
    passage: "The novel's protagonist is defined by her profound ______, refusing to yield to the social expectations of her era even when her defiance results in severe personal isolation and financial ruin.",
    questionText: "Which choice completes the text with the most logical and precise word?",
    options: [
      "intransigence",
      "ambivalence",
      "obsequiousness",
      "garrulity"
    ],
    correctAnswer: "intransigence"
  },

  // --- MATH (HARD) ---
  {
    id: "m_1",
    section: "Math",
    questionText: "If 3x - y = 12 and (8^x) / (2^y) = 2^A, what is the value of A?",
    options: [
      "2",
      "4",
      "8",
      "12"
    ],
    correctAnswer: "12"
  },
  {
    id: "m_2",
    section: "Math",
    questionText: "In the xy-plane, a parabola has vertex (3, 1) and intersects the x-axis at two points. If the equation of the parabola is written in the form y = -ax^2 + bx + c, where a, b, and c are positive constants, which of the following could be the coordinates of one of the x-intercepts?",
    options: [
      "(1, 0)",
      "(3, 0)",
      "(0, 1)",
      "(6, 0)"
    ],
    correctAnswer: "(1, 0)"
  },
  {
    id: "m_3",
    section: "Math",
    questionText: "A right circular cone has a base radius of r and a height of h. If the radius is decreased by 20% and the height is increased by 50%, the volume of the new cone is what percent of the volume of the original cone?",
    options: [
      "96%",
      "120%",
      "130%",
      "80%"
    ],
    correctAnswer: "96%"
  },
  {
    id: "m_4",
    section: "Math",
    questionText: "The function f(x) = x^3 - px^2 + qx - 30 has three distinct positive integer roots. If p and q are positive integers, what is the value of p?",
    options: [
      "10",
      "8",
      "12",
      "15"
    ],
    correctAnswer: "10"
  },
  {
    id: "m_5",
    section: "Math",
    questionText: "A circle in the xy-plane has equation x^2 + y^2 - 10x + 8y = -5. What is the area of the circle?",
    options: [
      "36π",
      "41π",
      "81π",
      "16π"
    ],
    correctAnswer: "36π"
  },
  {
    id: "m_6",
    section: "Math",
    questionText: "If f(x) = a(x - h)^2 + k and f(2) = f(8) = 0, and the maximum value of f(x) is 18, what is the value of a?",
    options: [
      "-2",
      "-1",
      "-1/2",
      "-4"
    ],
    correctAnswer: "-2"
  },
  {
    id: "m_7",
    section: "Math",
    questionText: "A rational function is defined as g(x) = (kx^2 + 5x - 6) / (2x^2 - 3x + c). If the function has a horizontal asymptote at y = 3 and a vertical asymptote at x = 4, what is the value of c?",
    options: [
      "-20",
      "12",
      "-16",
      "8"
    ],
    correctAnswer: "-20"
  },
  {
    id: "m_8",
    section: "Math",
    questionText: "In a triangle ABC, the length of side AB is 8, the length of side BC is 15, and angle B is x degrees. If sin(x) = 4/5 and x is an obtuse angle, what is the length of side AC?",
    options: [
      "sqrt(433)",
      "17",
      "sqrt(529)",
      "sqrt(313)"
    ],
    correctAnswer: "sqrt(433)"
  },
  {
    id: "m_9",
    section: "Math",
    questionText: "The system of equations y = 2x^2 - 4x + 5 and y = kx + 3 has exactly one real solution. What is the value of k?",
    options: [
      "-4 or 4",
      "0 or 8",
      "-8 or 0",
      "-2 or 2"
    ],
    correctAnswer: "-8 or 0"
  },
  {
    id: "m_10",
    section: "Math",
    questionText: "A researcher is conducting a study using a sample of 400 individuals, yielding a margin of error of 5% at a 95% confidence level. If the researcher wants to reduce the margin of error to 2.5% while maintaining the same confidence level, approximately how many individuals must be in the new sample?",
    options: [
      "800",
      "1600",
      "1200",
      "2000"
    ],
    correctAnswer: "1600"
  }
];
