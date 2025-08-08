import type { TreeState } from '../store/treeSlice';
import Papa from 'papaparse';

export function exportPersonsToCSV(state: TreeState): string {
  return Papa.unparse(state.persons);
}
