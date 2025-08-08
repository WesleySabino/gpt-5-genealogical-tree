import { describe, expect, it } from 'vitest';
import reducer, { load, TreeState } from './treeSlice';
import { importFromJSON } from '../utils/export';

describe('import', () => {
  it('populates persons and relationships from JSON', () => {
    const json = JSON.stringify({
      persons: [
        { id: '1', names: ['A'] },
        { id: '2', names: ['B'] },
      ],
      relationships: [{ id: 'r1', type: 'partner', persons: ['1', '2'] }],
    });
    const parsed = importFromJSON(json);
    const initial: TreeState = { persons: [], relationships: [] };
    const result = reducer(initial, load(parsed));
    expect(result.persons).toHaveLength(2);
    expect(result.relationships).toHaveLength(1);
  });
});
