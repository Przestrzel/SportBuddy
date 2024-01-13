import { ModelWithId } from "../../../types/common";

export interface Group extends ModelWithId {
  description: string;
  name: string;
}

export type CreateGroupForm = Omit<Group, "id">;
