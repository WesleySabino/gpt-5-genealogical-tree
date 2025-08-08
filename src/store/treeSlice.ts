import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Person, Relationship } from '../models';

export interface TreeState {
  persons: Person[];
  relationships: Relationship[];
}

const initialState: TreeState = {
  persons: [{ id: 'root', names: ['Root Person'] }],
  relationships: [],
};

const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<TreeState>) => {
      state.persons = action.payload.persons;
      state.relationships = action.payload.relationships;
    },
    addPerson: (state, action: PayloadAction<Person>) => {
      state.persons.push(action.payload);
    },
    addRelationship: (state, action: PayloadAction<Relationship>) => {
      state.relationships.push(action.payload);
    },
  },
});

export const { addPerson, addRelationship, load } = treeSlice.actions;
export default treeSlice.reducer;
export type { TreeState };
