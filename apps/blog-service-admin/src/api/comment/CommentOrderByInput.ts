import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  authorId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  postedAt?: SortOrder;
  updatedAt?: SortOrder;
};