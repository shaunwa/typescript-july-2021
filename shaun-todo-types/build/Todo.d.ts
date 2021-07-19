export interface Todo {
    id: string;
    text: string;
    urgency: 'low' | 'medium' | 'high';
    createdOn: Date;
    isComplete: boolean;
    completedOn?: Date;
}
