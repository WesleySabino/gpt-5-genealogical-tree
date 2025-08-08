export interface Person {
  id: string;
  names: string[];
  sex?: string;
  gender?: string;
  birthEventId?: string;
  deathEventId?: string;
  events?: string[];
  notes?: string;
  sources?: string[];
  media?: string[];
  customFields?: Record<string, unknown>;
}
