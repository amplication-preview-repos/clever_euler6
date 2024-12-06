import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CommentWhereInput = {
  author?: AuthorWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  postedAt?: DateTimeNullableFilter;
};
