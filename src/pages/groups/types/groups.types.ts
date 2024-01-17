import { ModelWithId } from "../../../types/common";

export enum GroupType {
  PUBLIC,
  PRIVATE,
}
export interface Group extends ModelWithId {
  description: string;
  groupType: GroupType;
  name: string;
}

export type CreateGroupForm = Omit<Group, "id">;
