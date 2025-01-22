export interface UserDataTypes {
  id: number;
  name: string;
  image: string;
}

export interface CommentDataTypes {
  id: number;
  content: string;
  user: UserDataTypes;
  date: string;
  isLiked: boolean;
  replies: CommentDataTypes[];
}

export interface PostTypes {
  id: number;
  image: string;
  description: string;
  date: string;
  isLiked: boolean;
  user: UserDataTypes;
  comments: CommentDataTypes[];
}

export interface InitialStateTypes {
  posts: PostTypes[];
  currentUser: UserDataTypes;
}
