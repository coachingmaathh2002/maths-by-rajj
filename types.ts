
export enum View {
    MockTests = 'mockTests',
    ExamTopics = 'examTopics',
    About = 'about',
    Reviews = 'reviews',
    Contact = 'contact',
    Test = 'test',
    Results = 'results',
}

export interface Question {
    id: string;
    question: string;
    options: string[];
    answer: string;
}

export interface TestDetails {
    title: string;
    description: string;
    time: string;
    difficulty: string;
    questions: Question[];
}

export interface ExamTopics {
    [section: string]: TestDetails;
}

export interface TestData {
    [exam: string]: ExamTopics;
}

export interface Student {
    name: string;
    email: string;
    mobile: string;
}

export interface Review {
    name: string;
    review: string;
}

export type StudentData = {
    [exam: string]: Student[];
};
