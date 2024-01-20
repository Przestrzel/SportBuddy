import { ModelWithId } from "../../../types/common";
import { User } from "../../auth/types/auth.types";

export enum GroupType {
  PUBLIC,
  PRIVATE,
}
export interface Group extends ModelWithId {
  description: string;
  groupType: GroupType;
  name: string;
}

export interface GroupWithDetails extends Group {
  members: User[];
}

export type CreateGroupForm = Omit<Group, "id">;
