import { describe, expect, it } from 'vitest';
import reducer, { addPerson, TreeState } from './treeSlice';

describe('treeSlice', () => {
  it('adds person', () => {
    const state: TreeState = { persons: [], relationships: [] };
    const result = reducer(state, addPerson({ id: '1', names: ['A'] }));
    expect(result.persons).toHaveLength(1);
  });
});
