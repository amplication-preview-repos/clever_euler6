import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
};
