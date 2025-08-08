import { beforeEach, describe, expect, it } from 'vitest';
import { loadState, saveState } from './state';
import type { TreeState } from '../store/treeSlice';
import 'fake-indexeddb/auto';

beforeEach(async () => {
  await indexedDB.deleteDatabase('genealogy');
});

describe('storage', () => {
  it('saves and loads', async () => {
    const state: TreeState = { persons: [], relationships: [] };
    await saveState(state);
    const loaded = await loadState();
    expect(loaded).toEqual(state);
  });
});
