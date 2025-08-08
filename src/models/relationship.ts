export type RelationshipType =
  | 'biologicalParentChild'
  | 'adoptiveParentChild'
  | 'stepParent'
  | 'partner'
  | 'marriage'
  | 'divorce'
  | 'sibling'
  | 'halfSibling'
  | 'guardian'
  | 'unknown';

export interface Relationship {
  id: string;
  type: RelationshipType;
  persons: string[]; // involved person IDs
  startEventId?: string;
  endEventId?: string;
  notes?: string;
  sources?: string[];
  media?: string[];
}
