import { Author } from "../author/Author";
import { Comment } from "../comment/Comment";

export type Post = {
  author?: Author | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  publishedAt: Date | null;
  title: string | null;
  updatedAt: Date;
};
