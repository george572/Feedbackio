
  type SuggestionDataObject = {
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments?: (Comment)[] | null;
  }
  type Comment = {
    id: number;
    content: string;
    user: User;
    replies?: (Reply)[] | null;
  }
  type User = {
    image: string;
    name: string;
    username: string;
  }
  type Reply = {
    content: string;
    replyingTo?: string;
    user: User;
  }
  