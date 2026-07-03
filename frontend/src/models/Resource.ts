export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  type: string;
  status: string;
  created_at: string;
  category: {
    id: number;
  }
};

export const ResourceType = {
  ARTICLE: "ARTICLE",
  VIDEO: "VIDEO",
  DOCUMENTATION: "DOCUMENTATION",
  COURSE: "COURSE",
  OTHER: "OTHER",
} as const;
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

export const ResourceStatus = {
  TODO: "TODO",
  IN_PROGRESS: "IN_PROGRESS",
  DONE: "DONE",
} as const;
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];