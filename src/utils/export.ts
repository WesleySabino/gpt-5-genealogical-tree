import type { TreeState } from '../store/treeSlice';

export function exportToJSON(state: TreeState): string {
  return JSON.stringify(state, null, 2);
}

export function importFromJSON(json: string): TreeState {
  return JSON.parse(json) as TreeState;
}
