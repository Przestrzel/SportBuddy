import { ModelWithAdminId, ModelWithId } from "../../../types/common";

export enum GroupType {
  PUBLIC,
  PRIVATE,
}
export interface Group extends ModelWithId, ModelWithAdminId {
  description: string;
  groupType: GroupType;
  name: string;
}

export type CreateGroupForm = Omit<Group, "id">;
