
import { TestData, Student, Review, StudentData } from './types.ts';

export const studentData: StudentData = {
  'WBJEE': [
    { name: 'Rohan Das', email: 'rohan.das@example.com', mobile: '1111111111' },
    { name: 'Priya Ghosh', email: 'priya.ghosh@example.com', mobile: '2222222222' },
  ],
  'CSIR NET': [
    { name: 'Dr. Anjali Sharma', email: 'anjali.sharma@example.com', mobile: '3333333333' },
    { name: 'Vikram Singh', email: 'vikram.singh@example.com', mobile: '4444444444' },
  ],
  'CUET PG': [
    { name: 'Neha Reddy', email: 'neha.reddy@example.com', mobile: '5555555555' },
    { name: 'Arjun Kumar', email: 'arjun.kumar@example.com', mobile: '6666666666' },
  ],
  'IIT JAM': [
    { name: 'Sameer Joshi', email: 'sameer.joshi@example.com', mobile: '7777777777' },
    { name: 'Kavita Iyer', email: 'kavita.iyer@example.com', mobile: '8888888888' },
  ],
  'JEE Mains': [
    { name: 'Aditya Verma', email: 'aditya.verma@example.com', mobile: '9999999999' },
    { name: 'Sneha Patil', email: 'sneha.patil@example.com', mobile: '1010101010' },
  ],
  'TGT-PGT': [
    { name: 'Mr. Rajesh Gupta', email: 'rajesh.gupta@example.com', mobile: '1212121212' },
    { name: 'Ms. Sunita Devi', email: 'sunita.devi@example.com', mobile: '1313131313' },
  ],
  'WBSLST 9-10': [
    { name: 'Amit Sarkar', email: 'amit.sarkar@example.com', mobile: '1414141414' },
    { name: 'Debjani Roy', email: 'debjani.roy@example.com', mobile: '1515151515' },
  ],
  'WBSLST 11-12': [
    { name: 'Sourav Banerjee', email: 'sourav.b@example.com', mobile: '1616161616' },
    { name: 'Ankita Chatterjee', email: 'ankita.c@example.com', mobile: '1717171717' },
  ]
};

export const studentReviews: Review[] = [
  { name: 'Rohan Dey', review: 'This platform is excellent for practicing math problems. The sections are well-organized and the interface is clean and easy to use. Highly recommended for exam preparation!' },
  { name: 'Priya Mukherjee', review: 'I used this app to prepare for my WBJEE exam, and it really helped. The questions are relevant and the instant feedback is a great feature. Thank you for this amazing tool!' },
  { name: 'Amit Das', review: 'The test sections are very useful. I especially like the variety of questions for each topic. A must-have for any student preparing for competitive exams.' },
];

export const testData: TestData = {
    'WBJEE': {
        'A.P., G.P., H.P.': {
            title: 'A.P., G.P., H.P. Test',
            description: 'Comprehensive test on polynomials, field theory, and algebraic structures.',
            time: '45 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q1',
                question: "The sum of the first 'n' terms of an arithmetic progression is given by $S_n = 3n^2 + 5n$. Find the common difference of the A.P.",
                options: ["2", "4", "6", "8"],
                answer: "6"
            }, {
                id: 'q2',
                question: "If the first term of a G.P. is 5 and the common ratio is 2, what is the 5th term?",
                options: ["40", "80", "100", "160"],
                answer: "80"
            }, {
                id: 'q3',
                question: "If the reciprocals of three numbers are in A.P., then the numbers are in...",
                options: ["A.P.", "G.P.", "H.P.", "None of these"],
                answer: "H.P."
            }, {
                id: 'q4',
                question: "What is the sum of the infinite series $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + ...$?",
                options: ["1", "2", "3", "$\\infty$"],
                answer: "2"
            }, {
                id: 'q5',
                question: "If the 3rd term of an A.P. is 12 and the 7th term is 24, what is the 10th term?",
                options: ["30", "33", "36", "39"],
                answer: "33"
            }, {
                id: 'q6',
                question: "In a G.P., if the ratio of the 6th term to the 3rd term is 8, what is the common ratio?",
                options: ["2", "3", "4", "5"],
                answer: "2"
            }, {
                id: 'q7',
                question: "The harmonic mean of two numbers 'a' and 'b' is...",
                options: ["$\\frac{a+b}{2}$", "$\\sqrt{ab}$", "$\\frac{2ab}{a+b}$", "$\\frac{a-b}{2}$"],
                answer: "$\\frac{2ab}{a+b}$"
            }, {
                id: 'q8',
                question: "For what value of x are the numbers $\\frac{-2}{7}$, x, $\\frac{-7}{2}$ in G.P.?",
                options: ["-1", "1", "$-\\frac{1}{7}$", "$\\frac{1}{7}$"],
                answer: "-1"
            }, {
                id: 'q9',
                question: "If 'a', 'b', 'c' are in H.P., then $\\frac{a}{b+c}$, $\\frac{b}{c+a}$, $\\frac{c}{a+b}$ are in...",
                options: ["A.P.", "G.P.", "H.P.", "None of these"],
                answer: "A.P."
            }, {
                id: 'q10',
                question: "The sum of first 20 terms of an A.P. is 400 and sum of first 40 terms is 1600. What is the sum of first 10 terms?",
                options: ["50", "100", "150", "200"],
                answer: "100"
            }, {
                id: 'q11',
                question: "The fourth term of an A.P. is 15. The sum of the first 9 terms of the A.P. is...",
                options: ["90", "135", "180", "165"],
                answer: "135"
            }, {
                id: 'q12',
                question: "If the ratio of the sum of the first n terms of two A.P.'s is $(7n+1):(4n+27)$, then the ratio of their 11th terms is...",
                options: ["$\\frac{134}{117}$", "$\\frac{135}{118}$", "$\\frac{112}{125}$", "$\\frac{148}{129}$"],
                answer: "$\\frac{148}{129}$"
            }, {
                id: 'q13',
                question: "If 'a', 'b', 'c' are in H.P., then $\\frac{a}{c}$ is...",
                options: ["$\\frac{a-b}{b-c}$", "$\\frac{b-c}{a-b}$", "$\\frac{a-c}{c-b}$", "$\\frac{b-c}{c-a}$"],
                answer: "$\\frac{a-b}{b-c}$"
            }, {
                id: 'q14',
                question: "The product of three terms in G.P. is 216 and the sum of their products taken in pairs is 156. The numbers are...",
                options: ["2, 6, 18", "1, 6, 36", "3, 6, 12", "6, 1, 36"],
                answer: "3, 6, 12"
            }, {
                id: 'q15',
                question: "The sum of n terms of two A.P.'s are in the ratio $(3n+8):(7n+15)$. Find the ratio of their 12th terms.",
                options: ["$\\frac{59}{109}$", "$\\frac{63}{114}$", "$\\frac{65}{117}$", "$\\frac{72}{121}$"],
                answer: "$\\frac{65}{117}$"
            }, {
                id: 'q16',
                question: "If $a, b, c$ are in A.P., then $a^3 + c^3 - 8b^3$ is equal to...",
                options: ["$2abc$", "$a^2+c^2$", "$-6abc$", "0"],
                answer: "0"
            }, {
                id: 'q17',
                question: "If the m-th term of an A.P. is n and the n-th term is m, then the r-th term is...",
                options: ["$m+n+r$", "$m+n-r$", "$m-n+r$", "$m-n-r$"],
                answer: "$m+n-r$"
            }, {
                id: 'q18',
                question: "The sum of a G.P. with common ratio 3 is 364. The last term is 243. The first term is...",
                options: ["1", "2", "3", "4"],
                answer: "1"
            }, {
                id: 'q19',
                question: "If the first and n-th term of a G.P. are 'a' and 'b' respectively, and if 'P' is the product of n terms, then $P^2$ is equal to...",
                options: ["$(ab)^n$", "$ab^n$", "$a^n b$", "$ab$"],
                answer: "$(ab)^n$"
            }, {
                id: 'q20',
                question: "If the sum of n terms of a series is $2n^2 + 5n$, then the series is...",
                options: ["A.P.", "G.P.", "H.P.", "None of these"],
                answer: "A.P."
            }]
        },
        'Logarithms': {
            title: 'Logarithms Test',
            description: 'Logarithm functions, properties, and their applications in problem-solving.',
            time: '30 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q1',
                question: "What is the value of $\\log_2(8)$?",
                options: ["2", "3", "4", "5"],
                answer: "3"
            }]
        },
        'Complex Numbers': {
            title: 'Complex Numbers Test',
            description: 'Operations, properties, and geometric representation of complex numbers.',
            time: '40 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q1',
                question: "The value of $i^{100}$ is...",
                options: ["1", "-1", "i", "-i"],
                answer: "1"
            }]
        },
        'Quadratic Equations': {
            title: 'Quadratic Equations Test',
            description: 'Solving quadratic equations, nature of roots, and related properties.',
            time: '30 min',
            difficulty: 'Easy',
            questions: [{
                id: 'q1',
                question: "The roots of the equation $x^2 - 5x + 6 = 0$ are...",
                options: ["(2, 3)", "(-2, 3)", "(2, -3)", "(-2, -3)"],
                answer: "(2, 3)"
            }]
        },
        'Permutations and Combinations': {
            title: 'Permutations and Combinations Test',
            description: 'Counting techniques, arrangements, and selections with or without repetition.',
            time: '45 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q1',
                question: "In how many ways can the letters of the word 'PENCIL' be arranged?",
                options: ["720", "120", "24", "72"],
                answer: "720"
            }]
        },
        'Principle of Mathematical Induction': {
            title: 'Mathematical Induction Test',
            description: 'Proof by mathematical induction for various series and statements.',
            time: '30 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q1',
                question: "For a statement $P(n)$, if $P(k)$ is true, we must show that $P(k+1)$ is also true. This is called the...",
                options: ["Base case", "Inductive hypothesis", "Inductive step", "Conclusion"],
                answer: "Inductive step"
            }]
        },
        'Binomial Theorem': {
            title: 'Binomial Theorem Test',
            description: 'Binomial expansion, general term, and finding specific coefficients.',
            time: '40 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q1',
                question: "The number of terms in the expansion of $(x+y)^{10}$ is...",
                options: ["10", "11", "9", "20"],
                answer: "11"
            }]
        },
        'Matrix Theory & Linear Systems': {
            title: 'Matrix Theory & Linear Systems',
            description: 'Comprehensive test on matrix operations, eigenvalues, and linear transformations.',
            time: '40 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q1',
                question: "If $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$, what is the value of $|A|$?",
                options: ["11", "5", "8", "6"],
                answer: "5"
            }]
        },
        'Modern Algebra - Group Theory': {
            title: 'Modern Algebra - Group Theory',
            description: 'Rigorous analysis on group theory, ring theory, and abstract algebraic structures.',
            time: '50 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q1',
                question: "A group with a finite number of elements is called a...",
                options: ["Finite group", "Abelian group", "Cyclic group", "Infinite group"],
                answer: "Finite group"
            }]
        },
        'Sets, Relations and Functions': {
            title: 'Sets, Relations and Functions Test',
            description: 'Basic set theory, types of relations and functions, and their properties.',
            time: '35 min',
            difficulty: 'Easy',
            questions: [{
                id: 'q1',
                question: "If $A = \\{1, 2, 3\\}$ and $B = \\{3, 4, 5\\}$, what is $A \\cup B$?",
                options: ["$\\{3\\}$", "$\\{1, 2, 4, 5\\}$", "$\\{1, 2, 3, 4, 5\\}$", "$\\{1, 2, 3\\}$"],
                answer: "$\\{1, 2, 3, 4, 5\\}$"
            }]
        },
        'Statistics and Probability': {
            title: 'Statistics and Probability Test',
            description: 'Probability theory, mean, median, mode, and standard deviation.',
            time: '45 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q1',
                question: "What is the probability of rolling a '6' on a standard six-sided die?",
                options: ["$\\frac{1}{2}$", "$\\frac{1}{6}$", "$\\frac{5}{6}$", "1"],
                answer: "$\\frac{1}{6}$"
            }]
        },
        'Trigonometric Functions': {
            title: 'Trigonometric Functions Test',
            description: 'Trigonometric ratios, identities, and their graphs.',
            time: '30 min',
            difficulty: 'Easy',
            questions: [{
                id: 'q1',
                question: "What is the value of $\\sin(30^\\circ)$?",
                options: ["$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "1", "0"],
                answer: "$\\frac{1}{2}$"
            }]
        },
        'Solution of Triangles': {
            title: 'Solution of Triangles Test',
            description: 'Solving triangles using sine, cosine, and tangent rules.',
            time: '45 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q1',
                question: "In a triangle with sides a, b, and c, and angle A opposite to side a, the Law of Sines is given by...",
                options: ["$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$", "$a^2 = b^2 + c^2 - 2bc\\cos A$", "$a+b > c$", "$\\frac{1}{2}ab\\sin C$"],
                answer: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$"
            }]
        },
        'Inverse Trigonometric Functions': {
            title: 'Inverse Trigonometric Functions Test',
            description: 'Principal values, properties, and graphs of inverse trigonometric functions.',
            time: '30 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q1',
                question: "The value of $\\sin^{-1}(\\frac{1}{2})$ is...",
                options: ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"],
                answer: "$30^\\circ$"
            }]
        },
        'Straight Lines': {
            title: 'Straight Lines Test',
            description: 'Equations of lines, slopes, and distance between points.',
            time: '25 min',
            difficulty: 'Easy',
            questions: [{
                id: 'q1',
                question: "The slope of the line passing through points $(2, 3)$ and $(4, 7)$ is...",
                options: ["2", "-2", "$\\frac{1}{2}$", "$\\frac{3}{2}$"],
                answer: "2"
            }]
        },
        'Circles': {
            title: 'Circles Test',
            description: 'Equations of circles, tangents, and normals.',
            time: '30 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q1',
                question: "The equation of a circle with center $(0, 0)$ and radius 5 is...",
                options: ["$x^2 + y^2 = 5$", "$x^2 + y^2 = 25$", "$x^2 - y^2 = 25$", "$x+y=5$"],
                answer: "$x^2 + y^2 = 25$"
            }]
        },
        'Conic Sections': {
            title: 'Conic Sections Test',
            description: 'Parabola, ellipse, and hyperbola equations, properties, and eccentricity.',
            time: '45 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q1',
                question: "The eccentricity of a parabola is...",
                options: ["0", "1", "$<1$", "$>1$"],
                answer: "1"
            }]
        },
        'Limits and Continuity': {
            title: 'Limits and Continuity Test',
            description: 'Evaluating limits, continuity of functions, and types of discontinuities.',
            time: '35 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q1',
                question: "What is the value of $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$?",
                options: ["0", "2", "4", "$\\infty$"],
                answer: "4"
            }]
        },
        'Derivatives': {
            title: 'Derivatives Test',
            description: 'Differentiation, chain rule, and derivatives of various functions.',
            time: '30 min',
            difficulty: 'Easy',
            questions: [{
                id: 'q1',
                question: "The derivative of $f(x) = x^3$ is...",
                options: ["$3x$", "$3x^2$", "$x^2$", "$x^4/4$"],
                answer: "$3x^2$"
            }]
        },
        'Application of Derivatives': {
            title: 'Application of Derivatives Test',
            description: 'Tangent, normal, maxima, minima, and rate of change problems.',
            time: '40 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q1',
                question: "The maximum value of the function $f(x) = -x^2 + 4x - 3$ is...",
                options: ["-1", "1", "3", "0"],
                answer: "1"
            }]
        },
        'Indefinite Integrals': {
            title: 'Indefinite Integrals Test',
            description: 'Integration methods, properties, and basic integrals.',
            time: '35 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q1',
                question: "The indefinite integral of $\\sin(x)$ is...",
                options: ["$\\cos(x) + C$", "$-\\cos(x) + C$", "$-\\sin(x) + C$", "$\\sin(x) + C$"],
                answer: "$-\\cos(x) + C$"
            }]
        },
        'Definite Integrals': {
            title: 'Definite Integrals Test',
            description: 'Definite integrals, fundamental theorem of calculus, and their properties.',
            time: '45 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q1',
                question: "The value of $\\int_0^1 x^2 dx$ is...",
                options: ["$\\frac{1}{3}$", "1", "0", "$\\frac{1}{2}$"],
                answer: "$\\frac{1}{3}$"
            }]
        },
        'Application of Integrals': {
            title: 'Application of Integrals Test',
            description: 'Finding area under curves, volume of revolution, and mean value theorems.',
            time: '40 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q1',
                question: "The area of the region bounded by $y=x^2$, the x-axis, and the line $x=2$ is...",
                options: ["$\\frac{8}{3}$", "4", "2", "8"],
                answer: "$\\frac{8}{3}$"
            }]
        },
        'Differential Equations': {
            title: 'Differential Equations Test',
            description: 'Order and degree, formation, and solution of differential equations.',
            time: '45 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q1',
                question: "The degree of the differential equation $(\\frac{dy}{dx})^2 + x = y$ is...",
                options: ["1", "2", "0", "Not defined"],
                answer: "2"
            }]
        },
        'Three Dimensional Geometry': {
            title: 'Three Dimensional Geometry Test',
            description: 'Points, lines, planes in 3D space, and distance formulas.',
            time: '35 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q1',
                question: "The distance between the points $(1, 2, 3)$ and $(4, 5, 6)$ is...",
                options: ["$\\sqrt{3}$", "$3\\sqrt{3}$", "3", "$\\sqrt{27}$"],
                answer: "$3\\sqrt{3}$"
            }]
        },
        'Vector Algebra': {
            title: 'Vector Algebra Test',
            description: 'Vector operations, dot product, cross product, and their applications.',
            time: '40 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q1',
                question: "If $\\vec{a} = \\hat{i} + 2\\hat{j} + 3\\hat{k}$ and $\\vec{b} = 3\\hat{i} - 2\\hat{j} + \\hat{k}$, then $\\vec{a} \\cdot \\vec{b}$ is...",
                options: ["0", "1", "2", "3"],
                answer: "2"
            }]
        }
    },
    'CSIR NET': {
        '': {
            title: 'Coming Soon',
            description: 'This section will contain mock tests for CSIR NET.',
            time: 'N/A',
            difficulty: 'N/A',
            questions: []
        }
    },
    'CUET PG': {
        '': {
            title: 'Coming Soon',
            description: 'This section will contain mock tests for CUET PG.',
            time: 'N/A',
            difficulty: 'N/A',
            questions: []
        }
    },
    'IIT JAM': {
        '': {
            title: 'Coming Soon',
            description: 'This section will contain mock tests for IIT JAM.',
            time: 'N/A',
            difficulty: 'N/A',
            questions: []
        }
    },
    'JEE Mains': {
        '': {
            title: 'Coming Soon',
            description: 'This section will contain mock tests for JEE Mains.',
            time: 'N/A',
            difficulty: 'N/A',
            questions: []
        }
    },
    'TGT-PGT': {
        '': {
            title: 'Coming Soon',
            description: 'This section will contain mock tests for TGT-PGT.',
            time: 'N/A',
            difficulty: 'N/A',
            questions: []
        }
    },
    'WBSLST 9-10': {
        'Complex Numbers': {
            title: 'Complex Numbers Mock Test (9-10)',
            description: 'A test on operations, properties, and geometric representation of complex numbers.',
            time: '30 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst9-10-cn1',
                question: "The modulus of the complex number $z = 3 + 4i$ is...",
                options: ["3", "4", "5", "$\\sqrt{7}$"],
                answer: "5"
            }, {
                id: 'q-wbslst9-10-cn2',
                question: "What is the principal argument of the complex number $z = -1 + i$?",
                options: ["$\\frac{\\pi}{4}$", "$-\\frac{3\\pi}{4}$", "$\\frac{3\\pi}{4}$", "$-\\frac{\\pi}{4}$"],
                answer: "$\\frac{3\\pi}{4}$"
            }]
        },
        'Inequalities': {
            title: 'Inequalities Mock Test (9-10)',
            description: 'A test on solving linear and quadratic inequalities and their properties.',
            time: '25 min',
            difficulty: 'Easy',
            questions: [{
                id: 'q-wbslst9-10-in1',
                question: "The solution set for the inequality $2x - 5 < 7$ is...",
                options: ["$x > 6$", "$x < 6$", "$x > 1$", "$x < 1$"],
                answer: "$x < 6$"
            }, {
                id: 'q-wbslst9-10-in2',
                question: "The solution set for the inequality $(x-1)(x-3) > 0$ is...",
                options: ["$(1, 3)$", "$[1, 3]$", "$(- \\infty, 1) \\cup (3, \\infty)$", "None of these"],
                answer: "$(- \\infty, 1) \\cup (3, \\infty)$"
            }]
        },
        'Theory of Equations': {
            title: 'Theory of Equations Mock Test (9-10)',
            description: 'A test on the properties of roots of polynomial equations.',
            time: '30 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst9-10-te1',
                question: "If $\\alpha$ and $\\beta$ are the roots of the equation $x^2 - 5x + 6 = 0$, then the value of $\\alpha + \\beta$ is...",
                options: ["5", "-5", "6", "-6"],
                answer: "5"
            }, {
                id: 'q-wbslst9-10-te2',
                question: "For the equation $x^3 - 4x^2 + x - 4 = 0$, if the sum of two roots is zero, the roots are...",
                options: ["(1, -1, 4)", "(2, -2, 4)", "(1, -1, 2)", "(-1, 1, 4)"],
                answer: "(1, -1, 4)"
            }]
        },
        'Matrix Theory and Linear Algebra': {
            title: 'Matrix Theory & Linear Algebra (9-10)',
            description: 'A test on matrix operations, determinants, and basic linear systems.',
            time: '40 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst9-10-ma1',
                question: "If $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 1 & 0 \\\\ 2 & 5 \\end{pmatrix}$, then $A+B$ is...",
                options: ["$\\begin{pmatrix} 3 & 3 \\\\ 3 & 9 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 0 \\\\ 2 & 20 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 0 \\\\ 2 & 20 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ 3 & 20 \\end{pmatrix}$"],
                answer: "$\\begin{pmatrix} 3 & 3 \\\\ 3 & 9 \\end{pmatrix}$"
            }, {
                id: 'q-wbslst9-10-ma2',
                question: "The determinant of the matrix $\\begin{pmatrix} 3 & 5 \\\\ 2 & 1 \\end{pmatrix}$ is...",
                options: ["-7", "7", "13", "-13"],
                answer: "-7"
            }]
        },
        'Integers': {
            title: 'Integers Mock Test (9-10)',
            description: 'A test on the properties of integers, including divisibility and prime numbers.',
            time: '20 min',
            difficulty: 'Easy',
            questions: [{
                id: 'q-wbslst9-10-int1',
                question: "Which of the following numbers is a prime number?",
                options: ["27", "39", "41", "51"],
                answer: "41"
            }, {
                id: 'q-wbslst9-10-int2',
                question: "The value of $(15 \\pmod 4)$ is...",
                options: ["1", "2", "3", "4"],
                answer: "3"
            }]
        },
        'Abstract Algebra': {
            title: 'Abstract Algebra Mock Test (9-10)',
            description: 'A test on basic concepts of group theory and rings.',
            time: '40 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst9-10-aa1',
                question: "Which of the following is not a group under addition?",
                options: ["Integers", "Rational numbers", "Natural numbers", "Real numbers"],
                answer: "Natural numbers"
            }, {
                id: 'q-wbslst9-10-aa2',
                question: "The set of all non-zero rational numbers forms a group under multiplication. The identity element is...",
                options: ["0", "1", "-1", "Not defined"],
                answer: "1"
            }]
        },
        'Real Analysis': {
            title: 'Real Analysis Mock Test (9-10)',
            description: 'A test on sequences, series, and continuity in real numbers.',
            time: '45 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst9-10-ra1',
                question: "The sequence $a_n = \\frac{1}{n}$ is...",
                options: ["Convergent to 1", "Divergent", "Convergent to 0", "Oscillating"],
                answer: "Convergent to 0"
            }, {
                id: 'q-wbslst9-10-ra2',
                question: "The series $\\sum_{n=1}^{\\infty} \\frac{1}{n}$ is...",
                options: ["Convergent", "Divergent", "Conditionally convergent", "Absolutely convergent"],
                answer: "Divergent"
            }]
        },
        'Differential Calculus': {
            title: 'Differential Calculus Mock Test (9-10)',
            description: 'A test on derivatives, chain rule, and limits.',
            time: '35 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst9-10-dc1',
                question: "The derivative of $f(x) = \\sin(x^2)$ is...",
                options: ["$\\cos(x^2)$", "$2x\\cos(x^2)$", "$2x\\sin(x^2)$", "$-2x\\cos(x^2)$"],
                answer: "$2x\\cos(x^2)$"
            }, {
                id: 'q-wbslst9-10-dc2',
                question: "If $y = e^{3x}$, then $\\frac{dy}{dx}$ is...",
                options: ["$3e^{3x}$", "$e^{3x}$", "$\\frac{1}{3}e^{3x}$", "$e^x$"],
                answer: "$3e^{3x}$"
            }]
        },
        'Ordinary Differential Equation': {
            title: 'Ordinary Differential Equation (9-10)',
            description: 'A test on the order, degree, and solution of ODEs.',
            time: '40 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst9-10-ode1',
                question: "The degree of the differential equation $(\\frac{d^2y}{dx^2})^3 + x(\\frac{dy}{dx}) - 5y = 0$ is...",
                options: ["1", "2", "3", "Undefined"],
                answer: "3"
            }, {
                id: 'q-wbslst9-10-ode2',
                question: "The general solution of the differential equation $\\frac{dy}{dx} = 2x$ is...",
                options: ["$y = x^2$", "$y = 2x$", "$y = x^2 + C$", "$y = 2x + C$"],
                answer: "$y = x^2 + C$"
            }]
        },
        'Function of Several Variables': {
            title: 'Function of Several Variables (9-10)',
            description: 'A test on partial derivatives and multivariable functions.',
            time: '35 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst9-10-fsv1',
                question: "If $f(x, y) = x^2 + 3xy + y^2$, then $\\frac{\\partial f}{\\partial x}$ is...",
                options: ["$2x+y$", "$2x+3y$", "$x^2+3x$", "$3y+y^2$"],
                answer: "$2x+3y$"
            }, {
                id: 'q-wbslst9-10-fsv2',
                question: "Given $f(x,y) = e^{xy}$, find $\\frac{\\partial f}{\\partial y}$",
                options: ["$e^{xy}$", "$x e^{xy}$", "$y e^{xy}$", "$xy e^{xy}$"],
                answer: "$x e^{xy}$"
            }]
        },
        'Geometry': {
            title: 'Geometry Mock Test (9-10)',
            description: 'A test on coordinate geometry, lines, and circles.',
            time: '30 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst9-10-geo1',
                question: "The distance between the points $(1, 2)$ and $(4, 6)$ is...",
                options: ["3", "4", "5", "$5\\sqrt{2}$"],
                answer: "5"
            }, {
                id: 'q-wbslst9-10-geo2',
                question: "The slope of the line perpendicular to the line $y = 2x + 3$ is...",
                options: ["2", "-2", "$\\frac{1}{2}$", "$-\\frac{1}{2}$"],
                answer: "$-\\frac{1}{2}$"
            }]
        },
        'Vector Algebra': {
            title: 'Vector Algebra Mock Test (9-10)',
            description: 'A test on vector operations, including dot and cross products.',
            time: '35 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst9-10-va1',
                question: "If $\\vec{a} = \\hat{i} + 2\\hat{j}$ and $\\vec{b} = 3\\hat{i} - \\hat{j}$, then the dot product $\\vec{a} \\cdot \\vec{b}$ is...",
                options: ["1", "5", "$\\sqrt{10}$", "$\\sqrt{50}$"],
                answer: "1"
            }, {
                id: 'q-wbslst9-10-va2',
                question: "The magnitude of the vector $\\vec{v} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$ is...",
                options: ["$\\sqrt{11}$", "11", "$\\sqrt{49}$", "7"],
                answer: "7"
            }]
        },
        'LPP': {
            title: 'LPP Mock Test (9-10)',
            description: 'A test on Linear Programming Problems, including feasible regions and optimization.',
            time: '35 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst9-10-lpp1',
                question: "The feasible region of a set of constraints is the set of points that...",
                options: ["Maximize the objective function", "Satisfy all the constraints simultaneously", "Lie on the x-axis", "Lie on the y-axis"],
                answer: "Satisfy all the constraints simultaneously"
            }, {
                id: 'q-wbslst9-10-lpp2',
                question: "For a linear programming problem, the objective function is a...",
                options: ["Quadratic function", "Cubic function", "Linear function", "Exponential function"],
                answer: "Linear function"
            }]
        },
        'Numerical Analysis': {
            title: 'Numerical Analysis Mock Test (9-10)',
            description: 'A test on numerical methods for solving equations and integration.',
            time: '40 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst9-10-na1',
                question: "The Newton-Raphson method is an iterative method for finding...",
                options: ["Integrals", "Derivatives", "Roots of an equation", "Area under a curve"],
                answer: "Roots of an equation"
            }, {
                id: 'q-wbslst9-10-na2',
                question: "The trapezoidal rule for numerical integration gives an exact value for...",
                options: ["Linear functions", "Quadratic functions", "Cubic functions", "All of the above"],
                answer: "Linear functions"
            }]
        },
        'Probability and Statistics': {
            title: 'Probability & Statistics Mock Test (9-10)',
            description: 'A test on probability theory, mean, median, and mode.',
            time: '45 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst9-10-ps1',
                question: "If a fair coin is tossed three times, what is the probability of getting exactly two heads?",
                options: ["$\\frac{1}{8}$", "$\\frac{3}{8}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$"],
                answer: "$\\frac{3}{8}$"
            }, {
                id: 'q-wbslst9-10-ps2',
                question: "The mean of the numbers 2, 4, 6, 8, 10 is...",
                options: ["4", "6", "8", "5"],
                answer: "6"
            }]
        },
        'Dynamics': {
            title: 'Dynamics Mock Test (9-10)',
            description: 'A test on forces, motion, and energy in classical mechanics.',
            time: '45 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst9-10-dyn1',
                question: "A body of mass 5 kg is moving with a velocity of 10 m/s. Its kinetic energy is...",
                options: ["25 J", "50 J", "250 J", "500 J"],
                answer: "250 J"
            }, {
                id: 'q-wbslst9-10-dyn2',
                question: "A particle is projected vertically upwards with an initial velocity of 20 m/s. The maximum height it reaches is... (Take $g = 10 m/s^2$)",
                options: ["10 m", "20 m", "30 m", "25 m"],
                answer: "20 m"
            }]
        },
        'Full Length Test': {
            title: 'Full Length Test (9-10)',
            description: 'A comprehensive mock test covering all topics for WBSLST 9-10.',
            time: '120 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst9-10-flt1',
                question: "If $f(x) = x^2$ and $g(x) = 2x+1$, then the value of $(f \\circ g)(2)$ is...",
                options: ["5", "9", "12", "25"],
                answer: "25"
            }, {
                id: 'q-wbslst9-10-flt2',
                question: "The value of $\\lim_{x \\to 0} \\frac{\\sin(2x)}{x}$ is...",
                options: ["0", "1", "2", "$\\infty$"],
                answer: "2"
            }]
        }
    },
    'WBSLST 11-12': {
        'Complex Numbers': {
            title: 'Complex Numbers Mock Test (11-12)',
            description: 'A test on advanced topics in complex numbers, including De Moivre\'s theorem and roots of unity.',
            time: '35 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst11-12-cn1',
                question: "The value of $(1 + i)^{10}$ is...",
                options: ["$32i$", "$-32i$", "$32$", "$-32$"],
                answer: "$32i$"
            }, {
                id: 'q-wbslst11-12-cn2',
                question: "The fifth roots of unity are...",
                options: ["$e^{\\frac{2k\\pi i}{5}}$ where $k=0,1,2,3,4$", "$e^{\\frac{k\\pi i}{5}}$ where $k=0,1,2,3,4$", "$e^{\\frac{i\\theta}{5}}$ where $\\theta = 0, \\frac{2\\pi}{5}, ...$", "None of these"],
                answer: "$e^{\\frac{2k\\pi i}{5}}$ where $k=0,1,2,3,4$"
            }]
        },
        'Inequalities': {
            title: 'Inequalities Mock Test (11-12)',
            description: 'A test on solving advanced inequalities, including absolute value and rational inequalities.',
            time: '30 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst11-12-in1',
                question: "The solution set for $|2x - 1| > 3$ is...",
                options: ["$(- \\infty, -1) \\cup (2, \\infty)$", "$(- \\infty, -1)$", "$(2, \\infty)$", "None of these"],
                answer: "$(- \\infty, -1) \\cup (2, \\infty)$"
            }, {
                id: 'q-wbslst11-12-in2',
                question: "The solution set for the inequality $\\frac{x-2}{x+3} < 0$ is...",
                options: ["$(-3, 2)$", "$(- \\infty, -3) \\cup (2, \\infty)$", "$(-2, 3)$", "None of these"],
                answer: "$(-3, 2)$"
            }]
        },
        'Theory of Equations': {
            title: 'Theory of Equations Mock Test (11-12)',
            description: 'A test on finding roots and properties of polynomial equations with higher degrees.',
            time: '35 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst11-12-te1',
                question: "If $\\alpha, \\beta, \\gamma$ are the roots of $x^3 - 6x^2 + 11x - 6 = 0$, then the value of $\\alpha\\beta\\gamma$ is...",
                options: ["6", "-6", "11", "-11"],
                answer: "6"
            }, {
                id: 'q-wbslst11-12-te2',
                question: "For a polynomial equation with real coefficients, if $3+4i$ is a root, then another root is...",
                options: ["$3-4i$", "$4+3i$", "$4-3i$", "$-3-4i$"],
                answer: "$3-4i$"
            }]
        },
        'Matrix Theory and Linear Algebra': {
            title: 'Matrix Theory & Linear Algebra (11-12)',
            description: 'A test on eigenvalues, eigenvectors, and matrix diagonalization.',
            time: '45 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst11-12-ma1',
                question: "For the matrix $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, the eigenvalues are...",
                options: ["1, 3", "1, -3", "2, 1", "-2, -1"],
                answer: "1, 3"
            }, {
                id: 'q-wbslst11-12-ma2',
                question: "The rank of the matrix $\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 6 & 9 \\end{pmatrix}$ is...",
                options: ["1", "2", "3", "0"],
                answer: "1"
            }]
        },
        'Integers': {
            title: 'Integers Mock Test (11-12)',
            description: 'A test on advanced integer theory, including Diophantine equations and number theory.',
            time: '25 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst11-12-int1',
                question: "If $a \\equiv b \\pmod{n}$, then for any integer $c$, which is not true?",
                options: ["$a+c \\equiv b+c \\pmod{n}$", "$ac \\equiv bc \\pmod{n}$", "$a/c \\equiv b/c \\pmod{n}$", "$a^k \\equiv b^k \\pmod{n}$ for $k \\geq 1$"],
                answer: "$a/c \\equiv b/c \\pmod{n}$"
            }, {
                id: 'q-wbslst11-12-int2',
                question: "The number of positive integers less than 100 which are not divisible by 2, 3, or 5 is...",
                options: ["26", "27", "28", "29"],
                answer: "26"
            }]
        },
        'Abstract Algebra': {
            title: 'Abstract Algebra Mock Test (11-12)',
            description: 'A test on subgroups, group homomorphisms, and ring properties.',
            time: '50 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst11-12-aa1',
                question: "The set of all even integers forms a subgroup of the group of integers under addition. The order of this subgroup is...",
                options: ["2", "Finite", "Infinite", "0"],
                answer: "Infinite"
            }, {
                id: 'q-wbslst11-12-aa2',
                question: "The kernel of a group homomorphism from $G$ to $G'$ is a...",
                options: ["Subgroup of G'", "Subgroup of G", "Normal subgroup of G", "Ring"],
                answer: "Normal subgroup of G"
            }]
        },
        'Real Analysis': {
            title: 'Real Analysis Mock Test (11-12)',
            description: 'A test on concepts of uniform continuity, Riemann integration, and metric spaces.',
            time: '50 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst11-12-ra1',
                question: "A function $f: \\mathbb{R} \\to \\mathbb{R}$ is uniformly continuous on a closed interval $[a, b]$ if it is...",
                options: ["Continuous", "Differentiable", "Bounded", "None of these"],
                answer: "Continuous"
            }, {
                id: 'q-wbslst11-12-ra2',
                question: "A function $f$ is Riemann integrable on $[a,b]$ if and only if...",
                options: ["The upper and lower Darboux sums are equal", "The function is continuous", "The function is monotonic", "The function is differentiable"],
                answer: "The upper and lower Darboux sums are equal"
            }]
        },
        'Differential Calculus': {
            title: 'Differential Calculus Mock Test (11-12)',
            description: 'A test on higher-order derivatives, L\'Hôpital\'s rule, and applications.',
            time: '40 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst11-12-dc1',
                question: "If $y = \\ln(x)$, then $\\frac{d^2y}{dx^2}$ is...",
                options: ["$\\frac{1}{x}$", "$-\\frac{1}{x}$", "$-\\frac{1}{x^2}$", "$\\frac{1}{x^2}$"],
                answer: "$-\\frac{1}{x^2}$"
            }, {
                id: 'q-wbslst11-12-dc2',
                question: "The value of $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$ using L'Hôpital's rule is...",
                options: ["0", "1", "e", "$\\infty$"],
                answer: "1"
            }]
        },
        'Ordinary Differential Equation': {
            title: 'Ordinary Differential Equation (11-12)',
            description: 'A test on solving higher-order linear ODEs and series solutions.',
            time: '45 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst11-12-ode1',
                question: "The auxiliary equation for the differential equation $\\frac{d^2y}{dx^2} + 4y = 0$ is...",
                options: ["$m^2+4=0$", "$m+4=0$", "$m^2-4=0$", "None of these"],
                answer: "$m^2+4=0$"
            }, {
                id: 'q-wbslst11-12-ode2',
                question: "The general solution of the differential equation $\\frac{dy}{dx} = y$ is...",
                options: ["$y=Cx$", "$y=e^x$", "$y=Ce^x$", "$y=e^{-x}$"],
                answer: "$y=Ce^x$"
            }]
        },
        'Function of Several Variables': {
            title: 'Function of Several Variables (11-12)',
            description: 'A test on higher-order partial derivatives and Jacobian.',
            time: '40 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst11-12-fsv1',
                question: "If $f(x, y) = x^3 + y^3 - 3xy$, then $\\frac{\\partial^2 f}{\\partial x^2}$ is...",
                options: ["$3x^2$", "$6x$", "$3y^2$", "$6y$"],
                answer: "$6x$"
            }, {
                id: 'q-wbslst11-12-fsv2',
                question: "The Jacobian of the transformation $x=r\\cos\\theta$, $y=r\\sin\\theta$ is...",
                options: ["1", "$r$", "$\\cos\\theta$", "$\\sin\\theta$"],
                answer: "$r$"
            }]
        },
        'Geometry': {
            title: 'Geometry Mock Test (11-12)',
            description: 'A test on 3D geometry, including lines, planes, and spheres.',
            time: '35 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst11-12-geo1',
                question: "The equation of the sphere with center $(1, 2, 3)$ and radius 5 is...",
                options: ["$(x-1)^2 + (y-2)^2 + (z-3)^2 = 5$", "$(x+1)^2 + (y+2)^2 + (z+3)^2 = 25$", "$(x-1)^2 + (y-2)^2 + (z-3)^2 = 25$", "$x^2+y^2+z^2=25$"],
                answer: "$(x-1)^2 + (y-2)^2 + (z-3)^2 = 25$"
            }, {
                id: 'q-wbslst11-12-geo2',
                question: "The angle between the planes $x+y+2z=3$ and $2x-y+z=5$ is...",
                options: ["$0^\\circ$", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$"],
                answer: "$90^\\circ$"
            }]
        },
        'Vector Algebra': {
            title: 'Vector Algebra Mock Test (11-12)',
            description: 'A test on scalar triple product, vector triple product, and their applications.',
            time: '40 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst11-12-va1',
                question: "The scalar triple product $[\\vec{a} \\vec{b} \\vec{c}]$ represents the volume of a...",
                options: ["Cube", "Cuboid", "Parallelepiped", "Tetrahedron"],
                answer: "Parallelepiped"
            }, {
                id: 'q-wbslst11-12-va2',
                question: "If $\\vec{a} = \\hat{i}$, $\\vec{b} = \\hat{j}$, $\\vec{c} = \\hat{k}$, then $\\vec{a} \\times (\\vec{b} \\times \\vec{c})$ is...",
                options: ["$\\vec{0}$", "$-\\hat{i}$", "$\\hat{i}$", "$\\hat{j}$"],
                answer: "$\\vec{0}$"
            }]
        },
        'LPP': {
            title: 'LPP Mock Test (11-12)',
            description: 'A test on advanced LPP, including graphical and simplex methods.',
            time: '40 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst11-12-lpp1',
                question: "The optimal solution for a Linear Programming Problem always occurs at a...",
                options: ["Feasible point", "Corner point of the feasible region", "Infeasible point", "Point on the boundary"],
                answer: "Corner point of the feasible region"
            }, {
                id: 'q-wbslst11-12-lpp2',
                question: "The Simplex method is used for solving LPP with...",
                options: ["Two variables", "Three variables", "More than two variables", "One variable"],
                answer: "More than two variables"
            }]
        },
        'Numerical Analysis': {
            title: 'Numerical Analysis Mock Test (11-12)',
            description: 'A test on numerical methods for solving ODEs and systems of equations.',
            time: '45 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst11-12-na1',
                question: "The Runge-Kutta method is a numerical method for solving...",
                options: ["Linear equations", "Non-linear equations", "Differential equations", "Systems of equations"],
                answer: "Differential equations"
            }, {
                id: 'q-wbslst11-12-na2',
                question: "Gauss-Seidel method is an iterative method for solving...",
                options: ["Systems of linear equations", "Non-linear equations", "Eigenvalue problems", "Interpolation problems"],
                answer: "Systems of linear equations"
            }]
        },
        'Probability and Statistics': {
            title: 'Probability & Statistics Mock Test (11-12)',
            description: 'A test on probability distributions, variance, and standard deviation.',
            time: '50 min',
            difficulty: 'Medium',
            questions: [{
                id: 'q-wbslst11-12-ps1',
                question: "For a binomial distribution, the mean is given by...",
                options: ["$np$", "$npq$", "$np(1-p)$", "$\\frac{1}{np}$"],
                answer: "$np$"
            }, {
                id: 'q-wbslst11-12-ps2',
                question: "The standard deviation of a sample is the square root of the...",
                options: ["Mean", "Median", "Mode", "Variance"],
                answer: "Variance"
            }]
        },
        'Dynamics': {
            title: 'Dynamics Mock Test (11-12)',
            description: 'A test on advanced dynamics, including rigid body motion and oscillations.',
            time: '50 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst11-12-dyn1',
                question: "The moment of inertia of a uniform thin rod of mass M and length L about an axis through its center and perpendicular to its length is...",
                options: ["$\\frac{1}{12}ML^2$", "$\\frac{1}{3}ML^2$", "$ML^2$", "$L^2$"],
                answer: "$\\frac{1}{12}ML^2$"
            }, {
                id: 'q-wbslst11-12-dyn2',
                question: "For a simple harmonic motion, the velocity is maximum when the displacement is...",
                options: ["Maximum", "Minimum", "Zero", "Half of the amplitude"],
                answer: "Zero"
            }]
        },
        'Full Length Test': {
            title: 'Full Length Test (11-12)',
            description: 'A comprehensive mock test covering all topics for WBSLST 11-12.',
            time: '120 min',
            difficulty: 'Hard',
            questions: [{
                id: 'q-wbslst11-12-flt1',
                question: "What is the rank of the identity matrix of order $n$?",
                options: ["0", "1", "$n$", "$n^2$"],
                answer: "$n$"
            }, {
                id: 'q-wbslst11-12-flt2',
                question: "The sum of the series $\\sum_{n=0}^{\\infty} \\frac{1}{n!}$ is...",
                options: ["1", "0", "$e$", "$\\infty$"],
                answer: "$e$"
            }]
        }
    }
};
