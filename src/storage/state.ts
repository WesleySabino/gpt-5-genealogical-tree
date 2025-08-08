import Dexie, { Table } from 'dexie';
import type { TreeState } from '../store/treeSlice';

interface StateRecord {
  id: string;
  data: TreeState;
}

class GenealogyDB extends Dexie {
  state!: Table<StateRecord, string>;
  constructor() {
    super('genealogy');
    this.version(1).stores({ state: 'id' });
  }
}

const db = new GenealogyDB();
const STATE_ID = 'tree';

export async function saveState(state: TreeState) {
  await db.state.put({ id: STATE_ID, data: state });
}

export async function loadState(): Promise<TreeState | undefined> {
  return (await db.state.get(STATE_ID))?.data;
}
