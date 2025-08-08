export type ApproximateDate =
  | { kind: 'exact'; value: string }
  | { kind: 'about'; value: string }
  | { kind: 'before'; value: string }
  | { kind: 'after'; value: string }
  | { kind: 'between'; start: string; end: string };

export interface Event {
  id: string;
  type: 'birth' | 'death' | 'marriage' | 'adoption' | 'divorce' | 'custom';
  date?: ApproximateDate;
  place?: string;
  description?: string;
  notes?: string;
  sources?: string[];
  media?: string[];
}
