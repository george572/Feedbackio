type User = {
    image: string;
    name: string;
    username: string;
  };
  
  type Comment = {
    id: number;
    content: string;
    user: User;
    replies?: Comment[];
    replyingTo?: string;
  };
  
  type SuggestionDataObject = {
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments?: Comment[];
  };