/* ==========================================
   ICICI BANK EXAM PRACTICE WEBSITE
   File: script.js
   ========================================== */

/*
  Add your questions inside QUESTION_BANK.
  correct: use "A", "B", "C", or "D".
  This is an independent practice website.
*/

const QUESTION_BANK = [
    // QUANTITATIVE APTITUDE: 1–20
    {
        id: 1, category: "aptitude",
        question: "What is 20% of 500?",
        options: { A: "50", B: "100", C: "150", D: "200" },
        correct: "B",
        explanation: "20% of 500 = 100."
    },
    {
        id: 2, category: "aptitude",
        question: "A product costs ₹800. Its price increases by 10%. What is the new price?",
        options: { A: "₹820", B: "₹840", C: "₹880", D: "₹900" },
        correct: "C",
        explanation: "10% of ₹800 is ₹80. New price = ₹880."
    },
    {
        id: 3, category: "aptitude",
        question: "A shirt bought for ₹600 is sold for ₹750. Find the profit percentage.",
        options: { A: "15%", B: "20%", C: "25%", D: "30%" },
        correct: "C",
        explanation: "Profit = ₹150; 150/600 × 100 = 25%."
    },
    {
        id: 4, category: "aptitude",
        question: "An item bought for ₹1,000 is sold for ₹900. Find the loss percentage.",
        options: { A: "5%", B: "10%", C: "15%", D: "20%" },
        correct: "B",
        explanation: "Loss = ₹100; 100/1000 × 100 = 10%."
    },
    {
        id: 5, category: "aptitude",
        question: "Find the simple interest on ₹5,000 at 8% per annum for 2 years.",
        options: { A: "₹400", B: "₹600", C: "₹800", D: "₹1,000" },
        correct: "C",
        explanation: "SI = P × R × T / 100 = ₹800."
    },
    {
        id: 6, category: "aptitude",
        question: "Find the compound interest on ₹1,000 at 10% annually for 2 years.",
        options: { A: "₹100", B: "₹200", C: "₹210", D: "₹220" },
        correct: "C",
        explanation: "Amount = ₹1,210; compound interest = ₹210."
    },
    {
        id: 7, category: "aptitude",
        question: "Simplify: 25 × 4 ÷ 5.",
        options: { A: "10", B: "15", C: "20", D: "25" },
        correct: "C",
        explanation: "25 × 4 = 100; 100 ÷ 5 = 20."
    },
    {
        id: 8, category: "aptitude",
        question: "Find the average of 10, 20, 30, 40 and 50.",
        options: { A: "20", B: "25", C: "30", D: "35" },
        correct: "C",
        explanation: "150 ÷ 5 = 30."
    },
    {
        id: 9, category: "aptitude",
        question: "Two numbers are in the ratio 2:3 and their sum is 50. Find the smaller number.",
        options: { A: "10", B: "20", C: "25", D: "30" },
        correct: "B",
        explanation: "One part = 50/5 = 10; smaller number = 20."
    },
    {
        id: 10, category: "aptitude",
        question: "What is 3/4 of 200?",
        options: { A: "100", B: "125", C: "150", D: "175" },
        correct: "C",
        explanation: "200 × 3/4 = 150."
    },
    {
        id: 11, category: "aptitude",
        question: "A person travels 120 km in 3 hours. Find the average speed.",
        options: { A: "30 km/h", B: "40 km/h", C: "50 km/h", D: "60 km/h" },
        correct: "B",
        explanation: "Speed = Distance ÷ Time = 40 km/h."
    },
    {
        id: 12, category: "aptitude",
        question: "A train travels at 60 km/h for 2.5 hours. Find the distance.",
        options: { A: "120 km", B: "130 km", C: "150 km", D: "180 km" },
        correct: "C",
        explanation: "Distance = 60 × 2.5 = 150 km."
    },
    {
        id: 13, category: "aptitude",
        question: "A can complete a job in 10 days. What fraction of the job does A complete in one day?",
        options: { A: "1/5", B: "1/10", C: "1/15", D: "1/20" },
        correct: "B",
        explanation: "One-day work = 1/10."
    },
    {
        id: 14, category: "aptitude",
        question: "A completes a job in 12 days and B in 6 days. How long will they take together?",
        options: { A: "3 days", B: "4 days", C: "6 days", D: "9 days" },
        correct: "B",
        explanation: "Combined work rate = 1/12 + 1/6 = 1/4 per day."
    },
    {
        id: 15, category: "aptitude",
        question: "A number increases from 200 to 250. Find the percentage increase.",
        options: { A: "20%", B: "25%", C: "30%", D: "50%" },
        correct: "B",
        explanation: "Increase = 50; 50/200 × 100 = 25%."
    },
    {
        id: 16, category: "aptitude",
        question: "Find 15% of 800.",
        options: { A: "100", B: "110", C: "120", D: "150" },
        correct: "C",
        explanation: "800 × 15/100 = 120."
    },
    {
        id: 17, category: "aptitude",
        question: "If 5 pens cost ₹100, what do 8 pens cost at the same rate?",
        options: { A: "₹120", B: "₹140", C: "₹160", D: "₹180" },
        correct: "C",
        explanation: "Each pen costs ₹20; 8 pens cost ₹160."
    },
    {
        id: 18, category: "aptitude",
        question: "The marked price is ₹2,000 with a 15% discount. Find the selling price.",
        options: { A: "₹1,600", B: "₹1,650", C: "₹1,700", D: "₹1,850" },
        correct: "C",
        explanation: "Discount = ₹300; selling price = ₹1,700."
    },
    {
        id: 19, category: "aptitude",
        question: "Find the LCM of 12 and 18.",
        options: { A: "6", B: "24", C: "36", D: "72" },
        correct: "C",
        explanation: "The least common multiple is 36."
    },
    {
        id: 20, category: "aptitude",
        question: "Find the HCF of 24 and 36.",
        options: { A: "6", B: "8", C: "12", D: "18" },
        correct: "C",
        explanation: "The highest common factor is 12."
    },

    // LOGICAL REASONING: 21–40
    {
        id: 21, category: "reasoning",
        question: "Find the next number: 3, 6, 12, 24, __.",
        options: { A: "36", B: "42", C: "48", D: "54" },
        correct: "C",
        explanation: "Each number is multiplied by 2."
    },
    {
        id: 22, category: "reasoning",
        question: "Find the next number: 1, 4, 9, 16, __.",
        options: { A: "20", B: "25", C: "30", D: "36" },
        correct: "B",
        explanation: "These are squares: 1², 2², 3², 4², 5²."
    },
    {
        id: 23, category: "reasoning",
        question: "Find the odd one out: Apple, Mango, Carrot, Banana.",
        options: { A: "Apple", B: "Mango", C: "Carrot", D: "Banana" },
        correct: "C",
        explanation: "Carrot is a vegetable; the others are fruits."
    },
    {
        id: 24, category: "reasoning",
        question: "If CAT is coded as DBU, how is DOG coded using the same rule?",
        options: { A: "EPH", B: "EOG", C: "DPH", D: "FQI" },
        correct: "A",
        explanation: "Each letter moves forward by one position."
    },
    {
        id: 25, category: "reasoning",
        question: "Complete the series: A, C, E, G, __.",
        options: { A: "H", B: "I", C: "J", D: "K" },
        correct: "B",
        explanation: "The series skips one letter each time."
    },
    {
        id: 26, category: "reasoning",
        question: "A person faces North and turns right. Which direction now?",
        options: { A: "South", B: "East", C: "West", D: "North" },
        correct: "B",
        explanation: "A right turn from North points East."
    },
    {
        id: 27, category: "reasoning",
        question: "A person faces East and turns left. Which direction now?",
        options: { A: "North", B: "South", C: "West", D: "East" },
        correct: "A",
        explanation: "A left turn from East points North."
    },
    {
        id: 28, category: "reasoning",
        question: "Your mother's brother is your __.",
        options: { A: "Paternal uncle", B: "Maternal uncle", C: "Nephew", D: "Cousin" },
        correct: "B",
        explanation: "Your mother's brother is your maternal uncle."
    },
    {
        id: 29, category: "reasoning",
        question: "Your father's sister is your __.",
        options: { A: "Aunt", B: "Niece", C: "Cousin", D: "Grandmother" },
        correct: "A",
        explanation: "Your father's sister is your aunt."
    },
    {
        id: 30, category: "reasoning",
        question: "All roses are flowers. Are all roses flowers?",
        options: { A: "Yes", B: "No", C: "Sometimes", D: "Cannot be determined" },
        correct: "A",
        explanation: "This follows directly from the statement."
    },
    {
        id: 31, category: "reasoning",
        question: "Find the odd number: 2, 3, 5, 9, 11.",
        options: { A: "2", B: "5", C: "9", D: "11" },
        correct: "C",
        explanation: "9 is not a prime number; the others are prime."
    },
    {
        id: 32, category: "reasoning",
        question: "If today is Monday, what day will it be after 10 days?",
        options: { A: "Tuesday", B: "Wednesday", C: "Thursday", D: "Friday" },
        correct: "C",
        explanation: "Ten days later is Thursday."
    },
    {
        id: 33, category: "reasoning",
        question: "Arrange in ascending order: 0.5, 0.05, 0.55.",
        options: {
            A: "0.5, 0.05, 0.55",
            B: "0.05, 0.5, 0.55",
            C: "0.55, 0.5, 0.05",
            D: "0.05, 0.55, 0.5"
        },
        correct: "B",
        explanation: "0.05 is smallest, followed by 0.5 and 0.55."
    },
    {
        id: 34, category: "reasoning",
        question: "Complete the series: Z, X, V, T, __.",
        options: { A: "S", B: "R", C: "Q", D: "P" },
        correct: "B",
        explanation: "The series moves backward by two letters."
    },
    {
        id: 35, category: "reasoning",
        question: "If A=1, B=2 and C=3, what is the value of CAB as digits?",
        options: { A: "123", B: "213", C: "312", D: "321" },
        correct: "C",
        explanation: "C=3, A=1, B=2, so CAB = 312."
    },
    {
        id: 36, category: "reasoning",
        question: "A is taller than B. B is taller than C. Who is the shortest?",
        options: { A: "A", B: "B", C: "C", D: "Cannot be determined" },
        correct: "C",
        explanation: "A > B > C in height."
    },
    {
        id: 37, category: "reasoning",
        question: "How many months have at least 28 days?",
        options: { A: "1", B: "2", C: "6", D: "12" },
        correct: "D",
        explanation: "All 12 months have at least 28 days."
    },
    {
        id: 38, category: "reasoning",
        question: "If yesterday was Friday, what day is tomorrow?",
        options: { A: "Saturday", B: "Sunday", C: "Monday", D: "Tuesday" },
        correct: "B",
        explanation: "Yesterday Friday means today Saturday and tomorrow Sunday."
    },
    {
        id: 39, category: "reasoning",
        question: "Which is different: Circle, Triangle, Square, Table?",
        options: { A: "Circle", B: "Triangle", C: "Square", D: "Table" },
        correct: "D",
        explanation: "Table is a physical object; the others are shapes."
    },
    {
        id: 40, category: "reasoning",
        question: "Complete the series: 100, 90, 80, 70, __.",
        options: { A: "50", B: "55", C: "60", D: "65" },
        correct: "C",
        explanation: "The series decreases by 10."
    },

    // BANKING AWARENESS: 41–65
    {
        id: 41, category: "banking",
        question: "What is the full form of ICICI?",
        options: {
            A: "Industrial Credit and Investment Corporation of India",
            B: "Indian Central Investment Council of India",
            C: "International Credit and Insurance Corporation of India",
            D: "Indian Commercial Investment Company of India"
        },
        correct: "A",
        explanation: "ICICI stands for Industrial Credit and Investment Corporation of India."
    },
    {
        id: 42, category: "banking",
        question: "What is a savings account mainly used for?",
        options: {
            A: "Only business loans",
            B: "Keeping money and earning applicable interest",
            C: "Printing currency",
            D: "Issuing government laws"
        },
        correct: "B",
        explanation: "A savings account holds deposits and may earn interest."
    },
    {
        id: 43, category: "banking",
        question: "A current account is mainly designed for __.",
        options: {
            A: "Frequent business transactions",
            B: "School examinations",
            C: "Insurance claims only",
            D: "Currency printing"
        },
        correct: "A",
        explanation: "Current accounts commonly support frequent business transactions."
    },
    {
        id: 44, category: "banking",
        question: "What is the full form of KYC?",
        options: {
            A: "Keep Your Cash",
            B: "Know Your Customer",
            C: "Know Your Credit",
            D: "Keep Your Customer"
        },
        correct: "B",
        explanation: "KYC stands for Know Your Customer."
    },
    {
        id: 45, category: "banking",
        question: "Why is KYC required by banks?",
        options: {
            A: "To verify customer identity",
            B: "To increase internet speed",
            C: "To create currency",
            D: "To guarantee every loan"
        },
        correct: "A",
        explanation: "KYC helps verify identity and supports financial crime prevention."
    },
    {
        id: 46, category: "banking",
        question: "What is the full form of RBI?",
        options: {
            A: "Reserve Bank of India",
            B: "Rural Banking Institute",
            C: "Regional Bank of Indonesia",
            D: "Revenue Board of India"
        },
        correct: "A",
        explanation: "RBI stands for Reserve Bank of India."
    },
    {
        id: 47, category: "banking",
        question: "Which institution is India's central bank?",
        options: {
            A: "SEBI",
            B: "NABARD",
            C: "Reserve Bank of India",
            D: "IRDAI"
        },
        correct: "C",
        explanation: "The Reserve Bank of India is India's central bank."
    },
    {
        id: 48, category: "banking",
        question: "What is a fixed deposit (FD)?",
        options: {
            A: "A deposit held for a chosen tenure",
            B: "An unlimited loan",
            C: "A debit card",
            D: "A cheque book"
        },
        correct: "A",
        explanation: "An FD is deposited for an agreed tenure and interest rate."
    },
    {
        id: 49, category: "banking",
        question: "What is a recurring deposit (RD)?",
        options: {
            A: "A one-time cash withdrawal",
            B: "A deposit with regular contributions",
            C: "A credit card bill",
            D: "An insurance complaint"
        },
        correct: "B",
        explanation: "An RD generally involves depositing money regularly."
    },
    {
        id: 50, category: "banking",
        question: "What does a debit card typically use to make payments?",
        options: {
            A: "Funds in the linked bank account",
            B: "Unlimited borrowed funds",
            C: "Government tax credits only",
            D: "Another customer's account"
        },
        correct: "A",
        explanation: "Debit card transactions typically draw from the linked account."
    },
    {
        id: 51, category: "banking",
        question: "What is a credit card?",
        options: {
            A: "A card linked only to a savings passbook",
            B: "A payment card with a credit limit",
            C: "A bank statement",
            D: "A fixed deposit receipt"
        },
        correct: "B",
        explanation: "Credit cards let eligible users borrow within a set credit limit."
    },
    {
        id: 52, category: "banking",
        question: "What is the full form of UPI?",
        options: {
            A: "Unified Payments Interface",
            B: "Universal Payment Index",
            C: "United Payments Institution",
            D: "Unified Personal Investment"
        },
        correct: "A",
        explanation: "UPI stands for Unified Payments Interface."
    },
    {
        id: 53, category: "banking",
        question: "What is the full form of NEFT?",
        options: {
            A: "National Electronic Funds Transfer",
            B: "National Exchange Finance Transaction",
            C: "New Electronic Fund Technology",
            D: "National Equity Funds Transfer"
        },
        correct: "A",
        explanation: "NEFT stands for National Electronic Funds Transfer."
    },
    {
        id: 54, category: "banking",
        question: "What is the full form of RTGS?",
        options: {
            A: "Real Time Gross Settlement",
            B: "Regional Transfer Guarantee System",
            C: "Reserve Transaction General Service",
            D: "Real Transfer Global System"
        },
        correct: "A",
        explanation: "RTGS stands for Real Time Gross Settlement."
    },
    {
        id: 55, category: "banking",
        question: "What is the full form of IMPS?",
        options: {
            A: "Immediate Payment Service",
            B: "Indian Money Processing System",
            C: "International Mobile Payment Scheme",
            D: "Instant Merchant Protection Service"
        },
        correct: "A",
        explanation: "IMPS stands for Immediate Payment Service."
    },
    {
        id: 56, category: "banking",
        question: "What is a cheque?",
        options: {
            A: "A written instruction to a bank to pay an amount",
            B: "A credit score",
            C: "A mobile application",
            D: "An identity photograph"
        },
        correct: "A",
        explanation: "A cheque instructs a bank to pay a specified amount subject to applicable rules."
    },
    {
        id: 57, category: "banking",
        question: "What is a passbook used for?",
        options: {
            A: "Recording account transactions",
            B: "Creating passwords",
            C: "Applying for a driving licence",
            D: "Measuring interest rates"
        },
        correct: "A",
        explanation: "A passbook records account transactions where provided."
    },
    {
        id: 58, category: "banking",
        question: "What is EMI?",
        options: {
            A: "Equated Monthly Instalment",
            B: "Electronic Money Index",
            C: "Estimated Monthly Income",
            D: "External Market Investment"
        },
        correct: "A",
        explanation: "EMI stands for Equated Monthly Instalment."
    },
    {
        id: 59, category: "banking",
        question: "What is a bank statement?",
        options: {
            A: "A record of account transactions over a period",
            B: "A job application",
            C: "A credit card PIN",
            D: "A currency note"
        },
        correct: "A",
        explanation: "A bank statement lists account transactions and balances."
    },
    {
        id: 60, category: "banking",
        question: "What is phishing?",
        options: {
            A: "A way to earn bank interest",
            B: "A fraudulent attempt to steal information",
            C: "A legitimate bank transfer",
            D: "A method of printing money"
        },
        correct: "B",
        explanation: "Phishing impersonates trusted sources to steal sensitive information."
    },
    {
        id: 61, category: "banking",
        question: "Should you share an OTP with a caller claiming to be from your bank?",
        options: {
            A: "Yes, always",
            B: "Only at night",
            C: "No, never share it",
            D: "Only if they know your name"
        },
        correct: "C",
        explanation: "Never share OTPs, PINs or passwords with callers."
    },
    {
        id: 62, category: "banking",
        question: "What does IFSC identify?",
        options: {
            A: "A bank branch for electronic transfers",
            B: "A customer's password",
            C: "A credit card's colour",
            D: "A loan's monthly instalment"
        },
        correct: "A",
        explanation: "IFSC is used to identify bank branches for electronic transfers."
    },
    {
        id: 63, category: "banking",
        question: "What does NPA stand for in banking?",
        options: {
            A: "Net Payment Account",
            B: "Non-Performing Asset",
            C: "National Payment Authority",
            D: "New Personal Advance"
        },
        correct: "B",
        explanation: "NPA stands for Non-Performing Asset."
    },
    {
        id: 64, category: "banking",
        question: "What should you do after noticing an unauthorised bank transaction?",
        options: {
            A: "Ignore it",
            B: "Share your PIN online",
            C: "Contact the bank through official channels immediately",
            D: "Wait several months"
        },
        correct: "C",
        explanation: "Report suspicious transactions promptly through official bank channels."
    },
    {
        id: 65, category: "banking",
        question: "What is a nominee in a bank account?",
        options: {
            A: "A person designated for specified claim procedures",
            B: "Always the bank manager",
            C: "A person who sets interest rates",
            D: "A bank auditor in every case"
        },
        correct: "A",
        explanation: "A nominee is designated under applicable account and claim procedures."
    },

    // ENGLISH LANGUAGE: 66–80
    {
        id: 66, category: "english",
        question: "Choose the correct spelling.",
        options: { A: "Recieve", B: "Receive", C: "Receeve", D: "Receve" },
        correct: "B",
        explanation: "The correct spelling is Receive."
    },
    {
        id: 67, category: "english",
        question: "Choose a synonym for 'Rapid'.",
        options: { A: "Slow", B: "Fast", C: "Weak", D: "Late" },
        correct: "B",
        explanation: "Rapid means fast or quick."
    },
    {
        id: 68, category: "english",
        question: "Choose the antonym of 'Increase'.",
        options: { A: "Grow", B: "Expand", C: "Decrease", D: "Improve" },
        correct: "C",
        explanation: "Decrease is the opposite of increase."
    },
    {
        id: 69, category: "english",
        question: "Choose the correct sentence.",
        options: {
            A: "She go to work.",
            B: "She going to work.",
            C: "She goes to work.",
            D: "She gone to work."
        },
        correct: "C",
        explanation: "With 'she', the simple present form is 'goes'."
    },
    {
        id: 70, category: "english",
        question: "What is the past tense of 'Write'?",
        options: { A: "Writed", B: "Written", C: "Wrote", D: "Writing" },
        correct: "C",
        explanation: "The simple past tense of write is wrote."
    },
    {
        id: 71, category: "english",
        question: "What is the plural of 'Child'?",
        options: { A: "Childs", B: "Children", C: "Childes", D: "Childrens" },
        correct: "B",
        explanation: "The plural form is children."
    },
    {
        id: 72, category: "english",
        question: "Fill in the blank: He is ___ honest man.",
        options: { A: "a", B: "an", C: "the", D: "no article" },
        correct: "B",
        explanation: "Honest begins with a vowel sound, so 'an' is used."
    },
    {
        id: 73, category: "english",
        question: "Fill in the blank: She is interested ___ banking.",
        options: { A: "on", B: "at", C: "in", D: "by" },
        correct: "C",
        explanation: "The correct expression is 'interested in'."
    },
    {
        id: 74, category: "english",
        question: "Choose a synonym for 'Assist'.",
        options: { A: "Help", B: "Harm", C: "Stop", D: "Refuse" },
        correct: "A",
        explanation: "Assist means help."
    },
    {
        id: 75, category: "english",
        question: "Choose the antonym of 'Accept'.",
        options: { A: "Receive", B: "Agree", C: "Reject", D: "Approve" },
        correct: "C",
        explanation: "Reject is the opposite of accept."
    },
    {
        id: 76, category: "english",
        question: "Fill in the blank: They ___ completed the task.",
        options: { A: "has", B: "have", C: "is", D: "was" },
        correct: "B",
        explanation: "'They have completed' is grammatically correct."
    },
    {
        id: 77, category: "english",
        question: "Correct this sentence: He don't know.",
        options: {
            A: "He doesn't know.",
            B: "He didn't knows.",
            C: "He don't knows.",
            D: "He not know."
        },
        correct: "A",
        explanation: "Use 'doesn't' with he, she or it."
    },
    {
        id: 78, category: "english",
        question: "What is the past tense of 'Buy'?",
        options: { A: "Buyed", B: "Bought", C: "Buying", D: "Buys" },
        correct: "B",
        explanation: "The past tense of buy is bought."
    },
    {
        id: 79, category: "english",
        question: "What is the plural of 'Mouse'?",
        options: { A: "Mouses", B: "Mices", C: "Mouse", D: "Mice" },
        correct: "D",
        explanation: "The usual plural of mouse is mice."
    },
    {
        id: 80, category: "english",
        question: "Choose the antonym of 'Profit'.",
        options: { A: "Gain", B: "Income", C: "Loss", D: "Revenue" },
        correct: "C",
        explanation: "Loss is the opposite of profit."
    },

    // COMPUTER KNOWLEDGE: 81–90
    {
        id: 81, category: "computer",
        question: "What is the full form of CPU?",
        options: {
            A: "Central Processing Unit",
            B: "Computer Personal Utility",
            C: "Central Program Usage",
            D: "Control Processing User"
        },
        correct: "A",
        explanation: "CPU stands for Central Processing Unit."
    },
    {
        id: 82, category: "computer",
        question: "What is the full form of RAM?",
        options: {
            A: "Read Access Memory",
            B: "Random Access Memory",
            C: "Rapid Action Module",
            D: "Remote Application Manager"
        },
        correct: "B",
        explanation: "RAM stands for Random Access Memory."
    },
    {
        id: 83, category: "computer",
        question: "What is the full form of ROM?",
        options: {
            A: "Read-Only Memory",
            B: "Random Online Module",
            C: "Remote Operating Machine",
            D: "Read Open Memory"
        },
        correct: "A",
        explanation: "ROM stands for Read-Only Memory."
    },
    {
        id: 84, category: "computer",
        question: "Which software is commonly used for spreadsheets?",
        options: {
            A: "Microsoft Word",
            B: "Microsoft Excel",
            C: "Microsoft Paint",
            D: "Notepad"
        },
        correct: "B",
        explanation: "Microsoft Excel is spreadsheet software."
    },
    {
        id: 85, category: "computer",
        question: "Which software is commonly used to create presentations?",
        options: {
            A: "PowerPoint",
            B: "Notepad",
            C: "Calculator",
            D: "File Explorer"
        },
        correct: "A",
        explanation: "Microsoft PowerPoint is presentation software."
    },
    {
        id: 86, category: "computer",
        question: "Which application is commonly used to create text documents?",
        options: {
            A: "Microsoft Word",
            B: "Microsoft Paint",
            C: "Calculator",
            D: "Camera"
        },
        correct: "A",
        explanation: "Microsoft Word is used to create documents."
    },
    {
        id: 87, category: "computer",
        question: "Which keyboard shortcut is used to paste?",
        options: {
            A: "Ctrl + C",
            B: "Ctrl + X",
            C: "Ctrl + V",
            D: "Ctrl + Z"
        },
        correct: "C",
        explanation: "Ctrl + V pastes copied or cut content."
    },
    {
        id: 88, category: "computer",
        question: "Which keyboard shortcut is commonly used to save a file?",
        options: {
            A: "Ctrl + A",
            B: "Ctrl + S",
            C: "Ctrl + P",
            D: "Ctrl + F"
        },
        correct: "B",
        explanation: "Ctrl + S saves the current file."
    },
    {
        id: 89, category: "computer",
        question: "What does PDF stand for?",
        options: {
            A: "Portable Document Format",
            B: "Personal Data File",
            C: "Program Document Folder",
            D: "Public Digital Form"
        },
        correct: "A",
        explanation: "PDF stands for Portable Document Format."
    },
    {
        id: 90, category: "computer",
        question: "What does the SUM function in Excel do?",
        options: {
            A: "Counts words",
            B: "Adds numbers",
            C: "Changes font size",
            D: "Deletes a worksheet"
        },
        correct: "B",
        explanation: "SUM adds numeric values."
    },

    // CUSTOMER SERVICE & SALES: 91–95
    {
        id: 91, category: "customer",
        question: "A customer is angry about a failed transaction. What should you do?",
        options: {
            A: "Argue with the customer",
            B: "Ignore the complaint",
            C: "Listen calmly and investigate",
            D: "Promise a refund without checking"
        },
        correct: "C",
        explanation: "Listen carefully and follow approved complaint procedures."
    },
    {
        id: 92, category: "customer",
        question: "Should you recommend a financial product only to meet a sales target?",
        options: {
            A: "Yes, in every case",
            B: "No, consider customer needs and suitability",
            C: "Yes, without explaining terms",
            D: "Only to new customers"
        },
        correct: "B",
        explanation: "Recommendations should be suitable and explained honestly."
    },
    {
        id: 93, category: "customer",
        question: "How should confidential customer information be handled?",
        options: {
            A: "Share it with friends",
            B: "Post it publicly",
            C: "Access and disclose it only as authorised",
            D: "Send it to any caller"
        },
        correct: "C",
        explanation: "Protect customer information and follow applicable policies."
    },
    {
        id: 94, category: "customer",
        question: "What is cross-selling?",
        options: {
            A: "Offering relevant additional products to an existing customer",
            B: "Closing every customer account",
            C: "Cancelling a loan",
            D: "Transferring an employee"
        },
        correct: "A",
        explanation: "Cross-selling offers additional suitable products."
    },
    {
        id: 95, category: "customer",
        question: "What is ethical selling?",
        options: {
            A: "Hiding fees from customers",
            B: "Pressuring customers to buy",
            C: "Giving accurate information and suitable recommendations",
            D: "Making unsupported promises"
        },
        correct: "C",
        explanation: "Ethical selling involves honest information and suitable recommendations."
    },

    // HR INTERVIEW: 96–100
    {
        id: 96, category: "hr",
        question: "Why do you want to join ICICI Bank? Choose the most professional response.",
        options: {
            A: "Only because I want any job",
            B: "I want to build a banking career and develop professional skills",
            C: "I do not want to learn anything",
            D: "I dislike customer service"
        },
        correct: "B",
        explanation: "A clear career goal and willingness to learn are professional motivations."
    },
    {
        id: 97, category: "hr",
        question: "What is a good response when asked about your strengths?",
        options: {
            A: "I never make mistakes",
            B: "I refuse feedback",
            C: "I am responsible, willing to learn and attentive to detail",
            D: "I cannot work with others"
        },
        correct: "C",
        explanation: "Describe genuine strengths relevant to the role."
    },
    {
        id: 98, category: "hr",
        question: "How should you handle work pressure?",
        options: {
            A: "Panic and stop working",
            B: "Ignore all deadlines",
            C: "Prioritise tasks, stay calm and seek guidance when needed",
            D: "Blame colleagues"
        },
        correct: "C",
        explanation: "Prioritisation and calm communication help manage pressure."
    },
    {
        id: 99, category: "hr",
        question: "How should you respond if you do not know an interview question's answer?",
        options: {
            A: "Invent information",
            B: "Stay honest and explain what you know",
            C: "Insult the interviewer",
            D: "Leave immediately"
        },
        correct: "B",
        explanation: "Honesty and a willingness to learn are better than inventing facts."
    },
    {
        id: 100, category: "hr",
        question: "How would you conclude an interview professionally?",
        options: {
            A: "Leave without speaking",
            B: "Demand an immediate offer",
            C: "Thank the interviewer for their time and consideration",
            D: "Criticise the interview process"
        },
        correct: "C",
        explanation: "A polite thank-you is a professional way to conclude an interview."
    },
    /* QUESTIONS 101–200
   Paste inside the existing QUESTION_BANK array.
   Add a comma after question 100's closing brace.
*/

// BANKING AWARENESS: 101–120

{
    id: 101, category: "banking",
    question: "What is a home loan generally used for?",
    options: {
        A: "Buying or constructing a home",
        B: "Buying groceries only",
        C: "Paying telephone bills only",
        D: "Opening an email account"
    },
    correct: "A",
    explanation: "A home loan generally finances buying or constructing a home."
},
{
    id: 102, category: "banking",
    question: "What is a personal loan?",
    options: {
        A: "A loan used only by governments",
        B: "A loan generally used for personal expenses",
        C: "A type of debit card",
        D: "A bank passbook"
    },
    correct: "B",
    explanation: "A personal loan may be used for eligible personal expenses."
},
{
    id: 103, category: "banking",
    question: "What does a minimum balance mean?",
    options: {
        A: "The maximum loan amount",
        B: "The minimum amount required in an account, if applicable",
        C: "The customer's annual salary",
        D: "The interest paid on a loan"
    },
    correct: "B",
    explanation: "Account terms may specify a required minimum balance."
},
{
    id: 104, category: "banking",
    question: "What is internet banking?",
    options: {
        A: "Banking through an online website or platform",
        B: "Banking only through paper forms",
        C: "Printing currency at home",
        D: "Using a calculator without internet"
    },
    correct: "A",
    explanation: "Internet banking provides banking services through an online platform."
},
{
    id: 105, category: "banking",
    question: "What is mobile banking?",
    options: {
        A: "Banking only at an ATM",
        B: "Banking through a mobile app or mobile service",
        C: "A physical cheque",
        D: "A fixed deposit certificate"
    },
    correct: "B",
    explanation: "Mobile banking provides banking services through mobile devices."
},
{
    id: 106, category: "banking",
    question: "What does PAN stand for in India?",
    options: {
        A: "Permanent Account Number",
        B: "Personal Account Note",
        C: "Payment Access Network",
        D: "Public Account Name"
    },
    correct: "A",
    explanation: "PAN stands for Permanent Account Number."
},
{
    id: 107, category: "banking",
    question: "What is a demand draft?",
    options: {
        A: "A bank-issued payment instrument",
        B: "A credit score",
        C: "A computer application",
        D: "A customer complaint form"
    },
    correct: "A",
    explanation: "A demand draft is a bank-issued payment instrument subject to applicable rules."
},
{
    id: 108, category: "banking",
    question: "What is an overdraft facility?",
    options: {
        A: "A facility that may allow withdrawals beyond the available balance up to an approved limit",
        B: "An unlimited free deposit",
        C: "A type of passbook",
        D: "A method of calculating age"
    },
    correct: "A",
    explanation: "An overdraft permits eligible customers to use an approved credit limit."
},
{
    id: 109, category: "banking",
    question: "What is bancassurance?",
    options: {
        A: "Selling computers to banks",
        B: "Distributing insurance products through banking channels",
        C: "Printing bank statements",
        D: "Opening a current account"
    },
    correct: "B",
    explanation: "Bancassurance combines banking channels with insurance distribution."
},
{
    id: 110, category: "banking",
    question: "What is a CIBIL score used for?",
    options: {
        A: "Assessing credit history",
        B: "Measuring typing speed",
        C: "Calculating employee attendance",
        D: "Identifying a bank branch"
    },
    correct: "A",
    explanation: "A credit score helps lenders assess credit history."
},
{
    id: 111, category: "banking",
    question: "Does a high credit score guarantee loan approval?",
    options: {
        A: "Yes, in every case",
        B: "No, lenders consider multiple eligibility factors",
        C: "Yes, regardless of income",
        D: "Only for every first-time applicant"
    },
    correct: "B",
    explanation: "Lenders also consider factors such as income, liabilities and their lending criteria."
},
{
    id: 112, category: "banking",
    question: "What is the main purpose of a bank's passbook or account statement?",
    options: {
        A: "Recording account transactions",
        B: "Creating a tax law",
        C: "Issuing a driving licence",
        D: "Changing a customer's age"
    },
    correct: "A",
    explanation: "These records show transactions and account balances."
},
{
    id: 113, category: "banking",
    question: "What should a customer do if their debit card is lost?",
    options: {
        A: "Share the PIN publicly",
        B: "Report it and block the card through official bank channels",
        C: "Ignore the loss",
        D: "Give their password to a stranger"
    },
    correct: "B",
    explanation: "Promptly report the loss and request card blocking."
},
{
    id: 114, category: "banking",
    question: "What is the purpose of a bank nominee?",
    options: {
        A: "To receive funds under applicable claim procedures",
        B: "To set the bank's interest rate",
        C: "To approve every loan",
        D: "To audit every branch"
    },
    correct: "A",
    explanation: "Nomination supports the applicable claim process; it is distinct from joint account ownership."
},
{
    id: 115, category: "banking",
    question: "What is a loan's principal amount?",
    options: {
        A: "The original amount borrowed or invested",
        B: "Only the interest charged",
        C: "The monthly electricity bill",
        D: "The bank's branch code"
    },
    correct: "A",
    explanation: "Principal refers to the original amount of a loan or investment."
},
{
    id: 116, category: "banking",
    question: "What is interest on a loan?",
    options: {
        A: "The cost of borrowing money",
        B: "The customer's email address",
        C: "The bank's opening hours",
        D: "A form of identification"
    },
    correct: "A",
    explanation: "Interest is the cost charged for borrowing money."
},
{
    id: 117, category: "banking",
    question: "What is a recurring deposit designed to encourage?",
    options: {
        A: "Regular saving",
        B: "Sharing passwords",
        C: "Unnecessary borrowing",
        D: "Avoiding account records"
    },
    correct: "A",
    explanation: "Recurring deposits encourage regular contributions to savings."
},
{
    id: 118, category: "banking",
    question: "What should you do before confirming a digital money transfer?",
    options: {
        A: "Ignore the recipient details",
        B: "Verify the recipient and transaction details",
        C: "Share your OTP with a caller",
        D: "Use another customer's PIN"
    },
    correct: "B",
    explanation: "Verifying transaction details helps prevent mistakes and fraud."
},
{
    id: 119, category: "banking",
    question: "Which information should never be shared with an unknown caller?",
    options: {
        A: "Public bank branch address",
        B: "Published bank opening hours",
        C: "OTP, PIN or banking password",
        D: "Public customer-service number"
    },
    correct: "C",
    explanation: "Keep authentication credentials confidential."
},
{
    id: 120, category: "banking",
    question: "What is a non-performing asset (NPA)?",
    options: {
        A: "A loan or advance classified as non-performing under applicable rules",
        B: "Every savings account",
        C: "A new debit card",
        D: "A bank's computer keyboard"
    },
    correct: "A",
    explanation: "NPA classification follows applicable regulatory criteria."
},

// QUANTITATIVE APTITUDE: 121–135

{
    id: 121, category: "aptitude",
    question: "Solve: 2x + 5 = 15.",
    options: { A: "x = 3", B: "x = 5", C: "x = 10", D: "x = 15" },
    correct: "B",
    explanation: "2x = 10, so x = 5."
},
{
    id: 122, category: "aptitude",
    question: "What is the square of 17?",
    options: { A: "279", B: "289", C: "299", D: "309" },
    correct: "B",
    explanation: "17 × 17 = 289."
},
{
    id: 123, category: "aptitude",
    question: "Find the square root of 625.",
    options: { A: "15", B: "20", C: "25", D: "35" },
    correct: "C",
    explanation: "25 × 25 = 625."
},
{
    id: 124, category: "aptitude",
    question: "A salary of ₹20,000 increases by 5%. What is the new salary?",
    options: { A: "₹20,500", B: "₹21,000", C: "₹21,500", D: "₹22,000" },
    correct: "B",
    explanation: "5% of ₹20,000 is ₹1,000."
},
{
    id: 125, category: "aptitude",
    question: "A bank receives 250 applications; 40% are approved. How many are approved?",
    options: { A: "50", B: "75", C: "100", D: "125" },
    correct: "C",
    explanation: "250 × 40/100 = 100."
},
{
    id: 126, category: "aptitude",
    question: "Convert 0.75 into a percentage.",
    options: { A: "7.5%", B: "25%", C: "70%", D: "75%" },
    correct: "D",
    explanation: "0.75 × 100 = 75%."
},
{
    id: 127, category: "aptitude",
    question: "The ratio is 3:5. What fraction of the total is the first part?",
    options: { A: "3/5", B: "3/8", C: "5/8", D: "1/3" },
    correct: "B",
    explanation: "The total number of parts is 3 + 5 = 8."
},
{
    id: 128, category: "aptitude",
    question: "A person saves ₹3,000 from a salary of ₹15,000. What percentage is saved?",
    options: { A: "10%", B: "15%", C: "20%", D: "25%" },
    correct: "C",
    explanation: "3,000/15,000 × 100 = 20%."
},
{
    id: 129, category: "aptitude",
    question: "Find the next number: 2, 4, 8, 16, __.",
    options: { A: "20", B: "24", C: "30", D: "32" },
    correct: "D",
    explanation: "Each number is doubled."
},
{
    id: 130, category: "aptitude",
    question: "Find the next number: 5, 10, 15, 20, __.",
    options: { A: "22", B: "25", C: "30", D: "35" },
    correct: "B",
    explanation: "The sequence increases by 5."
},
{
    id: 131, category: "aptitude",
    question: "What is 35% of 200?",
    options: { A: "60", B: "65", C: "70", D: "75" },
    correct: "C",
    explanation: "200 × 35/100 = 70."
},
{
    id: 132, category: "aptitude",
    question: "₹12,000 is divided equally among 4 people. How much does each receive?",
    options: { A: "₹2,000", B: "₹2,500", C: "₹3,000", D: "₹4,000" },
    correct: "C",
    explanation: "₹12,000 ÷ 4 = ₹3,000."
},
{
    id: 133, category: "aptitude",
    question: "Find the perimeter of a square with side 8 cm.",
    options: { A: "16 cm", B: "24 cm", C: "32 cm", D: "64 cm" },
    correct: "C",
    explanation: "Perimeter = 4 × side = 32 cm."
},
{
    id: 134, category: "aptitude",
    question: "Find the area of a rectangle with length 12 cm and width 5 cm.",
    options: { A: "17 cm²", B: "34 cm²", C: "50 cm²", D: "60 cm²" },
    correct: "D",
    explanation: "Area = length × width = 60 cm²."
},
{
    id: 135, category: "aptitude",
    question: "A car travels 180 km in 3 hours. What is its average speed?",
    options: { A: "40 km/h", B: "50 km/h", C: "60 km/h", D: "90 km/h" },
    correct: "C",
    explanation: "Speed = 180 ÷ 3 = 60 km/h."
},

// LOGICAL REASONING: 136–150

{
    id: 136, category: "reasoning",
    question: "A fair coin is tossed once. What is the probability of getting heads?",
    options: { A: "1/4", B: "1/2", C: "1/3", D: "1" },
    correct: "B",
    explanation: "One of the two equally likely outcomes is heads."
},
{
    id: 137, category: "reasoning",
    question: "A number is 25% of 400. What is the number?",
    options: { A: "50", B: "75", C: "100", D: "125" },
    correct: "C",
    explanation: "400 × 25/100 = 100."
},
{
    id: 138, category: "reasoning",
    question: "A product costs ₹400 and is sold for ₹500. What is the profit?",
    options: { A: "₹50", B: "₹100", C: "₹150", D: "₹200" },
    correct: "B",
    explanation: "Profit = selling price − cost price = ₹100."
},
{
    id: 139, category: "reasoning",
    question: "12 workers finish a task in 10 days. How long will 6 workers take at the same rate?",
    options: { A: "5 days", B: "10 days", C: "15 days", D: "20 days" },
    correct: "D",
    explanation: "Half the workers require twice as many days."
},
{
    id: 140, category: "reasoning",
    question: "A deposit of ₹10,000 earns 6% simple interest for one year. What is the total amount?",
    options: { A: "₹10,060", B: "₹10,600", C: "₹11,000", D: "₹16,000" },
    correct: "B",
    explanation: "Interest = ₹600; total amount = ₹10,600."
},
{
    id: 141, category: "reasoning",
    question: "If BOOK is coded as CPPL, how is PEN coded using the same rule?",
    options: { A: "QFO", B: "ODM", C: "RGP", D: "PFN" },
    correct: "A",
    explanation: "Each letter moves forward by one position."
},
{
    id: 142, category: "reasoning",
    question: "A is the brother of B, and B is the sister of C. How is A related to C?",
    options: { A: "Father", B: "Brother", C: "Uncle", D: "Cousin" },
    correct: "B",
    explanation: "A is the brother of B, who is C's sibling; therefore A is C's brother."
},
{
    id: 143, category: "reasoning",
    question: "Find the next letter: B, D, G, K, __.",
    options: { A: "M", B: "N", C: "O", D: "P" },
    correct: "D",
    explanation: "The jumps are +2, +3, +4 and then +5."
},
{
    id: 144, category: "reasoning",
    question: "If 1 January is Sunday, what day is 8 January?",
    options: { A: "Monday", B: "Friday", C: "Saturday", D: "Sunday" },
    correct: "D",
    explanation: "Seven days later is the same weekday."
},
{
    id: 145, category: "reasoning",
    question: "Complete the analogy: Doctor : Hospital :: Teacher : __.",
    options: { A: "School", B: "Court", C: "Bank", D: "Airport" },
    correct: "A",
    explanation: "A teacher commonly works at a school."
},
{
    id: 146, category: "reasoning",
    question: "Arrange these stages in a logical recruitment sequence.",
    options: {
        A: "Job offer → Application → Interview → Selection",
        B: "Application → Interview → Selection → Job offer",
        C: "Selection → Application → Job offer → Interview",
        D: "Interview → Job offer → Application → Selection"
    },
    correct: "B",
    explanation: "Applications normally precede interviews, selection and a job offer."
},
{
    id: 147, category: "reasoning",
    question: "Four people shake hands with each other exactly once. How many handshakes occur?",
    options: { A: "4", B: "5", C: "6", D: "8" },
    correct: "C",
    explanation: "The number of pairs is 4 × 3 ÷ 2 = 6."
},
{
    id: 148, category: "reasoning",
    question: "Which number is different: 121, 144, 169, 180?",
    options: { A: "121", B: "144", C: "169", D: "180" },
    correct: "D",
    explanation: "121, 144 and 169 are perfect squares; 180 is not."
},
{
    id: 149, category: "reasoning",
    question: "A person walks 5 km north and then 5 km south. Where are they relative to the starting point?",
    options: {
        A: "5 km north",
        B: "5 km south",
        C: "At the starting point",
        D: "5 km east"
    },
    correct: "C",
    explanation: "The two movements cancel each other out."
},
{
    id: 150, category: "reasoning",
    question: "Find the next number: 10, 20, 30, 40, __.",
    options: { A: "45", B: "50", C: "55", D: "60" },
    correct: "B",
    explanation: "The sequence increases by 10."
},

// ENGLISH LANGUAGE: 151–165

{
    id: 151, category: "english",
    question: "Choose a synonym for 'Begin'.",
    options: { A: "Finish", B: "Stop", C: "Start", D: "Close" },
    correct: "C",
    explanation: "Begin means start."
},
{
    id: 152, category: "english",
    question: "Fill in the blank: I have been working ___ 2024.",
    options: { A: "for", B: "since", C: "at", D: "by" },
    correct: "B",
    explanation: "Since is used with a specific starting point in time."
},
{
    id: 153, category: "english",
    question: "Fill in the blank: The meeting starts ___ 10 a.m.",
    options: { A: "on", B: "in", C: "at", D: "by" },
    correct: "C",
    explanation: "Use 'at' with a specific clock time."
},
{
    id: 154, category: "english",
    question: "Choose the correct phrase.",
    options: {
        A: "Your welcome",
        B: "You're welcome",
        C: "You welcome",
        D: "Yours welcome"
    },
    correct: "B",
    explanation: "'You're' means 'you are'."
},
{
    id: 155, category: "english",
    question: "What is the comparative form of 'Good'?",
    options: { A: "Gooder", B: "Best", C: "Better", D: "More good" },
    correct: "C",
    explanation: "The comparative form of good is better."
},
{
    id: 156, category: "english",
    question: "What is the superlative form of 'Tall'?",
    options: { A: "Taller", B: "Tallest", C: "More tall", D: "Talling" },
    correct: "B",
    explanation: "The superlative form is tallest."
},
{
    id: 157, category: "english",
    question: "Choose the grammatically correct sentence.",
    options: {
        A: "She can sings well.",
        B: "She can singing well.",
        C: "She can sing well.",
        D: "She can sang well."
    },
    correct: "C",
    explanation: "A modal verb such as can is followed by the base form of the verb."
},
{
    id: 158, category: "english",
    question: "Choose a synonym for 'Accurate'.",
    options: { A: "Incorrect", B: "Precise", C: "Careless", D: "Unclear" },
    correct: "B",
    explanation: "Accurate means correct or precise."
},
{
    id: 159, category: "english",
    question: "Choose the antonym of 'Polite'.",
    options: { A: "Kind", B: "Respectful", C: "Rude", D: "Friendly" },
    correct: "C",
    explanation: "Rude is an antonym of polite."
},
{
    id: 160, category: "english",
    question: "Fill in the blank: Neither Ram ___ Ravi came.",
    options: { A: "or", B: "nor", C: "and", D: "but" },
    correct: "B",
    explanation: "The standard paired conjunction is 'neither ... nor'."
},
{
    id: 161, category: "english",
    question: "What is one word for a person who works at a bank?",
    options: { A: "Banker", B: "Pilot", C: "Farmer", D: "Architect" },
    correct: "A",
    explanation: "A banker works in banking."
},
{
    id: 162, category: "english",
    question: "What does 'Confidential' mean?",
    options: {
        A: "Available to everyone",
        B: "Private and intended to be kept secret",
        C: "Always incorrect",
        D: "Publicly advertised"
    },
    correct: "B",
    explanation: "Confidential information is restricted to authorised access."
},
{
    id: 163, category: "english",
    question: "Change to passive voice: The manager approved the loan.",
    options: {
        A: "The manager was approved by the loan.",
        B: "The loan approved the manager.",
        C: "The loan was approved by the manager.",
        D: "The loan is approving the manager."
    },
    correct: "C",
    explanation: "The object becomes the subject in the passive construction."
},
{
    id: 164, category: "english",
    question: "Change into a question: You are ready.",
    options: {
        A: "You ready are?",
        B: "Are you ready?",
        C: "Ready you are.",
        D: "Do you are ready?"
    },
    correct: "B",
    explanation: "Move the verb 'are' before the subject."
},
{
    id: 165, category: "english",
    question: "Choose the correct sentence.",
    options: {
        A: "I look forward to meet you.",
        B: "I look forward meeting you.",
        C: "I look forward to meeting you.",
        D: "I looking forward to met you."
    },
    correct: "C",
    explanation: "The expression 'look forward to' is followed by a noun or gerund."
},

// COMPUTER KNOWLEDGE: 166–180

{
    id: 166, category: "computer",
    question: "Which shortcut is commonly used to copy selected text?",
    options: { A: "Ctrl + X", B: "Ctrl + C", C: "Ctrl + V", D: "Ctrl + Z" },
    correct: "B",
    explanation: "Ctrl + C copies selected content."
},
{
    id: 167, category: "computer",
    question: "Which shortcut is commonly used to undo an action?",
    options: { A: "Ctrl + P", B: "Ctrl + S", C: "Ctrl + Z", D: "Ctrl + A" },
    correct: "C",
    explanation: "Ctrl + Z usually undoes the last action."
},
{
    id: 168, category: "computer",
    question: "What does email stand for?",
    options: {
        A: "Electronic mail",
        B: "Easy machine language",
        C: "External memory access",
        D: "Electronic machine link"
    },
    correct: "A",
    explanation: "Email means electronic mail."
},
{
    id: 169, category: "computer",
    question: "What is a web browser used for?",
    options: {
        A: "Accessing websites",
        B: "Printing banknotes",
        C: "Changing physical hardware",
        D: "Measuring body temperature"
    },
    correct: "A",
    explanation: "A browser is software for accessing web content."
},
{
    id: 170, category: "computer",
    question: "What is antivirus software designed to do?",
    options: {
        A: "Increase screen size",
        B: "Detect or block malicious software",
        C: "Print documents automatically",
        D: "Create bank accounts"
    },
    correct: "B",
    explanation: "Antivirus software helps detect and block malware."
},
{
    id: 171, category: "computer",
    question: "Which is an example of a strong password practice?",
    options: {
        A: "Use 123456 everywhere",
        B: "Share passwords with callers",
        C: "Use a long, unique password",
        D: "Use your name only"
    },
    correct: "C",
    explanation: "Long, unique passwords are harder to guess."
},
{
    id: 172, category: "computer",
    question: "What is cloud storage?",
    options: {
        A: "Storing data on remote servers accessed over a network",
        B: "Storing paper files in a cupboard",
        C: "A type of keyboard",
        D: "A printer cartridge"
    },
    correct: "A",
    explanation: "Cloud storage keeps data on remote systems accessible over a network."
},
{
    id: 173, category: "computer",
    question: "What does Ctrl + P usually do?",
    options: {
        A: "Paste",
        B: "Print",
        C: "Copy",
        D: "Undo"
    },
    correct: "B",
    explanation: "Ctrl + P commonly opens the print dialog."
},
{
    id: 174, category: "computer",
    question: "What is malware?",
    options: {
        A: "A spreadsheet formula",
        B: "Software designed to cause harm or perform unauthorised activities",
        C: "A type of monitor",
        D: "A document format"
    },
    correct: "B",
    explanation: "Malware refers to malicious software."
},
{
    id: 175, category: "computer",
    question: "What should you do before opening an unexpected email attachment?",
    options: {
        A: "Open it immediately",
        B: "Forward it to everyone",
        C: "Verify the sender and check whether it is legitimate",
        D: "Disable all security tools"
    },
    correct: "C",
    explanation: "Unexpected attachments can contain malicious content."
},
{
    id: 176, category: "computer",
    question: "Which Excel function adds numbers?",
    options: { A: "SUM", B: "TEXT", C: "LEFT", D: "NOW" },
    correct: "A",
    explanation: "SUM adds the supplied numbers or cell values."
},
{
    id: 177, category: "computer",
    question: "Which device is commonly used to enter text into a computer?",
    options: { A: "Monitor", B: "Keyboard", C: "Speaker", D: "Projector" },
    correct: "B",
    explanation: "A keyboard is a common text-input device."
},
{
    id: 178, category: "computer",
    question: "Which device displays visual output from a computer?",
    options: { A: "Keyboard", B: "Mouse", C: "Monitor", D: "Microphone" },
    correct: "C",
    explanation: "A monitor displays visual output."
},
{
    id: 179, category: "computer",
    question: "What is the primary purpose of a backup?",
    options: {
        A: "To create an extra copy for recovery",
        B: "To delete all records",
        C: "To reveal passwords",
        D: "To disable the computer"
    },
    correct: "A",
    explanation: "Backups help recover data after loss or damage."
},
{
    id: 180, category: "computer",
    question: "Which file extension is commonly used for PDF documents?",
    options: { A: ".jpg", B: ".mp3", C: ".pdf", D: ".exe" },
    correct: "C",
    explanation: "PDF documents use the .pdf extension."
},

// CUSTOMER SERVICE & SALES: 181–190

{
    id: 181, category: "customer",
    question: "What is customer satisfaction?",
    options: {
        A: "How well a service meets customer expectations",
        B: "The number of computers in a branch",
        C: "The bank's electricity bill",
        D: "The employee's typing speed"
    },
    correct: "A",
    explanation: "Customer satisfaction reflects how well service meets expectations."
},
{
    id: 182, category: "customer",
    question: "A customer requests another person's account details. What should you do?",
    options: {
        A: "Provide the details immediately",
        B: "Post the details online",
        C: "Decline disclosure unless properly authorised",
        D: "Send the details to an unknown email"
    },
    correct: "C",
    explanation: "Customer information must be protected and disclosed only when authorised."
},
{
    id: 183, category: "customer",
    question: "How can a bank employee build customer trust?",
    options: {
        A: "Make unsupported promises",
        B: "Be honest, accurate and respectful",
        C: "Hide important charges",
        D: "Ignore questions"
    },
    correct: "B",
    explanation: "Honest and respectful communication supports customer trust."
},
{
    id: 184, category: "customer",
    question: "What is upselling?",
    options: {
        A: "Offering a more feature-rich option when suitable",
        B: "Deleting a customer account",
        C: "Cancelling every product",
        D: "Refusing to explain product features"
    },
    correct: "A",
    explanation: "Upselling offers a higher-tier option when it suits the customer's needs."
},
{
    id: 185, category: "customer",
    question: "How should a service complaint be handled?",
    options: {
        A: "Ignore it",
        B: "Blame the customer",
        C: "Record it, follow the process and escalate when necessary",
        D: "Delete the complaint record"
    },
    correct: "C",
    explanation: "Proper complaint handling involves recording, resolving and following up."
},
{
    id: 186, category: "customer",
    question: "Why is teamwork important in a bank?",
    options: {
        A: "It eliminates all rules",
        B: "It improves coordination and service quality",
        C: "It prevents communication",
        D: "It removes accountability"
    },
    correct: "B",
    explanation: "Teamwork supports coordination, accuracy and reliable service."
},
{
    id: 187, category: "customer",
    question: "How can transaction errors be reduced?",
    options: {
        A: "Skip verification",
        B: "Guess missing information",
        C: "Verify details and follow procedures",
        D: "Ignore warning messages"
    },
    correct: "C",
    explanation: "Verification and standard procedures help prevent errors."
},
{
    id: 188, category: "customer",
    question: "A customer cannot understand a banking form. What should you do?",
    options: {
        A: "Fill it with invented information",
        B: "Explain the fields in simple language",
        C: "Refuse to speak to the customer",
        D: "Share another customer's form"
    },
    correct: "B",
    explanation: "Explain the form clearly without entering false information."
},
{
    id: 189, category: "customer",
    question: "What should you do if a customer rejects a product?",
    options: {
        A: "Pressure them until they agree",
        B: "Remain professional and respect their decision",
        C: "Threaten the customer",
        D: "Hide the product terms"
    },
    correct: "B",
    explanation: "Respect customer choice and remain professional."
},
{
    id: 190, category: "customer",
    question: "What is an appropriate response to a suspicious banking call?",
    options: {
        A: "Share the OTP to verify identity",
        B: "Give the caller your PIN",
        C: "Avoid sharing credentials and report it through official channels",
        D: "Install any application the caller recommends"
    },
    correct: "C",
    explanation: "Never share credentials with suspicious callers."
},

// HR INTERVIEW: 191–200

{
    id: 191, category: "hr",
    question: "What is a professional response to 'Tell me about yourself'?",
    options: {
        A: "Give unrelated personal details only",
        B: "Briefly describe your background, skills and career interests",
        C: "Criticise previous employers",
        D: "Refuse to answer"
    },
    correct: "B",
    explanation: "A concise introduction should focus on relevant experience, skills and goals."
},
{
    id: 192, category: "hr",
    question: "How should you answer 'Why should we hire you?'",
    options: {
        A: "I do not want to learn",
        B: "I will ignore company procedures",
        C: "I am willing to learn, follow procedures and contribute to the team",
        D: "I cannot work with customers"
    },
    correct: "C",
    explanation: "Connect your strengths and willingness to learn to the role."
},
{
    id: 193, category: "hr",
    question: "What is a constructive way to discuss a weakness?",
    options: {
        A: "Claim to have no weaknesses",
        B: "Describe a genuine area for improvement and how you address it",
        C: "Blame every colleague",
        D: "Refuse to improve"
    },
    correct: "B",
    explanation: "Self-awareness and concrete improvement efforts make a constructive answer."
},
{
    id: 194, category: "hr",
    question: "Where do you see yourself in five years?",
    options: {
        A: "I will refuse all responsibility",
        B: "I have no interest in learning",
        C: "I hope to develop expertise and take on greater responsibilities",
        D: "I do not want to work"
    },
    correct: "C",
    explanation: "Describe realistic professional growth aligned with the role."
},
{
    id: 195, category: "hr",
    question: "Are you comfortable working with targets?",
    options: {
        A: "I will meet targets using any method, even dishonest ones",
        B: "I will work systematically while maintaining ethical standards",
        C: "I will ignore all targets",
        D: "I will mislead customers"
    },
    correct: "B",
    explanation: "Targets should be pursued responsibly and ethically."
},
{
    id: 196, category: "hr",
    question: "How should you respond if asked whether you are willing to relocate?",
    options: {
        A: "Give an honest answer based on your circumstances",
        B: "Always promise relocation regardless of reality",
        C: "Refuse to discuss it",
        D: "Invent a reason"
    },
    correct: "A",
    explanation: "Be honest about your availability and practical requirements."
},
{
    id: 197, category: "hr",
    question: "What is a professional response when asked about expected salary?",
    options: {
        A: "Demand an unexplained amount",
        B: "Refuse every discussion",
        C: "Discuss a fair amount based on the role and company standards",
        D: "Give deliberately false information"
    },
    correct: "C",
    explanation: "Salary expectations should be discussed professionally and realistically."
},
{
    id: 198, category: "hr",
    question: "What should you do if a manager asks you to bypass a required banking procedure?",
    options: {
        A: "Ignore the rules without question",
        B: "Respectfully raise the concern and follow compliance procedures",
        C: "Delete the transaction records",
        D: "Share customer passwords"
    },
    correct: "B",
    explanation: "Follow policy, compliance requirements and the appropriate escalation process."
},
{
    id: 199, category: "hr",
    question: "How should you answer 'Do you prefer working alone or in a team?'",
    options: {
        A: "I refuse to cooperate",
        B: "I cannot complete any task independently",
        C: "I can work independently and collaborate when required",
        D: "I refuse all assigned tasks"
    },
    correct: "C",
    explanation: "Explain your ability to work independently and collaboratively."
},
{
    id: 200, category: "hr",
    question: "What is a useful question to ask at the end of an interview?",
    options: {
        A: "Can you explain the role's responsibilities and training process?",
        B: "Can I ignore the rules?",
        C: "Can I avoid all work?",
        D: "Can I have another candidate's personal details?"
    },
    correct: "A",
    explanation: "Asking about responsibilities and training demonstrates professional interest."
}
];

/* ==========================================
   APPLICATION STATE
   ========================================== */

const $ = (id) => document.getElementById(id);

let candidate = {
    name: "",
    email: ""
};

let mode = "practice";
let questions = [...QUESTION_BANK];
let currentIndex = 0;
let answers = {};
let submitted = false;
let remainingSeconds = 30 * 60;
let timerInterval = null;
let lastResult = null;
let lastReview = [];
let currentFilter = "all";

/* ==========================================
   PAGE NAVIGATION
   ========================================== */

function showPage(pageId) {
    ["loginPage", "dashboardPage", "examPage", "resultPage"]
        .forEach(id => {
            const page = $(id);
            if (page) page.hidden = id !== pageId;
        });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function stopTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return String(minutes).padStart(2, "0") + ":" +
           String(secs).padStart(2, "0");
}

/* ==========================================
   LOGIN
   ========================================== */

$("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = $("candidateName").value.trim();
    const email = $("candidateEmail").value.trim();

    if (!name || !email) {
        alert("Please enter your name and email.");
        return;
    }

    candidate.name = name;
    candidate.email = email;

    $("displayName").textContent = candidate.name;

    showPage("dashboardPage");
});

/* ==========================================
   START STUDY / PRACTICE / MOCK EXAM
   ========================================== */

function startExam(selectedMode) {
    stopTimer();

    mode = selectedMode;
    currentFilter = $("categorySelect").value;

    questions = QUESTION_BANK.filter(question =>
        currentFilter === "all" ||
        question.category === currentFilter
    );

    if (questions.length === 0) {
        alert("No questions available for this subject yet.");
        return;
    }

    currentIndex = 0;
    answers = {};
    submitted = false;
    lastResult = null;
    lastReview = [];

    remainingSeconds = 30 * 60;

    const titles = {
        study: "Study Mode",
        practice: "Practice Mode",
        mock: "Mock Examination"
    };

    $("modeTitle").textContent = titles[mode];
    $("timer").textContent = "Time: " + formatTime(remainingSeconds);
    $("timer").hidden = mode !== "mock";

    $("categorySelect").disabled = true;
    $("reviewButton").hidden = mode === "mock";
    $("submitExamButton").hidden = mode === "study";

    showPage("examPage");
    renderQuestion();
    renderQuestionNavigator();

    if (mode === "mock") {
        startTimer();
    }
}

$("studyButton").addEventListener("click", () => {
    startExam("study");
});

$("practiceButton").addEventListener("click", () => {
    startExam("practice");
});

$("mockButton").addEventListener("click", () => {
    startExam("mock");
});

/* ==========================================
   DISPLAY QUESTION AND FOUR OPTIONS
   ========================================== */

function renderQuestion() {
    const question = questions[currentIndex];

    if (!question) return;

    $("questionNumber").textContent =
        "Question " + (currentIndex + 1);

    $("questionProgress").textContent =
        "Question " + (currentIndex + 1) +
        " of " + questions.length;

    $("questionText").textContent = question.question;

    const container = $("optionsContainer");
    container.replaceChildren();

    ["A", "B", "C", "D"].forEach(letter => {
        const label = document.createElement("label");
        label.className = "option";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = letter;
        radio.checked = answers[question.id] === letter;
        radio.disabled = submitted;

        const text = document.createElement("span");
        text.textContent = letter + ". " + question.options[letter];

        radio.addEventListener("change", () => {
            if (submitted) return;

            answers[question.id] = letter;
            renderQuestionNavigator();

            if (mode === "study") {
                showFeedback();
            } else {
                $("answerFeedback").hidden = true;
            }
        });

        label.append(radio, text);
        container.appendChild(label);
    });

    $("answerFeedback").hidden = true;

    $("previousButton").disabled = currentIndex === 0;
    $("nextButton").disabled = currentIndex === questions.length - 1;

    if (mode === "study") {
        showFeedback();
    }

    renderQuestionNavigator();
}

/* ==========================================
   ANSWER FEEDBACK
   ========================================== */

function showFeedback() {
    const question = questions[currentIndex];
    const selected = answers[question.id];

    if (!selected) {
        $("answerFeedback").hidden = true;
        return;
    }

    $("answerFeedback").hidden = false;

    const isCorrect = selected === question.correct;

    $("correctAnswer").textContent =
        (isCorrect ? "Correct! " : "Incorrect. ") +
        "Correct answer: " +
        question.correct + ". " +
        question.options[question.correct];

    $("correctAnswer").style.color =
        isCorrect ? "#16804a" : "#c62828";

    $("answerExplanation").textContent =
        question.explanation || "No explanation added yet.";
}

$("reviewButton").addEventListener("click", () => {
    if (mode !== "practice" || submitted) return;

    const question = questions[currentIndex];

    if (!answers[question.id]) {
        alert("Please select an option first.");
        return;
    }

    showFeedback();
});

/* ==========================================
   PREVIOUS / NEXT
   ========================================== */

$("previousButton").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
});

$("nextButton").addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderQuestion();
    }
});

/* ==========================================
   QUESTION NAVIGATOR
   ========================================== */

function renderQuestionNavigator() {
    const container = $("questionNumbers");
    container.replaceChildren();

    questions.forEach((question, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.textContent = index + 1;

        if (index === currentIndex) {
            button.classList.add("active");
        }

        if (answers[question.id]) {
            button.style.borderColor = "#16804a";
        }

        button.setAttribute(
            "aria-label",
            "Go to question " + (index + 1)
        );

        button.addEventListener("click", () => {
            currentIndex = index;
            renderQuestion();
        });

        container.appendChild(button);
    });
}

/* ==========================================
   MOCK EXAM TIMER
   ========================================== */

function startTimer() {
    stopTimer();

    timerInterval = setInterval(() => {
        remainingSeconds--;

        $("timer").textContent =
            "Time: " + formatTime(Math.max(0, remainingSeconds));

        if (remainingSeconds <= 0) {
            stopTimer();
            finishExam(true);
        }
    }, 1000);
}

/* ==========================================
   SUBMIT EXAM
   ========================================== */

$("submitExamButton").addEventListener("click", () => {
    if (mode === "study" || submitted) return;

    const unanswered = questions.filter(
        question => !answers[question.id]
    ).length;

    const message = unanswered > 0
        ? "You have " + unanswered +
          " unanswered question(s). Submit anyway?"
        : "Are you sure you want to submit your exam?";

    if (confirm(message)) {
        finishExam(false);
    }
});

function finishExam(timeExpired = false) {
    if (submitted) return;

    submitted = true;
    stopTimer();

    $("categorySelect").disabled = false;

    const total = questions.length;
    const attempted = questions.filter(
        question => Boolean(answers[question.id])
    ).length;

    const correct = questions.filter(
        question => answers[question.id] === question.correct
    ).length;

    const wrong = attempted - correct;
    const unanswered = total - attempted;
    const percentage = total
        ? Math.round((correct / total) * 100)
        : 0;

    lastResult = {
        candidate: candidate.name,
        email: candidate.email,
        mode: mode,
        total,
        attempted,
        correct,
        wrong,
        unanswered,
        percentage,
        timeExpired,
        date: new Date().toLocaleString()
    };

    lastReview = questions.map((question, index) => ({
        number: index + 1,
        question: question.question,
        options: { ...question.options },
        selected: answers[question.id] || null,
        correct: question.correct,
        explanation: question.explanation || ""
    }));

    $("resultCandidate").textContent = candidate.name;
    $("totalQuestions").textContent = total;
    $("attemptedQuestions").textContent = attempted;
    $("correctCount").textContent = correct;
    $("wrongCount").textContent = wrong;
    $("unansweredCount").textContent = unanswered;
    $("scorePercentage").textContent = percentage + "%";

    $("reviewContainer").replaceChildren();

    showPage("resultPage");

    if (timeExpired) {
        alert("Time is over. Your mock exam has been submitted.");
    }
}

/* ==========================================
   RESULT REVIEW
   ========================================== */

$("reviewAnswersButton").addEventListener("click", () => {
    if (!lastResult || lastReview.length === 0) {
        alert("No submitted result is available to review.");
        return;
    }

    const container = $("reviewContainer");
    container.replaceChildren();

    const heading = document.createElement("h2");
    heading.textContent = "Answer Review";
    container.appendChild(heading);

    lastReview.forEach(item => {
        const isCorrect = item.selected === item.correct;

        const card = document.createElement("article");
        card.className =
            "review-item " + (isCorrect ? "correct" : "wrong");

        const title = document.createElement("h3");
        title.textContent =
            "Question " + item.number + ": " + item.question;

        card.appendChild(title);

        ["A", "B", "C", "D"].forEach(letter => {
            const p = document.createElement("p");

            let line = letter + ". " + item.options[letter];

            if (letter === item.correct) {
                line += " — Correct answer";
            }

            if (letter === item.selected) {
                line += " — Your answer";
            }

            p.textContent = line;
            card.appendChild(p);
        });

        const status = document.createElement("p");
        status.className = isCorrect ? "correct-text" : "wrong-text";

        status.textContent = !item.selected
            ? "Not answered"
            : isCorrect
                ? "Your answer is correct"
                : "Your answer is incorrect";

        card.appendChild(status);

        const explanation = document.createElement("p");
        explanation.textContent =
            "Explanation: " +
            (item.explanation || "No explanation provided.");

        card.appendChild(explanation);
        container.appendChild(card);
    });

    container.scrollIntoView({ behavior: "smooth" });
});

/* ==========================================
   RESULTS PAGE NAVIGATION
   ========================================== */

$("resultsButton").addEventListener("click", () => {
    if (!lastResult) {
        alert("You have not completed a practice or mock exam yet.");
        return;
    }

    $("resultCandidate").textContent = lastResult.candidate;
    $("totalQuestions").textContent = lastResult.total;
    $("attemptedQuestions").textContent = lastResult.attempted;
    $("correctCount").textContent = lastResult.correct;
    $("wrongCount").textContent = lastResult.wrong;
    $("unansweredCount").textContent = lastResult.unanswered;
    $("scorePercentage").textContent = lastResult.percentage + "%";

    showPage("resultPage");
});

$("returnHomeButton").addEventListener("click", () => {
    stopTimer();
    $("categorySelect").disabled = false;
    showPage("dashboardPage");
});

$("backDashboardButton").addEventListener("click", () => {
    stopTimer();
    $("categorySelect").disabled = false;
    showPage("dashboardPage");
});

/* ==========================================
   LOGOUT
   ========================================== */

$("logoutButton").addEventListener("click", () => {
    if (!confirm("Are you sure you want to log out?")) return;

    stopTimer();

    candidate = { name: "", email: "" };
    answers = {};
    lastResult = null;
    lastReview = [];
    submitted = false;

    $("loginForm").reset();
    $("categorySelect").disabled = false;

    showPage("loginPage");
});