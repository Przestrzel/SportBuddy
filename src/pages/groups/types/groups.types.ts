export interface Group {
  description: string;
  id: number;
  name: string;
}

export type CreateGroupForm = Omit<Group, "id">;
