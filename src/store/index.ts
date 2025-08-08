import { configureStore } from '@reduxjs/toolkit';
import undoable, { StateWithHistory } from 'redux-undo';
import treeReducer, { TreeState, load } from './treeSlice';
import { saveState, loadState } from '../storage/state';

const undoableTree = undoable(treeReducer);

export const store = configureStore({
  reducer: {
    tree: undoableTree,
  },
});

loadState().then((state) => {
  if (state) {
    store.dispatch(load(state));
  }
});

store.subscribe(() => {
  const state = (store.getState().tree as StateWithHistory<TreeState>).present;
  saveState(state);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
