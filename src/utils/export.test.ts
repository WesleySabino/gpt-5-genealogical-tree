import { describe, expect, it } from 'vitest';
import { exportToJSON, importFromJSON } from './export';
import type { TreeState } from '../store/treeSlice';

describe('export/import', () => {
  it('round trips JSON', () => {
    const state: TreeState = {
      persons: [{ id: '1', names: ['A'] }],
      relationships: [],
    };
    const json = exportToJSON(state);
    const parsed = importFromJSON(json);
    expect(parsed).toEqual(state);
  });
});
